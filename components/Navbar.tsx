'use client'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      setMenuOpen(false)
      router.push(`/#${id}`)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const navLinks = ['about', 'skills', 'experience', 'projects', 'hackathon', 'volunteering', 'research', 'contact']

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        .nav-links-desktop { display: flex; gap: 4px; }
        .nav-resume-desktop { display: block; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; flex-direction: column; gap: 5px; }
        .hamburger span { display: block; width: 22px; height: 2px; background: #e8eaf0; border-radius: 2px; transition: all 0.3s; }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: rgba(5,5,10,0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,212,255,0.08);
          padding: 16px 0;
          z-index: 99;
          flex-direction: column;
        }
        .mobile-menu.open { display: flex; }
        .mobile-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          color: #6b6a88;
          padding: 12px 28px;
          text-align: left;
          width: 100%;
          transition: all 0.2s;
          text-transform: capitalize;
        }
        .mobile-link:hover { color: #f1f0f7; background: rgba(0,212,255,0.06); }
        .mobile-resume {
          margin: 8px 28px 4px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          background: #00d4ff;
          color: #07090f;
          padding: 10px 18px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }
        @media (max-width: 900px) {
          .nav-links-desktop { display: none; }
          .nav-resume-desktop { display: none; }
          .hamburger { display: flex; }
        }
        @media (max-width: 640px) {
          .mobile-menu { top: 60px; }
          .mobile-link { padding: 12px 20px; }
          .mobile-resume { margin: 8px 20px 4px; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '12px 0',
        background: 'transparent',
        backdropFilter: 'none',
        borderBottom: 'none',
        transition: 'all 0.3s',
      }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '0 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button
            onClick={() => scrollTo('hero')}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 13,
              color: '#f1f0f7',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            maisha_rahman<span style={{ color: '#00d4ff' }}>.</span>dev
          </button>

          {/* Desktop nav */}
          <div className="nav-links-desktop">
            {navLinks.map(id => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'Space Mono, monospace', fontSize: 13, color: '#6b6a88',
                  padding: '6px 14px', borderRadius: 100, transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = '#f1f0f7'
                  ;(e.target as HTMLElement).style.background = 'rgba(0,212,255,0.08)'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = '#6b6a88'
                  ;(e.target as HTMLElement).style.background = 'transparent'
                }}
              >
                {id}
              </button>
            ))}
          </div>

          <a
            className="nav-resume-desktop"
            href="/resume.pdf"
            target="_blank"
            style={{
              fontFamily: 'Space Mono, monospace', fontSize: 11, fontWeight: 700,
              background: '#00d4ff', color: '#07090f',
              padding: '8px 18px', borderRadius: 6, textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            Resume
          </a>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(p => !p)} aria-label="Toggle menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(id => (
          <button key={id} className="mobile-link" onClick={() => scrollTo(id)}>{id}</button>
        ))}
        <a className="mobile-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
      </div>
    </>
  )
}