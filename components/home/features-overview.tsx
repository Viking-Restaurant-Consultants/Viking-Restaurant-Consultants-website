'use client'

import { SectionAnimate } from '@/components/section-animate'
import { MessageCircle, FileSpreadsheet, ScanLine, Brain, ShieldCheck, PieChart } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: "Odin's Almanac Platform",
    description: 'Our flagship operations AI. Automates Zero-Touch P&L statements, predictive food ordering, and labor cost optimization in real-time.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    borderHover: 'hover:border-emerald-400/30',
  },
  {
    icon: Brain,
    title: 'ClipSifter Answer Engine',
    description: 'Transform YouTube into an actionable knowledge base. Our intelligence layer finds and compiles the exact timestamped answers from video tutorials instantly.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    borderHover: 'hover:border-amber-400/30',
  },
  {
    icon: ScanLine,
    title: 'Document & Invoice OCR',
    description: 'Proprietary intelligent fuzzy matching. Snap a picture of any invoice and watch the data categorize and reconcile directly into your Profit & Loss statement.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    borderHover: 'hover:border-sky-400/30',
  },
  {
    icon: PieChart,
    title: 'Menu Profitability Matrix',
    description: 'Machine learning analyzes item-by-item profit margins combined with sales volume data to engineer the optimal, highest-grossing menu composition.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    borderHover: 'hover:border-purple-400/30',
  },
  {
    icon: ShieldCheck,
    title: 'Food Safety & Compliance',
    description: 'FDA-aligned digital checklists, HACCP workflows, and automated temperature logs. Prevent safety issues with systemic predictive alerts.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    borderHover: 'hover:border-rose-400/30',
  },
  {
    icon: FileSpreadsheet,
    title: 'Prime Cost & Variance Alerts',
    description: 'Real-time anomaly detection tracks your two biggest expenses (food + labor). Receive SMS and dashboard alerts the moment you deviate from budget.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    borderHover: 'hover:border-cyan-400/30',
  },
]

export function FeaturesOverview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">Enterprise Capabilties</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white mb-5">
              Two Architectures. <span className="text-gradient-gold">Endless Leverage.</span>
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-2xl mx-auto leading-relaxed">
              Viking Restaurant Consultants unifies operational intelligence and rapid knowledge acquisition into a singular force.
            </p>
          </div>
        </SectionAnimate>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features?.map?.((feature: any, index: number) => {
            const Icon = feature?.icon
            return (
              <SectionAnimate key={feature?.title ?? index} delay={index * 0.08}>
                <div className={`group p-7 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] ${feature?.borderHover ?? ''} transition-all duration-350 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 h-full`}>
                  <div className={`inline-flex p-3 rounded-xl ${feature?.bg ?? ''} mb-5`}>
                    {Icon && <Icon className={`w-6 h-6 ${feature?.color ?? ''}`} />}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-white">{feature?.title ?? ''}</h3>
                  <p className="text-[hsl(220,12%,55%)] text-sm leading-relaxed">{feature?.description ?? ''}</p>
                </div>
              </SectionAnimate>
            )
          }) ?? []}
        </div>

        <SectionAnimate delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/odins-almanac"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-xl hover:bg-[hsl(217,91%,68%)] transition-all btn-glow group"
            >
              Explore the Platforms

              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
