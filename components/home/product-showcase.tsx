'use client'

import { useState, useEffect, useCallback } from 'react'
import { SectionAnimate } from '@/components/section-animate'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    src: 'https://cdn.abacus.ai/images/4024a30e-be6f-4969-a551-9c6274f2f6ce.png',
    alt: 'Inventory Management with AI Order Recommendations',
    label: 'Inventory Management',
    description: 'AI-powered stock tracking with smart reorder suggestions and vendor comparison',
  },
  {
    src: 'https://cdn.abacus.ai/images/4adb4dfb-3930-4061-b2eb-c7ce46357a7d.png',
    alt: 'Labor Management with real-time labor percentage and staffing predictions',
    label: 'Labor Optimization',
    description: 'Real-time labor costs, break alerts, overtime risk, and AI staffing predictions',
  },
  {
    src: 'https://cdn.abacus.ai/images/be6890a8-f96e-4bdf-9502-735420d844e9.png',
    alt: 'Smart FIFO Assistant with AI-powered usage prioritization',
    label: 'Smart FIFO Assistant',
    description: 'AI-powered food safety prioritization with automated discard alerts',
  },
  {
    src: 'https://cdn.abacus.ai/images/59e5f38e-4383-41df-b617-aa238a03d918.png',
    alt: 'Waste Prevention and Predictive Alerts dashboard',
    label: 'Waste Prevention',
    description: 'Compliance scoring, label tracking, and 7-day predictive expiration forecasts',
  },
  {
    src: 'https://cdn.abacus.ai/images/7ed92bdf-b034-41da-9b9a-8d8dea97a362.png',
    alt: 'Food Safety Label printing with QR codes',
    label: 'Food Safety Labels',
    description: 'QR-coded safety labels with batch tracking and thermal printer support',
  },
  {
    src: 'https://cdn.abacus.ai/images/590f0e7e-ccf1-4f18-b008-6056a2892445.png',
    alt: 'Financial Health Score onboarding wizard',
    label: 'Financial Health Score',
    description: 'Instant financial health grading during guided onboarding',
  },
]

export function ProductShowcase() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(prev => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="py-24 lg:py-32 section-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionAnimate>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[hsl(217,91%,60%)] uppercase tracking-widest mb-4">See It In Action</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Real Product. Real Results.
            </h2>
            <p className="text-[hsl(220,12%,55%)] text-lg max-w-2xl mx-auto">
              Every screenshot below is from the live Odin&apos;s Almanac platform — no mockups, no placeholders.
            </p>
          </div>
        </SectionAnimate>

        <SectionAnimate delay={0.15}>
          <div className="relative max-w-5xl mx-auto">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-[hsl(220,18%,20%)] shadow-2xl shadow-black/40 bg-[hsl(220,25%,8%)]">
              <div className="relative aspect-[16/10]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide?.src ?? ''}
                      alt={slide?.alt ?? 'Product screenshot'}
                      fill
                      className="object-cover"
                      priority={current === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
              {/* Label overlay */}
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-white font-semibold text-lg">{slide?.label ?? ''}</p>
                  <p className="text-white/70 text-sm">{slide?.description ?? ''}</p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-[hsl(217,91%,60%)]'
                      : 'w-2 bg-[hsl(220,18%,25%)] hover:bg-[hsl(220,18%,35%)]'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </SectionAnimate>
      </div>
    </section>
  )
}
