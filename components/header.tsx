'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Odin\'s Almanac', href: '/odins-almanac' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[hsl(220,25%,8%)]/95 backdrop-blur-xl border-b border-[hsl(217,91%,60%)]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/166ba2e9-2d0c-4e54-a501-dd4428875881.png"
                alt="Viking Restaurant Consultants logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-[15px] font-bold tracking-tight text-white leading-tight">
                Viking Restaurant
              </span>
              <span className="text-[10px] text-[hsl(217,91%,60%)] font-semibold tracking-[0.2em] uppercase leading-tight">
                Consultants
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems?.map?.((item: any) => (
              <Link
                key={item?.href ?? ''}
                href={item?.href ?? '/'}
                className="px-4 py-2 text-sm font-medium text-[hsl(220,12%,65%)] hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {item?.label ?? ''}
              </Link>
            )) ?? []}
            <Link
              href="/contact?demo=true"
              className="ml-4 px-6 py-2.5 text-sm font-semibold bg-[hsl(217,91%,60%)] text-[hsl(220,25%,8%)] rounded-lg hover:bg-[hsl(217,91%,68%)] transition-all btn-glow"
            >
              Book a Demo
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[hsl(220,22%,11%)] border-b border-[hsl(220,18%,18%)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems?.map?.((item: any) => (
                <Link
                  key={item?.href ?? ''}
                  href={item?.href ?? '/'}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
                >
                  {item?.label ?? ''}
                </Link>
              )) ?? []}
              <Link
                href="/contact?demo=true"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-[hsl(220,25%,8%)] bg-[hsl(217,91%,60%)] rounded-lg text-center mt-2"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
