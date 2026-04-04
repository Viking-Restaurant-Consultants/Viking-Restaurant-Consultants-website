export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.() ?? {}
    const { name, email, phone, company, message, formType } = body ?? {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: name ?? '',
        email: email ?? '',
        phone: phone ?? null,
        company: company ?? null,
        message: message ?? '',
        formType: formType ?? 'contact',
        status: 'new',
      },
    })

    return NextResponse.json({ success: true, id: submission?.id ?? '' })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
