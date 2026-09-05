'use client'

import { SectionAnimate } from '@/components/section-animate'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * A short founder introduction on the homepage, with the full story kept on /about.
 *
 * The credentials block below states only things that are documented: the degree, the
 * two certifications, and the years. Patent status is deliberately described without a
 * count — the number that had been published on this site could not be verified, and an
 * unverified patent claim is the wrong thing to put in front of a lender or a credit
 * reviewer. Restore a figure here only once counsel has confirmed it.
 */
const credentials = [
  { label: '25+ years', detail: 'Restaurant management' },
  { label: 'ServSafe', detail: 'Certified' },
  { label: 'HACCP', detail: 'Certified' },
  { label: 'Georgia Southern', detail: 'Hotel & Restaurant Management' },
]

export function FounderBrief() {
  return (
    <section className="py-24 lg:py-28 section-dark border-y border-[hsl(220,18%,18%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* The col-span has to sit on SectionAnimate itself, not on the div inside it.
              SectionAnimate renders the grid child, so a span class on its child is
              invisible to the grid and both columns collapse to one track. */}
          <SectionAnimate className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-[hsl(220,18%,18%)] aspect-[4/5] max-w-sm">
              <Image
                src="/images/founder-portrait.jpg"
                alt="William Huffstetler, founder of Viking Restaurant Consultants"
                fill
                className="object-cover"
              />
            </div>
          </SectionAnimate>

          <SectionAnimate delay={0.1} className="lg:col-span-3">
            <div>
              <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">
                Leadership
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                William Huffstetler
              </h2>
              <p className="text-[hsl(220,12%,50%)] font-medium mb-6">Founder</p>

              <div className="space-y-4 text-[hsl(220,12%,65%)] leading-relaxed mb-8">
                <p>
                  Twenty-five years of restaurant management, and a degree in Hotel and
                  Restaurant Management from Georgia Southern University. The kind of
                  experience that comes from covering a shift short-staffed, not from
                  reading about it.
                </p>
                <p>
                  The software came later, and it came out of frustration. Watching good
                  operators make decisions on numbers that were weeks old, he taught himself
                  to build the tools that would have made those weeks unnecessary.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {credentials?.map?.((c: any, i: number) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]"
                  >
                    <div className="text-sm font-bold text-[hsl(217,91%,60%)] mb-1">
                      {c?.label ?? ''}
                    </div>
                    <div className="text-xs text-[hsl(220,12%,55%)] leading-snug">
                      {c?.detail ?? ''}
                    </div>
                  </div>
                )) ?? []}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(217,91%,60%)] hover:text-[hsl(217,91%,70%)] transition-colors group/link"
              >
                Read the full story
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </SectionAnimate>
        </div>
      </div>
    </section>
  )
}
