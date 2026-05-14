'use client'

const bullets = [
  {
    bold: 'Worked across 4 production applications',
    rest: ' as sole or lead engineer, including 2 SaaS products, a CRM system, and an e-commerce platform, handling architecture, APIs, frontend, and deployment end-to-end',
  },
  {
    bold: 'Built and deployed an AI-powered chatbot',
    rest: ' integrated across live client platforms, combining NLP pipelines with real user-facing interfaces using third-party LLM APIs',
  },
  {
    bold: 'Designed a JSON-to-XML transformation service',
    rest: ' for a client, handling deeply nested schema mapping, validation, and error handling using Django and PostgreSQL',
  },
  {
    bold: 'Currently engineering a news platform for 1M+ concurrent users',
    rest: ' with horizontal scaling, load balancing, caching layers, and database architecture ahead of launch',
  },
  {
    bold: 'Maintained security across all live projects',
    rest: ' with CSRF protection, JWT hardening, input sanitisation, and rate limiting across multiple deployed applications',
  },
]

const tags = ['Laravel', 'Angular', 'Next.js', 'Django', 'PostgreSQL', 'MySQL', 'Firebase', 'AI/ML']

const workProjects = [
  {
    name: 'CClub',
    summary: 'Contributed most of the frontend and backend implementation for the live platform using Laravel, Angular, and MySQL.',
  },
  {
    name: 'Sporteroo',
    summary: 'Delivered major full-stack development across the live product, working closely with design, QA, and product direction.',
  },
  {
    name: 'Chatbot Dashboard',
    summary: 'Built a private dashboard experience to manage chatbot flows, support internal operations, and power live client integrations.',
  },
]

const EXPERIENCE_START = {
  year: 2026,
  monthIndex: 0,
}

function getExperienceRangeLabel() {
  const now = new Date()
  const totalMonths =
    (now.getFullYear() - EXPERIENCE_START.year) * 12 +
    (now.getMonth() - EXPERIENCE_START.monthIndex) +
    1

  const monthLabel = totalMonths === 1 ? '1 mo' : `${totalMonths} mos`
  const startLabel = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(EXPERIENCE_START.year, EXPERIENCE_START.monthIndex, 1))

  return `${startLabel} - Present | ${monthLabel}`
}

export default function Experience() {
  const experienceRange = getExperienceRangeLabel()

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .xp-card {
          background:#0d1117;
          border:1px solid rgba(255,255,255,0.06);
          border-radius:16px;
          padding:36px;
          display:grid;
          grid-template-columns:220px 1fr;
          gap:48px;
        }
        .xp-bullet {
          display:flex;gap:12px;align-items:flex-start;
          padding:12px 14px;background:#07090f;
          border:1px solid rgba(255,255,255,0.05);
          border-radius:8px;margin-bottom:10px;
        }
        .xp-bullet:hover { border-color:rgba(0,212,255,0.15); }
        .xp-bdot { width:5px;height:5px;border-radius:50%;background:#00d4ff;flex-shrink:0;margin-top:9px; }
        .xp-btxt { font-size:13px;color:#8892a4;line-height:1.65; }
        .xp-projects {
          margin-top:24px;
          display:grid;
          grid-template-columns:repeat(3, minmax(0, 1fr));
          gap:12px;
        }
        .xp-project {
          padding:14px;
          border-radius:10px;
          background:rgba(255,255,255,0.02);
          border:1px solid rgba(255,255,255,0.05);
        }
        .xp-project:hover { border-color:rgba(0,212,255,0.18); }
        @media (max-width: 1024px) {
          .xp-card {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        @media (max-width: 900px) {
          .xp-projects { grid-template-columns:1fr; }
        }
        @media (max-width: 768px) {
          .xp-card {
            gap: 24px;
            padding: 20px;
          }
          .xp-inner { padding: 0 20px !important; }
          .xp-title { font-size: 28px !important; }
        }
      `}</style>

      <section id="experience" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
        <div className="xp-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>03. experience</div>
          <h2 className="xp-title" style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Work <span style={{ color: '#00d4ff' }}>History</span>
          </h2>

          <div className="xp-card">
            <div>
              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#f5a623', background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.18)', borderRadius: 20, padding: '4px 12px', display: 'inline-block', marginBottom: 14 }}>
                {experienceRange}
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
                <a href="https://inkphase.com" target="_blank" rel="noreferrer" style={{ color: '#e8eaf0', textDecoration: 'none' }}>
                  Inkphase
                </a>
              </div>
              <div style={{ fontSize: 11, color: '#00d4ff', fontFamily: 'Fira Code, monospace', marginBottom: 8 }}>
                <a href="https://inkphase.com/" target="_blank" rel="noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>
                  inkphase.com
                </a>
              </div>
              <div style={{ fontSize: 12, color: '#8892a4', fontFamily: 'Fira Code, monospace', marginBottom: 4 }}>Dhaka, Bangladesh</div>
              <div style={{ fontSize: 12, color: '#4a5568', fontFamily: 'Fira Code, monospace', marginBottom: 16 }}>Hybrid</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {tags.map((tag) => (
                  <span key={tag} style={{ fontSize: 10, fontFamily: 'Fira Code, monospace', padding: '3px 9px', borderRadius: 4, background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.18)', color: '#00d4ff' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20 }}>Software Engineer</div>
              {bullets.map((bullet, index) => (
                <div key={index} className="xp-bullet">
                  <div className="xp-bdot" />
                  <div className="xp-btxt">
                    <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>{bullet.bold}</strong>
                    {bullet.rest}
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 24 }}>
                <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#00d4ff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Selected work projects
                </div>
                <div className="xp-projects">
                  {workProjects.map((project) => (
                    <div key={project.name} className="xp-project">
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#e8eaf0', marginBottom: 8 }}>{project.name}</div>
                      <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: '#8892a4' }}>{project.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
