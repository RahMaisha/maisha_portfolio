import Reveal from './Reveal'
import Section from './Section'

type Skill = { name: string; startDate: Date }

/**
 * Laid out as a spec sheet rather than one row per skill. A single 33-row list
 * ran 2,474px with a 200px label column that sat empty for most of its height.
 *
 * Order is chosen for the layout, not alphabetically: the three four-item
 * groups fill the first row exactly, and the second row steps down 9 → 7 → 5.
 * Both rows resolve to a clean edge, so nothing is left orphaned. Reordering
 * here is the whole alignment fix — see the grid below.
 */
const groups: { title: string; smOrder: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    smOrder: 'sm:order-1',
    skills: [
      { name: 'Python', startDate: new Date(2020, 4, 1) },
      { name: 'TypeScript', startDate: new Date(2024, 4, 1) },
      { name: 'JavaScript', startDate: new Date(2021, 4, 1) },
      { name: 'PHP', startDate: new Date(2024, 4, 1) },
    ],
  },
  {
    title: 'Backend',
    smOrder: 'sm:order-2',
    skills: [
      { name: 'Laravel', startDate: new Date(2024, 4, 1) },
      { name: 'Django', startDate: new Date(2025, 0, 1) },
      { name: 'Node.js', startDate: new Date(2021, 4, 1) },
      { name: 'FastAPI', startDate: new Date(2025, 0, 1) },
    ],
  },
  {
    title: 'Databases',
    smOrder: 'sm:order-3',
    skills: [
      { name: 'PostgreSQL', startDate: new Date(2025, 11, 1) },
      { name: 'MySQL', startDate: new Date(2021, 4, 1) },
      { name: 'MongoDB', startDate: new Date(2024, 4, 1) },
      { name: 'Redis', startDate: new Date(2024, 10, 1) },
    ],
  },
  {
    title: 'AI / Machine Learning',
    smOrder: 'sm:order-5',
    skills: [
      { name: 'RAG', startDate: new Date(2026, 1, 1) },
      { name: 'Vector Embeddings', startDate: new Date(2026, 1, 1) },
      { name: 'PyTorch', startDate: new Date(2021, 4, 1) },
      { name: 'Hugging Face', startDate: new Date(2023, 4, 1) },
      { name: 'NLP', startDate: new Date(2023, 4, 1) },
      { name: 'Transformers', startDate: new Date(2024, 4, 1) },
      { name: 'LLMs', startDate: new Date(2024, 4, 1) },
      { name: 'Computer Vision', startDate: new Date(2024, 4, 1) },
      { name: 'Self-Supervised Learning', startDate: new Date(2024, 4, 1) },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    smOrder: 'sm:order-6',
    skills: [
      { name: 'Docker', startDate: new Date(2024, 4, 1) },
      { name: 'CI/CD', startDate: new Date(2023, 4, 1) },
      { name: 'Git', startDate: new Date(2020, 4, 1) },
      { name: 'Cloudflare', startDate: new Date(2026, 5, 1) },
      { name: 'DigitalOcean', startDate: new Date(2026, 3, 1) },
      { name: 'Firebase', startDate: new Date(2024, 10, 1) },
      { name: 'Vercel', startDate: new Date(2024, 4, 1) },
      { name: 'cPanel', startDate: new Date(2025, 10, 1) },
      { name: 'Linux', startDate: new Date(2022, 4, 1) },
    ],
  },
  {
    title: 'Frontend',
    smOrder: 'sm:order-4',
    skills: [
      { name: 'React', startDate: new Date(2024, 4, 1) },
      { name: 'Next.js', startDate: new Date(2024, 4, 1) },
      { name: 'Angular', startDate: new Date(2024, 10, 1) },
      { name: 'Tailwind CSS', startDate: new Date(2024, 4, 1) },
    ],
  },
]

function getExperience(startDate: Date) {
  const diffMs = Date.now() - startDate.getTime()
  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44))
  if (diffMonths < 12) return `${Math.max(1, diffMonths)}mo`
  return `${Math.floor(diffMonths / 12)}y`
}

export default function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      label="Capabilities"
      title="The stack, and how long I've been in it."
    >
      {/* A grid, not column flow. Column flow packs without gaps but lets each
          column run to its own length, so the group headings land at unrelated
          heights and the last group is orphaned. A grid aligns every heading
          across a row; the group order above keeps the rows even. */}
      <Reveal>
        <div className="grid items-start gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className={`${group.smOrder} lg:order-none`}>
              <h3 className="u-label !text-ink border-b border-ink pb-2.5">{group.title}</h3>
              <dl>
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-baseline justify-between gap-4 border-b border-rule py-2"
                  >
                    <dt className="text-[0.9375rem] font-medium">{skill.name}</dt>
                    <dd className="u-mono shrink-0 text-[0.8125rem] tabular-nums text-ink-3">
                      {getExperience(skill.startDate)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
