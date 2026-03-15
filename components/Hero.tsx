'use client'
import { useEffect, useState } from 'react'

const roles = ['AI Engineer', 'Fullstack Developer', 'ML Researcher', 'Computer Vision Engineer']

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
          setTimeout(() => { setWaiting(false); setDeleting(true) }, 2000)
        }
      } else {
        const next = current.slice(0, typed.length - 1)
        setTyped(next)
        if (next === '') { setDeleting(false); setRoleIdx(prev => (prev + 1) % roles.length) }
      }
    }, deleting ? 40 : 70)
    return () => clearTimeout(timeout)
  }, [typed, deleting, roleIdx, waiting])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .cursor { animation: blink 1s step-end infinite; color: #00d4ff; }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(0,212,255,0.5)} 50%{box-shadow:0 0 0 8px rgba(0,212,255,0)} }
        .avail-dot { width:8px;height:8px;border-radius:50%;background:#00d4ff;animation:pulse-dot 2s ease infinite;display:inline-block; }
        .hbtn-primary { display:inline-flex;align-items:center;gap:8px;background:#00d4ff;color:#07090f;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;transition:all 0.25s;border:none;cursor:pointer; }
        .hbtn-primary:hover { background:#33ddff; transform:translateY(-2px); box-shadow:0 8px 28px rgba(0,212,255,0.35); }
        .hbtn-sec { display:inline-flex;align-items:center;gap:8px;background:transparent;color:#8892a4;font-size:14px;padding:13px 28px;border-radius:8px;text-decoration:none;border:1px solid rgba(255,255,255,0.1);transition:all 0.25s; }
        .hbtn-sec:hover { color:#e8eaf0; border-color:rgba(0,212,255,0.4); }
        .social-a { font-family:'Fira Code',monospace;font-size:11px;color:#4a5568;text-decoration:none;letter-spacing:.06em;transition:color 0.2s; }
        .social-a:hover { color:#00d4ff; }
        .photo-corner-tl { position:absolute;top:-10px;left:-10px;width:60px;height:60px;border-top:2px solid rgba(0,212,255,0.4);border-left:2px solid rgba(0,212,255,0.4);border-radius:6px 0 0 0; }
        .photo-corner-br { position:absolute;bottom:-10px;right:-10px;width:60px;height:60px;border-bottom:2px solid #00d4ff;border-right:2px solid #00d4ff;border-radius:0 0 6px 0; }
      `}</style>

      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0 60px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 64, alignItems: 'center' }}>

            {/* LEFT */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Fira Code, monospace', fontSize: 12, letterSpacing: '0.12em', color: '#00d4ff', marginBottom: 20, textTransform: 'uppercase' as const }}>
                <span className="avail-dot" />
                available for opportunities
              </div>

              <h1 style={{ fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 8 }}>
                Maisha
                <br />
                <span style={{ color: '#00d4ff' }}>Rahman.</span>
              </h1>

              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 16, color: '#8892a4', marginBottom: 24, minHeight: 28 }}>
                <span style={{ color: '#00d4ff' }}>{'>'}</span>{' '}
                <span style={{ color: '#e8eaf0' }}>{typed}</span>
                <span className="cursor">|</span>
              </div>

              <p style={{ fontSize: 16, color: '#8892a4', maxWidth: 520, lineHeight: 1.8, marginBottom: 36, fontWeight: 300 }}>
                I build <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>AI systems that ship</strong> — from published Vision Transformer research to production SaaS products. CS graduate from East West University, based in <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>Dhaka, Bangladesh</strong>.
              </p>

              <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' as const }}>
                <button className="hbtn-primary" onClick={() => scrollTo('projects')}>View My Work →</button>
                <a className="hbtn-sec" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.1)' }} />
                <a className="social-a" href="https://github.com/RahMaisha" target="_blank" rel="noreferrer">GitHub</a>
                <a className="social-a" href="https://linkedin.com/in/maisha-rahman-87b4a32a9" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="social-a" href="mailto:maisharahman01x@gmail.com">Email</a>
              </div>
            </div>

            {/* RIGHT — photo */}
            <div style={{ position: 'relative' }}>
              <span className="photo-corner-tl" />
              <div style={{ width: '100%', aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,212,255,0.12)', background: '#0d1117', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <div style={{ fontSize: 64, opacity: 0.1 }}>👩‍💻</div>
                <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#4a5568', letterSpacing: '0.1em' }}>your photo here</div>
              </div>
              <span className="photo-corner-br" />
              <div style={{ position: 'absolute', bottom: 24, left: -20, background: '#0d1117', border: '1px solid rgba(0,212,255,0.2)', borderRadius: 12, padding: '12px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#e8eaf0', marginBottom: 2 }}>ICCIT 2025</div>
                <div style={{ fontSize: 10, color: '#8892a4', fontFamily: 'Fira Code, monospace' }}>Published Researcher</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}