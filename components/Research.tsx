'use client'
import { useEffect } from 'react'

export default function Research() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animation = 'fadeUp .6s ease forwards'
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.rs-reveal').forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .rs-card { background:#0d1117;border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:28px;transition:all .3s; }
        .rs-card:hover { border-color:rgba(0,212,255,.25);transform:translateY(-4px); }
      `}</style>

      <section id="research" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>05. research</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Publications &amp; <span style={{ color: '#00d4ff' }}>Datasets</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="rs-card rs-reveal">
              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#00d4ff', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                Conference Paper <span style={{ flex: 1, height: 1, background: 'rgba(0,212,255,0.2)' }} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>MAE-ViT: Hybrid SSL Vision Transformer for Kidney Segmentation</div>
              <div style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>Hybrid masked autoencoder and vision transformer for high-precision medical image segmentation with limited labeled data.</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Fira Code, monospace', fontSize: 10, padding: '5px 14px', borderRadius: 20, background: 'rgba(0,212,255,0.08)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.2)' }}>
                ✓ ICCIT 2025 · Accepted
              </span>
            </div>

            <div className="rs-card rs-reveal">
              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: '#f5a623', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                Open Dataset <span style={{ flex: 1, height: 1, background: 'rgba(245,166,35,0.2)' }} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>EDIBLESEED Dataset</div>
              <div style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>Publicly available image dataset on Mendeley Data for edible seed classification and computer vision research tasks.</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Fira Code, monospace', fontSize: 10, padding: '5px 14px', borderRadius: 20, background: 'rgba(245,166,35,0.07)', color: '#f5a623', border: '1px solid rgba(245,166,35,0.2)' }}>
                Mendeley · DOI: 10.17632/9xgk2vc3sv.2
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}