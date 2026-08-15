import Image from 'next/image'
import Card3D from './Card3D'
import Reveal from './Reveal'
import Section from './Section'

const researchItems = [
  {
    type: 'Conference Paper',
    venue: 'IEEE ICCIT 2025',
    doi: '10.1109/ICCIT68739.2025.11491313',
    title: 'MAE-ViT: Hybrid SSL Vision Transformer for Kidney Segmentation',
    description:
      'Hybrid masked autoencoder and vision transformer for high-precision medical image segmentation with limited labeled data.',
    href: 'https://doi.org/10.1109/ICCIT68739.2025.11491313',
    imagePath: '/project_images/Mae-vit_publication.png',
    imageAlt: 'MAE-ViT publication preview',
  },
  {
    type: 'Open Dataset',
    venue: 'Mendeley Data',
    doi: '10.17632/9xgk2vc3sv.2',
    title: 'EDIBLESEED Dataset',
    description:
      'Publicly available image dataset on Mendeley Data for edible seed classification and computer vision research tasks.',
    href: 'https://data.mendeley.com/datasets/9xgk2vc3sv/2',
    imagePath: '/project_images/edible-seed_publication.png',
    imageAlt: 'EDIBLESEED Mendeley dataset preview',
  },
]

export default function Research() {
  return (
    <Section
      id="research"
      index="04"
      label="Research"
      title="Published work in computer vision and self-supervised learning."
      tone="paper-2"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {researchItems.map((item) => (
          <Reveal key={item.title} as="article">
            <Card3D className="h-full">
              <a href={item.href} target="_blank" rel="noreferrer" className="group flex h-full flex-col">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-lg bg-paper-2">
                  <Image
                    src={item.imagePath}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mb-4 flex items-baseline justify-between gap-4">
                  <span className="u-label rounded-full border border-rule-strong px-2.5 py-1 !text-[0.625rem] !text-ink-2">
                    {item.type}
                  </span>
                  <span className="u-label !text-ink shrink-0 underline decoration-rule-strong underline-offset-4">Open &rarr;</span>
                </div>

                <h3 className="max-w-[30ch] text-[1.3125rem] font-medium leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-2">
                  {item.description}
                </p>

                <dl className="mt-auto grid grid-cols-[5rem_minmax(0,1fr)] gap-x-4 gap-y-1 pt-7">
                  <dt className="u-label">Venue</dt>
                  <dd className="text-[0.875rem]">{item.venue}</dd>
                  <dt className="u-label">DOI</dt>
                  <dd className="u-mono break-all text-[0.8125rem] text-ink-2">{item.doi}</dd>
                </dl>
              </a>
            </Card3D>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
