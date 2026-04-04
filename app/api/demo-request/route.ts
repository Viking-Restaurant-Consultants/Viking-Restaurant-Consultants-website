export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.() ?? {}
    const { name, email, phone, restaurantName, locations, interest, message } = body ?? {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const demo = await prisma.demoRequest.create({
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

    return NextResponse.json({ success: true, id: demo?.id ?? '' })
  } catch (error: any) {
    console.error('Demo request error:', error)
    return NextResponse.json({ error: 'Failed to submit demo request' }, { status: 500 })
  }
}
