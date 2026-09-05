'use client'

import { SectionAnimate } from '@/components/section-animate'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, FileSpreadsheet, ArrowRight, Download } from 'lucide-react'

/**
 * The $39 Excel workbooks. A separate product line from Odin's Almanac: no subscription,
 * no account, no platform — you buy a file and you own it.
 *
 * Checkout is hosted on Gumroad, so every buy button is an external link. Keeping the
 * store off this site is deliberate: it means no payment handling, no tax registration
 * and no download infrastructure here.
 */
const STORE = 'https://allthingsnik.gumroad.com'

const templates = [
  {
    name: 'Restaurant P&L',
    forWho: 'Full service and quick service',
    price: 39,
    url: `${STORE}/l/rhkokx`,
    cover: '/images/templates/cover-restaurant.png',
    hook:
      'Prime cost struck the moment you type your numbers in, with a traffic light on it. '
      + 'Full service should land 55 to 65 percent. Above 70 you are working harder every '
      + 'week for nothing.',
    highlights: [
      'Eight metrics graded against real industry targets',
      'Break-even in sales per day, plus your margin of safety',
      'This month beside the same month last year',
      'Laid out on the Uniform System of Accounts for Restaurants',
    ],
  },
  {
    name: 'Bar, Brewery & Coffee P&L',
    forWho: 'Bars, taprooms and coffee shops',
    price: 39,
    url: `${STORE}/l/rqpbk`,
    cover: '/images/templates/cover-bar-brewery-coffee.png',
    hook:
      'A blended pour cost of 24 percent can hide a 34 percent draft problem behind a 16 '
      + 'percent spirits program. One number tells you something is wrong. It never tells '
      + 'you where.',
    highlights: [
      'Every drink category costed against its own sales line',
      'Draft, packaged, wine, spirits and coffee measured separately',
      'Nine dashboard metrics with targets and traffic lights',
      'One dropdown switches benchmarks between bar, taproom and cafe',
    ],
  },
  {
    name: 'Food Truck, Catering & Ghost Kitchen P&L',
    forWho: 'Trucks, catering and cloud kitchens',
    price: 39,
    url: `${STORE}/l/elpspt`,
    cover: '/images/templates/cover-food-truck-catering.png',
    hook:
      'You can run a 28 percent food cost and still lose money every month, because 24 '
      + 'percent of the ticket left as platform commission before anybody got paid.',
    highlights: [
      'Delivered gross margin — what is left after the cost of reaching the customer',
      'Commission measured against third-party sales, not total sales',
      'Every event ranked by contribution, so you rebook the ones that paid',
      'Revenue split by channel: walk-up, events, catering, direct, third-party',
    ],
  },
]

const included = [
  'Twelve tabs, every figure a live Excel formula',
  'Executive dashboard with targets and traffic lights',
  'Formal Period P&L, in dollars and as a percent of sales',
  'Twelve-month P&L, prior year, and weekly tracking',
  'Cost analysis with your break-even',
  'Budget vs actual and three-month trend analysis',
  'A fully editable industry benchmarks tab',
  'Tutorial guide and five training modules, about five hours',
]

