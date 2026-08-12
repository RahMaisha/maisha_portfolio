'use client'

type MonthPoint = {
  year: number
  monthIndex: number
}

type Role = {
  company: string
  parent?: string
  href?: string
  linkLabel?: string
  location: string
  mode: string
  title: string
  scope: string
  start: MonthPoint
  end?: MonthPoint
  tags: string[]
  bullets: { bold: string; rest: string }[]
  projects: { name: string; summary: string }[]
}

const roles: Role[] = [
  {
    company: 'CellsTech',
    parent: 'Armani Group',
    location: 'Dhaka, Bangladesh',
    mode: 'On-site',
    title: 'Junior Software Developer',
    scope: 'In-house developer for Armani Group',
    start: { year: 2026, monthIndex: 5 },
    tags: ['Laravel', 'Angular', 'Node.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'System Design', 'WhatsApp API', 'Chatbot', 'Unit Testing', 'Cloudflare', 'Firebase'],
    bullets: [
      {
        bold: 'Sole in-house developer for Armani Group',
        rest: ', embedded at group headquarters and owning every stage of delivery across the group’s internal and commercial platforms — requirement analysis, system design, UI/UX, frontend, backend, unit testing, and release.',
      },
      {
        bold: 'Built a full-stack guest and visitor management CRM',
        rest: ' with multi-criteria filtering, blacklist enforcement, interview tracking, guest-category analytics, automated flagging rules, and a stakeholder dashboard for raising and approving meeting requests.',
      },
      {
        bold: 'Shipped a live full-stack e-commerce platform',
        rest: ' with a deep admin panel: bulk product import from CSV, dynamic gift vouchers, order tracking, inventory management, sales analytics, WhatsApp integration, and an embedded chatbot.',
      },
      {
        bold: 'Assigned the redevelopment of an MSME e-commerce marketplace',
        rest: ' originally built by a senior engineer to a scope comparable to Amazon and Daraz — upgrading and re-developing the existing system and preparing it for commercial launch.',
      },
      {
        bold: 'Built a resume builder for an EdTech course platform',
        rest: ' (NTI Learn), carrying the feature from requirement gathering through interface design to production release.',
      },
      {
        bold: 'Own deployment and release across every system I build',
        rest: ', running regular production deploys on Cloudflare and Firebase and handling post-release support.',
      },
      {
        bold: 'Drove cross-functional delivery',
        rest: ' as the engineering point of contact for product managers, business analysts, SQA, senior engineers, design, and PR — translating business requirements into tested, shipped features.',
      },
      {
        bold: 'Maintain and extend multiple pre-built company systems and web apps',
        rest: ', working across varied stacks including Node.js and PostgreSQL to deliver feature updates, bug fixes, upgrades, and ongoing production support across the group’s websites and internal tools.',
      },
    ],
    projects: [
      {
        name: 'Guest & Visitor CRM',
        summary:
          'Internal CRM for tracking visitors end to end, with advanced filters, blacklisting, interview tracking, and a stakeholder meeting-request dashboard.',
      },
      {
        name: 'E-commerce Platform',
        summary:
          'Live storefront and admin panel covering CSV product import, gift vouchers, order and inventory tracking, analytics, WhatsApp, and chatbot integration.',
      },
      {
        name: 'MSME Marketplace',
        summary:
          'Amazon/Daraz-scale multi-vendor marketplace built by a senior engineer; handling its upgrade, redevelopment, and launch preparation.',
      },
      {
        name: 'Resume Builder (NTI Learn)',
        summary:
          'Resume-building tool for an educational course platform, delivered from requirement analysis through UI design to production.',
      },
    ],
  },
  {
    company: 'Inkphase',
    href: 'https://inkphase.com',
    linkLabel: 'inkphase.com',
    location: 'Dhaka, Bangladesh',
    mode: 'Hybrid',
    title: 'Software Engineer',
    scope: 'Full-stack product delivery',
    start: { year: 2025, monthIndex: 10 },
    end: { year: 2026, monthIndex: 4 },
    tags: ['Laravel', 'Angular', 'Next.js', 'Django', 'PostgreSQL', 'MySQL', 'Firebase', 'AI/ML'],
    bullets: [
      {
        bold: 'Contributed to multiple production-grade applications',
        rest: ' across SaaS, CRM, and e-commerce platforms, working on frontend systems, backend APIs, database design, and deployment workflows.',
      },
      {
        bold: 'Developed a multi-tenant chatbot platform',
        rest: ' integrating third-party LLM APIs with customer-facing web applications and internal management dashboards.',
      },
      {
        bold: 'Built a schema-driven JSON-to-XML transformation service',
        rest: ' with nested mapping support, validation pipelines, and robust error handling using Django and PostgreSQL.',
      },
      {
        bold: 'Contributed to a high-traffic news platform ahead of launch',
        rest: ', handling frontend implementation and taking part in architecture decisions around scalability, caching, and database design.',
      },
      {
        bold: 'Optimized backend infrastructure for scalability',
        rest: ' using caching strategies, load balancing, and database tuning to improve reliability under concurrent traffic.',
      },
      {
        bold: 'Maintained security across all live projects',
        rest: ' with CSRF protection, JWT hardening, input sanitisation, and rate limiting across multiple deployed applications.',
      },
    ],
    projects: [
      {
        name: 'Social Community Platform',
        summary: 'Contributed most of the frontend and backend implementation for the live platform using Laravel, Angular, and MySQL.',
      },
      {
        name: 'Sports Marketplace',
        summary: 'Delivered major full-stack development across the live product, working closely with design, QA, and product direction.',
      },
      {
        name: 'Chatbot SaaS',
        summary: 'Built a chatbot widget that can be embedded into any website, plus a private dashboard to manage chatbot flows, support internal operations, and power live client integrations.',
      },
      {
        name: 'News Platform',
        summary: 'Contributed frontend implementation and architecture input on scalability, caching, and database design for a high-traffic news site ahead of launch.',
      },
    ],
  },
]

function formatMonth(point: MonthPoint) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
    new Date(point.year, point.monthIndex, 1)
  )
}

