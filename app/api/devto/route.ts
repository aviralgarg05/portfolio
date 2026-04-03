import { NextResponse } from 'next/server';
import { fetchDevToPosts } from '@/lib/content-fetcher';

export async function GET() {
  try {
    const posts = await fetchDevToPosts('aviralgarg05');
    
    return NextResponse.json({
      success: true,
      posts,
      count: posts.length
    });
  } catch (error) {
    console.error('Error fetching Dev.to posts:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch Dev.to posts' },
      { status: 500 }
    );
  }
}