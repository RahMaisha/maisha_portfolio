export default function About() {
  const highlights = [
    { icon: '🏗️', title: 'SaaS & Commercial Web', desc: 'Built production-grade SaaS platforms and professional client websites — architecture, APIs, frontend, and deployment' },
    { icon: '🧠', title: 'Applied AI & Computer Vision', desc: 'Designed deep learning models achieving 98.6% diagnostic accuracy — published at an international conference' },
    { icon: '🤖', title: 'AI Chatbot Engineering', desc: 'Developed AI chatbot widgets deployed on live commercial products combining NLP with user-facing interfaces' },
    { icon: '🔬', title: 'ML Research & Publications', desc: 'Published researcher at ICCIT 2025 and open dataset contributor on Mendeley Data' },
  ]

  return (
    <>
      <style>{`
        .hl-card { display:flex;align-items:flex-start;gap:14px;padding:18px;background:#0d1117;border:1px solid rgba(255,255,255,0.06);border-left:3px solid #00d4ff;border-radius:0 10px 10px 0;transition:all 0.2s;margin-bottom:10px; }
        .hl-card:hover { background:#111827; border-left-color:#33ddff; }
        .hl-icon-box { width:38px;height:38px;border-radius:8px;background:rgba(0,212,255,0.1);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0; }
        .hl-t { font-size:13px;font-weight:600;color:#e8eaf0;margin-bottom:3px; }
        .hl-s { font-size:12px;color:#8892a4;line-height:1.55; }
        .edu-pill { display:inline-flex;align-items:center;gap:10px;background:#0d1117;border:1px solid rgba(0,212,255,0.15);border-radius:100px;padding:10px 20px;margin-bottom:40px; }
      `}</style>

      <section id="about" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>

          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>01. about</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 32 }}>
            Who I <span style={{ color: '#00d4ff' }}>Am</span>
          </h2>

          {/* edu pill */}
          <div className="edu-pill">
            <span style={{ fontSize: 16 }}>🎓</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#e8eaf0' }}>B.Sc in Computer Science & Engineering</span>
            <span style={{ color: '#4a5568', fontSize: 13 }}>·</span>
            <span style={{ fontSize: 13, color: '#8892a4' }}>East West University</span>
            <span style={{ color: '#4a5568', fontSize: 13 }}>·</span>
            <span style={{ fontSize: 13, color: '#00d4ff', fontFamily: 'Fira Code, monospace' }}>Top Scholar ✦</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            {/* LEFT */}
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>My Journey</h3>
              <p style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                I&apos;m a <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>Computer Science graduate</strong> from East West University, specializing in Intelligent Systems and Data Science. I work at the intersection of AI research and fullstack engineering — building things that are both technically rigorous and production-ready.
              </p>
              <p style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, marginBottom: 16, fontWeight: 300 }}>
                In my current role I&apos;ve contributed to <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>commercial SaaS products</strong>, professional business websites, and internal tools — working across the full stack with Laravel, Angular, and MySQL. I also built and deployed an <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>AI-powered chatbot widget</strong> integrated into live client platforms.
              </p>
              <p style={{ fontSize: 15, color: '#8892a4', lineHeight: 1.85, fontWeight: 300 }}>
                On the research side I&apos;ve published at <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>ICCIT 2025</strong> with a hybrid Vision Transformer architecture for medical image segmentation, and released a public dataset on Mendeley Data.
              </p>
              <div style={{ marginTop: 20, display: 'flex', alignItems: 'flex-start', gap: 12, background: 'rgba(245,166,35,0.05)', border: '1px solid rgba(245,166,35,0.15)', borderRadius: 12, padding: 16 }}>
                <span style={{ fontSize: 18 }}>✦</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f5a623', marginBottom: 2 }}>Medha Lalon Scholar</div>
                  <div style={{ fontSize: 12, color: '#8892a4', lineHeight: 1.5 }}>Awarded to top 3.2% of all students at East West University for sustained academic excellence</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>How I Work</h3>
              {highlights.map((h) => (
                <div key={h.title} className="hl-card">
                  <div className="hl-icon-box">{h.icon}</div>
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