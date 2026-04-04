'use client'

import { SectionAnimate } from '@/components/section-animate'
import { Check, X } from 'lucide-react'

const comparisons = [
  { feature: 'AI-Powered Answers', odins: true, traditional: false },
  { feature: 'Zero-Touch P&L', odins: true, traditional: false },
  { feature: 'Automated Invoice Scanning', odins: true, traditional: false },
  { feature: 'Predictive Ordering', odins: true, traditional: false },
  { feature: 'Menu Profitability Matrix', odins: true, traditional: false },
  { feature: 'Food Safety Automation', odins: true, traditional: false },
  { feature: 'Multi-Location Support', odins: true, traditional: true },
  { feature: 'Starting at $29/mo', odins: true, traditional: false },
]

export function WhyOdins() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">The Comparison</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              Why Odin&apos;s Almanac <span className="text-gradient-gold">Wins</span>
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-2xl mx-auto">
              50-80% cheaper than Toast, Square, and enterprise tools &mdash; with 10x more AI features.
            </p>
          </div>
        </SectionAnimate>

        <SectionAnimate delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-[hsl(220,18%,18%)]">
              <div className="grid grid-cols-3 bg-[hsl(220,20%,13%)] p-5">
                <div className="text-sm font-semibold text-[hsl(220,12%,55%)]">Feature</div>
                <div className="text-sm font-semibold text-[hsl(217,91%,60%)] text-center">Odin&apos;s Almanac</div>
                <div className="text-sm font-semibold text-[hsl(220,12%,50%)] text-center">Traditional Tools</div>
              </div>
              {comparisons?.map?.((row: any, i: number) => (
                <div key={i} className={`grid grid-cols-3 p-5 border-t border-[hsl(220,18%,16%)] ${
                  i % 2 === 0 ? 'bg-[hsl(220,22%,11%)]' : 'bg-[hsl(220,22%,10%)]'
                }`}>
                  <div className="text-sm font-medium text-white/80">{row?.feature ?? ''}</div>
                  <div className="flex justify-center">
                    {row?.odins ? (
                      <div className="w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                        <X className="w-4 h-4 text-[hsl(220,12%,40%)]" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row?.traditional ? (
                      <div className="w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
                        <X className="w-4 h-4 text-[hsl(220,12%,40%)]" />
                      </div>
                    )}
                  </div>
                </div>
              )) ?? []}
            </div>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
