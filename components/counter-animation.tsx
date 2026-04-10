'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

export function CounterAnimation({ end = 0, prefix = '', suffix = '', duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  // Use threshold: 0 so the observer fires as soon as even 1px is in the viewport,
  // regardless of whether a parent framer-motion wrapper is still animating opacity.
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true, rootMargin: '0px 0px -50px 0px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      // Small delay so the parent SectionAnimate fade-in has started before counting begins
      const delay = setTimeout(() => {
        const startTime = Date.now()
        const timer = setInterval(() => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(eased * end)
          if (progress >= 1) clearInterval(timer)
        }, 16)
        return () => clearInterval(timer)
      }, 300)
      return () => clearTimeout(delay)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}{decimals > 0 ? count?.toFixed?.(decimals) ?? '0' : Math.round(count ?? 0)?.toLocaleString?.() ?? '0'}{suffix}
    </span>
  )
}
