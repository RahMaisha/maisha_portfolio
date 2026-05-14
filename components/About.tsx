'use client'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animation = 'fadeUp .6s ease forwards'
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: '🏗️', title: 'SaaS & Commercial Web', desc: 'Built production-grade SaaS platforms and client websites — architecture, APIs, frontend, and deployment' },
    { icon: '🧠', title: 'Applied AI & Computer Vision', desc: 'Deep learning models achieving 98.6% diagnostic accuracy — published at an international conference' },
    { icon: '⚙️', title: 'Software Engineering', desc: 'Clean, maintainable code following SOLID principles — from system design to CI/CD pipelines' },
    { icon: '🤖', title: 'AI Chatbot Engineering', desc: 'AI widgets deployed on live commercial products combining NLP with real user-facing interfaces' },
  ]

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .hl-card { display:flex;align-items:flex-start;gap:14px;padding:16px;background:#0d1117;border:1px solid rgba(255,255,255,.05);border-left:3px solid #00d4ff;border-radius:0 10px 10px 0;transition:all .25s;margin-bottom:10px; }
        .hl-card:hover { background:#111827;border-left-color:#33ddff;transform:translateX(4px); }
        .hl-ico { width:36px;height:36px;border-radius:8px;background:rgba(0,212,255,.1);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0; }
        .hl-t { font-size:13px;font-weight:600;color:#e8eaf0;margin-bottom:3px; }
        .hl-s { font-size:12px;color:#8892a4;line-height:1.5; }
        .edu-pill { display:inline-flex;align-items:center;gap:10px;background:#0d1117;border:1px solid rgba(0,212,255,.15);border-radius:100px;padding:10px 20px;margin-bottom:36px;flex-wrap:wrap; }
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:56px; }
        .about-inner { padding: 0 48px; }
        @media (max-width: 960px) {
          .about-grid { grid-template-columns:1fr; gap:36px; }
          .about-inner { padding: 0 32px !important; }
        }
        @media (max-width: 768px) {
          .about-inner { padding: 0 20px !important; }
          .edu-pill { border-radius:20px; padding:12px 16px; }
        }
      `}</style>

      <section id="about" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="about-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>01. about</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 32 }}>
            Who I <span style={{ color: '#00d4ff' }}>Am</span>
          </h2>

          <div className="edu-pill">
            <span style={{ fontSize: 16 }}>🎓</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#e8eaf0' }}>B.Sc in Computer Science & Engineering</span>
            <span style={{ color: '#4a5568' }}>·</span>
            <span style={{ fontSize: 13, color: '#8892a4' }}>East West University</span>
            <span style={{ color: '#4a5568' }}>·</span>
            <span style={{ fontSize: 13, color: '#00d4ff', fontFamily: 'Fira Code, monospace' }}>Top Scholar ✦</span>
          </div>

          <div className="about-grid">
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>My Journey</h3>
              <p style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                I&apos;m a <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>Computer Science graduate</strong> from East West University, specializing in Intelligent Systems and Data Science. I work at the intersection of AI research, software engineering, and fullstack development.
              </p>
              <p style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                In my current role I&apos;ve contributed to <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>commercial SaaS products</strong>, professional business websites, and internal tools — working across the full stack with Laravel, Angular, and MySQL. I also built and deployed an <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>AI-powered chatbot widget</strong> on live client platforms.
              </p>
              <p style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, fontWeight: 300 }}>
                On the research side I&apos;ve published at <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>ICCIT 2025</strong> with a hybrid Vision Transformer architecture for medical image segmentation and released a public dataset on Mendeley Data.
              </p>
              <div style={{ marginTop: 20, display: 'flex', alignItems: 'flex-start', gap: 12, background: 'rgba(245,166,35,0.05)', border: '1px solid rgba(245,166,35,0.15)', borderRadius: 12, padding: 16 }}>
                <span style={{ fontSize: 18 }}>✦</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f5a623', marginBottom: 2 }}>Medha Lalon Scholar</div>
                  <div style={{ fontSize: 12, color: '#8892a4', lineHeight: 1.5 }}>Awarded to top 3.2% of all students at East West University for sustained academic excellence</div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>How I Work</h3>
              {highlights.map(h => (
                <div key={h.title} className="hl-card reveal">
                  <div className="hl-ico">{h.icon}</div>
                  <div>
                    <div className="hl-t">{h.title}</div>
                    <div className="hl-s">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
