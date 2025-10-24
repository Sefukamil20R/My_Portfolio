import { NextResponse } from 'next/server'

export function GET() {
  // Return no content to prevent Next from serving the default favicon
  return new NextResponse(null, { status: 204 })
}
