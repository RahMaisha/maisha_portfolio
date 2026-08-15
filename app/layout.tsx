import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'

/* Self-hosted at build time, so there is no render-blocking request to a third
   party before the page can paint its type. */
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter-tight',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

// Update this if you move to a custom domain — every OG/canonical URL derives from it.
const SITE_URL = 'https://maisha-portfolio-nine.vercel.app'

const title = 'Maisha Rahman — Software Engineer'
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
    /* The `js` class arms the scroll-reveal styles. It is rendered on the server
       rather than added by an inline script so that the markup React hydrates
       matches exactly; the <noscript> block below is what covers the
       scripting-disabled case. */
    <html lang="en" className={`js ${interTight.variable} ${jetbrainsMono.variable}`}>
      <head>
        <noscript>
          <style>{`.js .u-reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
