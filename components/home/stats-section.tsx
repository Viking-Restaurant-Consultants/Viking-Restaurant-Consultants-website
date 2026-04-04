'use client'

import { CounterAnimation } from '@/components/counter-animation'
import { SectionAnimate } from '@/components/section-animate'
import { DollarSign, TrendingUp, Clock, BarChart3 } from 'lucide-react'

const stats = [
  { icon: DollarSign, value: 3500, prefix: '$', suffix: '/mo', label: 'Average Monthly Savings', description: 'Per restaurant location', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { icon: TrendingUp, value: 35, suffix: 'x', label: 'Return on Investment', description: 'Average across all tiers', color: 'text-[hsl(217,91%,60%)]', bg: 'bg-[hsl(217,91%,60%)]/10' },
  { icon: Clock, value: 5, suffix: ' hrs', label: 'Saved Per Week', description: 'On invoice processing alone', color: 'text-sky-400', bg: 'bg-sky-400/10' },
  { icon: BarChart3, value: 20, suffix: '%', label: 'Waste Reduction', description: 'Through predictive ordering', color: 'text-purple-400', bg: 'bg-purple-400/10' },
]

export function StatsSection() {
  return (
    <section className="relative py-20 section-dark">
      <div className="absolute inset-0 border-y border-[hsl(220,18%,18%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats?.map?.((stat: any, index: number) => {
            const Icon = stat?.icon
            return (
              <SectionAnimate key={stat?.label ?? index} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-[hsl(220,20%,13%)] border border-[hsl(220,18%,18%)] card-glow">
                  {Icon && (
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat?.bg ?? ''} mb-4`}>
                      <Icon className={`w-6 h-6 ${stat?.color ?? ''}`} />
                    </div>
                  )}
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1 font-mono">
                    <CounterAnimation end={stat?.value ?? 0} prefix={stat?.prefix ?? ''} suffix={stat?.suffix ?? ''} />
                  </div>
                  <div className="text-sm font-semibold text-white/80 mb-0.5">{stat?.label ?? ''}</div>
                  <div className="text-xs text-[hsl(220,12%,50%)]">{stat?.description ?? ''}</div>
                </div>
              </SectionAnimate>
            )
          }) ?? []}
        </div>
      </div>
    </section>
  )
}
