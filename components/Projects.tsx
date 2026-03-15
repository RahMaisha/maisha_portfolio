'use client'
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animation = 'fadeUp .6s ease forwards'
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.pj-reveal').forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const featured = [
    { name: 'HealthSync', emoji: '🏥', badge: '● Live', bc: 'rgba(34,197,94,.08)', bcolor: '#22c55e', bb: 'rgba(34,197,94,.2)', desc: 'AI healthcare platform with real-time kidney stone detection. Microservices backend with Explainable AI heatmaps via Grad-CAM++.', impact: '98.6% diagnostic accuracy · 10k+ samples via self-supervised learning', stack: ['Laravel', 'FastAPI', 'PyTorch', 'Docker', 'Grad-CAM++'] },
    { name: 'MAE-ViT', emoji: '🔬', badge: 'ICCIT 2025', bc: 'rgba(0,212,255,.08)', bcolor: '#00d4ff', bb: 'rgba(0,212,255,.2)', desc: 'Hybrid Masked Autoencoder + Vision Transformer for medical image segmentation. Optimised for data-scarce environments.', impact: 'Outperforms CNN baselines in low-data medical imaging', stack: ['PyTorch', 'ViT', 'MAE', 'SSL', 'Python'] },
  ]

  const rest = [
    { name: 'Career Hive', emoji: '💼', badge: 'MERN Stack', bc: 'rgba(245,166,35,.08)', bcolor: '#f5a623', bb: 'rgba(245,166,35,.2)', desc: 'Full-stack job portal with resume builder, JWT auth, and automated CI/CD via GitHub Actions.', stack: ['MongoDB', 'Express', 'React', 'Node.js', 'GitHub Actions'] },
    { name: 'LLM Recommender', emoji: '🤖', badge: 'NLP / AI', bc: 'rgba(168,85,247,.08)', bcolor: '#c084fc', bb: 'rgba(168,85,247,.2)', desc: 'AI chatbot using NLP to parse and vectorize user queries with a hybrid collaborative filtering engine.', stack: ['OpenAI API', 'Python', 'HuggingFace', 'Scikit-learn'] },
  ]

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .pj-card { background:#0d1117;border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:28px;transition:all .3s;position:relative;overflow:hidden; }
        .pj-card::after { content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#00d4ff,#a78bfa);opacity:0;transition:opacity .3s; }
        .pj-card:hover { border-color:rgba(0,212,255,.25);transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.4); }
        .pj-card:hover::after { opacity:1; }
        .pj-card.feat { border-color:rgba(0,212,255,.12);background:linear-gradient(145deg,rgba(0,212,255,.03),#0d1117); }
        .pj-badge { display:inline-flex;align-items:center;font-family:'Fira Code',monospace;font-size:9px;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:20px;font-weight:500;margin-bottom:10px; }
        .pt { font-family:'Fira Code',monospace;font-size:10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);color:#4a5568;padding:3px 8px;border-radius:4px; }
      `}</style>

      <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>04. projects</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Featured <span style={{ color: '#00d4ff' }}>Work</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            {featured.map(p => (
              <div key={p.name} className="pj-card feat pj-reveal">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</div>
                  <div style={{ fontSize: 24 }}>{p.emoji}</div>
                </div>
                <span className="pj-badge" style={{ background: p.bc, color: p.bcolor, border: `1px solid ${p.bb}` }}>{p.badge}</span>
                <p style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, marginBottom: 14, fontWeight: 300 }}>{p.desc}</p>
                <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#22c55e', background: 'rgba(34,197,94,0.05)', borderLeft: '2px solid rgba(34,197,94,0.3)', padding: '8px 12px', borderRadius: '0 6px 6px 0', marginBottom: 16 }}>
                  → {p.impact}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                  {p.stack.map(t => <span key={t} className="pt">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {rest.map(p => (
              <div key={p.name} className="pj-card pj-reveal">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</div>
                  <div style={{ fontSize: 24 }}>{p.emoji}</div>
                </div>
                <span className="pj-badge" style={{ background: p.bc, color: p.bcolor, border: `1px solid ${p.bb}` }}>{p.badge}</span>
                <p style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                  {p.stack.map(t => <span key={t} className="pt">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}