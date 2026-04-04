'use client'

import { SectionAnimate } from '@/components/section-animate'
import { Upload, Cpu, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Connect Your Data',
    description: 'Link your POS system, upload invoices, and connect your vendor accounts. Odin\'s Almanac integrates with the tools you already use.',
  },
  {
    icon: Cpu,
    step: '02',
    title: 'AI Processes Everything',
    description: 'Our patent-pending AI automatically categorizes, reconciles, and analyzes your data — invoices, sales, labor, inventory — in real time.',
  },
  {
    icon: BarChart3,
    step: '03',
    title: 'Prevent Problems, Maximize Profit',
    description: 'Get automated P&L statements, predictive ordering suggestions, waste alerts, and actionable insights — before problems cost you money.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">Process</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-2xl mx-auto">
              From data to decisions in three simple steps.
            </p>
          </div>
        </SectionAnimate>

        <div className="max-w-3xl mx-auto space-y-5">
          {steps?.map?.((step: any, index: number) => {
            const Icon = step?.icon
            return (
              <SectionAnimate key={step?.step ?? index} delay={index * 0.15}>
                <div className="flex gap-6 items-start p-8 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] card-glow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-[hsl(217,91%,60%)]/10 flex items-center justify-center">
                      {Icon && <Icon className="w-6 h-6 text-[hsl(217,91%,60%)]" />}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[hsl(217,91%,60%)] font-bold tracking-wider">STEP {step?.step ?? ''}</span>
                    <h3 className="font-display text-xl font-semibold mt-1 mb-2 text-white">{step?.title ?? ''}</h3>
                    <p className="text-[hsl(220,12%,55%)] text-sm leading-relaxed">{step?.description ?? ''}</p>
                  </div>
                </div>
              </SectionAnimate>
            )
          }) ?? []}
        </div>
      </div>
    </section>
  )
}
