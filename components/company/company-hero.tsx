'use client'

import { SectionAnimate } from '@/components/section-animate'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/**
 * The company hero. This is a corporate homepage, not a product landing page.
 *
 * It states who the firm is and what it does, and it does not open with a savings
 * figure or a demo booking. Odin's Almanac has its own page for that. Mixing the two
 * left the company with no homepage at all — a visitor who arrived looking for the
 * business behind the products found only a pitch for one of them.
 */
export function CompanyHero() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Restrained ground glow. No animated orbs, no gradient carnival. */}
      <div className="absolute top-0 left-1/3 w-[38rem] h-[38rem] bg-[hsl(217,91%,60%)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* No logo lockup here. The header already carries one directly above this
                block, and repeating it reads as a template rather than a company. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[hsl(220,18%,22%)] mb-8"
            >
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[hsl(220,12%,60%)]">
                Hospitality consulting &amp; software
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] mb-6"
            >
              <span className="text-white">We have run restaurants.</span>
              <br />
              <span className="text-gradient-gold">Now we build the tools we wished we had.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[hsl(220,12%,65%)] max-w-xl mb-10 leading-relaxed"
            >
              Viking Restaurant Consultants is a hospitality consultancy that builds its own
              software. Twenty-five years of restaurant management, turned into practical
              tools for the operators still standing on the floor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-xl hover:bg-[hsl(217,91%,68%)] transition-all group"
              >
                Our products
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border border-[hsl(220,18%,25%)] rounded-xl hover:bg-white/5 hover:border-[hsl(220,18%,30%)] transition-all"
              >
                About the founder
              </Link>
            </motion.div>
          </div>

          <SectionAnimate delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-[hsl(220,18%,18%)] aspect-[4/3]">
              <Image
                src="/images/hero-restaurant.jpg"
                alt="Restaurant service in progress"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,8%)]/70 to-transparent" />
            </div>
          </SectionAnimate>
        </div>
      </div>
    </section>
  )
}
