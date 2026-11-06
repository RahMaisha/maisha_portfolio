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
}

const roles: Role[] = [
  {
    company: 'CellsTech',
    parent: 'Armani Group',
    location: 'Dhaka, Bangladesh',
    mode: 'On-site',
    title: 'Jr. Software Developer',
    scope: 'In-house developer for Armani Group',
    start: { year: 2026, monthIndex: 5 },
    tags: [
      'Laravel',
      'Angular',
      'MySQL',
      'PostgreSQL',
      'Node.js',
      'REST APIs',
      'System Design',
      'SSLCommerz',
      'bKash',
      'WhatsApp API',
      'Cloudflare',
      'Firebase',
    ],
    bullets: [
      {
        bold: 'Led the full redesign and rebuild of Natunatta',
        rest: ' end to end, running requirement analysis directly with stakeholders, doing the UI/UX, rebuilding the frontend and writing the backend from scratch. It is the group’s first fully functional e-commerce platform, now processing 150+ orders a month across 30+ products.',
      },
      {
        bold: 'Built the admin side of that platform',
        rest: ': bulk CSV product import, gift vouchers, order tracking, inventory management, sales analytics, WhatsApp integration and an embedded chatbot, with bKash integrated for mobile payments.',
      },
      {
        bold: 'Designing an inventory and manufacturing ERP for commercial release',
        rest: ': procurement (PR/PO/GRN), bill of materials, multi-warehouse stock, multi-level approvals, VAT-compliant billing and fraud controls.',
      },
      {
        bold: 'Selected to lead the redevelopment of NAJUS MSME',
        rest: ', a marketplace with 200+ member enterprises. Found and fixed hundreds of bugs and built the functions still missing to get it launch ready, including SSLCommerz payment integration.',
      },
      {
        bold: 'Cleared the bugs blocking release on NTI Learn',
        rest: ', then built a resume builder tied to NAJUS.org membership, from requirements through to production. It is now onboarded and live.',
      },
      {
        bold: 'Built a guest and visitor management CRM',
        rest: ' used at headquarters and at every branch company: multi-criteria filtering, blacklist enforcement, ID tracking, interview candidate tracking, analytics and a meeting-approval dashboard.',
      },
      {
        bold: 'Provide ongoing support and maintenance across group systems',
        rest: ', acting as the main point of contact for product managers, business analysts, SQA, design and PR, and handling deployment on Cloudflare and Firebase.',
      },
    ],
  },
  {
    company: 'Inkphase',
    href: 'https://inkphase.com',
    linkLabel: 'inkphase.com',
    location: 'Dhaka, Bangladesh',
    mode: 'Hybrid',
    title: 'Software Developer',
    scope: 'Full-stack product delivery',
    start: { year: 2025, monthIndex: 10 },
    end: { year: 2026, monthIndex: 4 },
    tags: [
      'Laravel',
      'Angular',
      'Django',
      'PostgreSQL',
      'MySQL',
      'Firebase',
      'Vercel',
      'cPanel',
    ],
    bullets: [
      {
        bold: 'Worked across six production products',
        rest: ', including two SaaS platforms: a contact management CRM and a multi-tenant AI chatbot service.',
      },
      {
        bold: 'Built frontend and backend for Sporteroo',
        rest: ', a live sports marketplace, including its chatbot integration.',
      },
      {
        bold: 'Built a JSON-to-XML transformation service',
        rest: ' for a healthcare data client in Django and PostgreSQL.',
      },
      {
        bold: 'Helped design REST APIs and database schemas',
        rest: ' across PostgreSQL, MySQL and NoSQL stores.',
      },
      {
        bold: 'Worked on deployments across Firebase, Vercel and cPanel',
        rest: ', and on CSRF protection, JWT authentication and rate limiting.',
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
      title="Where I&rsquo;ve worked so far."
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
                    {formatMonth(role.start)} – {role.end ? formatMonth(role.end) : 'Present'}
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
                    {role.location} <span aria-hidden className="text-ink-4">/</span> {role.mode}
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

                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
