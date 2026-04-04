'use client'

import { SectionAnimate } from '@/components/section-animate'
import { MessageCircle, FileSpreadsheet, ScanLine, Brain, ShieldCheck, PieChart } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: "Odin's Answers",
    description: 'Restaurant-specific AI assistant trained across 8 disciplines. Get instant, expert answers to any operational question.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    borderHover: 'hover:border-amber-400/30',
  },
  {
    icon: FileSpreadsheet,
    title: 'Zero-Touch P&L',
    description: 'Patent-pending financial automation that syncs invoices, POS data, and labor costs to generate real-time P&L statements.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    borderHover: 'hover:border-emerald-400/30',
  },
  {
    icon: ScanLine,
    title: 'Invoice Scanner',
    description: 'OCR-powered invoice processing with intelligent fuzzy matching. Scan, categorize, and reconcile invoices in seconds.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    borderHover: 'hover:border-sky-400/30',
  },
  {
    icon: Brain,
    title: 'Predictive Intelligence',
    description: 'ML-powered ordering, labor optimization, and sales forecasting. Reduce food waste by 15-20% and labor costs by 15-25%.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    borderHover: 'hover:border-purple-400/30',
  },
  {
    icon: ShieldCheck,
    title: 'Food Safety & Compliance',
    description: 'FDA-aligned workflows, HACCP checklists, and digital temperature logs with automated monitoring and instant alerts.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    borderHover: 'hover:border-rose-400/30',
  },
  {
    icon: PieChart,
    title: 'Menu & Inventory',
    description: 'Proprietary profitability matrix with item-level profit analysis. Optimize your menu and inventory across locations.',
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
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">The Platform</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white mb-5">
              Six Powerful Modules. <span className="text-gradient-gold">One Platform.</span>
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-2xl mx-auto leading-relaxed">
              Odin&apos;s Almanac unifies every aspect of restaurant operations into a single, intelligent system.
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
              Explore All Features
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
