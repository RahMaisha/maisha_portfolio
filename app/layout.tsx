import type { Metadata } from 'next'
import './globals.css'

// Update this if you move to a custom domain — every OG/canonical URL derives from it.
const SITE_URL = 'https://maisha-portfolio-nine.vercel.app'

const title = 'Maisha Rahman — AI Engineer & Fullstack Developer'
const description =
  'Fullstack and AI engineer in Dhaka, Bangladesh. In-house developer for Armani Group, IEEE ICCIT 2025 published researcher, building production CRM, e-commerce, and LLM systems.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    'Maisha Rahman',
    'Fullstack Developer',
    'AI Engineer',
    'Software Engineer',
    'Dhaka',
    'Bangladesh',
    'Laravel',
    'Angular',
    'Next.js',
    'Computer Vision',
    'Vision Transformer',
  ],
  authors: [{ name: 'Maisha Rahman', url: SITE_URL }],
  creator: 'Maisha Rahman',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Maisha Rahman',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maisha Rahman',
  url: SITE_URL,
  jobTitle: 'Software Developer',
  email: 'mailto:maisharahman01x@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'East West University',
  },
  sameAs: ['https://github.com/RahMaisha', 'https://linkedin.com/in/maisha-rahman-01x'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
