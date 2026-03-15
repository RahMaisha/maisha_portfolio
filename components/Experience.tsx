export default function Experience() {
  const bullets = [
    { bold: 'Built production-grade SaaS platforms', rest: ' and commercial websites using Laravel and Angular — handling architecture, APIs, frontend, and deployment end-to-end' },
    { bold: 'Developed and deployed an AI-powered chatbot widget', rest: ' integrated across multiple live client platforms combining NLP with real user-facing interfaces' },
    { bold: 'Delivered professional business websites', rest: ' from design handoff to production launch for multiple clients' },
    { bold: 'Managed Git workflows', rest: ' in an agile team environment collaborating with designers and senior engineers' },
  ]

  return (
    <>
      <style>{`
        .xp-card { background:#0d1117;border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:36px;display:grid;grid-template-columns:220px 1fr;gap:48px; }
        .xp-bullet { display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:#07090f;border:1px solid rgba(255,255,255,0.05);border-radius:8px;margin-bottom:10px; }
        .xp-bullet:hover { border-color:rgba(0,212,255,0.15); }
        .xp-bdot { width:5px;height:5px;border-radius:50%;background:#00d4ff;flex-shrink:0;margin-top:9px; }
        .xp-btxt { font-size:13px;color:#8892a4;line-height:1.65; }
      `}</style>

      <section id="experience" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>03. experience</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Work <span style={{ color: '#00d4ff' }}>History</span>
          </h2>
          <div className="xp-card">
            <div>
              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#f5a623', background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.18)', borderRadius: 20, padding: '4px 12px', display: 'inline-block', marginBottom: 14 }}>
                Jan,2025 – Now · 3 mos
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
                Inkphase.com
              </div>
              <div style={{ fontSize: 12, color: '#8892a4', fontFamily: 'Fira Code, monospace', marginBottom: 16 }}>Dhaka, Bangladesh</div>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                {['Laravel','Angular','MySQL','AI/ML'].map(t => (
                  <span key={t} style={{ fontSize: 10, fontFamily: 'Fira Code, monospace', padding: '3px 9px', borderRadius: 4, background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.18)', color: '#00d4ff' }}>{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20 }}>Junior Fullstack Developer</div>
              {bullets.map((b, i) => (
                <div key={i} className="xp-bullet">
                  <div className="xp-bdot" />
                  <div className="xp-btxt">
                    <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>{b.bold}</strong>{b.rest}
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