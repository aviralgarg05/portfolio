import { NextResponse } from 'next/server';
import { fetchAllContent } from '@/lib/content-fetcher';

export async function GET() {
  try {
    const content = await fetchAllContent();
    
    return NextResponse.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Error in content API:', error);
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// Enable CORS for client-side requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}