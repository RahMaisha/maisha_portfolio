'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const hackathonProjects = [
  {
    name: 'Cloud Camp BD',
    badge: 'AWS Hackathon',
    badgeStyles: {
      background: 'rgba(255,153,0,0.08)',
      color: '#ff9900',
      border: '1px solid rgba(255,153,0,0.2)',
    },
    description:
      'Developed cloud solutions during the Cloud Camp BD hackathon, focusing on AWS infrastructure and scalable application design.',
    imagePath: '/project_images/cloud_camp_bd_hackathon.png',
    imageAlt: 'Cloud Camp BD hackathon project',
  },
  {
    name: 'CrackerJack 2.0',
    badge: 'Innovation Hackathon',
    badgeStyles: {
      background: 'rgba(76,175,80,0.08)',
      color: '#4caf50',
      border: '1px solid rgba(76,175,80,0.2)',
    },
    description:
      'Built innovative solutions at CrackerJack 2.0 hackathon, showcasing rapid prototyping and creative problem-solving skills.',
    imagePath: '/project_images/crackerjack2.0_hackathon.png',
    imageAlt: 'CrackerJack 2.0 hackathon project',
  },
  {
    name: 'Robofest',
    badge: 'Robotics Hackathon',
    badgeStyles: {
      background: 'rgba(233,30,99,0.08)',
      color: '#e91e63',
      border: '1px solid rgba(233,30,99,0.2)',
    },
    description:
      'Participated in Robofest hackathon, developing robotics solutions and exploring automation and embedded systems.',
    imagePath: '/project_images/Robofest_hackathon.jpg',
    imageAlt: 'Robofest hackathon project',
  },
]

export default function Hackathon() {
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

    document.querySelectorAll('.hk-reveal').forEach((element) => {
      ;(element as HTMLElement).style.opacity = '0'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .hk-card {
          background:#0d1117;
          border:1px solid rgba(255,255,255,.06);
          border-radius:16px;
          padding:20px;
          transition:all .3s;
          text-decoration:none;
          display:block;
          color:inherit;
        }
        .hk-card:hover {
          border-color:rgba(0,212,255,.25);
          transform:translateY(-4px);
          box-shadow:0 16px 48px rgba(0,0,0,.35);
        }
        .hk-card:focus-visible {
          outline:2px solid #00d4ff;
          outline-offset:3px;
        }
        .hk-shot {
          height:190px;
          border-radius:12px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.02);
          margin-bottom:16px;
        }
        .hk-shot img {
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:top center;
          display:block;
        }
        .hackathon-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .hackathon-inner { padding: 0 48px; }
        @media (max-width: 900px) {
          .hackathon-grid { grid-template-columns:1fr; }
          .hackathon-inner { padding: 0 32px !important; }
        }
        @media (max-width: 768px) {
          .hackathon-inner { padding: 0 20px !important; }
          .hk-card { padding:18px; }
          .hk-shot { height:170px; }
        }
      `}</style>

      <section id="hackathon" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="hackathon-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>06. hackathon</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Hackathon <span style={{ color: '#00d4ff' }}>Competitions</span>
          </h2>

          <div className="hackathon-grid">
            {hackathonProjects.map((project) => (
              <div key={project.name} className="hk-card hk-reveal">
                <div className="hk-shot">
                  <Image src={project.imagePath} alt={project.imageAlt} width={1200} height={720} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>{project.name}</div>
                <div style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>{project.description}</div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: 'Fira Code, monospace',
                    fontSize: 10,
                    padding: '5px 14px',
                    borderRadius: 20,
                    ...project.badgeStyles,
                  }}
                >
                  {project.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
