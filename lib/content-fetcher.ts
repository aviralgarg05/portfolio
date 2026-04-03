// Content fetching utilities for auto-updating blog posts and contributions

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
  totalPRs?: number;
  mergedPRs?: number;
  issues?: number;
  comments?: number;
}

// Medium RSS feed parser
export async function fetchMediumPosts(username: string): Promise<BlogPost[]> {
  try {
    const rssUrl = `https://medium.com/feed/@${username}`;
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
    const data = await response.json();
    
    if (!data.items) return [];
    
    return data.items.map((item: any) => ({
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
    const posts = await response.json();
    
    return posts.map((post: any) => ({
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
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();
    
    // For contributions, we'll use GitHub's GraphQL API or a third-party service
    // This is a simplified version - you might want to use GitHub GraphQL API for more detailed data
    const contributionsResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
    const contributionsData = await contributionsResponse.json();
    
    return {
      totalContributions: contributionsData.total?.lastYear || 0,
      totalRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      contributions: contributionsData.contributions?.map((contrib: any) => ({
        date: contrib.date,
        count: contrib.count,
        level: contrib.level
      })) || [],
      // Extended stats - use basic data where available
      repositories: userData.public_repos,
      // Note: GitHub API doesn't easily provide PR/issue counts without GraphQL
      // These would need a more complex implementation with GitHub GraphQL API
      totalPRs: undefined,
      mergedPRs: undefined,
      issues: undefined,
      comments: undefined
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