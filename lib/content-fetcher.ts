// Content fetching utilities for auto-updating blog posts and contributions

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_HEADERS: HeadersInit = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'portfolio-site',
};

if (process.env.GITHUB_TOKEN) {
  GITHUB_HEADERS.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

// Helper function to categorize content based on title and tags
function categorizeContent(title: string, description: string = '', tags: string[] = []): string {
  const content = `${title} ${description}`.toLowerCase();
  const allTags = tags.map(tag => tag.toLowerCase());
  
  // AI/ML keywords
  if (content.includes('ai') || content.includes('artificial intelligence') || 
      content.includes('machine learning') || content.includes('ml') || 
      content.includes('neural network') || content.includes('deep learning') ||
      content.includes('nlp') || content.includes('computer vision') ||
      allTags.some(tag => ['ai', 'ml', 'machinelearning', 'artificialintelligence'].includes(tag))) {
    return 'AI/ML';
  }
  
  // DevOps keywords
  if (content.includes('devops') || content.includes('kubernetes') || content.includes('k8s') ||
      content.includes('docker') || content.includes('ci/cd') || content.includes('terraform') ||
      content.includes('jenkins') || content.includes('deployment') || content.includes('infrastructure') ||
      allTags.some(tag => ['devops', 'kubernetes', 'docker', 'cicd'].includes(tag))) {
    return 'DevOps';
  }
  
  // Database keywords
  if (content.includes('database') || content.includes('sql') || content.includes('nosql') ||
      content.includes('mongodb') || content.includes('postgresql') || content.includes('mysql') ||
      content.includes('redis') || content.includes('elasticsearch') ||
      allTags.some(tag => ['database', 'sql', 'nosql', 'mongodb'].includes(tag))) {
    return 'Database';
  }
  
  // Programming/Development keywords
  if (content.includes('programming') || content.includes('development') || content.includes('coding') ||
      content.includes('javascript') || content.includes('python') || content.includes('react') ||
      content.includes('nodejs') || content.includes('typescript') ||
      allTags.some(tag => ['programming', 'javascript', 'python', 'react'].includes(tag))) {
    return 'Development';
  }
  
  // Default category
  return 'Tech';
}

export interface BlogPost {
  id: string;
  title: string;
  url: string;
  platform: string;
  category: string;
  publishedAt: string;
  reactions?: number;
  description?: string;
  tags?: string[];
}

export interface GitHubContribution {
  date: string;
  count: number;
  level: number;
}

export interface GitHubStats {
  totalContributions: number;
  totalRepos: number;
  followers: number;
  following: number;
  contributions: GitHubContribution[];
  // Extended stats - may not always be available from API
  repositories?: number;
  nonForkRepositories?: number;
  totalPRs?: number;
  mergedPRs?: number;
  issues?: number;
  comments?: number;
  lastUpdated?: string;
}

interface MediumRssItem {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  categories?: string[];
}

interface MediumRssResponse {
  items?: MediumRssItem[];
}

interface DevToPost {
  id: number;
  title: string;
  url: string;
  description?: string;
  published_at: string;
  public_reactions_count?: number;
  tag_list?: string[];
}

async function fetchGitHubJson<T>(path: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE}${path}`, {
    headers: GITHUB_HEADERS,
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

async function fetchGitHubText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      ...GITHUB_HEADERS,
      Accept: 'text/html,application/xhtml+xml',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function fetchSearchCount(query: string): Promise<number | undefined> {
  try {
    const data = await fetchGitHubJson<{ total_count: number }>(`/search/issues?q=${encodeURIComponent(query)}`);
    return data.total_count;
  } catch (error) {
    console.error(`Error fetching GitHub search count for "${query}":`, error);
    return undefined;
  }
}

async function fetchNonForkRepositories(username: string): Promise<number | undefined> {
  try {
    let page = 1;
    let nonForkRepositories = 0;

    while (true) {
      const repos = await fetchGitHubJson<Array<{ fork: boolean }>>(
        `/users/${username}/repos?per_page=100&page=${page}`
      );

      if (repos.length === 0) {
        return nonForkRepositories;
      }

      nonForkRepositories += repos.filter((repo) => !repo.fork).length;
      page += 1;
    }
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return undefined;
  }
}

async function fetchContributionCalendar(username: string) {
  const html = await fetchGitHubText(`https://github.com/users/${username}/contributions`);
  const totalMatch = html.match(/([\d,]+)\s+contributions\s+in the last year/i);
  const totalContributions = totalMatch ? Number.parseInt(totalMatch[1].replaceAll(',', ''), 10) : 0;

  const contributions: GitHubContribution[] = [];
  const cellPattern =
    /data-date="([^"]+)"[\s\S]*?data-level="(\d)"[\s\S]*?<tool-tip[^>]*>([^<]+)<\/tool-tip>/g;

  for (const match of html.matchAll(cellPattern)) {
    const [, date, levelValue, tooltip] = match;
    const countMatch = tooltip.match(/(\d[\d,]*)\s+contributions?/i);
    const count = countMatch ? Number.parseInt(countMatch[1].replaceAll(',', ''), 10) : 0;

    contributions.push({
      date,
      count,
      level: Number.parseInt(levelValue, 10),
    });
  }

  contributions.sort((left, right) => left.date.localeCompare(right.date));

  return {
    totalContributions,
    contributions,
  };
}

