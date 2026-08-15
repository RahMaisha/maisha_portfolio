import Reveal from './Reveal'
import Section from './Section'

type MonthPoint = { year: number; monthIndex: number }

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
    tags: [
      'Laravel',
      'Angular',
      'Node.js',
      'MySQL',
      'PostgreSQL',
      'REST APIs',
      'System Design',
      'WhatsApp API',
      'Chatbot',
      'Unit Testing',
      'Cloudflare',
      'Firebase',
    ],
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
        summary:
          'Contributed most of the frontend and backend implementation for the live platform using Laravel, Angular, and MySQL.',
      },
      {
        name: 'Sports Marketplace',
        summary:
          'Delivered major full-stack development across the live product, working closely with design, QA, and product direction.',
      },
      {
        name: 'Chatbot SaaS',
        summary:
          'Built a chatbot widget that can be embedded into any website, plus a private dashboard to manage chatbot flows, support internal operations, and power live client integrations.',
      },
      {
        name: 'News Platform',
        summary:
          'Contributed frontend implementation and architecture input on scalability, caching, and database design for a high-traffic news site ahead of launch.',
      },
    ],
  },
]

function formatMonth(point: MonthPoint) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(
    new Date(point.year, point.monthIndex, 1)
  )
}

function getDuration(start: MonthPoint, end?: MonthPoint) {
  const now = new Date()
  const last = end ?? { year: now.getFullYear(), monthIndex: now.getMonth() }
  const months = (last.year - start.year) * 12 + (last.monthIndex - start.monthIndex) + 1
  return months === 1 ? '1 mo' : `${months} mos`
}

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Two roles, both shipping to production."
      tone="paper-2"
    >
      <div className="space-y-[clamp(56px,7vw,88px)]">
        {roles.map((role) => {
          const isCurrent = !role.end

          return (
            <Reveal key={role.company} as="article">
              <div className="grid gap-x-16 gap-y-8 border-t border-rule-strong pt-10 lg:grid-cols-[260px_minmax(0,1fr)]">
                {/* Meta rail */}
                <div className="lg:sticky lg:top-[100px] lg:self-start">
                  <div className="u-label u-mono mb-4 flex items-center gap-2.5">
                    {isCurrent ? (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
                    ) : null}
                    {formatMonth(role.start)} — {role.end ? formatMonth(role.end) : 'Present'}
                    <span aria-hidden className="text-ink-4">/</span>
                    {getDuration(role.start, role.end)}
                  </div>

                  <h3 className="text-[1.75rem] font-medium leading-none tracking-[-0.03em]">
                    {role.href ? (
                      <a className="u-link" href={role.href} target="_blank" rel="noreferrer">
                        {role.company}
                      </a>
                    ) : (
                      role.company
                    )}
                  </h3>

                  {role.parent ? (
                    <p className="mt-2 text-[0.9375rem] text-ink-2">
                      Tech arm of <span className="text-ink">{role.parent}</span>
                    </p>
                  ) : null}

                  {role.href && role.linkLabel ? (
                    <p className="u-mono mt-2 text-[0.8125rem] text-ink-3">{role.linkLabel}</p>
                  ) : null}

                  <p className="u-label mt-5">
                    {role.location} <span className="text-ink-4">/</span> {role.mode}
                  </p>

                  <p className="u-mono mt-5 max-w-[34ch] text-[0.75rem] leading-relaxed text-ink-3">
                    {role.tags.join('  ·  ')}
                  </p>
                </div>

                {/* Detail */}
                <div>
                  <div className="mb-8">
                    <h4 className="u-h3">{role.title}</h4>
                    <p className="u-label mt-2">{role.scope}</p>
                  </div>

                  <ul className="max-w-[68ch] space-y-5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet.bold} className="u-prose text-[1rem]">
                        <strong>{bullet.bold}</strong>
                        {bullet.rest}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12">
                    <h5 className="u-label mb-1">Selected work</h5>
                    <dl className="border-t border-rule">
                      {role.projects.map((project, i) => (
                        <div
                          key={project.name}
                          className="grid grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 border-b border-rule py-5 sm:grid-cols-[2rem_15rem_minmax(0,1fr)]"
                        >
                          <dt className="u-label u-mono">{String(i + 1).padStart(2, '0')}</dt>
                          <dd className="text-[1rem] font-medium tracking-[-0.015em]">
                            {project.name}
                          </dd>
                          <dd className="col-start-2 max-w-[52ch] text-[0.875rem] leading-relaxed text-ink-2 sm:col-start-3">
                            {project.summary}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
