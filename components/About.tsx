import Image from 'next/image'
import Reveal from './Reveal'
import Section from './Section'

const FOCUS = [
  {
    title: 'Production web, SaaS & mobile',
    body: 'End-to-end delivery on live products — architecture, APIs, interface, deployment, and security across the full stack.',
  },
  {
    title: 'Medical AI & computer vision',
    body: 'IEEE-published hybrid ViT architecture for kidney segmentation, reaching 98.6% diagnostic accuracy on a self-curated dataset.',
  },
  {
    title: 'AI systems & CRM',
    body: 'LLM-powered systems in commercial production — chatbots, embeddable widgets, and NLP pipelines behind real interfaces.',
  },
  {
    title: 'Backend & infrastructure',
    body: 'Platforms built for concurrent load, with horizontal scaling, caching layers, and considered database architecture.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Engineer across production systems and applied research."
    >
      <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[300px_minmax(0,1fr)]">
        {/* Portrait + credentials */}
        <Reveal>
          <div className="lg:sticky lg:top-[100px]">
            <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden bg-paper-2">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Maisha Rahman"
                fill
                sizes="(max-width: 1024px) 300px, 300px"
                className="object-cover object-top"
                priority
              />
            </div>

            <dl className="mt-8 border-t border-rule">
              <div className="border-b border-rule py-4">
                <dt className="u-label">Current</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug">
                  Junior Software Developer
                  <span className="block text-ink-2">CellsTech · Armani Group</span>
                </dd>
              </div>
              <div className="border-b border-rule py-4">
                <dt className="u-label">Education</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug">
                  B.Sc Computer Science &amp; Engineering
                  <span className="block text-ink-2">East West University</span>
                </dd>
              </div>
              <div className="border-b border-rule py-4">
                <dt className="u-label">Distinction</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug">
                  Medha Lalon Scholar
                  <span className="block text-ink-2">
                    Top 3.2% of all students, East West University
                  </span>
                </dd>
              </div>
              <div className="border-b border-rule py-4">
                <dt className="u-label">Based in</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug">Dhaka, Bangladesh</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        {/* Bio + focus */}
        <div>
          <Reveal delay={80}>
            <div className="max-w-[64ch] space-y-6">
              <p className="u-prose text-[1.1875rem] !text-ink">
                I&rsquo;m a software engineer focused on backend systems, full-stack development, and
                applied AI — working across production web applications, APIs, databases, and
                deployment workflows, alongside computer vision research.
              </p>
              <p className="u-prose">
                I&rsquo;m currently the <strong>in-house software developer for Armani Group</strong>{' '}
                through its tech arm <strong>CellsTech</strong>, based at group headquarters as the
                sole engineer on the group&rsquo;s software. I&rsquo;ve delivered{' '}
                <strong>multiple systems and web applications</strong> there — a guest and visitor
                management CRM, a full-featured e-commerce platform, and an MSME marketplace —
                typically running several in parallel and carrying each end to end through
                requirement analysis, system design, UI/UX, frontend, backend, and unit testing.
                Alongside the build work I&rsquo;m the engineering point of contact for product,
                business analysis, SQA, design, and PR.
              </p>
              <p className="u-prose">
                Previously at <strong>Inkphase</strong>, I contributed to multiple production
                applications including SaaS platforms, CRM systems, e-commerce products, and a
                high-traffic news platform. I also worked on LLM-integrated chatbot systems deployed
                across client websites, building backend APIs, frontend interfaces, and
                database-driven workflows in Laravel, Django, PostgreSQL, Angular, and MySQL.
              </p>
              <p className="u-prose">
                Alongside industry work I conduct research in computer vision and self-supervised
                learning. My work on hybrid Vision Transformer architectures for medical image
                segmentation was accepted at <strong>IEEE ICCIT 2025</strong>, and I&rsquo;ve
                released a public medical imaging dataset on Mendeley Data.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-14">
              <h3 className="u-label mb-6">Focus areas</h3>
              <dl className="grid gap-x-12 border-t border-rule sm:grid-cols-2">
                {FOCUS.map((item) => (
                  <div key={item.title} className="border-b border-rule py-6">
                    <dt className="text-[1.0625rem] font-medium tracking-[-0.015em]">
                      {item.title}
                    </dt>
                    <dd className="mt-2 max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-2">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
