'use client'

import { SectionAnimate } from '@/components/section-animate'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * The closing invitation. Deliberately quiet.
 *
 * The section this replaced read "Ready to Transform Your Restaurant?" over "join the
 * restaurants already saving thousands per month" — a claim about other customers that
 * nobody here can substantiate. A company homepage closes by telling a visitor how to
 * start a conversation, not by asserting a result.
 */
export function CompanyCta() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="rounded-3xl p-12 sm:p-16 bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
                Tell us what is going wrong
              </h2>
              <p className="text-[hsl(220,12%,65%)] text-lg mb-10 leading-relaxed">
                Consulting engagements, questions about the workbooks, or a look at the
                platform. If you are not sure which of those you need, describe the problem
                and we will tell you honestly whether we are the right people for it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-xl hover:bg-[hsl(217,91%,68%)] transition-all group"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border border-[hsl(220,18%,25%)] rounded-xl hover:bg-white/5 hover:border-[hsl(220,18%,30%)] transition-all"
                >
                  Start with a workbook
                </Link>
              </div>
            </div>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