export function TemplatesContent() {
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
              <FileSpreadsheet className="w-4 h-4 text-[hsl(217,91%,60%)]" />
              <span className="text-sm font-medium text-[hsl(217,91%,60%)]">
                One file. One payment. No subscription.
              </span>
            </motion.div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
              P&amp;L Templates You Own
            </h1>
            <p className="text-[hsl(220,12%,55%)] text-lg max-w-2xl mx-auto">
              Most operators find out how the month went about six weeks after it ended,
              when the bookkeeping catches up. That is roughly five weeks too late to do
              anything about it. These are the workbooks you run yourself, weekly, in Excel.
            </p>
          </div>
        </SectionAnimate>

        {/* Dashboard proof */}
        <SectionAnimate delay={0.1}>
          <div className="max-w-5xl mx-auto mb-28">
            <div className="rounded-2xl overflow-hidden border border-[hsl(220,18%,18%)] bg-[hsl(220,22%,11%)]">
              <Image
                src="/images/templates/dashboard-preview.png"
                alt="Executive dashboard from the Restaurant P&L workbook, showing eight metrics each graded against a target with a red, amber or green status"
                width={2222}
                height={1239}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-[hsl(220,12%,55%)] mt-4">
              The executive dashboard. Type one month into the P&amp;L and every light on
              this page decides itself.
            </p>
          </div>
        </SectionAnimate>

        {/* The three workbooks */}
        <div className="space-y-8 mb-28">
          {templates?.map?.((t: any, index: number) => (
            <SectionAnimate key={t?.name ?? index} delay={index * 0.1}>
              <div className="grid md:grid-cols-5 gap-8 p-8 rounded-2xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)] hover:border-[hsl(217,91%,60%)]/30 transition-all">
                <div className="md:col-span-2">
                  <div className="rounded-xl overflow-hidden border border-[hsl(220,18%,18%)]">
                    <Image
                      src={t?.cover ?? ''}
                      alt={`${t?.name ?? 'Workbook'} cover`}
                      width={1280}
                      height={720}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[hsl(217,91%,60%)] mb-2">
                    {t?.forWho ?? ''}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white mb-4">
                    {t?.name ?? ''}
                  </h2>
                  <p className="text-[hsl(220,12%,65%)] mb-6 leading-relaxed">
                    {t?.hook ?? ''}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {t?.highlights?.map?.((h: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[hsl(220,12%,65%)]">
                        <Check className="w-4 h-4 text-[hsl(217,91%,60%)] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    )) ?? []}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-5">
                    <span className="font-display text-3xl font-bold text-white">
                      ${t?.price ?? 39}
                    </span>
                    <a
                      href={t?.url ?? STORE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-lg hover:bg-[hsl(217,91%,68%)] transition-all btn-glow"
                    >
                      <Download className="w-4 h-4" />
                      Buy &amp; download
                    </a>
                    <span className="text-xs text-[hsl(220,12%,45%)]">
                      Instant download &middot; Excel or LibreOffice
                    </span>
                  </div>
                </div>
              </div>
            </SectionAnimate>
          )) ?? []}
        </div>

        {/* What is inside */}
        <SectionAnimate>
          <div className="max-w-5xl mx-auto mb-28">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-4">
              What Is Inside Every Workbook
            </h2>
            <p className="text-center text-[hsl(220,12%,55%)] mb-12 max-w-2xl mx-auto">
              You type in the cream-shaded input cells. Everything else calculates itself, and
              the traffic lights tell you what is wrong without you knowing a single target.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {included?.map?.((item: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[hsl(220,22%,11%)] border border-[hsl(220,18%,18%)]"
                >
                  <Check className="w-5 h-5 text-[hsl(217,91%,60%)] shrink-0 mt-0.5" />
                  <span className="text-sm text-[hsl(220,12%,65%)]">{item}</span>
                </div>
              )) ?? []}
            </div>
          </div>
        </SectionAnimate>

        {/* Who made it */}
        <SectionAnimate>
          <div className="max-w-3xl mx-auto text-center mb-28">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Who Made These</h2>
            <p className="text-[hsl(220,12%,65%)] leading-relaxed">
              William H Huffstetler IV, Viking Restaurant Consultants. Twenty-three years in
              hospitality management, ServSafe and HACCP certified. The workbooks are built
              on the same operating standards we use in consulting engagements, and licensed
              to one business for internal use across every location you own.
            </p>
            <p className="text-sm text-[hsl(220,12%,45%)] mt-6">
              Microsoft Excel 2016 or newer, Microsoft 365, or LibreOffice Calc 7 and above.
              Windows or Mac. Not a substitute for professional accounting or tax advice.
            </p>
          </div>
        </SectionAnimate>

        {/* Bridge to the platform */}
        <SectionAnimate>
          <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-gradient-to-b from-[hsl(220,22%,16%)] to-[hsl(220,22%,12%)] border border-[hsl(220,18%,18%)] text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              When Typing It In Yourself Stops Being Worth It
            </h2>
            <p className="text-[hsl(220,12%,65%)] mb-8 max-w-2xl mx-auto leading-relaxed">
              A workbook is the right tool when you have one location and an hour a week.
              Odin&apos;s Almanac is what you move to when you would rather the invoices,
              the POS data and the labor hours arrived on the P&amp;L without anybody
              keying them.
            </p>
            <Link
              href="/odins-almanac"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-lg hover:bg-[hsl(217,91%,68%)] transition-all btn-glow"
            >
              See the platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SectionAnimate>
      </div>
    </div>
  )
}
