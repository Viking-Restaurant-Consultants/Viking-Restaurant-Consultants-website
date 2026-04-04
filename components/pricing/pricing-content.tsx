'use client'

import { SectionAnimate } from '@/components/section-animate'
import { CounterAnimation } from '@/components/counter-animation'
import Link from 'next/link'
import { Check, HelpCircle, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Essentials',
    price: 29,
    description: 'AI-powered guidance for any restaurant. Perfect for getting started.',
    features: [
      'Odin\'s Answers AI assistant',
      'Core operational playbooks',
      'AI guidance & recommendations',
      'Basic reporting templates',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: 99,
    description: 'Full automation suite for serious operators. The sweet spot for most restaurants.',
    features: [
      'Everything in Essentials',
      'Zero-Touch P&L Creator',
      'Invoice Scanner with OCR',
      'Predictive ordering',
      'Labor optimization',
      'Menu engineering matrix',
      'Waste detection ML',
      'Up to 5 locations',
      'Priority support',
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'Unlimited scale with custom AI models and dedicated support.',
    features: [
      'Everything in Pro',
      'Unlimited locations',
      'Custom AI models',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager',
      'Phone & video support',
      'Custom reporting',
    ],
    cta: 'Contact Sales',
  },
]

const faqs = [
  {
    q: 'How quickly can I get started?',
    a: 'Most restaurants are up and running within 24 hours. Our team handles the setup and data migration for you.',
  },
  {
    q: 'Do I need special equipment?',
    a: 'No. Odin\'s Almanac works in any web browser and on any device. For invoice scanning, you just need a phone camera.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely. Upgrade or downgrade anytime. Your data and history travel with you.',
  },
  {
    q: 'What POS systems do you integrate with?',
    a: 'We integrate with Toast, Square, Clover, Lightspeed, and many others. Contact us if you don\'t see yours listed.',
  },
]

export function PricingContent() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionAnimate>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(217,91%,60%)]/10 border border-[hsl(217,91%,60%)]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[hsl(217,91%,60%)]" />
              <span className="text-sm font-medium text-[hsl(217,91%,60%)]">Save $3,500/month on average</span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
              Plans That Pay for Themselves
            </h1>
            <p className="text-[hsl(220,12%,55%)] text-lg max-w-2xl mx-auto">
              50-80% cheaper than Toast, Square, and enterprise tools. Choose the plan that fits your operation.
            </p>
          </div>
        </SectionAnimate>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-28">
          {tiers?.map?.((tier: any, index: number) => (
            <SectionAnimate key={tier?.name ?? index} delay={index * 0.1}>
              <div className={`relative p-8 rounded-2xl transition-all h-full flex flex-col ${
                tier?.popular
                  ? 'bg-gradient-to-b from-[hsl(220,22%,16%)] to-[hsl(220,22%,12%)] ring-2 ring-[hsl(217,91%,60%)]/50 shadow-xl shadow-[hsl(217,91%,60%)]/10'
                  : 'bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]'
              }`}>
                {tier?.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-semibold mb-2 text-white">
                  {tier?.name ?? ''}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold font-mono text-white">
                    ${tier?.price ?? 0}
                  </span>
                  <span className="text-[hsl(220,12%,55%)]">/month</span>
                </div>
                <p className="text-sm mb-8 text-[hsl(220,12%,55%)]">{tier?.description ?? ''}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier?.features?.map?.((f: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(220,12%,70%)]">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier?.popular ? 'text-[hsl(217,91%,60%)]' : 'text-emerald-400'
                      }`} />
                      <span>{f ?? ''}</span>
                    </li>
                  )) ?? []}
                </ul>
                <Link
                  href="/contact?demo=true"
                  className={`block text-center px-5 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                    tier?.popular
                      ? 'btn-glow bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] hover:bg-[hsl(217,91%,68%)] shadow-lg shadow-[hsl(217,91%,60%)]/25'
                      : 'bg-[hsl(220,20%,18%)] text-[hsl(220,12%,70%)] hover:bg-[hsl(220,20%,22%)] border border-[hsl(220,18%,22%)]'
                  }`}
                >
                  {tier?.cta ?? 'Get Started'}
                </Link>
              </div>
            </SectionAnimate>
          )) ?? []}
        </div>

        {/* ROI highlight */}
        <SectionAnimate>
          <div className="rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-[hsl(220,22%,13%)] via-[hsl(220,22%,15%)] to-[hsl(220,20%,17%)] border border-[hsl(220,18%,18%)] text-center mb-28">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-8">
              The Math is Simple
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-[hsl(217,91%,60%)] font-mono">
                  <CounterAnimation end={3500} prefix="$" suffix="" />
                </div>
                <div className="text-sm text-[hsl(220,12%,55%)] mt-2">Average monthly savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[hsl(217,91%,60%)] font-mono">
                  <CounterAnimation end={99} prefix="$" suffix="" />
                </div>
                <div className="text-sm text-[hsl(220,12%,55%)] mt-2">Pro plan cost</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[hsl(217,91%,60%)] font-mono">
                  <CounterAnimation end={35} suffix="x" />
                </div>
                <div className="text-sm text-[hsl(220,12%,55%)] mt-2">Return on investment</div>
              </div>
            </div>
          </div>
        </SectionAnimate>

        {/* FAQ */}
        <SectionAnimate>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-10 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs?.map?.((faq: any, i: number) => (
                <div key={i} className="p-7 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] card-hover">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-[hsl(217,91%,60%)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{faq?.q ?? ''}</h3>
                      <p className="text-sm text-[hsl(220,12%,55%)] leading-relaxed">{faq?.a ?? ''}</p>
                    </div>
                  </div>
                </div>
              )) ?? []}
            </div>
          </div>
        </SectionAnimate>
      </div>
    </div>
  )
}
