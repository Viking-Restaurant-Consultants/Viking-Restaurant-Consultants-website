'use client'

import { SectionAnimate } from '@/components/section-animate'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const tiers = [
  {
    name: 'Essentials',
    price: 29,
    description: 'Perfect for getting started with AI-powered guidance.',
    features: ['Odin\'s Answers AI', 'Core playbooks', 'AI guidance & recommendations'],
  },
  {
    name: 'Pro',
    price: 99,
    description: 'Full automation for growing restaurants.',
    features: ['Zero-Touch P&L', 'Predictive ordering', 'Labor optimization', 'Menu engineering', 'Up to 5 locations'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'Unlimited scale with custom AI.',
    features: ['Unlimited locations', 'Custom AI models', 'API access', 'Dedicated support'],
  },
]

export function PricingPreview() {
  return (
    <section className="py-24 lg:py-32 section-dark border-y border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              Simple, <span className="text-gradient-gold">Transparent</span> Pricing
            </h2>
            <p className="text-[hsl(220,12%,60%)] text-lg max-w-2xl mx-auto">
              Start with what you need. Scale when you&apos;re ready.
            </p>
          </div>
        </SectionAnimate>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tiers?.map?.((tier: any, index: number) => (
            <SectionAnimate key={tier?.name ?? index} delay={index * 0.1}>
              <div className={`relative p-8 rounded-2xl transition-all h-full flex flex-col ${
                tier?.popular
                  ? 'bg-gradient-to-b from-[hsl(217,91%,60%)]/10 to-[hsl(220,22%,11%)] border-2 border-[hsl(217,91%,60%)]/40 shadow-lg shadow-[hsl(217,91%,60%)]/5'
                  : 'bg-[hsl(220,20%,13%)] border border-[hsl(220,18%,18%)] card-glow'
              }`}>
                {tier?.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold mb-2 text-white">{tier?.name ?? ''}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white font-mono">${tier?.price ?? 0}</span>
                  <span className="text-[hsl(220,12%,50%)]">/mo</span>
                </div>
                <p className="text-sm text-[hsl(220,12%,55%)] mb-6">{tier?.description ?? ''}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier?.features?.map?.((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[hsl(217,91%,60%)]" />
                      <span>{feature ?? ''}</span>
                    </li>
                  )) ?? []}
                </ul>
                <Link
                  href="/pricing"
                  className={`block text-center px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                    tier?.popular
                      ? 'bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] hover:bg-[hsl(217,91%,68%)] btn-glow'
                      : 'bg-white/5 text-white border border-[hsl(220,18%,25%)] hover:bg-white/10'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </SectionAnimate>
          )) ?? []}
        </div>

        <SectionAnimate delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-[hsl(217,91%,60%)] hover:text-[hsl(217,91%,68%)] font-medium transition-colors group"
            >
              See full pricing details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
