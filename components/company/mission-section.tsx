'use client'

import { SectionAnimate } from '@/components/section-animate'
import Link from 'next/link'
import {
  ArrowRight,
  Swords,
  Users,
  Briefcase,
  Sparkles,
  Repeat,
  Mountain,
  Smile,
  ShieldCheck,
  BookOpen,
  Scale,
  Brain,
} from 'lucide-react'

/**
 * Mission and core values.
 *
 * Both the mission statement and the eleven pillars below are taken from
 * docs/business/BRAND_GUIDELINES.md in the Odin's Almanac repository, which is the
 * canonical brand document. An earlier version of this section carried a mission
 * statement and four "commitments" that were written for this page and had never been
 * approved anywhere — invented brand material sitting on the company homepage while a
 * real, published set existed one repository over. Change the guidelines first, then
 * copy the change here.
 *
 * The short lines are the "How We Deliver" column of that document, compressed. The
 * fuller wording of each pillar lives on /about; keeping this page terse is deliberate
 * so the two do not read as the same section twice.
 */
const MISSION =
  'To stand beside restaurant owners as warriors, protectors, and guides — bringing '
  + 'strength, knowledge, and unwavering support to help their businesses thrive.'

const pillars = [
  { icon: Swords, name: 'Strength', line: 'Tools that hold up under pressure' },
  { icon: Users, name: 'Teamwork', line: 'Built for the whole team, not just the owner' },
  { icon: Briefcase, name: 'Professionalism', line: 'Clean, clear, and polished' },
  { icon: Sparkles, name: 'Quality', line: 'Tested rigorously, no shortcuts' },
  { icon: Repeat, name: 'Consistency', line: 'The same reliable result every day' },
  { icon: Mountain, name: 'Perseverance', line: 'We stay on a problem until it is solved' },
  { icon: Smile, name: 'Satisfaction', line: 'Designed around what operators actually need' },
  { icon: ShieldCheck, name: 'Safety', line: 'Compliance built in, not bolted on' },
  { icon: BookOpen, name: 'Experience', line: 'From people who have worked the shift' },
  { icon: Scale, name: 'Integrity', line: 'Honest pricing, honest numbers' },
  { icon: Brain, name: 'Knowledge', line: 'Insight you can act on today' },
]

export function MissionSection() {
  return (
    <section className="py-24 lg:py-28 section-dark border-y border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="max-w-3xl mb-20">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              {MISSION}
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

        <SectionAnimate>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-3">
                Our Core Values
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                The eleven pillars we are built on
              </h3>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(217,91%,60%)] hover:text-[hsl(217,91%,70%)] transition-colors group/link"
            >
              What each one means
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </SectionAnimate>

        {/* Eleven items, so the stagger runs by column rather than by index — a delay of
            index * 0.08 would leave the last pillar nearly a second behind the first. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars?.map?.((p: any, index: number) => {
            const Icon = p?.icon
            return (
              <SectionAnimate key={p?.name ?? index} delay={(index % 3) * 0.07}>
                <div className="h-full flex items-start gap-4 p-5 rounded-xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center">
                    {Icon ? <Icon className="w-5 h-5 text-[hsl(217,91%,60%)]" /> : null}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
                      {p?.name ?? ''}
                    </h4>
                    <p className="text-sm text-[hsl(220,12%,60%)] leading-snug">
                      {p?.line ?? ''}
                    </p>
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
