'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface SectionAnimateProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function SectionAnimate({ children, className = '', delay = 0, direction = 'up' }: SectionAnimateProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const getInitial = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -40 }
      case 'right': return { opacity: 0, x: 40 }
      case 'none': return { opacity: 0 }
      default: return { opacity: 0, y: 40 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
