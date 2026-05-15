import Navbar from '@/components/Navbar'
import Image from 'next/image'

const allProjects = [
  // Professional Projects
  {
    section: 'professional',
    name: 'CClub',
    badge: 'Client Work',
    href: 'https://cclub.live/',
    role: 'Fullstack Contributor',
    stack: ['Laravel', 'Angular', 'MySQL'],
    summary:
      'Built most of the frontend and backend for the live platform while collaborating with design, QA, and product direction from the team.',
    impact:
      'Production website with live chatbot experience and full-stack delivery across application flows.',
    imagePath: '/project_images/cclub_landing.png',
    imageAlt: 'CClub landing page preview',
  },
  {
    section: 'professional',
    name: 'Sporteroo',
    badge: 'Client Work',
    href: 'https://sporteroo.com/',
    role: 'Fullstack Contributor',
    stack: ['Laravel', 'Angular', 'MySQL'],
    summary:
      'Developed the majority of the frontend and backend application layers for the live product, including feature implementation and system integration.',
    impact:
      'Live sports platform shipped with chatbot integration and coordinated full-stack execution.',
    imagePath: '/project_images/sporteroo_landing.png',
    imageAlt: 'Sporteroo landing page preview',
  },
  {
    section: 'professional',
    name: 'Multi-tenant chatbot platform',
    badge: 'Behind Login',
    href: '',
    role: 'Fullstack Contributor',
    stack: ['Laravel', 'Angular', 'MySQL', 'LLM APIs'],
    summary:
      'Developed a multi-tenant chatbot platform integrating third-party LLM APIs with customer-facing web applications and internal management dashboards.',
    impact:
      'Best shown with screenshots because the platform is private and not accessible from the public site.',
    imagePath: '/project_images/chatbot_dashboard.png',
    imageAlt: 'Multi-tenant chatbot platform preview',
  },
  // Featured Projects
  {
    section: 'personal',
    name: 'HealthSync',
    badge: 'Live Build',
    desc: 'AI healthcare platform with real-time kidney stone detection. Microservices backend with Explainable AI heatmaps via Grad-CAM++.',
    impact: '98.6% diagnostic accuracy and 10k+ samples through self-supervised learning.',
    stack: ['Laravel', 'FastAPI', 'PyTorch', 'Docker', 'Grad-CAM++'],
  },
  {
    section: 'personal',
    name: 'MAE-ViT',
    badge: 'ICCIT 2025',
    desc: 'Hybrid Masked Autoencoder plus Vision Transformer for medical image segmentation, optimized for data-scarce environments.',
    impact: 'Outperformed CNN baselines in low-data medical imaging experiments.',
    stack: ['PyTorch', 'ViT', 'MAE', 'SSL', 'Python'],
  },
  {
    section: 'personal',
    name: 'Career Hive',
    badge: 'MERN Stack',
    desc: 'Full-stack job portal with resume builder, JWT auth, and automated CI/CD pipelines.',
    impact: 'Strong showcase project for product thinking, auth, and developer workflow automation.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'GitHub Actions'],
  },
  {
    section: 'personal',
    name: 'LLM Recommender',
    badge: 'NLP / AI',
    desc: 'AI recommendation assistant using NLP parsing, embeddings, and hybrid collaborative filtering.',
    impact: 'Demonstrates practical LLM integration and recommendation-system thinking.',
    stack: ['OpenAI API', 'Python', 'HuggingFace', 'Scikit-learn'],
  },
]

