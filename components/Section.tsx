import Reveal from './Reveal'

/**
 * Every section on the page is built from the same three parts: a hairline top
 * rule, an uppercase index label, and a display heading. Keeping that in one
 * component is what makes the vertical rhythm hold across nine sections.
 */
export default function Section({
  id,
  index,
  label,
  title,
  intro,
  tone = 'paper',
  children,
}: {
  id: string
  index: string
  label: string
  title: React.ReactNode
  intro?: React.ReactNode
  tone?: 'paper' | 'paper-2'
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`border-t border-rule py-[clamp(72px,10vw,132px)] ${
        tone === 'paper-2' ? 'bg-paper-2' : 'bg-paper'
      }`}
    >
      <div className="u-shell">
        <Reveal>
          <div className="mb-[clamp(40px,5vw,64px)]">
            <div className="mb-6 flex items-baseline gap-4">
              <span className="u-label u-mono !text-ink">{index}</span>
              <span className="u-label">{label}</span>
              <span aria-hidden className="h-px flex-1 translate-y-[-3px] bg-rule" />
            </div>

            <h2 className="u-h2 max-w-[18ch]">{title}</h2>

            {intro ? <p className="u-prose mt-7 max-w-[62ch]">{intro}</p> : null}
          </div>
        </Reveal>

        {children}
      </div>
    </section>
  )
}