// Medium RSS feed parser
export async function fetchMediumPosts(username: string): Promise<BlogPost[]> {
  try {
    const rssUrl = `https://medium.com/feed/@${username}`;
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
    const data = (await response.json()) as MediumRssResponse;
    
    if (!data.items) return [];
    
    return data.items.map((item) => ({
      id: item.guid,
      title: item.title,
      url: item.link,
      platform: 'Medium',
      category: categorizeContent(item.title, item.description, item.categories),
      publishedAt: item.pubDate,
      description: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      tags: item.categories || []
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}

// Dev.to API
export async function fetchDevToPosts(username: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`https://dev.to/api/articles?username=${username}`);
    const posts = (await response.json()) as DevToPost[];
    
    return posts.map((post) => ({
      id: post.id.toString(),
      title: post.title,
      url: post.url,
      platform: 'Dev.to',
      category: categorizeContent(post.title, post.description, post.tag_list),
      publishedAt: post.published_at,
      reactions: post.public_reactions_count,
      description: post.description,
      tags: post.tag_list || []
    }));
  } catch (error) {
    console.error('Error fetching Dev.to posts:', error);
    return [];
  }
}

// GitHub contributions (using GitHub API)
export async function fetchGitHubStats(username: string): Promise<GitHubStats | null> {
  try {
    const [
      userData,
      contributionCalendar,
      totalPRs,
      mergedPRs,
      issues,
      comments,
      nonForkRepositories,
    ] = await Promise.all([
      fetchGitHubJson<{
        public_repos: number;
        followers: number;
        following: number;
      }>(`/users/${username}`),
      fetchContributionCalendar(username),
      fetchSearchCount(`author:${username} type:pr`),
      fetchSearchCount(`author:${username} type:pr is:merged`),
      fetchSearchCount(`author:${username} type:issue`),
      fetchSearchCount(`commenter:${username}`),
      fetchNonForkRepositories(username),
    ]);

    return {
      totalContributions: contributionCalendar.totalContributions,
      totalRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      contributions: contributionCalendar.contributions,
      repositories: userData.public_repos,
      nonForkRepositories,
      totalPRs,
      mergedPRs,
      issues,
      comments,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
}

// Combined content fetcher
export async function fetchAllContent() {
  const [mediumPosts, devToPosts, githubStats] = await Promise.all([
    fetchMediumPosts('gargaviral99'),
    fetchDevToPosts('aviralgarg05'),
    fetchGitHubStats('aviralgarg05')
  ]);
  
  // Combine and sort all posts by date
  const allPosts = [...mediumPosts, ...devToPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  
  return {
    posts: allPosts,
    githubStats,
    lastUpdated: new Date().toISOString()
  };
}
