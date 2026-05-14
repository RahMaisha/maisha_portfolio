'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const researchItems = [
  {
    type: 'Conference Paper',
    typeColor: '#00d4ff',
    lineColor: 'rgba(0,212,255,0.2)',
    title: 'MAE-ViT: Hybrid SSL Vision Transformer for Kidney Segmentation',
    description:
      'Hybrid masked autoencoder and vision transformer for high-precision medical image segmentation with limited labeled data.',
    badge: 'ICCIT 2025 | DOI: 10.1109/ICCIT68739.2025.11491313',
    badgeStyles: {
      background: 'rgba(0,212,255,0.08)',
      color: '#00d4ff',
      border: '1px solid rgba(0,212,255,0.2)',
    },
    href: 'https://doi.org/10.1109/ICCIT68739.2025.11491313',
    imagePath: '/project_images/Mae-vit_publication.png',
    imageAlt: 'MAE-ViT publication preview',
  },
  {
    type: 'Open Dataset',
    typeColor: '#f5a623',
    lineColor: 'rgba(245,166,35,0.2)',
    title: 'EDIBLESEED Dataset',
    description:
      'Publicly available image dataset on Mendeley Data for edible seed classification and computer vision research tasks.',
    badge: 'Mendeley Data | DOI: 10.17632/9xgk2vc3sv.2',
    badgeStyles: {
      background: 'rgba(245,166,35,0.07)',
      color: '#f5a623',
      border: '1px solid rgba(245,166,35,0.2)',
    },
    href: 'https://data.mendeley.com/datasets/9xgk2vc3sv/2',
    imagePath: '/project_images/edible-seed_publication.png',
    imageAlt: 'EDIBLESEED Mendeley dataset preview',
  },
]

export default function Research() {
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

    document.querySelectorAll('.rs-reveal').forEach((element) => {
      ;(element as HTMLElement).style.opacity = '0'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .rs-card {
          background:#0d1117;
          border:1px solid rgba(255,255,255,.06);
          border-radius:16px;
          padding:20px;
          transition:all .3s;
          text-decoration:none;
          display:block;
          color:inherit;
        }
        .rs-card:hover {
          border-color:rgba(0,212,255,.25);
          transform:translateY(-4px);
          box-shadow:0 16px 48px rgba(0,0,0,.35);
        }
        .rs-card:focus-visible {
          outline:2px solid #00d4ff;
          outline-offset:3px;
        }
        .rs-shot {
          height:190px;
          border-radius:12px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.02);
          margin-bottom:16px;
        }
        .rs-shot img {
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:top center;
          display:block;
        }
        .research-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .research-inner { padding: 0 48px; }
        .rs-linkline {
          margin-top:14px;
          font-family:'Fira Code', monospace;
          font-size:11px;
          color:#8892a4;
        }
        @media (max-width: 900px) {
          .research-grid { grid-template-columns:1fr; }
          .research-inner { padding: 0 32px !important; }
        }
        @media (max-width: 768px) {
          .research-inner { padding: 0 20px !important; }
          .rs-card { padding:18px; }
          .rs-shot { height:170px; }
        }
      `}</style>

      <section id="research" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="research-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>05. research</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Publications &amp; <span style={{ color: '#00d4ff' }}>Datasets</span>
          </h2>

          <div className="research-grid">
            {researchItems.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="rs-card rs-reveal">
                <div className="rs-shot">
                  <Image src={item.imagePath} alt={item.imageAlt} width={1200} height={720} />
                </div>
                <div
                  style={{
                    fontFamily: 'Fira Code, monospace',
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: item.typeColor,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 14,
                  }}
                >
                  {item.type}
                  <span style={{ flex: 1, height: 1, background: item.lineColor }} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>{item.description}</div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontFamily: 'Fira Code, monospace',
                    fontSize: 10,
                    padding: '5px 14px',
                    borderRadius: 20,
                    ...item.badgeStyles,
                  }}
                >
                  {item.badge}
                </span>
                <div className="rs-linkline">Open publication</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
