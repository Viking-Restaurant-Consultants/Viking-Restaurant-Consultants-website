'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function AlmanacHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-20 right-1/3 w-80 h-80 bg-[hsl(217,91%,60%)]/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(217,91%,60%)]/10 border border-[hsl(217,91%,60%)]/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[hsl(217,91%,60%)]" />
              <span className="text-sm font-medium text-[hsl(217,91%,70%)]">Patent-Pending Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
            >
              Odin&apos;s Almanac:{' '}
              <span className="text-gradient-gold">Prevention Over Reporting</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-[hsl(220,12%,65%)] mb-10 leading-relaxed max-w-xl"
            >
              The restaurant-specific AI platform that unifies food safety, financial intelligence, inventory, labor optimization, and predictive ordering into one closed-loop system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact?demo=true"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-xl hover:bg-[hsl(217,91%,68%)] transition-all btn-glow group"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-[hsl(220,18%,25%)] rounded-xl hover:bg-white/5 transition-all"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            <div className="relative w-52 h-52">
              <Image
                src="https://cdn.abacus.ai/images/f9b6f0cc-208d-4e06-9bba-0956441574db.png"
                alt="Odin's Almanac logo — silver shield with sword, fork, and spoon"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[hsl(220,18%,20%)] shadow-2xl shadow-black/40">
              <div className="relative aspect-video">
                <Image
                  src="https://cdn.abacus.ai/images/4adb4dfb-3930-4061-b2eb-c7ce46357a7d.png"
                  alt="Odin's Almanac Labor Management dashboard with real-time labor tracking and AI staffing predictions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
