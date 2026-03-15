'use client'
import { useEffect, useState } from 'react'

const roles = [
  'AI Engineer',
  'Software Engineer',
  'Fullstack Developer',
  'ML Researcher',
  'Computer Vision Engineer',
]

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

  useEffect(() => {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
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
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.a * 0.4})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - d / 100)})`
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

  return (
    <>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(0,212,255,.4)} 50%{box-shadow:0 0 0 8px rgba(0,212,255,0)} }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        .cursor { animation: blink 1s step-end infinite; color: #00d4ff; }
        .avail-dot { width:8px;height:8px;border-radius:50%;background:#00d4ff;animation:glowPulse 2s ease infinite;display:inline-block; }
        .hbtn-p { display:inline-flex;align-items:center;gap:8px;background:#00d4ff;color:#07090f;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;transition:all .25s;border:none;cursor:pointer;font-family:'Inter',sans-serif; }
        .hbtn-p:hover { background:#33ddff;transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,212,255,.4); }
        .hbtn-s { display:inline-flex;align-items:center;gap:8px;background:transparent;color:#8892a4;font-size:14px;padding:13px 28px;border-radius:8px;text-decoration:none;border:1px solid rgba(255,255,255,.1);transition:all .25s;font-family:'Inter',sans-serif; }
        .hbtn-s:hover { color:#e8eaf0;border-color:rgba(0,212,255,.4); }
        .sl-a { font-family:'Fira Code',monospace;font-size:11px;color:#4a5568;text-decoration:none;letter-spacing:.06em;transition:color .2s; }
        .sl-a:hover { color:#00d4ff; }
        .corner-tl { position:absolute;top:-10px;left:-10px;width:56px;height:56px;border-top:2px solid rgba(0,212,255,.5);border-left:2px solid rgba(0,212,255,.5);border-radius:6px 0 0 0; }
        .corner-br { position:absolute;bottom:-10px;right:-10px;width:56px;height:56px;border-bottom:2px solid #00d4ff;border-right:2px solid #00d4ff;border-radius:0 0 6px 0; }
        .scanline { position:absolute;top:0;left:0;right:0;height:40%;background:linear-gradient(to bottom,transparent,rgba(0,212,255,.04),transparent);animation:scanline 4s linear infinite;pointer-events:none; }
        .h-a1 { animation: fadeUp .6s ease both; }
        .h-a2 { animation: fadeUp .6s .1s ease both; }
        .h-a3 { animation: fadeUp .6s .2s ease both; }
        .h-a4 { animation: fadeUp .6s .3s ease both; }
        .h-a5 { animation: fadeUp .6s .4s ease both; }
        .h-a6 { animation: fadeUp .6s .5s ease both; }
        .photo-anim { animation: fadeIn .8s .3s ease both; }
        .badge-anim { animation: slideRight .6s .5s ease both; opacity: 0; animation-fill-mode: both; }
      `}</style>

      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0 60px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 64, alignItems: 'center' }}>

            <div>
              <div className="h-a1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Fira Code, monospace', fontSize: 12, letterSpacing: '0.12em', color: '#00d4ff', marginBottom: 20, textTransform: 'uppercase' as const }}>
                <span className="avail-dot" />
                available for opportunities
              </div>

              <h1 className="h-a2" style={{ fontSize: 'clamp(44px,5.5vw,72px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 8 }}>
                Maisha
                <br />
                <span style={{ color: '#00d4ff' }}>Rahman.</span>
              </h1>

              <div className="h-a3" style={{ fontFamily: 'Fira Code, monospace', fontSize: 16, color: '#8892a4', marginBottom: 24, minHeight: 28 }}>
                <span style={{ color: '#00d4ff' }}>{'>'}</span>{' '}
                <span style={{ color: '#e8eaf0' }}>{typed}</span>
                <span className="cursor">|</span>
              </div>

              <p className="h-a4" style={{ fontSize: 16, color: '#8892a4', maxWidth: 520, lineHeight: 1.8, marginBottom: 36, fontWeight: 300 }}>
                I build <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>AI systems that ship</strong> — from published Vision Transformer research to production SaaS products. CS graduate from East West University, based in <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>Dhaka, Bangladesh</strong>.
              </p>

              <div className="h-a5" style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' as const }}>
                <button className="hbtn-p" onClick={() => scrollTo('projects')}>View My Work →</button>
                <a className="hbtn-s" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </div>

              <div className="h-a6" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.1)' }} />
                <a className="sl-a" href="https://github.com/RahMaisha" target="_blank" rel="noreferrer">GitHub</a>
                <a className="sl-a" href="https://linkedin.com/in/maisha-rahman-87b4a32a9" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="sl-a" href="mailto:maisharahman01x@gmail.com">Email</a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <span className="corner-tl" />
              <div className="photo-anim" style={{ width: '100%', aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,212,255,0.12)', background: '#0d1117', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', gap: 12, position: 'relative' }}>
                <div style={{ fontSize: 64, opacity: 0.08 }}>👩‍💻</div>
                <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#4a5568', letterSpacing: '0.1em' }}>your photo here</div>
                <div className="scanline" />
              </div>
              <span className="corner-br" />
              <div className="badge-anim" style={{ position: 'absolute', bottom: 20, left: -20, background: 'rgba(7,9,15,0.95)', border: '1px solid rgba(0,212,255,0.25)', borderRadius: 12, padding: '12px 16px', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#e8eaf0', marginBottom: 2 }}>ICCIT 2025</div>
                <div style={{ fontSize: 10, color: '#00d4ff', fontFamily: 'Fira Code, monospace' }}>Published Researcher</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}