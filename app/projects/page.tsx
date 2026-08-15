import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Reveal from '@/components/Reveal'
import { PersonalCard, ProfessionalCard } from '@/components/ProjectCard'
import { personalProjects, professionalGroups } from '@/data/projects'

export const metadata: Metadata = {
  title: 'All Projects — Maisha Rahman',
  description:
    'Complete index of professional client work and personal projects across full-stack development, AI/ML, and platform engineering.',
  alternates: { canonical: '/projects' },
}

const CARD_SIZES = '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-[136px] pb-[clamp(72px,10vw,132px)]">
        <div className="u-shell">
          <Reveal>
            <div className="mb-[clamp(48px,6vw,80px)]">
              <div className="mb-6 flex items-baseline gap-4">
                <Link href="/" className="u-label !text-ink">
                  &larr; Index
                </Link>
                <span aria-hidden className="h-px flex-1 translate-y-[-3px] bg-rule" />
              </div>

              <h1 className="u-display max-w-[8ch]">
                All
                <br />
                projects
              </h1>

              <p className="u-prose mt-9 max-w-[58ch]">
                A complete index of professional client work and personal projects, spanning
                full-stack development, AI/ML, and platform engineering.
              </p>
            </div>
          </Reveal>

          {/* Professional */}
          <div className="mb-[clamp(56px,7vw,88px)]">
            <Reveal>
              <div className="u-label mb-8 flex items-center gap-4">
                Professional
                <span aria-hidden className="h-px flex-1 bg-rule" />
              </div>
            </Reveal>

            <div className="space-y-14">
              {professionalGroups.map((group) => (
                <Reveal key={group.employer}>
                  <div>
                    <div className="mb-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h2 className="text-[1.125rem] font-medium tracking-[-0.02em]">
                        {group.employer}
                      </h2>
                      <span aria-hidden className="text-ink-4">/</span>
                      <span className="u-label u-mono">{group.period}</span>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {group.projects.map((project) => (
                        <ProfessionalCard key={project.name} project={project} sizes={CARD_SIZES} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Personal & research */}
          <Reveal>
            <div className="u-label mb-8 flex items-center gap-4">
              Personal &amp; research
              <span aria-hidden className="h-px flex-1 bg-rule" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {personalProjects.map((project) => (
                <PersonalCard key={project.name} project={project} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
