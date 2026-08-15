import Image from 'next/image'
import Reveal from './Reveal'
import Section from './Section'

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
      title="Volunteering."
      tone="paper-2"
    >
      <dl className="border-t border-ink">
        {volunteeringOrgs.map((org) => (
          <Reveal key={org.name}>
            <div className="flex items-center gap-6 border-b border-rule py-6">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src={org.imagePath}
                  alt={org.imageAlt}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <dt className="text-[1.0625rem] font-medium tracking-[-0.015em]">{org.name}</dt>
                <dd className="u-label">{org.role}</dd>
              </div>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
