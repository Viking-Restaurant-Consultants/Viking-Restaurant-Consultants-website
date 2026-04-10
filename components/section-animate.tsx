'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionAnimateProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function SectionAnimate({ children, className = '', delay = 0, direction = 'up' }: SectionAnimateProps) {
  const getInitial = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -40 }
      case 'right': return { opacity: 0, x: 40 }
      case 'none': return { opacity: 0 }
      default: return { opacity: 0, y: 40 }
    }
  }

  const getAnimate = () => {
    switch (direction) {
      case 'left':
      case 'right': return { opacity: 1, x: 0 }
      case 'none': return { opacity: 1 }
      default: return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
