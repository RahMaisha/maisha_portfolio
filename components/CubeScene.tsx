'use client'

import { useEffect, useRef } from 'react'

const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom'] as const
const TILES = Array.from({ length: 9 })

/**
 * The hero's focal object: a 3x3 cube built from CSS 3D transforms.
 *
 * Replaces an embedded WebGL scene — no third-party runtime, no vendor
 * watermark, a few kilobytes instead of ~1MB, and the greys are tuned in the
 * stylesheet so the solid always reads against white paper.
 *
 * It tilts toward the pointer. Pointer tracking is skipped entirely under
 * prefers-reduced-motion, and on coarse-pointer devices where there is nothing
 * to track — in both cases the cube simply rests at its base orientation.
 */
export default function CubeScene() {
  const tilt = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = tilt.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduced || coarse) return

    let frame = 0

    const onMove = (event: PointerEvent) => {
      if (frame) return
      // Coalesce to one write per frame; pointermove fires far more often.
      frame = requestAnimationFrame(() => {
        frame = 0
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5
        node.style.setProperty('--rx', `${-20 - y * 26}deg`)
        node.style.setProperty('--ry', `${-28 + x * 34}deg`)
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      aria-hidden
      /* Shown at every size now that it costs a few kilobytes rather than a
         WebGL runtime. On phones it sits below the copy at a reduced size. */
      className="cube-scene aspect-[3/2] w-full select-none sm:aspect-square"
      style={{ '--cube-size': 'clamp(132px, 30vw, 248px)' } as React.CSSProperties}
    >
      <div ref={tilt} className="cube-tilt">
        <div className="cube-spin">
          {FACES.map((face) => (
            <div key={face} className={`cube-face cube-face-${face}`}>
              {TILES.map((_, i) => (
                <span key={i} className="cube-tile" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="cube-shadow" />
    </div>
  )
}
