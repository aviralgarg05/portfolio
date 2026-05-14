import { NextResponse } from 'next/server';
import { fetchGitHubStats } from '@/lib/content-fetcher';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const stats = await fetchGitHubStats('aviralgarg05');
    
    return NextResponse.json(
      {
        success: true,
        stats
      },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch GitHub stats' },
      { status: 500 }
    );
  }
}
