'use client'

import Image from 'next/image'
import { useEffect } from 'react'

const volunteeringOrgs = [
  {
    name: 'Bangladesh Red Crescent Society',
    role: 'Volunteer',
    imagePath: '/project_images/Bangladesh_Red_Crescent_Society_Logo.svg.png',
    imageAlt: 'Bangladesh Red Crescent Society',
  },
  {
    name: 'Bangladesh Girl Guides Association',
    role: 'Volunteer',
    imagePath: '/project_images/Seal_of_the_Bangladesh_Girl_Guides_Association.svg.png',
    imageAlt: 'Bangladesh Girl Guides Association',
  },
]

export default function Volunteering() {
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

    document.querySelectorAll('.vol-reveal').forEach((element) => {
      ;(element as HTMLElement).style.opacity = '0'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .volunteering-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .volunteering-inner { padding: 0 48px; }
        .volunteer-card {
          background:#0d1117;
          border:1px solid rgba(255,255,255,.06);
          border-radius:16px;
          padding:24px;
          transition:all .3s;
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
        }
        .volunteer-card:hover {
          border-color:rgba(0,212,255,.25);
          transform:translateY(-4px);
          box-shadow:0 16px 48px rgba(0,0,0,.35);
        }
        .volunteer-icon {
          width:80px;
          height:80px;
          border-radius:12px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.08);
          background:rgba(255,255,255,.02);
          margin-bottom:16px;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .volunteer-icon img {
          width:100%;
          height:100%;
          object-fit:contain;
          padding:8px;
        }
        @media (max-width: 900px) {
          .volunteering-grid { grid-template-columns:1fr; }
          .volunteering-inner { padding: 0 32px !important; }
        }
        @media (max-width: 768px) {
          .volunteering-inner { padding: 0 20px !important; }
          .volunteer-card { padding: 20px; }
        }
      `}</style>

      <section id="volunteering" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="volunteering-inner" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>07. volunteering</div>
          <h2 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 40 }}>
            Community <span style={{ color: '#00d4ff' }}>Impact</span>
          </h2>

          <div className="volunteering-grid">
            {volunteeringOrgs.map((org) => (
              <div key={org.name} className="volunteer-card vol-reveal">
                <div className="volunteer-icon">
                  <Image src={org.imagePath} alt={org.imageAlt} width={80} height={80} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{org.name}</div>
                <div style={{ fontSize: 12, color: '#8892a4' }}>{org.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
