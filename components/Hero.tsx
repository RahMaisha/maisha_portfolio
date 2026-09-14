import CubeScene from './CubeScene'

const DISCIPLINES = [
  'Full-stack engineering',
  'Applied AI & LLM systems',
  'Computer vision research',
]

const FACTS = [
  { value: 'IEEE ICCIT 2025', label: 'Published — hybrid ViT' },
  { value: 'Armani Group', label: 'Sole in-house developer' },
  { value: '7 platforms', label: 'Shipped to production' },
]

/**
 * Above the fold, so the entrance is a CSS animation rather than an
 * IntersectionObserver — the hero paints on first frame with no JS round-trip.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-[104px] pb-[clamp(56px,8vw,104px)] sm:pt-[136px]"
    >
      <div className="u-shell">
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div>
            <div className="u-rise u-label mb-9 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              Available for opportunities
              <span aria-hidden className="text-ink-4">/</span>
              Dhaka, Bangladesh
            </div>

            <h1 className="u-rise u-display max-w-[10ch]" style={{ animationDelay: '60ms' }}>
              Maisha
              <br />
              Rahman
            </h1>

            <ul
              className="u-rise mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-rule pt-6"
              style={{ animationDelay: '120ms' }}
            >
              {DISCIPLINES.map((discipline) => (
                <li key={discipline} className="u-label !text-ink-2">
                  {discipline}
                </li>
              ))}
            </ul>

            <p className="u-rise u-prose mt-8 max-w-[52ch]" style={{ animationDelay: '180ms' }}>
              I build <strong>systems that reach production</strong> — from published Vision
              Transformer research to the CRM, commerce, and LLM platforms running inside a
              Bangladeshi business group. Computer Science graduate of East West University.
            </p>

            <div
              className="u-rise u-actions mt-11 flex flex-wrap items-center gap-4"
              style={{ animationDelay: '240ms' }}
            >
              <a
                href="#work"
                className="u-label !text-paper inline-flex items-center gap-3 rounded-lg bg-ink px-6 py-4 transition-opacity duration-200 hover:opacity-80"
              >
                Selected work
                <span aria-hidden>&rarr;</span>
              </a>
              <a
                href="/Maisha_Rahman_Software_Developer_Dhaka.pdf"
                target="_blank"
                rel="noreferrer"
                className="u-label !text-ink inline-flex items-center gap-3 border border-rule-strong px-6 py-4 transition-colors duration-200 hover:border-ink"
              >
                Résumé (PDF)
              </a>
            </div>
          </div>

          <CubeScene />
        </div>

        <dl
          className="u-rise mt-[clamp(56px,7vw,88px)] grid grid-cols-1 border-t border-rule sm:grid-cols-3"
          style={{ animationDelay: '300ms' }}
        >
          {FACTS.map((fact) => (
            <div
              key={fact.value}
              className="border-b border-rule py-6 sm:border-b-0 sm:border-r sm:border-rule sm:pr-8 sm:last:border-r-0 sm:[&:not(:first-child)]:pl-8"
            >
              <dt className="u-h3">{fact.value}</dt>
              <dd className="u-label mt-2">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
