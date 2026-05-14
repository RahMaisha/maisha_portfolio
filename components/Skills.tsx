export default function Skills() {
  const groups = [
    {
      icon: '🤖',
      title: 'AI / ML Technologies',
      color: '#00d4ff',
      skills: [
        { name: 'PyTorch', desc: 'Deep learning, training', exp: '1y+' },
        { name: 'Vision Transformers', desc: 'ViT, MAE architectures', exp: '1y+' },
        { name: 'HuggingFace', desc: 'Models, fine-tuning', exp: '1y+' },
        { name: 'Grad-CAM++', desc: 'Explainable AI, XAI', exp: '1y+' },
        { name: 'Scikit-learn', desc: 'ML pipelines', exp: '1y+' },
        { name: 'NLP / LLM', desc: 'OpenAI, text processing', exp: '1y+' },
      ],
    },
    {
      icon: '⚡',
      title: 'Fullstack Engineering',
      color: '#f5a623',
      skills: [
        { name: 'Laravel', desc: 'PHP backend, SaaS', exp: '1y+' },
        { name: 'Angular', desc: 'Enterprise frontend', exp: '1y+' },
        { name: 'React / Next.js', desc: 'Modern web apps', exp: '1y+' },
        { name: 'Node.js', desc: 'REST APIs, backend', exp: '1y+' },
        { name: 'MySQL / MongoDB', desc: 'Databases, schemas', exp: '1y+' },
        { name: 'FastAPI', desc: 'Python APIs', exp: '1y+' },
      ],
    },
    {
      icon: '🛠',
      title: 'DevOps & Tools',
      color: '#22c55e',
      skills: [
        { name: 'Docker', desc: 'Containerisation', exp: '1y+' },
        { name: 'GitHub Actions', desc: 'CI/CD pipelines', exp: '1y+' },
        { name: 'Git', desc: 'Version control', exp: '2y+' },
        { name: 'Linux', desc: 'Server, CLI', exp: '1y+' },
        { name: 'OCI', desc: 'Oracle Cloud', exp: '1y+' },
        { name: 'Postman', desc: 'API testing', exp: '1y+' },
      ],
    },
  ]

  return (
    <>
      <style>{`
        .sk-group { background:#0d1117;border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:28px; }
        .sk-group-head { display:flex;align-items:center;gap:12px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(255,255,255,0.05); }
        .sk-group-icon { width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px; }
        .sk-group-name { font-size:16px;font-weight:700; }
        .sk-row-item { display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.04); }
        .sk-row-item:last-child { border-bottom:none; }
        .sk-left { display:flex;align-items:center;gap:10px; }
        .sk-dot { width:6px;height:6px;border-radius:50%;flex-shrink:0; }
        .sk-name { font-size:14px;font-weight:500;color:#e8eaf0; }
        .sk-desc { font-size:12px;color:#4a5568;margin-left:4px; }
        .sk-exp { font-family:'Fira Code',monospace;font-size:11px;display:flex;align-items:center;gap:4px;color:#8892a4; }
        .sk-exp-pill { padding:2px 10px;border-radius:20px;font-size:10px;font-family:'Fira Code',monospace;font-weight:500; }
        .skills-grid { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:16px; }
        .skills-inner { padding: 0 48px; }
        @media (max-width: 1100px) {
          .skills-grid { grid-template-columns:repeat(2, minmax(0, 1fr)); }
          .skills-inner { padding: 0 32px !important; }
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns:1fr; }
          .skills-inner { padding: 0 20px !important; }
          .sk-group { padding:20px; }
          .sk-row-item { align-items:flex-start; gap:10px; }
          .sk-left { flex-wrap:wrap; }
          .sk-exp-pill { margin-left:auto; }
        }
      `}</style>

      <section id="skills" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
        <div className="skills-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>02. skills</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Technical <span style={{ color: '#00d4ff' }}>Expertise</span>
          </h2>

          <div className="skills-grid">
            {groups.map((g) => (
              <div key={g.title} className="sk-group">
                <div className="sk-group-head">
                  <div className="sk-group-icon" style={{ background: `${g.color}15` }}>{g.icon}</div>
                  <div className="sk-group-name">{g.title}</div>
                </div>
                {g.skills.map((s) => (
                  <div key={s.name} className="sk-row-item">
                    <div className="sk-left">
                      <span className="sk-dot" style={{ background: g.color }} />
                      <span className="sk-name">{s.name}</span>
                      <span className="sk-desc">{s.desc}</span>
                    </div>
                    <span className="sk-exp-pill" style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}30` }}>{s.exp}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
