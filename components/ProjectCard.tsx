import Image from 'next/image'
import Card3D from './Card3D'
import type { PersonalProject, Project } from '@/data/projects'

/**
 * Badges still classify the work, but in an achromatic system the signal comes
 * from weight rather than hue: anything publicly shipped is a solid ink chip,
 * everything else is outlined. Two states, readable at a glance, no colour.
 */
const SHIPPED = new Set(['Live Product', 'Live Build', 'Client Work'])

function Badge({ label }: { label: string }) {
  const shipped = SHIPPED.has(label)
  return (
    <span
      className={`u-label rounded-full px-2.5 py-1 !text-[0.625rem] ${
        shipped
          ? '!text-card bg-ink'
          : '!text-ink-2 border border-rule-strong bg-transparent'
      }`}
    >
      {label}
    </span>
  )
}

/**
 * Shared between the home page's Selected Work section and the /projects index
 * so both stay visually identical as the design evolves.
 *
 * Screenshots render in full colour — they are the one place on the page where
 * colour carries real information about the work.
 */
export function ProfessionalCard({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <Card3D>
      {project.imagePath ? (
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-paper-2">
          <Image
            src={project.imagePath}
            alt={project.imageAlt ?? ''}
            fill
            sizes={sizes}
            className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="mb-3.5 flex items-baseline justify-between gap-4">
        <Badge label={project.badge} />
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="u-label !text-ink shrink-0 underline decoration-rule-strong underline-offset-4"
          >
            Visit &rarr;
          </a>
        ) : null}
      </div>

      <h4 className="text-[1.1875rem] font-medium leading-snug tracking-[-0.025em]">
        {project.name}
      </h4>
      <p className="u-label mt-2">{project.role}</p>

      <p className="mt-4 text-[0.9375rem] leading-[1.7] text-ink-2">{project.summary}</p>

      <p className="mt-5 rounded-lg bg-paper px-4 py-3 text-[0.875rem] leading-[1.65] text-ink">
        {project.impact}
      </p>

      <p className="u-mono mt-auto pt-6 text-[0.75rem] leading-relaxed text-ink-3">
        {project.stack.join('  ·  ')}
      </p>
    </Card3D>
  )
}

export function PersonalCard({ project }: { project: PersonalProject }) {
  return (
    <Card3D>
      <div className="mb-3.5 flex items-baseline justify-between gap-4">
        <Badge label={project.badge} />
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="u-label !text-ink shrink-0 underline decoration-rule-strong underline-offset-4"
          >
            Repository &rarr;
          </a>
        ) : null}
      </div>

      <h4 className="text-[1.3125rem] font-medium leading-snug tracking-[-0.025em]">
        {project.name}
      </h4>

      <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-[1.7] text-ink-2">{project.desc}</p>

      <p className="mt-5 max-w-[52ch] rounded-lg bg-paper px-4 py-3 text-[0.875rem] leading-[1.65] text-ink">
        {project.impact}
      </p>

      <p className="u-mono mt-auto pt-6 text-[0.75rem] leading-relaxed text-ink-3">
        {project.stack.join('  ·  ')}
      </p>
    </Card3D>
  )
}
