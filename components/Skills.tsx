export default function Skills() {
  // Helper function to calculate current experience
  const getExperience = (startDate: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - startDate.getTime()
    const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44))
    
    if (diffMonths < 12) {
      return `${Math.max(1, diffMonths)}mo+`
    }
    const years = Math.floor(diffMonths / 12)
    return `${years}y+`
  }

  const groups = [
    {
      icon: '💻',
      title: 'Languages',
      color: '#00d4ff',
      skills: [
        { name: 'Python', desc: 'Scripting, automation, AI', startDate: new Date(2020, 4, 1) },
        { name: 'TypeScript', desc: 'Typed frontend/backend', startDate: new Date(2024, 4, 1) },
        { name: 'JavaScript', desc: 'Web application logic', startDate: new Date(2021, 4, 1) },
        { name: 'Java', desc: 'Enterprise systems', startDate: new Date(2021, 4, 1) },
      ],
    },
    {
      icon: '🎨',
      title: 'Frontend',
      color: '#f5a623',
      skills: [
        { name: 'React', desc: 'Component-based UI', startDate: new Date(2024, 4, 1) },
        { name: 'Next.js', desc: 'SSR and static sites', startDate: new Date(2024, 4, 1) },
        { name: 'Angular', desc: 'Enterprise SPAs', startDate: new Date(2024, 10, 1) },
        { name: 'Flutter', desc: 'Cross-platform apps', startDate: new Date(2025, 1, 1) },
        { name: 'Tailwind CSS', desc: 'Utility-first styling', startDate: new Date(2024, 4, 1) },
      ],
    },
    {
      icon: '⚙️',
      title: 'Backend',
      color: '#22c55e',
      skills: [
        { name: 'Laravel', desc: 'PHP SaaS backends', startDate: new Date(2024, 4, 1) },
        { name: 'Django', desc: 'Python web services', startDate: new Date(2025, 0, 1) },
        { name: 'Node.js', desc: 'JavaScript APIs', startDate: new Date(2021, 4, 1) },
        { name: '.NET', desc: 'C# enterprise APIs', startDate: new Date(2023, 4, 1) },
      ],
    },
    {
      icon: '🗄️',
      title: 'Databases',
      color: '#8b5cf6',
      skills: [
        { name: 'PostgreSQL', desc: 'Relational data modeling', startDate: new Date(2025, 11, 1) },
        { name: 'MySQL', desc: 'Transactional systems', startDate: new Date(2021, 4, 1) },
        { name: 'MongoDB', desc: 'Document databases', startDate: new Date(2024, 4, 1) },
        { name: 'Redis', desc: 'Caching and queues', startDate: new Date(2024, 10, 1) },
      ],
    },
    {
      icon: '☁️',
      title: 'Infrastructure & DevOps',
      color: '#f97316',
      skills: [
        { name: 'Docker', desc: 'Containerization', startDate: new Date(2024, 4, 1) },
        { name: 'CI/CD', desc: 'Automation pipelines', startDate: new Date(2023, 4, 1) },
        { name: 'Git', desc: 'Version control', startDate: new Date(2020, 4, 1) },
        { name: 'DigitalOcean', desc: 'Cloud hosting', startDate: new Date(2026, 3, 1) },
        { name: 'Oracle Cloud', desc: 'OCI deployments', startDate: new Date(2024, 4, 1) },
        { name: 'Firebase', desc: 'Backend services', startDate: new Date(2024, 10, 1) },
      ],
    },
    {
      icon: '🤖',
      title: 'AI / Machine Learning',
      color: '#0ea5e9',
      skills: [
        { name: 'RAG', desc: 'Retrieval-augmented generation', startDate: new Date(2026, 1, 1) },
        { name: 'Vector Embed', desc: 'Semantic embeddings', startDate: new Date(2026, 1, 1) },
        { name: 'PyTorch', desc: 'Deep learning models', startDate: new Date(2021, 4, 1) },
        { name: 'Hugging Face', desc: 'Transformers ecosystem', startDate: new Date(2023, 4, 1) },
        { name: 'NLP', desc: 'Language understanding', startDate: new Date(2023, 4, 1) },
        { name: 'Transformers', desc: 'Large model architectures', startDate: new Date(2024, 4, 1) },
        { name: 'LLMs', desc: 'Large language models', startDate: new Date(2024, 4, 1) },
        { name: 'Computer Vision', desc: 'Image & video AI', startDate: new Date(2024, 4, 1) },
        { name: 'Self-Supervised Learning', desc: 'Data-efficient training', startDate: new Date(2024, 4, 1) },
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
