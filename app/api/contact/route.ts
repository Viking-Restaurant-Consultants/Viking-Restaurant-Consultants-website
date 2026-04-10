export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.() ?? {}
    const { name, email, phone, company, message, formType } = body ?? {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    if (process.env.DATABASE_URL) {
      try {
        const { prisma } = await import('@/lib/prisma')
        await prisma.contactSubmission.create({
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
      } catch (dbError: any) {
        console.error('DB write failed (non-fatal):', dbError?.message)
      }
    } else {
      console.log('[Contact Submission]', { name, email, formType, timestamp: new Date().toISOString() })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
