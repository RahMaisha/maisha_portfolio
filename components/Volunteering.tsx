import Image from 'next/image'
import Reveal from './Reveal'
import Section from './Section'

/* Leadership roles come from the Leadership & Activities block of
   resume/Maisha_Rahman_Resume.tex; the site had been omitting them. */
const leadership = [
  {
    name: 'Editor & Creative Lead',
    org: 'EWU Robotics Club',
    period: '2023–25',
  },
  {
    name: 'LFR Team Leader',
    org: 'Led the hardware and firmware team',
    period: '2024',
  },
]

const volunteeringOrgs = [
  {
    name: 'Bangladesh Red Crescent Society',
    role: 'Volunteer',
    imagePath: '/project_images/Bangladesh_Red_Crescent_Society_Logo.svg.png',
    imageAlt: 'Bangladesh Red Crescent Society',
  },
  {
    name: 'Bangladesh Girl Guides Association',
    role: 'Volunteer',
    imagePath: '/project_images/Seal_of_the_Bangladesh_Girl_Guides_Association.svg.png',
    imageAlt: 'Bangladesh Girl Guides Association',
  },
]

export default function Volunteering() {
  return (
    <Section
      id="volunteering"
      index="07"
      label="Community"
      title="Leadership and volunteering."
      tone="paper-2"
    >
      <div className="grid gap-x-12 gap-y-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="u-label !text-ink border-b border-ink pb-2.5">Leadership</h3>
            <dl>
              {leadership.map((item) => (
                <div key={item.name} className="border-b border-rule py-5">
                  <dt className="text-[1.0625rem] font-medium tracking-[-0.015em]">{item.name}</dt>
                  <dd className="mt-1 flex flex-wrap items-baseline gap-x-2 text-[0.9375rem] text-ink-2">
                    {item.org}
                    <span aria-hidden className="text-ink-4">/</span>
                    <span className="u-label u-mono">{item.period}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <h3 className="u-label !text-ink border-b border-ink pb-2.5">Volunteering</h3>
            <dl>
              {volunteeringOrgs.map((org) => (
                <div key={org.name} className="flex items-center gap-5 border-b border-rule py-5">
                  <div className="relative h-11 w-11 shrink-0">
                    <Image
                      src={org.imagePath}
                      alt={org.imageAlt}
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <dt className="text-[1.0625rem] font-medium tracking-[-0.015em]">{org.name}</dt>
                    <dd className="u-label">{org.role}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
