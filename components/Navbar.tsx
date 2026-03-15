'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '16px 0',
      background: scrolled ? 'rgba(5,5,10,0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(167,139,250,0.06)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1000, margin: '0 auto', padding: '0 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'Space Mono', fontSize: 14, color: '#f1f0f7' }}>
          maisha_rahman<span style={{ color: '#a78bfa' }}>.</span>dev
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          {['about','skills','projects','research','contact'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Space Mono', fontSize: 12, color: '#6b6a88',
              padding: '6px 14px', borderRadius: 100, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = '#f1f0f7'; (e.target as HTMLElement).style.background = 'rgba(167,139,250,0.1)' }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = '#6b6a88'; (e.target as HTMLElement).style.background = 'transparent' }}
            >{id}</button>
          ))}
        </div>
        <a href="/resume.pdf" target="_blank" style={{
          fontFamily: 'Space Mono', fontSize: 11, fontWeight: 700,
          background: '#a78bfa', color: '#05050a',
          padding: '8px 18px', borderRadius: 6, textDecoration: 'none',
        }}>Resume →</a>
      </div>
    </nav>
  )
}
