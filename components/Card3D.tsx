'use client'

import { useEffect, useRef } from 'react'

const MAX_TILT = 5 // degrees — small on purpose; see globals.css .card3d-inner

/**
 * Wraps a card in pointer-driven 3D.
 *
 * The tilt, the sheen position, and the shadow offset all derive from one
 * pointer reading per animation frame, so the light and the shadow agree with
 * the rotation — that coherence is what makes it read as a solid object.
 *
 * Skipped entirely under prefers-reduced-motion and on coarse-pointer devices,
 * where the card renders as a plain flat surface.
 */
export default function Card3D({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const root = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = root.current
    const card = inner.current
    if (!node || !card) return

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return
    }

    let frame = 0

    const apply = (event: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = card.getBoundingClientRect()
        // -0.5 → 0.5 across each axis of the card.
        const px = (event.clientX - rect.left) / rect.width - 0.5
        const py = (event.clientY - rect.top) / rect.height - 0.5

        card.style.setProperty('--card-ry', `${px * MAX_TILT * 2}deg`)
        card.style.setProperty('--card-rx', `${-py * MAX_TILT * 2}deg`)
        card.style.setProperty('--card-mx', `${(px + 0.5) * 100}%`)
        card.style.setProperty('--card-my', `${(py + 0.5) * 100}%`)
        // Shadow leans away from the pointer, as a real light source would.
        card.style.setProperty('--card-sy', `${14 - py * 10}px`)
        card.style.setProperty('--card-blur', '30px')
      })
    }

    const reset = () => {
      if (frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
      card.style.removeProperty('--card-rx')
      card.style.removeProperty('--card-ry')
      card.style.removeProperty('--card-sy')
      card.style.removeProperty('--card-blur')
    }

    node.addEventListener('pointermove', apply, { passive: true })
    node.addEventListener('pointerleave', reset, { passive: true })
    return () => {
      node.removeEventListener('pointermove', apply)
      node.removeEventListener('pointerleave', reset)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={root} className={`card3d ${className}`}>
      <div ref={inner} className="card3d-inner">
        <span aria-hidden className="card3d-sheen" />
        <div className="card3d-layer flex h-full flex-col">{children}</div>
      </div>
    </div>
  )
}
