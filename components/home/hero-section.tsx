'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[hsl(217,91%,60%)]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[hsl(220,60%,40%)]/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(217,91%,60%)]/10 border border-[hsl(217,91%,60%)]/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[hsl(217,91%,60%)]" />
              <span className="text-sm font-medium text-[hsl(217,91%,70%)]">Patent-Pending AI Technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">Stop Losing Money.</span>
              <br />
              <span className="text-gradient-gold">Start Preventing Problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[hsl(220,12%,65%)] max-w-xl mb-10 leading-relaxed"
            >
              Odin&apos;s Almanac is the AI-powered restaurant operations platform that unifies food safety, financial intelligence, and predictive ordering &mdash; saving the average restaurant{' '}
              <span className="text-[hsl(217,91%,60%)] font-semibold">$3,500 per month</span>.
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
                Book a Free Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/odins-almanac"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-[hsl(220,18%,25%)] rounded-xl hover:bg-white/5 hover:border-[hsl(220,18%,30%)] transition-all"
              >
                Explore Features
              </Link>
            </motion.div>
          </div>

          {/* Right side — Odin's Almanac logo + dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            <div className="relative w-48 h-48">
              <Image
                src="https://cdn.abacus.ai/images/f9b6f0cc-208d-4e06-9bba-0956441574db.png"
                alt="Odin's Almanac logo — silver shield with sword, fork, and spoon"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-[hsl(220,18%,20%)] shadow-2xl shadow-black/40">
              <div className="relative aspect-video">
                <Image
                  src="https://cdn.abacus.ai/images/590f0e7e-ccf1-4f18-b008-6056a2892445.png"
                  alt="Odin's Almanac Financial Health Score showing 95/100 Grade A rating with guided onboarding"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-2xl border border-white/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
