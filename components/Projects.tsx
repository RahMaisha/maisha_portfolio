import Link from 'next/link'
import Reveal from './Reveal'
import Section from './Section'
import { PersonalCard, ProfessionalCard } from './ProjectCard'
import { personalProjects, professionalGroups } from '@/data/projects'

const CARD_SIZES = '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'

export default function Projects() {
  return (
    <Section
      id="work"
      index="03"
      label="Selected work"
      title="What I've built, and what I owned in it."
      intro="Professional work is listed separately from personal and research projects, so it stays clear what was delivered inside a team and what I own independently."
    >
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
                  <h3 className="text-[1.125rem] font-medium tracking-[-0.02em]">
                    {group.employer}
                  </h3>
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

      <Reveal>
        <div className="mt-14">
          <Link
            href="/projects"
            className="u-label !text-ink inline-flex items-center gap-3 border border-rule-strong px-6 py-4 transition-colors duration-200 hover:border-ink"
          >
            All projects
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}