function getRangeLabel(start: MonthPoint, end?: MonthPoint) {
  const now = new Date()
  const last = end ?? { year: now.getFullYear(), monthIndex: now.getMonth() }
  const totalMonths = (last.year - start.year) * 12 + (last.monthIndex - start.monthIndex) + 1
  const monthLabel = totalMonths === 1 ? '1 mo' : `${totalMonths} mos`

  return `${formatMonth(start)} - ${end ? formatMonth(end) : 'Present'} | ${monthLabel}`
}

export default function Experience() {
  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .xp-stack { display:flex; flex-direction:column; gap:20px; }
        .xp-card {
          background:#0d1117;
          border:1px solid rgba(255,255,255,0.06);
          border-radius:16px;
          padding:36px;
          display:grid;
          grid-template-columns:220px 1fr;
          gap:48px;
        }
        .xp-card.is-current { border-color:rgba(0,212,255,0.18); }
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

          <div className="xp-stack">
            {roles.map((role) => {
              const isCurrent = !role.end

              return (
                <div key={role.company} className={`xp-card${isCurrent ? ' is-current' : ''}`}>
                  <div>
                    <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#f5a623', background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.18)', borderRadius: 20, padding: '4px 12px', display: 'inline-block', marginBottom: 14 }}>
                      {getRangeLabel(role.start, role.end)}
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>
                      {role.href ? (
                        <a href={role.href} target="_blank" rel="noreferrer" style={{ color: '#e8eaf0', textDecoration: 'none' }}>
                          {role.company}
                        </a>
                      ) : (
                        <span style={{ color: '#e8eaf0' }}>{role.company}</span>
                      )}
                    </div>
                    {role.parent ? (
                      <div style={{ fontSize: 12, color: '#8892a4', marginBottom: 8 }}>
                        Tech arm of <strong style={{ color: '#e8eaf0', fontWeight: 500 }}>{role.parent}</strong>
                      </div>
                    ) : null}
                    {role.href && role.linkLabel ? (
                      <div style={{ fontSize: 11, color: '#00d4ff', fontFamily: 'Fira Code, monospace', marginBottom: 8 }}>
                        <a href={role.href} target="_blank" rel="noreferrer" style={{ color: '#00d4ff', textDecoration: 'none' }}>
                          {role.linkLabel}
                        </a>
                      </div>
                    ) : null}
                    <div style={{ fontSize: 12, color: '#8892a4', fontFamily: 'Fira Code, monospace', marginBottom: 4 }}>{role.location}</div>
                    <div style={{ fontSize: 12, color: '#4a5568', fontFamily: 'Fira Code, monospace', marginBottom: 16 }}>{role.mode}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {role.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: 10, fontFamily: 'Fira Code, monospace', padding: '3px 9px', borderRadius: 4, background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.18)', color: '#00d4ff' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
                      <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>{role.title}</div>
                      {isCurrent ? (
                        <span style={{ fontFamily: 'Fira Code, monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 20, padding: '3px 10px' }}>
                          Current
                        </span>
                      ) : null}
                    </div>
                    <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#f5a623', marginBottom: 20 }}>{role.scope}</div>

                    {role.bullets.map((bullet, index) => (
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
                        {role.projects.map((project) => (
                          <div key={project.name} className="xp-project">
                            <div style={{ fontSize: 15, fontWeight: 700, color: '#e8eaf0', marginBottom: 8 }}>{project.name}</div>
                            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: '#8892a4' }}>{project.summary}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
