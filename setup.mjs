import fs from 'fs'

const files = {
'components/Navbar.tsx': `
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
          mr<span style={{ color: '#a78bfa' }}>.</span>dev
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          {['about','skills','projects','research','contact'].map(id => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Space Mono', fontSize: 12, color: '#6b6a88',
              padding: '6px 14px', borderRadius: 100, transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = '#f1f0f7'
              ;(e.target as HTMLElement).style.background = 'rgba(167,139,250,0.1)'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = '#6b6a88'
              ;(e.target as HTMLElement).style.background = 'transparent'
            }}
            >{id}</button>
          ))}
        </div>
        <a href="/resume.pdf" target="_blank" style={{
          fontFamily: 'Space Mono', fontSize: 11, fontWeight: 700,
          background: '#a78bfa', color: '#05050a',
          padding: '8px 18px', borderRadius: 6, textDecoration: 'none',
        }}>resume →</a>
      </div>
    </nav>
  )
}
`.trim(),

'components/Hero.tsx': `
'use client'
import { useEffect, useState } from 'react'

const roles = [
  'AI Engineer',
  'Fullstack Developer',
  'ML Researcher',
  'Computer Vision Engineer',
  'Published @ ICCIT 2025',
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
          setTimeout(() => { setWaiting(false); setDeleting(true) }, 1800)
        }
      } else {
        const next = current.slice(0, typed.length - 1)
        setTyped(next)
        if (next === '') { setDeleting(false); setRoleIdx((prev) => (prev + 1) % roles.length) }
      }
    }, deleting ? 35 : 65)
    return () => clearTimeout(timeout)
  }, [typed, deleting, roleIdx, waiting])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{\`
        @keyframes blink { 50% { opacity: 0; } }
        .cursor { animation: blink 1s step-end infinite; }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, #a78bfa, #e879f9);
          color: #05050a; font-weight: 700; font-size: 13px;
          font-family: 'Space Mono', monospace;
          padding: 12px 24px; border-radius: 8px;
          text-decoration: none; letter-spacing: 0.03em;
          transition: all 0.2s; border: none; cursor: pointer;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(167,139,250,0.4); }
        .hero-btn-sec {
          display: inline-flex; align-items: center;
          background: transparent; color: #6b6a88;
          font-size: 13px; font-family: 'Space Mono', monospace;
          padding: 12px 24px; border-radius: 8px; text-decoration: none;
          border: 1px solid rgba(167,139,250,0.1); transition: all 0.2s;
        }
        .hero-btn-sec:hover { color: #f1f0f7; border-color: rgba(167,139,250,0.35); }
        .meta-card { background: #05050a; padding: 22px 24px; display: flex; align-items: flex-start; gap: 14px; }
      \`}</style>
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Space Mono', fontSize: 11, letterSpacing: '0.15em', color: '#f59e0b', marginBottom: 24, textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
            available for opportunities · Dhaka, Bangladesh
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 16 }}>
            Maisha<br />
            <span style={{ background: 'linear-gradient(135deg, #a78bfa, #e879f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rahman.</span>
          </h1>
          <div style={{ fontFamily: 'Space Mono', fontSize: 15, color: '#6b6a88', marginBottom: 24, display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ color: '#f59e0b' }}>$</span>
            <span style={{ color: '#f1f0f7' }}>{typed}</span>
            <span className="cursor" style={{ color: '#a78bfa' }}>▋</span>
          </div>
          <p style={{ fontSize: 16, color: '#6b6a88', maxWidth: 560, lineHeight: 1.75, marginBottom: 36, fontWeight: 300 }}>
            <strong style={{ color: '#f1f0f7', fontWeight: 500 }}>CS graduate &amp; published researcher</strong> from East West University. I build AI systems that actually ship — from transformer architectures to fullstack applications.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
            <button className="hero-btn-primary" onClick={() => scrollTo('projects')}>view my work</button>
            <a className="hero-btn-sec" href="https://github.com/RahMaisha" target="_blank" rel="noreferrer">github ↗</a>
            <a className="hero-btn-sec" href="mailto:maisharahman01x@gmail.com">email me</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.08)', borderRadius: 16, overflow: 'hidden' }}>
            {[
              { icon: '🎓', val: 'B.Sc CSE', lbl: 'East West University' },
              { icon: '📄', val: 'ICCIT 2025', lbl: 'Published Researcher' },
              { icon: '⚡', val: 'Fullstack + AI', lbl: 'Laravel · Angular · PyTorch' },
            ].map(({ icon, val, lbl }) => (
              <div key={val} className="meta-card">
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(167,139,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#f1f0f7', marginBottom: 3 }}>{val}</div>
                  <div style={{ fontSize: 11, color: '#6b6a88', fontFamily: 'Space Mono', letterSpacing: '0.04em' }}>{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
`.trim(),

'components/Skills.tsx': `
export default function Skills() {
  const groups = [
    { emoji: '🧠', title: 'AI / Machine Learning', sub: 'deep learning · vision · nlp', bg: 'rgba(167,139,250,0.1)', tags: ['PyTorch','Vision Transformers','MAE','Grad-CAM++','HuggingFace','SSL','NLP','LLM','Scikit-learn'] },
    { emoji: '⚡', title: 'Fullstack Engineering', sub: 'frontend · backend · databases', bg: 'rgba(245,158,11,0.1)', tags: ['Laravel','Angular','React','Node.js','FastAPI','MySQL','MongoDB','REST API','JWT'] },
    { emoji: '🛠', title: 'DevOps & Infrastructure', sub: 'cloud · ci/cd · containers', bg: 'rgba(232,121,249,0.1)', tags: ['Docker','GitHub Actions','CI/CD','OCI','Linux','Git','Postman','Jupyter'] },
  ]
  return (
    <>
      <style>{\`
        .sk-card { background: #0c0c16; border: 1px solid rgba(167,139,250,0.08); border-radius: 16px; padding: 24px; transition: all 0.3s; }
        .sk-card:hover { border-color: rgba(167,139,250,0.28); transform: translateY(-4px); }
        .sk-tag { font-family: 'Space Mono', monospace; font-size: 10.5px; padding: 4px 11px; border-radius: 6px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); color: #6b6a88; transition: all 0.25s; }
        .sk-card:hover .sk-tag { color: #f1f0f7; border-color: rgba(167,139,250,0.2); }
      \`}</style>
      <section id="skills" style={{ padding: '80px 0', borderTop: '1px solid rgba(167,139,250,0.06)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', color: '#a78bfa', textTransform: 'uppercase', marginBottom: 8 }}>02 — capabilities</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 40 }}>Tech Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {groups.map((g) => (
              <div key={g.title} className="sk-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: g.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{g.emoji}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{g.title}</div>
                    <div style={{ fontSize: 11, color: '#4a4868', fontFamily: 'Space Mono', marginTop: 1 }}>{g.sub}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {g.tags.map((t) => <span key={t} className="sk-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
`.trim(),

'components/Experience.tsx': `
export default function Experience() {
  const bullets = [
    'Built production-grade SaaS platforms and commercial websites using Laravel and Angular — handling architecture, APIs, frontend, and deployment end-to-end',
    'Developed and deployed an AI-powered chatbot widget integrated across live client platforms',
    'Delivered multiple professional business websites from design handoff to production launch',
    'Managed Git workflows in an agile team environment, collaborating with designers and senior engineers',
  ]
  return (
    <>
      <style>{\`
        .xp-item { display: flex; gap: 14px; align-items: flex-start; padding: 14px 16px; background: #05050a; border: 1px solid rgba(167,139,250,0.06); border-radius: 10px; margin-bottom: 10px; transition: border-color 0.2s; }
        .xp-item:hover { border-color: rgba(167,139,250,0.18); }
      \`}</style>
      <section id="experience" style={{ padding: '80px 0', borderTop: '1px solid rgba(167,139,250,0.06)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', color: '#a78bfa', textTransform: 'uppercase', marginBottom: 8 }}>03 — experience</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 40 }}>Work History</h2>
          <div style={{ background: '#0c0c16', border: '1px solid rgba(167,139,250,0.1)', borderRadius: 20, padding: 36, display: 'grid', gridTemplateColumns: '200px 1fr', gap: 40 }}>
            <div>
              <div style={{ fontFamily: 'Space Mono', fontSize: 11, color: '#f59e0b', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 20, padding: '5px 13px', display: 'inline-block', marginBottom: 14 }}>2024 – 2025</div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 6 }}>Your<br />Company</div>
              <div style={{ fontSize: 12, color: '#6b6a88', fontFamily: 'Space Mono' }}>Dhaka, Bangladesh</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                {['Laravel','Angular','MySQL','AI/ML','3 months'].map((t) => (
                  <span key={t} style={{ fontSize: 10, fontFamily: 'Space Mono', padding: '3px 9px', borderRadius: 4, background: 'rgba(167,139,250,0.07)', border: '1px solid rgba(167,139,250,0.15)', color: '#a78bfa' }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20 }}>Junior Fullstack Developer</div>
              {bullets.map((b, i) => (
                <div key={i} className="xp-item">
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', flexShrink: 0, marginTop: 7 }} />
                  <div style={{ fontSize: 13, color: '#6b6a88', lineHeight: 1.65 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
`.trim(),

'components/Projects.tsx': `
export default function Projects() {
  const featured = [
    { name: 'HealthSync', emoji: '🏥', badge: '● Live', badgeStyle: { background: 'rgba(134,239,172,0.07)', color: '#86efac', border: '1px solid rgba(134,239,172,0.2)' }, desc: 'AI healthcare platform with real-time kidney stone detection using microservices. Integrated Explainable AI via Grad-CAM++ to generate visual diagnostic heatmaps for clinicians.', impact: '→ 98.6% diagnostic accuracy · 10k+ training samples via self-supervised learning', stack: ['Laravel','FastAPI','PyTorch','Docker','Grad-CAM++','MySQL'] },
    { name: 'MAE-ViT', emoji: '🔬', badge: 'ICCIT 2025', badgeStyle: { background: 'rgba(167,139,250,0.09)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.2)' }, desc: 'Hybrid Masked Autoencoder + Vision Transformer for high-precision medical image segmentation. Optimised for data-scarce clinical environments.', impact: '→ Outperforms CNN baselines in low-data medical imaging benchmarks', stack: ['PyTorch','ViT','MAE','SSL','Python'] },
  ]
  const rest = [
    { name: 'Career Hive', emoji: '💼', badge: 'MERN Stack', badgeStyle: { background: 'rgba(245,158,11,0.07)', color: '#f0c060', border: '1px solid rgba(245,158,11,0.18)' }, desc: 'Full-stack job portal with resume builder, JWT-based authentication, and automated CI/CD deployment via GitHub Actions.', stack: ['MongoDB','Express','React','Node.js','GitHub Actions'] },
    { name: 'LLM Recommender', emoji: '🤖', badge: 'NLP / AI', badgeStyle: { background: 'rgba(232,121,249,0.07)', color: '#f9a8b8', border: '1px solid rgba(232,121,249,0.18)' }, desc: 'AI chatbot using NLP to parse and vectorize complex user queries with a hybrid collaborative and content-based filtering engine.', stack: ['OpenAI API','Python','HuggingFace','Scikit-learn'] },
  ]
  return (
    <>
      <style>{\`
        .pj-card { background: #0c0c16; border: 1px solid rgba(167,139,250,0.09); border-radius: 20px; padding: 28px; cursor: pointer; transition: all 0.3s; }
        .pj-card:hover { border-color: rgba(167,139,250,0.3); transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
        .pj-card.feat { background: linear-gradient(145deg, rgba(167,139,250,0.07), #0c0c16); border-color: rgba(167,139,250,0.16); }
        .pj-badge { display: inline-flex; align-items: center; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 11px; border-radius: 20px; font-weight: 500; margin-bottom: 10px; }
        .pt { font-family: 'Space Mono', monospace; font-size: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); color: #4a4868; padding: 3px 8px; border-radius: 4px; }
      \`}</style>
      <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid rgba(167,139,250,0.06)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', color: '#a78bfa', textTransform: 'uppercase', marginBottom: 8 }}>04 — work</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 40 }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16, marginBottom: 16 }}>
            {featured.map((p) => (
              <div key={p.name} className="pj-card feat">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</div>
                  <div style={{ fontSize: 22 }}>{p.emoji}</div>
                </div>
                <span className="pj-badge" style={p.badgeStyle}>{p.badge}</span>
                <p style={{ fontSize: 13, color: '#6b6a88', lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>{p.desc}</p>
                <div style={{ fontFamily: 'Space Mono', fontSize: 11, color: '#86efac', background: 'rgba(134,239,172,0.05)', borderLeft: '2px solid rgba(134,239,172,0.35)', padding: '8px 12px', borderRadius: '0 8px 8px 0', marginBottom: 18 }}>{p.impact}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{p.stack.map((t) => <span key={t} className="pt">{t}</span>)}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {rest.map((p) => (
              <div key={p.name} className="pj-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</div>
                  <div style={{ fontSize: 22 }}>{p.emoji}</div>
                </div>
                <span className="pj-badge" style={p.badgeStyle}>{p.badge}</span>
                <p style={{ fontSize: 13, color: '#6b6a88', lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{p.stack.map((t) => <span key={t} className="pt">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
`.trim(),

'components/Research.tsx': `
export default function Research() {
  return (
    <>
      <style>{\`
        .rs-card { background: #0c0c16; border: 1px solid rgba(167,139,250,0.1); border-radius: 20px; padding: 28px; transition: all 0.3s; }
        .rs-card:hover { border-color: rgba(167,139,250,0.3); transform: translateY(-4px); }
      \`}</style>
      <section id="research" style={{ padding: '80px 0', borderTop: '1px solid rgba(167,139,250,0.06)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', color: '#a78bfa', textTransform: 'uppercase', marginBottom: 8 }}>05 — research</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 40 }}>Publications &amp; Datasets</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="rs-card">
              <div style={{ fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a78bfa', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>Conference Paper<span style={{ flex: 1, height: 1, background: 'rgba(167,139,250,0.2)' }} /></div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.015em', marginBottom: 8, lineHeight: 1.4 }}>MAE-ViT: Hybrid SSL Vision Transformer for Kidney Segmentation</div>
              <div style={{ fontSize: 13, color: '#6b6a88', lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>Hybrid masked autoencoder and vision transformer architecture for high-precision medical image segmentation with limited labeled data.</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Space Mono', fontSize: 10, padding: '5px 14px', borderRadius: 20, background: 'rgba(167,139,250,0.08)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.18)' }}>✓ ICCIT 2025 · Accepted</span>
            </div>
            <div className="rs-card">
              <div style={{ fontFamily: 'Space Mono', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>Open Dataset<span style={{ flex: 1, height: 1, background: 'rgba(245,158,11,0.2)' }} /></div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.015em', marginBottom: 8, lineHeight: 1.4 }}>EDIBLESEED Dataset</div>
              <div style={{ fontSize: 13, color: '#6b6a88', lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>Publicly available image dataset on Mendeley Data for edible seed classification and computer vision research tasks.</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Space Mono', fontSize: 10, padding: '5px 14px', borderRadius: 20, background: 'rgba(245,158,11,0.07)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.18)' }}>Mendeley · DOI: 10.17632/9xgk2vc3sv.2</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
`.trim(),

'components/Contact.tsx': `
export default function Contact() {
  const links = [
    { dot: '#a78bfa', label: 'maisharahman01x@gmail.com', href: 'mailto:maisharahman01x@gmail.com' },
    { dot: '#93c5fd', label: 'github.com/RahMaisha', href: 'https://github.com/RahMaisha' },
    { dot: '#f59e0b', label: 'LinkedIn', href: 'https://linkedin.com/in/maisha-rahman-87b4a32a9' },
    { dot: '#e879f9', label: '+880 1980 312 210', href: 'tel:+8801980312210' },
  ]
  return (
    <>
      <style>{\`
        .ct-chip { display: flex; align-items: center; gap: 9px; background: #05050a; border: 1px solid rgba(167,139,250,0.12); border-radius: 12px; padding: 12px 18px; font-family: 'Space Mono', monospace; font-size: 11px; color: #6b6a88; text-decoration: none; transition: all 0.25s; }
        .ct-chip:hover { color: #f1f0f7; border-color: rgba(167,139,250,0.35); background: rgba(167,139,250,0.05); }
        .avail-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; animation: pulse3 2s ease infinite; display: inline-block; }
        @keyframes pulse3 { 0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); } 50% { box-shadow: 0 0 0 5px rgba(74,222,128,0); } }
      \`}</style>
      <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid rgba(167,139,250,0.06)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px 80px' }}>
          <div style={{ background: '#0c0c16', border: '1px solid rgba(167,139,250,0.1)', borderRadius: 24, overflow: 'hidden' }}>
            <div style={{ padding: '56px 48px', background: 'linear-gradient(135deg, rgba(167,139,250,0.06) 0%, transparent 60%)', borderBottom: '1px solid rgba(167,139,250,0.07)' }}>
              <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', color: '#a78bfa', textTransform: 'uppercase', marginBottom: 16 }}>06 — contact</div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>Let&apos;s Build Something<br />Worth Remembering.</h2>
              <p style={{ fontSize: 15, color: '#6b6a88', maxWidth: 480, fontWeight: 300, lineHeight: 1.7, marginBottom: 32 }}>Open to AI engineering roles, fullstack positions, research collaborations, and interesting problems. Based in Dhaka — available globally.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {links.map((l) => (
                  <a key={l.label} className="ct-chip" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: l.dot, flexShrink: 0, display: 'inline-block' }} />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div style={{ padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Space Mono', fontSize: 11, color: '#6b6a88' }}>
                <span className="avail-dot" />
                Currently available for new opportunities
              </div>
              <div style={{ fontFamily: 'Space Mono', fontSize: 11, color: '#4a4868' }}>© 2025 Maisha Rahman</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
`.trim(),

'components/About.tsx': `
export default function About() {
  return (
    <>
      <style>{\`
        .about-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 48px; align-items: start; }
        .honor-block { margin-top: 24px; background: linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02)); border: 1px solid rgba(245,158,11,0.15); border-radius: 12px; padding: 16px 20px; display: flex; align-items: flex-start; gap: 12px; }
        .code-card { background: #0c0c16; border: 1px solid rgba(167,139,250,0.1); border-radius: 16px; overflow: hidden; font-family: 'Space Mono', monospace; }
        .cc-bar { background: #111120; border-bottom: 1px solid rgba(167,139,250,0.07); padding: 12px 16px; display: flex; align-items: center; gap: 7px; }
        .about-highlight { display: flex; flex-direction: column; gap: 12px; margin-top: 28px; }
        .highlight-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 16px; background: #0c0c16; border: 1px solid rgba(167,139,250,0.06); border-radius: 10px; transition: border-color 0.2s; }
        .highlight-item:hover { border-color: rgba(167,139,250,0.2); }
        .hi-icon { width: 34px; height: 34px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .hi-label { font-size: 12px; font-weight: 600; color: #f1f0f7; margin-bottom: 3px; }
        .hi-sub { font-size: 12px; color: #6b6a88; line-height: 1.5; }
        @media (max-width: 700px) { .about-grid { grid-template-columns: 1fr; } }
      \`}</style>
      <section id="about" style={{ padding: '80px 0', borderTop: '1px solid rgba(167,139,250,0.06)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ fontFamily: 'Space Mono', fontSize: 10, letterSpacing: '0.2em', color: '#a78bfa', textTransform: 'uppercase', marginBottom: 8 }}>01 — about</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 40 }}>Who I Am</h2>
          <div className="about-grid">
            <div>
              <p style={{ fontSize: 15, color: '#6b6a88', lineHeight: 1.85, marginBottom: 18, fontWeight: 300 }}>
                I&apos;m a <strong style={{ color: '#f1f0f7', fontWeight: 500 }}>Computer Science graduate</strong> from East West University, specializing in Intelligent Systems and Data Science. I work at the intersection of AI engineering and fullstack development — building systems that are both technically rigorous and production-ready.
              </p>
              <p style={{ fontSize: 15, color: '#6b6a88', lineHeight: 1.85, marginBottom: 18, fontWeight: 300 }}>
                In my current role, I&apos;ve contributed to the development of <strong style={{ color: '#f1f0f7', fontWeight: 500 }}>commercial SaaS products</strong>, professional business websites, and internal tools — working across the full stack with Laravel, Angular, and MySQL. I also built and integrated an <strong style={{ color: '#f1f0f7', fontWeight: 500 }}>AI-powered chatbot widget</strong> deployed across live client platforms.
              </p>
              <p style={{ fontSize: 15, color: '#6b6a88', lineHeight: 1.85, fontWeight: 300 }}>
                On the research side, I&apos;ve published at <strong style={{ color: '#f1f0f7', fontWeight: 500 }}>ICCIT 2025</strong> with a hybrid Vision Transformer architecture for medical image segmentation, and released a public dataset on Mendeley Data. I care about building AI that is explainable, accurate, and genuinely useful.
              </p>
              <div className="honor-block">
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>✦</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f59e0b', marginBottom: 3 }}>Medha Lalon Scholar</div>
                  <div style={{ fontSize: 12, color: '#6b6a88', lineHeight: 1.5 }}>Awarded to the top 3.2% of all students at East West University for sustained academic excellence</div>
                </div>
              </div>
              <div className="about-highlight">
                <div className="highlight-item">
                  <div className="hi-icon" style={{ background: 'rgba(167,139,250,0.1)' }}>🏗️</div>
                  <div>
                    <div className="hi-label">SaaS &amp; Commercial Web Development</div>
                    <div className="hi-sub">Built production-grade SaaS platforms and professional client websites — handling architecture, backend APIs, frontend UI, and deployment</div>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="hi-icon" style={{ background: 'rgba(245,158,11,0.1)' }}>🧠</div>
                  <div>
                    <div className="hi-label">Applied AI &amp; Computer Vision Research</div>
                    <div className="hi-sub">Designed and trained deep learning models achieving 98.6% diagnostic accuracy — published findings at an international conference</div>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="hi-icon" style={{ background: 'rgba(232,121,249,0.1)' }}>🤖</div>
                  <div>
                    <div className="hi-label">AI Integration &amp; Chatbot Engineering</div>
                    <div className="hi-sub">Developed and deployed AI-powered chatbot widgets integrated into live commercial products, combining NLP with practical user-facing interfaces</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="code-card">
                <div className="cc-bar">
                  {['#ff5f57','#febc2e','#28c840'].map(c => (
                    <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />
                  ))}
                  <span style={{ fontSize: 11, color: '#4a4868', marginLeft: 'auto' }}>maisha.config.ts</span>
                </div>
                <div style={{ padding: 22, fontSize: 12, lineHeight: 1.9, fontFamily: 'Space Mono' }}
                  dangerouslySetInnerHTML={{ __html: \`<pre style="margin:0;white-space:pre-wrap;font-family:'Space Mono',monospace;color:#6b6a88"><span style="color:#4a4868">// engineer · researcher · builder</span>

<span style="color:#a78bfa">const</span> <span style="color:#f1f0f7">profile</span> = {
  <span style="color:#93c5fd">name</span>: <span style="color:#86efac">'Maisha Rahman'</span>,
  <span style="color:#93c5fd">based</span>: <span style="color:#86efac">'Dhaka, Bangladesh'</span>,
  <span style="color:#93c5fd">currently</span>: {
    <span style="color:#93c5fd">building</span>: <span style="color:#86efac">'SaaS &amp; web products'</span>,
    <span style="color:#93c5fd">stack</span>: <span style="color:#86efac">'Laravel · Angular'</span>,
  },
  <span style="color:#93c5fd">research</span>: {
    <span style="color:#93c5fd">published</span>: <span style="color:#a78bfa">true</span>,
    <span style="color:#93c5fd">venue</span>: <span style="color:#86efac">'ICCIT 2025'</span>,
    <span style="color:#93c5fd">domain</span>: <span style="color:#86efac">'Medical CV'</span>,
    <span style="color:#93c5fd">accuracy</span>: <span style="color:#fb923c">98.6</span>,
  },
  <span style="color:#93c5fd">target</span>: [
    <span style="color:#86efac">'AI Engineer'</span>,
    <span style="color:#86efac">'Fullstack Developer'</span>,
    <span style="color:#86efac">'ML Researcher'</span>,
  ],
  <span style="color:#93c5fd">openToWork</span>: <span style="color:#a78bfa">true</span>,
};</pre>\` }}
                />
              </div>
              <div style={{ marginTop: 16, background: '#0c0c16', border: '1px solid rgba(167,139,250,0.08)', borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Space Mono', fontSize: 11, color: '#6b6a88' }}>📍 Dhaka, Bangladesh</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'Space Mono', fontSize: 11, color: '#4ade80' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px rgba(74,222,128,0.6)' }} />
                  Open to opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
`.trim(),
}

for (const [path, content] of Object.entries(files)) {
  fs.writeFileSync(path, content, 'utf8')
  console.log('wrote', path)
}
console.log('done!')
