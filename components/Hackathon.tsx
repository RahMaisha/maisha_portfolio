import Image from 'next/image'
import Card3D from './Card3D'
import Reveal from './Reveal'
import Section from './Section'

type HackathonProject = {
  name: string
  badge: string
  date?: string
  description: string
  href?: string
  contribution?: string
  stack?: string[]
  imagePath: string
  imageAlt: string
}

const hackathonProjects: HackathonProject[] = [
  {
    name: 'Neera — Maternity Care Platform',
    badge: 'AWS Hackathon',
    date: 'Cloud Camp BD (AWS) · June 2026',
    description:
      'Fully bilingual (Bangla and English) maternity care web app with role-based accounts, so partners and family members get their own logins and scoped access to the mother’s profile — mood tracking, month-by-month nutrition and health guidance, and fetal development stages, alongside a Bangla-capable AI pregnancy assistant.',
    contribution:
      'Built the AI assistant end to end: scraped WHO and UNICEF maternal health guidance and OCR’d scanned Bangla PDFs with Tesseract, chunked and embedded the corpus into Pinecone with Mistral, then served grounded answers through a language-aware RAG pipeline that matches queries to the reader’s language with fallback across languages. A FastAPI ingestion service handles URL and PDF sources with background processing and webhook callbacks.',
    stack: ['RAG', 'Pinecone', 'Mistral', 'FastAPI', 'Tesseract', 'Bangla NLP'],
    href: 'https://neera-maternal-care-assistant.vercel.app/',
    imagePath: '/project_images/cloud_camp_bd_hackathon.png',
    imageAlt: 'Cloud Camp BD hackathon project',
  },
  {
    name: 'Crackerjack 2.0',
    badge: 'National Case Competition',
    // A case competition, not a build — this says "proposed", never "built",
    // because nothing was shipped.
    date: 'RUET IPE Club × SheSTEM · Apr 2025',
    description:
      'Competed among 277+ teams on ShareTrip’s live business case — automating ticket refund, reissue and void with AI. Our proposal combined a chatbot taking first-line requests and running eligibility checks, airline and bank API integration for real-time policy checks, and a customer portal for tracking the status of each request.',
    contribution:
      'Contributed to the technical solution design, and supported research and presentation, as part of Team Almost Brilliant.',
    imagePath: '/project_images/crackerjack2.0_hackathon.png',
    imageAlt: 'Crackerjack 2.0 business case competition',
  },
  {
    name: 'Robofest',
    badge: 'Robotics Hackathon',
    description:
      'Participated in Robofest hackathon, developing robotics solutions and exploring automation and embedded systems.',
    imagePath: '/project_images/Robofest_hackathon.jpg',
    imageAlt: 'Robofest hackathon project',
  },
]

export default function Hackathon() {
  const [feature, ...rest] = hackathonProjects

  return (
    <Section
      id="hackathon"
      index="06"
      label="Competitions"
      title="Built under a clock, with strangers."
    >
      {/* Feature */}
      <Reveal as="article">
        <div className="grid gap-x-12 gap-y-8 border-t border-ink pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="group relative aspect-[16/10] overflow-hidden bg-paper-2">
            <Image
              src={feature.imagePath}
              alt={feature.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="u-label rounded-full border border-rule-strong px-2.5 py-1 !text-[0.625rem] !text-ink-2">
                {feature.badge}
              </span>
              {feature.date ? (
                <>
                  <span aria-hidden className="text-ink-4">/</span>
                  <span className="u-label u-mono">{feature.date}</span>
                </>
              ) : null}
            </div>

            <h3 className="max-w-[24ch] text-[1.625rem] font-medium leading-tight tracking-[-0.03em]">
              {feature.name}
            </h3>

            {feature.href ? (
              <a
                href={feature.href}
                target="_blank"
                rel="noreferrer"
                className="u-label !text-ink mt-3 inline-flex items-center gap-2 underline decoration-rule-strong underline-offset-4"
              >
                View live app &rarr;
              </a>
            ) : null}

            <p className="u-prose mt-5 max-w-[56ch] text-[1rem]">{feature.description}</p>

            {feature.contribution ? (
              <div className="mt-6 rounded-xl border border-rule bg-card p-5">
                <p className="u-label mb-2">My contribution</p>
                <p className="max-w-[56ch] text-[0.9375rem] leading-relaxed text-ink">
                  {feature.contribution}
                </p>
              </div>
            ) : null}

            {feature.stack ? (
              <p className="u-mono mt-6 text-[0.75rem] text-ink-3">
                {feature.stack.join('  ·  ')}
              </p>
            ) : null}
          </div>
        </div>
      </Reveal>

      {/* Others */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <Reveal key={project.name} as="article">
            <Card3D className="h-full">
              <div className="group relative mb-6 aspect-[16/10] overflow-hidden rounded-lg bg-paper-2">
                <Image
                  src={project.imagePath}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <span className="u-label rounded-full border border-rule-strong px-2.5 py-1 !text-[0.625rem] !text-ink-2">
                {project.badge}
              </span>
              <h3 className="mt-3 text-[1.1875rem] font-medium leading-tight tracking-[-0.025em]">
                {project.name}
              </h3>
              {project.date ? <p className="u-label mt-2">{project.date}</p> : null}
              <p className="mt-3 max-w-[48ch] text-[0.9375rem] leading-relaxed text-ink-2">
                {project.description}
              </p>
              {project.contribution ? (
                <div className="mt-4 border-t border-rule pt-4">
                  <p className="u-label mb-1.5">My contribution</p>
                  <p className="max-w-[48ch] text-[0.875rem] leading-relaxed text-ink">
                    {project.contribution}
                  </p>
                </div>
              ) : null}
            </Card3D>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
