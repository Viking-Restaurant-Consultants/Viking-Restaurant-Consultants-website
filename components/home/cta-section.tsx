'use client'

import { SectionAnimate } from '@/components/section-animate'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="relative rounded-3xl overflow-hidden p-12 sm:p-20 text-center bg-gradient-to-br from-[hsl(220,20%,13%)] to-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]">
            {/* Decorative glow */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-[hsl(217,91%,60%)]/8 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-[hsl(220,60%,50%)]/8 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-[hsl(220,12%,60%)] text-lg max-w-xl mx-auto mb-10">
                Join the restaurants already saving thousands per month with Odin&apos;s Almanac. Book a free demo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?demo=true"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-xl hover:bg-[hsl(217,91%,68%)] transition-all btn-glow group"
                >
                  Book a Free Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-[hsl(220,18%,25%)] rounded-xl hover:bg-white/5 hover:border-[hsl(220,18%,30%)] transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
