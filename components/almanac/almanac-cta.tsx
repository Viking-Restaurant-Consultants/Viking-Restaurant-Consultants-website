'use client'

import { SectionAnimate } from '@/components/section-animate'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AlmanacCta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              See Odin&apos;s Almanac <span className="text-gradient-gold">in Action</span>
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-xl mx-auto mb-10">
              Book a personalized demo and discover how much your restaurant could save.
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-[hsl(220,18%,25%)] rounded-xl hover:bg-white/5 transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
