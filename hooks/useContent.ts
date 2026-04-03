import { useState, useEffect } from 'react';
import { BlogPost, GitHubStats } from '@/lib/content-fetcher';

interface ContentData {
  posts: BlogPost[];
  githubStats: GitHubStats | null;
  lastUpdated: string;
}

interface UseContentResult {
  data: ContentData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useContent(): UseContentResult {
  const [data, setData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/content');
      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        setError(result.error || 'Failed to fetch content');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchContent
  };
}

// Hook specifically for blog posts
export function useBlogPosts() {
  const { data, loading, error, refetch } = useContent();
  
  return {
    posts: data?.posts || [],
    loading,
    error,
    refetch
  };
}

// Hook specifically for GitHub stats
export function useGitHubStats() {
  const { data, loading, error, refetch } = useContent();
  
  return {
    stats: data?.githubStats,
    loading,
    error,
    refetch
  };
}