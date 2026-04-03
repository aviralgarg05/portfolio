import { NextResponse } from 'next/server';
import { fetchGitHubStats } from '@/lib/content-fetcher';

export async function GET() {
  try {
    const stats = await fetchGitHubStats('aviralgarg05');
    
    return NextResponse.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch GitHub stats' },
      { status: 500 }
    );
  }
}