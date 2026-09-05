'use client'

import { SectionAnimate } from '@/components/section-animate'
import { Compass, Ruler, HandshakeIcon, ShieldCheck } from 'lucide-react'

/**
 * Mission, and the four commitments under it.
 *
 * Written to be defensible rather than impressive. Every line here is something the
 * firm either does or does not do, which is the test a lender, a credit reviewer or a
 * prospective client actually applies. No savings figures, no superlatives, no claims
 * about outcomes that have not been measured.
 */
const commitments = [
  {
    icon: Ruler,
    title: 'Built from practice',
    body:
      'Every tool we sell started as a problem we hit on a real floor, in a real service. '
      + 'We do not build features we would not use ourselves at five in the morning.',
  },
  {
    icon: Compass,
    title: 'Plain numbers, plainly explained',
    body:
      'An operator should be able to read their own statement without an accountant on the '
      + 'phone. We measure against published industry standards and we say where the '
      + 'standards come from.',
  },
  {
    icon: HandshakeIcon,
    title: 'You own what you buy',
    body:
      'Our workbooks are one payment and yours to keep, across every location you own. '
      + 'Where we do charge monthly, it is for a service that costs us monthly to run.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance is not paperwork',
    body:
      'Food safety systems exist to keep people well, not to satisfy a clipboard. We build '
      + 'them so the honest answer is also the easy one.',
  },
]

export function MissionSection() {
  return (
    <section className="py-24 lg:py-28 section-dark border-y border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              To give independent operators the same command of their numbers that the
              large groups have always had.
            </h2>
            <p className="text-[hsl(220,12%,65%)] text-lg leading-relaxed">
              Chains run on daily figures and dedicated analysts. Independents run on a
              statement that arrives six weeks late, by which point the month it describes
              is beyond fixing. That gap is not a talent gap and it is not an effort gap. It
              is a tooling gap, and it is the one thing about this industry we are equipped
              to close.
            </p>
          </div>
        </SectionAnimate>

        <div className="grid sm:grid-cols-2 gap-5">
          {commitments?.map?.((c: any, index: number) => {
            const Icon = c?.icon
            return (
              <SectionAnimate key={c?.title ?? index} delay={index * 0.08}>
                <div className="h-full p-7 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]">
                  <div className="w-11 h-11 rounded-xl bg-[hsl(217,91%,60%)]/10 flex items-center justify-center mb-5">
                    {Icon ? <Icon className="w-5 h-5 text-[hsl(217,91%,60%)]" /> : null}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">
                    {c?.title ?? ''}
                  </h3>
                  <p className="text-sm text-[hsl(220,12%,65%)] leading-relaxed">
                    {c?.body ?? ''}
                  </p>
                </div>
              </SectionAnimate>
            )
          }) ?? []}
        </div>
      </div>
    </section>
  )
}
