'use client'

import { SectionAnimate } from '@/components/section-animate'
import Image from 'next/image'
import { MessageCircle, FileSpreadsheet, ScanLine, Brain, ShieldCheck, PieChart, ArrowRight } from 'lucide-react'

const capabilities = [
  {
    icon: MessageCircle,
    title: "Odin's Answers",
    subtitle: 'Restaurant AI Assistant',
    description: 'A domain-aware AI trained across 8 restaurant disciplines — food safety, labor law, menu engineering, inventory, operations, finance, marketing, and compliance.',
    highlights: ['8 specialized knowledge domains', 'Context-aware conversations', 'Operational playbooks included'],
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    image: 'https://cdn.abacus.ai/images/7dc723bd-b961-4cc4-88bb-ac5611c0e84d.png',
    imageAlt: 'Odin\'s Almanac AI model and backend management system powering restaurant intelligence',
  },
  {
    icon: FileSpreadsheet,
    title: 'Zero-Touch P&L',
    subtitle: 'Automated Financial Reporting',
    description: 'Our patent-pending financial automation engine syncs your invoices, POS data, and labor costs to automatically generate accurate, real-time profit & loss statements.',
    highlights: ['Multi-source data aggregation', 'Real-time financial visibility', 'Automatic categorization'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    image: 'https://cdn.abacus.ai/images/590f0e7e-ccf1-4f18-b008-6056a2892445.png',
    imageAlt: 'Odin\'s Almanac Financial Health Score showing 95/100 Grade A rating during onboarding',
  },
  {
    icon: ScanLine,
    title: 'Invoice Scanner',
    subtitle: 'Intelligent Document Processing',
    description: 'OCR-powered invoice scanning with proprietary fuzzy matching technology. Scan a photo of any invoice and watch it get automatically categorized and reconciled.',
    highlights: ['OCR + fuzzy matching', 'Automatic vendor matching', '2-5 hours saved per week'],
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    image: 'https://cdn.abacus.ai/images/4024a30e-be6f-4969-a551-9c6274f2f6ce.png',
    imageAlt: 'Odin\'s Almanac Inventory Management showing AI Order Recommendations with smart reorder suggestions',
  },
  {
    icon: Brain,
    title: 'Predictive Intelligence',
    subtitle: 'ML-Powered Forecasting',
    description: 'Machine learning algorithms analyze your historical data to predict ordering needs, optimize labor scheduling, and forecast sales.',
    highlights: ['15-20% waste reduction', '15-25% labor cost savings', 'Sales forecasting'],
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    image: 'https://cdn.abacus.ai/images/4adb4dfb-3930-4061-b2eb-c7ce46357a7d.png',
    imageAlt: 'Odin\'s Almanac Labor Management with real-time labor percentage, AI staffing predictions, and overtime alerts',
  },
  {
    icon: ShieldCheck,
    title: 'Food Safety & Compliance',
    subtitle: 'FDA-Aligned Automation',
    description: 'Digitize your entire food safety program with FDA-aligned workflows, HACCP checklists, temperature logging, and automated compliance monitoring.',
    highlights: ['HACCP digital checklists', 'Temperature monitoring', 'Automated compliance alerts'],
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    image: 'https://cdn.abacus.ai/images/be6890a8-f96e-4bdf-9502-735420d844e9.png',
    imageAlt: 'Odin\'s Almanac Smart FIFO Assistant with AI-powered usage prioritization and food safety queue',
  },
  {
    icon: PieChart,
    title: 'Menu & Inventory',
    subtitle: 'Profitability Engineering',
    description: 'Our proprietary profitability matrix provides item-level profit analysis so you know exactly which dishes make money and which don\'t.',
    highlights: ['Item-level profit analysis', 'Menu engineering matrix', 'Multi-location support'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    image: 'https://cdn.abacus.ai/images/59e5f38e-4383-41df-b617-aa238a03d918.png',
    imageAlt: 'Odin\'s Almanac Waste Prevention dashboard with compliance score, label tracking, and predictive alerts',
  },
]

export function CoreCapabilities() {
  return (
    <section className="py-24 lg:py-32 section-dark border-y border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">Core Capabilities</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              Six Modules. <span className="text-gradient-gold">One Closed-Loop System.</span>
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-2xl mx-auto">
              Every module connects to every other — from invoice scanning to profit analysis, ordering to waste detection.
            </p>
          </div>
        </SectionAnimate>

        <div className="space-y-24">
          {capabilities?.map?.((cap: any, index: number) => {
            const Icon = cap?.icon
            const isEven = index % 2 === 0
            return (
              <SectionAnimate key={cap?.title ?? index} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${cap?.bg ?? ''} mb-4`}>
                      {Icon && <Icon className={`w-5 h-5 ${cap?.color ?? ''}`} />}
                      <span className={`text-sm font-semibold ${cap?.color ?? ''}`}>{cap?.subtitle ?? ''}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">{cap?.title ?? ''}</h3>
                    <p className="text-[hsl(220,12%,60%)] leading-relaxed mb-6">{cap?.description ?? ''}</p>
                    <ul className="space-y-3">
                      {cap?.highlights?.map?.((h: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                          <div className={`w-6 h-6 rounded-full ${cap?.bg ?? ''} flex items-center justify-center flex-shrink-0`}>
                            <ArrowRight className={`w-3.5 h-3.5 ${cap?.color ?? ''}`} />
                          </div>
                          <span className="font-medium">{h ?? ''}</span>
                        </li>
                      )) ?? []}
                    </ul>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="relative rounded-2xl overflow-hidden border border-[hsl(220,18%,20%)] shadow-2xl shadow-black/40">
                      <div className="relative aspect-video">
                        <Image
                          src={cap?.image ?? ''}
                          alt={cap?.imageAlt ?? 'Feature illustration'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
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
