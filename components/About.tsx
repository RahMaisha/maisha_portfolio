'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animation = 'fadeUp .6s ease forwards'
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: '🏗️', title: 'Production Web-applications, SaaS & Mobile', desc: 'Led end-to-end delivery on multiple live products, architecture, APIs, frontend, deployment, and security across the full stack.' },
    { icon: '🧠', title: 'Medical AI & Computer Vision', desc: 'IEEE-published hybrid ViT architecture for kidney segmentation. 98.6% diagnostic accuracy on a self-curated dataset.' },
    { icon: '🤖', title: 'AI Systems & CRM', desc: 'Built and deployed LLM-powered systems including personalized chatbots and widgets on live commercial platforms from NLP pipelines to production interfaces.' },
    { icon: '⚙️', title: 'Backend & Infrastructure', desc: 'Engineering platforms for concurrent users, with horizontal scaling, caching layers, and considered database architecture.' },
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
        .pill-row { display:flex;flex-wrap:wrap;gap:10px;margin-bottom:36px; }
        .edu-pill { display:inline-flex;align-items:center;gap:10px;background:#0d1117;border:1px solid rgba(0,212,255,.15);border-radius:100px;padding:10px 20px;flex-wrap:wrap; }
        .edu-pill.is-role { border-color:rgba(34,197,94,.25); }
        .role-dot { width:8px;height:8px;border-radius:50%;background:#22c55e;flex-shrink:0;box-shadow:0 0 0 3px rgba(34,197,94,.12); }
        .about-grid { display:grid;grid-template-columns:1fr 1fr;gap:56px; }
        .about-inner { padding:0 48px; }
        @media (max-width: 960px) {
          .about-grid { grid-template-columns:1fr;gap:36px; }
          .about-inner { padding:0 32px !important; }
        }
        @media (max-width: 768px) {
          .about-inner { padding:0 20px !important; }
          .about-section { padding:60px 0 !important; }
          .edu-pill { border-radius:20px;padding:12px 16px; }
        }
      `}</style>

      <section id="about" className="about-section" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div ref={sectionRef} className="about-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>

          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>01. about</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 32 }}>
            Who I <span style={{ color: '#00d4ff' }}>Am</span>
          </h2>

          {/* credential pills — current role leads, education follows */}
          <div className="pill-row">
            <div className="edu-pill is-role">
              <span className="role-dot" />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#e8eaf0' }}>In-house Software Developer</span>
              <span style={{ color: '#4a5568' }}>·</span>
              <span style={{ fontSize: 13, color: '#8892a4' }}>CellsTech · Armani Group</span>
            </div>
            <div className="edu-pill">
              <span style={{ fontSize: 16 }}>🎓</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#e8eaf0' }}>B.Sc Computer Science & Engineering</span>
              <span style={{ color: '#4a5568' }}>·</span>
              <span style={{ fontSize: 13, color: '#8892a4' }}>East West University</span>
              <span style={{ color: '#4a5568' }}>·</span>
              <span style={{ fontSize: 13, color: '#00d4ff', fontFamily: 'Fira Code, monospace' }}> ✦</span>
            </div>
          </div>

          <div className="about-grid">
            {/* LEFT — bio */}
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}> My Work & Focus </h3>
              <p className="reveal" style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                I’m a software engineer focused on backend systems, full-stack development, and applied AI. I work across production web applications and AI-integrated systems, with experience spanning APIs, databases, and deployment workflows as well as computer vision research.
              </p>

              <p className="reveal" style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                I’m currently the <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>in-house software developer for Armani Group</strong> through its tech arm <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>CellsTech</strong>, based at group headquarters as the sole engineer on the group’s software. I’ve delivered <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>multiple systems and web applications</strong> there — including a guest and visitor management CRM, a full-featured e-commerce platform, and an MSME marketplace — typically running several in parallel and carrying each one end to end through requirement analysis, system design, UI/UX, frontend, backend, and unit testing. Alongside the build work I’m the engineering point of contact for product, business analysis, SQA, design, and PR.
              </p>

              <p className="reveal" style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                Previously at <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>Inkphase</strong>, I contributed to multiple production applications including SaaS platforms, CRM systems, e-commerce products, and a high-traffic news platform. I also worked on LLM-integrated chatbot systems deployed across client websites, building backend APIs, frontend interfaces, and database-driven workflows using Laravel, Django, PostgreSQL, Angular, and MySQL.
              </p>

              <p className="reveal" style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                Alongside industry work, I conduct research in computer vision and self-supervised learning. My work on hybrid Vision Transformer architectures for medical image segmentation was accepted at <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>IEEE ICCIT 2025</strong>, and I’ve also released a public medical imaging dataset on Mendeley Data. I continue to explore AI systems that bridge research and real-world applications.
              </p>

              {/* scholarship box */}
              <div className="reveal" style={{ marginTop: 20, display: 'flex', alignItems: 'flex-start', gap: 12, background: 'rgba(245,166,35,0.05)', border: '1px solid rgba(245,166,35,0.15)', borderRadius: 12, padding: 16 }}>
                <span style={{ fontSize: 18 }}>✦</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f5a623', marginBottom: 2 }}>Medha Lalon Scholar</div>
                  <div style={{ fontSize: 12, color: '#8892a4', lineHeight: 1.5 }}>Awarded to top 3.2% of all students at East West University for sustained academic excellence</div>
                </div>
              </div>
            </div>

            {/* RIGHT — highlight cards */}
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