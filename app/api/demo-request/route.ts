export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.() ?? {}
    const { name, email, phone, restaurantName, locations, interest, message } = body ?? {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    if (process.env.DATABASE_URL) {
      try {
        const { prisma } = await import('@/lib/prisma')
        await prisma.demoRequest.create({
          data: {
            name: name ?? '',
            email: email ?? '',
            phone: phone ?? null,
            restaurantName: restaurantName ?? null,
            locations: locations ? parseInt(String(locations), 10) : 1,
            interest: interest ?? null,
            message: message ?? null,
            status: 'pending',
          },
        })
      } catch (dbError: any) {
        console.error('DB write failed (non-fatal):', dbError?.message)
      }
    } else {
      console.log('[Demo Request]', { name, email, restaurantName, locations, interest, timestamp: new Date().toISOString() })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Demo request error:', error)
    return NextResponse.json({ error: 'Failed to submit demo request' }, { status: 500 })
  }
}
