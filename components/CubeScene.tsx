'use client'

import { useEffect, useRef } from 'react'

const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom'] as const
const TILES = Array.from({ length: 9 })

/**
 * The hero's focal object: a 3x3 cube built from CSS 3D transforms.
 *
 * Replaces an embedded WebGL scene: no third-party runtime, no vendor
 * watermark, a few kilobytes instead of ~1MB, and the greys are tuned in the
 * stylesheet so the solid always reads against white paper.
 *
 * It tilts toward the pointer. Pointer tracking is skipped entirely under
 * prefers-reduced-motion, and on coarse-pointer devices where there is nothing
 * to track. In both cases the cube simply rests at its base orientation.
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
      /* Only from `lg`, where the hero is a two-column grid and the cube has a
         column of its own. Below that the hero is a single stack, and a cube
         dropped under the copy reads as a loose ornament rather than part of
         the composition. */
      className="cube-scene hidden aspect-square w-full select-none lg:block"
      style={{ '--cube-size': 'clamp(176px, 19vw, 248px)' } as React.CSSProperties}
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
