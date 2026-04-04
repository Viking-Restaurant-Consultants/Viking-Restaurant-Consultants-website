'use client'

import { SectionAnimate } from '@/components/section-animate'
import Image from 'next/image'
import { Monitor, Zap, Lock } from 'lucide-react'

export function DashboardPreview() {
  return (
    <section className="py-24 lg:py-32 section-dark border-y border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionAnimate direction="left">
            <div>
              <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">Real-Time Visibility</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                See Your Entire Operation <span className="text-gradient-gold">at a Glance</span>
              </h2>
              <p className="text-[hsl(220,12%,60%)] text-lg mb-10 leading-relaxed">
                From real-time P&L statements to predictive ordering alerts, Odin&apos;s Almanac gives restaurant owners complete visibility into every aspect of their business.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Monitor, title: 'Real-time dashboards', desc: 'Monitor all locations from a single view' },
                  { icon: Zap, title: 'Automated alerts', desc: 'Instant notifications for anomalies and opportunities' },
                  { icon: Lock, title: 'Bank-level security', desc: 'Enterprise encryption for all financial data' },
                ]?.map?.((item: any, i: number) => {
                  const Icon = item?.icon
                  return (
                    <div key={i} className="flex items-start gap-4">
                      {Icon && (
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[hsl(217,91%,60%)]" />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-white text-sm">{item?.title ?? ''}</p>
                        <p className="text-[hsl(220,12%,55%)] text-sm">{item?.desc ?? ''}</p>
                      </div>
                    </div>
                  )
                }) ?? []}
              </div>
            </div>
          </SectionAnimate>

          <SectionAnimate direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-[hsl(220,18%,20%)] shadow-2xl shadow-black/40">
              <div className="relative aspect-video">
                <Image
                  src="https://cdn.abacus.ai/images/4024a30e-be6f-4969-a551-9c6274f2f6ce.png"
                  alt="Odin's Almanac Inventory Management with AI Order Recommendations, stock tracking, and vendor comparison"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border border-white/5" />
            </div>
          </SectionAnimate>
        </div>
      </div>
    </section>
  )
}
