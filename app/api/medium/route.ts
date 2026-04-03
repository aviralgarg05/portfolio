import { NextResponse } from 'next/server';
import { fetchMediumPosts } from '@/lib/content-fetcher';

export async function GET() {
  try {
    const posts = await fetchMediumPosts('gargaviral99');
    
    return NextResponse.json({
      success: true,
      posts,
      count: posts.length
    });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch Medium posts' },
      { status: 500 }
    );
  }
}