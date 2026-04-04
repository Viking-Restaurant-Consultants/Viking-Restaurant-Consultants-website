'use client'

import { SectionAnimate } from '@/components/section-animate'
import { Award, Fingerprint, GitMerge, Cpu, Lightbulb } from 'lucide-react'

const patents = [
  { icon: Fingerprint, title: 'Zero-Touch P&L Creator', description: 'Multi-source financial aggregation engine' },
  { icon: GitMerge, title: 'Invoice Fuzzy Matching', description: 'Intelligent OCR with vendor matching' },
  { icon: Cpu, title: 'Closed-Loop Automation', description: 'Invoice-to-profit automation architecture' },
  { icon: Lightbulb, title: 'Predictive Engines', description: 'Restaurant-specific ordering & labor forecasting' },
]

export function PatentTech() {
  return (
    <section className="py-24 lg:py-32 section-dark border-y border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(217,91%,60%)]/10 border border-[hsl(217,91%,60%)]/20 mb-6">
              <Award className="w-4 h-4 text-[hsl(217,91%,60%)]" />
              <span className="text-sm font-medium text-[hsl(217,91%,70%)]">Patent-Pending Technology</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              Built on <span className="text-gradient-gold">Innovation</span>
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-2xl mx-auto">
              Four patent-pending innovations power Odin&apos;s Almanac, designed specifically for the restaurant industry.
            </p>
          </div>
        </SectionAnimate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {patents?.map?.((p: any, i: number) => {
            const Icon = p?.icon
            return (
              <SectionAnimate key={p?.title ?? i} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-[hsl(220,20%,13%)] border border-[hsl(220,18%,18%)] text-center card-glow h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[hsl(217,91%,60%)]/10 mb-5">
                    {Icon && <Icon className="w-7 h-7 text-[hsl(217,91%,60%)]" />}
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2 text-white">{p?.title ?? ''}</h3>
                  <p className="text-sm text-[hsl(220,12%,55%)]">{p?.description ?? ''}</p>
                </div>
              </SectionAnimate>
            )
          }) ?? []}
        </div>
      </div>
    </section>
  )
}
