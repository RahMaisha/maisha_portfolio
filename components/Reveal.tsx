'use client'

import { useEffect, useRef } from 'react'

/**
 * Fades content in once, the first time it enters the viewport.
 *
 * One observer per mounted Reveal is deliberate: sections mount and unmount
 * independently across routes, and a shared observer would need bookkeeping
 * that costs more than it saves at this page size.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  as?: 'div' | 'li' | 'section' | 'article'
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect the OS setting without waiting for the observer to fire.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-in')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          ;(entry.target as HTMLElement).style.transitionDelay = `${delay}ms`
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref as never} className={`u-reveal ${className}`}>
      {children}
    </Tag>
  )
}