export default function ProjectsPage() {
  const professionalProjects = allProjects.filter((p) => p.section === 'professional')
  const personalProjects = allProjects.filter((p) => p.section === 'personal')

  return (
    <main>
      <canvas id="bg-canvas" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
      <div className="grid-bg" />
      <div className="orb1" />
      <div className="orb2" />
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <section style={{ padding: '140px 0 80px', minHeight: '100vh' }}>
          <style>{`
            @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
            .pj-grid {
              display:grid;
              grid-template-columns:repeat(2, minmax(0, 1fr));
              gap:16px;
            }
            .pj-grid-three {
              display:grid;
              grid-template-columns:repeat(3, minmax(0, 1fr));
              gap:16px;
            }
            .pj-card {
              background:#0d1117;
              border:1px solid rgba(255,255,255,.06);
              border-radius:16px;
              padding:22px;
              transition:all .3s;
              position:relative;
              overflow:hidden;
              display:flex;
              flex-direction:column;
              min-height:100%;
            }
            .pj-card::after {
              content:'';
              position:absolute;
              top:0;
              left:0;
              right:0;
              height:2px;
              background:linear-gradient(90deg,#00d4ff,#f5a623);
              opacity:0;
              transition:opacity .3s;
            }
            .pj-card:hover {
              border-color:rgba(0,212,255,.25);
              transform:translateY(-4px);
              box-shadow:0 16px 48px rgba(0,0,0,.4);
            }
            .pj-card:hover::after { opacity:1; }
            .pj-badge {
              display:inline-flex;
              align-items:center;
              font-family:'Fira Code', monospace;
              font-size:10px;
              letter-spacing:.1em;
              text-transform:uppercase;
              padding:4px 10px;
              border-radius:20px;
              font-weight:500;
              margin-bottom:12px;
              background:rgba(0,212,255,.08);
              color:#00d4ff;
              border:1px solid rgba(0,212,255,.18);
            }
            .pj-shot {
              height:180px;
              border-radius:12px;
              border:1px solid rgba(255,255,255,.08);
              background:rgba(255,255,255,.02);
              display:flex;
              align-items:center;
              justify-content:center;
              overflow:hidden;
              margin-bottom:16px;
            }
            .pj-shot img {
              width:100%;
              height:100%;
              object-fit:cover;
              object-position:top center;
              display:block;
            }
            .pj-meta {
              font-family:'Fira Code', monospace;
              font-size:11px;
              color:#f5a623;
              margin-bottom:12px;
            }
            .pj-impact {
              font-family:'Fira Code', monospace;
              font-size:11px;
              color:#22c55e;
              background:rgba(34,197,94,0.05);
              border-left:2px solid rgba(34,197,94,0.3);
              padding:8px 12px;
              border-radius:0 6px 6px 0;
              margin:14px 0 16px;
            }
            .pj-tags {
              display:flex;
              flex-wrap:wrap;
              gap:6px;
              margin-top:auto;
            }
            .pt {
              font-family:'Fira Code', monospace;
              font-size:10px;
              background:rgba(255,255,255,.03);
              border:1px solid rgba(255,255,255,.07);
              color:#4a5568;
              padding:3px 8px;
              border-radius:4px;
            }
            .projects-inner { padding: 0 48px; }
            @media (max-width: 980px) {
              .pj-grid-three { grid-template-columns:repeat(2, minmax(0, 1fr)); }
              .projects-inner { padding: 0 32px !important; }
            }
            @media (max-width: 768px) {
              .pj-grid-three { grid-template-columns:1fr; }
              .pj-grid { grid-template-columns:1fr; }
              .projects-inner { padding: 0 20px !important; }
              .pj-card { padding: 18px; }
            }
          `}</style>

          <div className="projects-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
            <h1 style={{ fontSize: 'clamp(36px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 12 }}>
              All <span style={{ color: '#00d4ff' }}>Projects</span>
            </h1>
            <p style={{ maxWidth: 760, margin: '0 0 48px', fontSize: 14, lineHeight: 1.8, color: '#8892a4' }}>
              A complete overview of my professional client work and personal projects spanning full-stack development, AI/ML, and platform engineering.
            </p>

            {/* Professional Work */}
            <div style={{ marginBottom: 60 }}>
              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#f5a623', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                Professional work
                <span style={{ flex: 1, height: 1, background: 'rgba(245,166,35,0.2)' }} />
              </div>
              <div className="pj-grid-three" style={{ marginBottom: 20 }}>
                {professionalProjects.map((project) => (
                  <div key={project.name} className="pj-card">
                    {project.imagePath && (
                      <div className="pj-shot">
                        <Image src={project.imagePath} alt={project.imageAlt} width={1200} height={720} />
                      </div>
                    )}
                    <span className="pj-badge">{project.badge}</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 8 }}>
                      <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: '#e8eaf0' }}>{project.name}</div>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#00d4ff', textDecoration: 'none', fontFamily: 'Fira Code, monospace', fontSize: 11, whiteSpace: 'nowrap' }}
                        >
                          Visit
                        </a>
                      )}
                    </div>
                    <div className="pj-meta">{project.role}</div>
                    <p style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, margin: 0 }}>{project.summary}</p>
                    <div className="pj-impact">{project.impact}</div>
                    <div className="pj-tags">
                      {project.stack.map((tag) => (
                        <span key={tag} className="pt">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal and Research Projects */}
            <div>
              <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#f5a623', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                Personal and research projects
                <span style={{ flex: 1, height: 1, background: 'rgba(245,166,35,0.2)' }} />
              </div>
              <div className="pj-grid">
                {personalProjects.map((project) => (
                  <div key={project.name} className="pj-card">
                    <span className="pj-badge">{project.badge}</span>
                    <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 10, color: '#e8eaf0' }}>{project.name}</div>
                    <p style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, margin: 0 }}>{project.desc}</p>
                    <div className="pj-impact">{project.impact}</div>
                    <div className="pj-tags">
                      {project.stack.map((tag) => (
                        <span key={tag} className="pt">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
