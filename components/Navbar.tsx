'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section owns the viewport so the masthead can mark it.
  useEffect(() => {
    if (pathname !== '/') return

    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    )
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const go = useCallback(
    (id: string) => {
      setMenuOpen(false)
      if (pathname !== '/') {
        router.push(`/#${id}`)
        return
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    },
    [pathname, router]
  )

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || menuOpen
            ? 'border-b border-rule bg-paper/85 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <div className="u-shell flex h-[60px] items-center justify-between gap-8">
          <button
            onClick={() => go('top')}
            className="u-label !text-ink whitespace-nowrap !tracking-[0.14em] cursor-pointer"
          >
            Maisha Rahman
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`u-label cursor-pointer transition-colors duration-200 hover:!text-ink ${
                  active === item.id ? '!text-ink' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="/Maisha_Rahman_Fullstack_Dev_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="u-label !text-ink hidden items-center gap-2 border border-ink px-4 py-2 transition-colors duration-200 hover:bg-ink hover:!text-paper sm:inline-flex"
            >
              Résumé
            </a>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-6 w-6 cursor-pointer flex-col items-end justify-center gap-[5px] md:hidden"
            >
              <span
                className={`block h-px bg-ink transition-all duration-300 ${
                  menuOpen ? 'w-5 translate-y-[3px] rotate-45' : 'w-5'
                }`}
              />
              <span
                className={`block h-px bg-ink transition-all duration-300 ${
                  menuOpen ? 'w-5 -translate-y-[3px] -rotate-45' : 'w-3.5'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        /* `invisible` (not just opacity-0) is what keeps the closed sheet out of
           the tab order and the accessibility tree. Transitioning visibility
           alongside opacity preserves the fade on the way out. */
        className={`fixed inset-0 z-40 bg-paper transition-[opacity,visibility] duration-300 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="u-shell flex h-full flex-col justify-center pb-16">
          {NAV.map((item, i) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="group flex items-baseline gap-5 border-b border-rule py-5 text-left"
            >
              <span className="u-label u-mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[1.75rem] font-medium tracking-[-0.03em]">{item.label}</span>
            </button>
          ))}
          <a
            href="/Maisha_Rahman_Fullstack_Dev_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="u-label !text-paper mt-10 inline-flex justify-center rounded-lg bg-ink px-5 py-4"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </>
  )
}
