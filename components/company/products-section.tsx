'use client'

import { SectionAnimate } from '@/components/section-animate'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

/**
 * The portfolio. Three products, each with its price model stated plainly and each
 * pointing somewhere real.
 *
 * The P&L workbooks were absent from this site entirely until now, which meant anyone
 * who searched the company name and landed here could not buy the only thing that is
 * actually for sale today. That was the most expensive omission on the site.
 */
const products = [
  {
    name: "Odin's Almanac",
    kind: 'Software platform',
    status: 'Patent pending',
    body:
      'Restaurant operations software that unifies food safety, financial reporting and '
      + 'ordering. Built for operators who would rather the invoices, the sales data and '
      + 'the labor hours arrived on the statement without anybody keying them in.',
    href: '/odins-almanac',
    cta: 'Explore the platform',
    external: false,
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-400/10',
  },
  {
    name: 'P&L Workbooks',
    kind: 'Excel templates',
    status: '$39, one payment',
    body:
      'Three profit and loss workbooks — restaurants, bars and breweries, and food trucks '
      + 'and catering. Prime cost, break-even and industry benchmarks calculated the moment '
      + 'you type a month in. No subscription and no account.',
    href: '/templates',
    cta: 'See the workbooks',
    external: false,
    accent: 'text-[hsl(217,91%,60%)]',
    accentBg: 'bg-[hsl(217,91%,60%)]/10',
  },
  {
    name: 'ClipSifter',
    kind: 'Learning tool',
    status: 'Live',
    body:
      'Video is how most people actually learn a trade now, and it is close to unsearchable. '
      + 'ClipSifter finds the timestamped answer inside a tutorial instead of handing you a '
      + 'forty minute video and wishing you luck.',
    href: 'https://tubesift.web.app',
    cta: 'Visit ClipSifter',
    external: true,
    accent: 'text-amber-400',
    accentBg: 'bg-amber-400/10',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">
              Our Products
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
              What we have built
            </h2>
            <p className="text-[hsl(220,12%,65%)] text-lg leading-relaxed">
              A spreadsheet you run yourself, a platform that runs itself, and a tool for
              the way this trade is actually taught now. Different problems, one habit of
              mind.
            </p>
          </div>
        </SectionAnimate>

        <div className="grid lg:grid-cols-3 gap-6">
          {products?.map?.((p: any, index: number) => (
            <SectionAnimate key={p?.name ?? index} delay={index * 0.1}>
              <div className="h-full flex flex-col p-8 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] hover:border-[hsl(217,91%,60%)]/30 transition-all">
                <div className="flex items-center gap-2 mb-5">
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${p?.accent ?? ''}`}>
                    {p?.kind ?? ''}
                  </span>
                  <span className="text-[hsl(220,12%,30%)]">&bull;</span>
                  <span className="text-[11px] text-[hsl(220,12%,50%)] font-medium">
                    {p?.status ?? ''}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {p?.name ?? ''}
                </h3>

                <p className="text-sm text-[hsl(220,12%,65%)] leading-relaxed mb-8">
                  {p?.body ?? ''}
                </p>

                <div className="mt-auto">
                  {p?.external ? (
                    <a
                      href={p?.href ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(217,91%,60%)] hover:text-[hsl(217,91%,70%)] transition-colors group/link"
                    >
                      {p?.cta ?? 'Learn more'}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={p?.href ?? '#'}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(217,91%,60%)] hover:text-[hsl(217,91%,70%)] transition-colors group/link"
                    >
                      {p?.cta ?? 'Learn more'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </SectionAnimate>
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
