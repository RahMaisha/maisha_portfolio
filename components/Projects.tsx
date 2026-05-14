'use client'

import { useEffect } from 'react'
import Image from 'next/image'

const professionalProjects = [
  {
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
    name: 'Chatbot Dashboard',
    badge: 'Behind Login',
    href: '',
    role: 'Fullstack Contributor',
    stack: ['Laravel', 'Angular', 'MySQL', 'LLM APIs'],
    summary:
      'Created an internal chatbot management dashboard for configuring flows, monitoring usage, and supporting client-facing chatbot experiences.',
    impact:
      'Best shown with screenshots because the dashboard is private and not accessible from the public site.',
    imagePath: '/project_images/chatbot_dashboard.png',
    imageAlt: 'Chatbot dashboard preview',
  },
]

const featuredProjects = [
  {
    name: 'HealthSync',
    badge: 'Live Build',
    desc: 'AI healthcare platform with real-time kidney stone detection. Microservices backend with Explainable AI heatmaps via Grad-CAM++.',
    impact: '98.6% diagnostic accuracy and 10k+ samples through self-supervised learning.',
    stack: ['Laravel', 'FastAPI', 'PyTorch', 'Docker', 'Grad-CAM++'],
  },
  {
    name: 'MAE-ViT',
    badge: 'ICCIT 2025',
    desc: 'Hybrid Masked Autoencoder plus Vision Transformer for medical image segmentation, optimized for data-scarce environments.',
    impact: 'Outperformed CNN baselines in low-data medical imaging experiments.',
    stack: ['PyTorch', 'ViT', 'MAE', 'SSL', 'Python'],
  },
  {
    name: 'Career Hive',
    badge: 'MERN Stack',
    desc: 'Full-stack job portal with resume builder, JWT auth, and automated CI/CD pipelines.',
    impact: 'Strong showcase project for product thinking, auth, and developer workflow automation.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'GitHub Actions'],
  },
  {
    name: 'LLM Recommender',
    badge: 'NLP / AI',
    desc: 'AI recommendation assistant using NLP parsing, embeddings, and hybrid collaborative filtering.',
    impact: 'Demonstrates practical LLM integration and recommendation-system thinking.',
    stack: ['OpenAI API', 'Python', 'HuggingFace', 'Scikit-learn'],
  },
]

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.animation = 'fadeUp .6s ease forwards'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.pj-reveal').forEach((element) => {
      ;(element as HTMLElement).style.opacity = '0'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
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

      <section id="projects" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="projects-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>04. projects</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 14 }}>
            Featured <span style={{ color: '#00d4ff' }}>Work</span>
          </h2>
          <p style={{ maxWidth: 760, margin: '0 0 32px', fontSize: 14, lineHeight: 1.8, color: '#8892a4' }}>
            Professional client work is shown separately from personal and research projects so your portfolio makes clear what you built in a team setting and what you owned independently.
          </p>

          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#f5a623', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
            Professional work
          </div>
          <div className="pj-grid-three" style={{ marginBottom: 44 }}>
            {professionalProjects.map((project) => (
              <div key={project.name} className="pj-card pj-reveal">
                <div className="pj-shot">
                  <Image src={project.imagePath} alt={project.imageAlt} width={1200} height={720} />
                </div>
                <span className="pj-badge">{project.badge}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: '#e8eaf0' }}>{project.name}</div>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#00d4ff', textDecoration: 'none', fontFamily: 'Fira Code, monospace', fontSize: 11, whiteSpace: 'nowrap' }}
                    >
                      Visit
                    </a>
                  ) : null}
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

          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#f5a623', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
            Personal and research projects
          </div>
          <div className="pj-grid">
            {featuredProjects.map((project) => (
              <div key={project.name} className="pj-card pj-reveal">
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
      </section>
    </>
  )
}
