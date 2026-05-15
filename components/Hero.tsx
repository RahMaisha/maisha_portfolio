'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI Engineer',
  'Backend Engineer',
  'Computer Vision Researcher',
]

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
)

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    if (waiting) return
    const current = roles[roleIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, typed.length + 1)
        setTyped(next)
        if (next === current) {
          setWaiting(true)
          setTimeout(() => {
            setWaiting(false)
            setDeleting(true)
          }, 2000)
        }
      } else {
        const next = current.slice(0, typed.length - 1)
        setTyped(next)
        if (next === '') {
          setDeleting(false)
          setRoleIdx((prev) => (prev + 1) % roles.length)
        }
      }
    }, deleting ? 40 : 70)
    return () => clearTimeout(timeout)
  }, [typed, deleting, roleIdx, waiting])

  useEffect(() => {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let pts: { x: number; y: number; r: number; vx: number; vy: number; a: number }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      pts = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 0.8 + 0.2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.5 + 0.1,
      }))
    }

    const draw = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(draw)
        return
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach((point) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${point.a * 0.4})`
        ctx.fill()
        point.x += point.vx
        point.y += point.vy
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1
      })

      for (let i = 0; i < pts.length; i += 1) {
        for (let j = i + 1; j < pts.length; j += 1) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const socialLinks = [
    { href: 'https://github.com/RahMaisha', label: 'GitHub', icon: <GithubIcon /> },
    { href: 'https://linkedin.com/in/maisha-rahman-01x', label: 'LinkedIn', icon: <LinkedinIcon /> },
    { href: 'mailto:maisharahman01x@gmail.com', label: 'Email', icon: <MailIcon /> },
  ]

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,212,255,.4)} 50%{box-shadow:0 0 0 8px rgba(0,212,255,0)} }
        @keyframes blink { 50% { opacity: 0; } }
        .cursor { animation: blink 1s step-end infinite; color: #00d4ff; }
        .avail-dot { width:8px;height:8px;border-radius:50%;background:#00d4ff;animation:glowPulse 2s ease infinite;display:inline-block; }
        .hbtn-p { display:inline-flex;align-items:center;gap:8px;background:#00d4ff;color:#07090f;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;transition:all .25s;border:none;cursor:pointer;font-family:'Inter',sans-serif; }
        .hbtn-p:hover { background:#33ddff;transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,212,255,.4); }
        .hbtn-s { display:inline-flex;align-items:center;gap:8px;background:transparent;color:#8892a4;font-size:14px;padding:13px 28px;border-radius:8px;text-decoration:none;border:1px solid rgba(255,255,255,.1);transition:all .25s;font-family:'Inter',sans-serif; }
        .hbtn-s:hover { color:#e8eaf0;border-color:rgba(0,212,255,.4); }
        .sl-icon { color:#4a5568;text-decoration:none;transition:color .2s;display:flex;align-items:center; }
        .sl-icon:hover { color:#00d4ff; }
        .h-a1 { animation: fadeUp .6s ease both; }
        .h-a2 { animation: fadeUp .6s .1s ease both; }
        .h-a3 { animation: fadeUp .6s .2s ease both; }
        .h-a4 { animation: fadeUp .6s .3s ease both; }
        .h-a5 { animation: fadeUp .6s .4s ease both; }
        .h-a6 { animation: fadeUp .6s .5s ease both; }
        .photo-anim { animation: fadeIn .8s .3s ease both; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 64px; align-items: center; }
        .hero-photo-col { position: relative; display:flex; justify-content:center; }
        .hero-links { display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
        .avatar-shell {
          width: 320px;
          height: 320px;
          border-radius: 999px;
          padding: 6px;
          background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(0,212,255,0.28));
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }
        .avatar-frame {
          width: 100%;
          height: 100%;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: #0d1117;
          position: relative;
        }
        .avatar-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .hero-photo-col { display: none; }
          .hero-inner { padding: 0 32px !important; }
          .hero-section { min-height: auto !important; padding: 96px 0 56px !important; }
        }
        @media (max-width: 768px) {
          .hero-inner { padding: 0 20px !important; }
          .hero-section { padding: 88px 0 40px !important; }
          .hbtn-p, .hbtn-s { padding: 11px 20px; font-size: 13px; width: 100%; justify-content: center; }
          .hero-btns { flex-wrap: wrap; }
          .hero-links { gap: 16px; }
          .hero-copy { max-width: none !important; }
        }
        @media (max-width: 480px) {
          .hero-name { font-size: clamp(34px, 11vw, 48px) !important; }
          .hero-typed { font-size: 14px !important; min-height: 24px !important; }
          .hero-copy { font-size: 14px !important; line-height: 1.75 !important; }
        }
      `}</style>

      <section id="hero" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0 60px' }}>
        <div className="hero-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div className="hero-grid">
            <div>
              <div className="h-a1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Fira Code, monospace', fontSize: 12, letterSpacing: '0.12em', color: '#00d4ff', marginBottom: 20, textTransform: 'uppercase' }}>
                <span className="avail-dot" />
                available for opportunities
              </div>

              <h1 className="h-a2 hero-name" style={{ fontSize: 'clamp(40px,5.5vw,72px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 8 }}>
                Maisha
                <br />
                <span style={{ color: '#00d4ff' }}>Rahman.</span>
              </h1>

              <div className="h-a3 hero-typed" style={{ fontFamily: 'Fira Code, monospace', fontSize: 16, color: '#8892a4', marginBottom: 24, minHeight: 28 }}>
                <span style={{ color: '#00d4ff' }}>{'>'}</span>{' '}
                <span style={{ color: '#e8eaf0' }}>{typed}</span>
                <span className="cursor">|</span>
              </div>

              <p className="h-a4 hero-copy" style={{ fontSize: 16, color: '#8892a4', maxWidth: 520, lineHeight: 1.8, marginBottom: 36, fontWeight: 300 }}>
                I build <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>reliable systems that ship</strong> — from published Vision Transformer research to production-grade products. CS graduate from East West University, based in <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>Dhaka, Bangladesh</strong>.
              </p>

              <div className="h-a5 hero-btns" style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
                <button className="hbtn-p" onClick={() => scrollTo('projects')}>View My Work</button>
                <a className="hbtn-s" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>

              <div className="h-a6 hero-links">
                <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.1)' }} />
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    className="sl-icon"
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-photo-col">
              <div className="photo-anim avatar-shell">
                <div className="avatar-frame">
                  <Image src="/profile.jpeg" alt="Portrait of Maisha Rahman" width={640} height={640} priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}