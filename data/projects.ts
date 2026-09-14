/**
 * Single source of truth for project data.
 *
 * Both the home page's Selected Work section and the /projects index read from
 * here — previously the same list was maintained in two files and had already
 * drifted (the Sporteroo entry was named differently in each).
 *
 * Content is kept in step with resume/Maisha_Rahman_Resume.tex; every figure
 * below appears there. When the résumé changes, change this too.
 */

export type Project = {
  name: string
  badge: string
  href: string
  role: string
  stack: string[]
  summary: string
  impact: string
  imagePath?: string
  imageAlt?: string
}

export type ProjectGroup = {
  employer: string
  period: string
  projects: Project[]
}

export const professionalGroups: ProjectGroup[] = [
  {
    employer: 'CellsTech · Armani Group',
    period: 'Jun 2026 – Present',
    projects: [
      {
        name: 'Natunatta',
        badge: 'Live Product',
        href: 'https://natunatta.com',
        role: 'Sole Fullstack Developer',
        stack: ['Laravel', 'Angular', 'MySQL', 'bKash', 'WhatsApp API', 'Chatbot'],
        summary:
          'Led the full redesign and rebuild end to end — requirement analysis directly with stakeholders, UI/UX, a rebuilt frontend, and a backend written from scratch. The admin side covers bulk CSV product import, gift vouchers, order tracking, inventory management, sales analytics, WhatsApp integration and an embedded chatbot, with bKash for mobile payments.',
        impact:
          'The group’s first fully functional e-commerce platform, now processing 150+ orders a month across 30+ products.',
      },
      {
        name: 'NAJUS MSME Marketplace',
        badge: 'Platform Handover',
        href: '',
        role: 'Redevelopment Lead',
        stack: ['Laravel', 'Angular', 'MySQL', 'SSLCommerz'],
        summary:
          'Selected to lead the redevelopment of an established multi-vendor marketplace. Found and fixed hundreds of bugs and built the functions still missing to get it launch ready, including SSLCommerz payment integration.',
        impact: 'A marketplace serving 200+ member enterprises, taken from blocked to launch ready.',
      },
      {
        name: 'Inventory & Manufacturing ERP',
        badge: 'In Development',
        href: '',
        role: 'Sole Fullstack Developer',
        stack: ['Laravel', 'Angular', 'MySQL'],
        summary:
          'Procurement (PR/PO/GRN), bill of materials, multi-warehouse stock, multi-level approvals, VAT-compliant billing and fraud controls.',
        impact: 'Being designed for commercial release, not just internal use.',
      },
      {
        name: 'Guest & Visitor CRM',
        badge: 'Internal Tool',
        // Internal system — described only, no screenshots or public link.
        href: '',
        role: 'Sole Fullstack Developer',
        stack: ['Laravel', 'Angular', 'MySQL', 'REST APIs'],
        summary:
          'End-to-end visitor tracking with multi-criteria filtering, blacklist enforcement, ID tracking, interview candidate tracking, guest-category analytics and a meeting-approval dashboard.',
        impact: 'In use at headquarters and at every branch company in the group.',
      },
      {
        name: 'Resume Builder — NTI Learn',
        badge: 'Live Product',
        href: 'https://ntilearnbd.com',
        role: 'Fullstack Developer',
        stack: ['Laravel', 'Angular', 'MySQL', 'SSLCommerz'],
        summary:
          'Cleared the major bugs blocking release on the learning platform, then built a resume builder tied to NAJUS.org membership, carrying it from requirements through to production.',
        impact: 'Onboarded and live on a platform selling online courses.',
      },
    ],
  },
  {
    employer: 'Inkphase',
    period: 'Nov 2025 – May 2026',
    projects: [
      {
        name: 'Sporteroo — Sports Marketplace',
        badge: 'Client Work',
        href: 'https://sporteroo.com/',
        role: 'Fullstack Contributor',
        stack: ['Laravel', 'Angular', 'MySQL'],
        summary:
          'Built frontend and backend for the live sports marketplace, including feature implementation, system integration and chatbot integration.',
        impact: 'One of six production products delivered across the role.',
        imagePath: '/project_images/sporteroo_landing.png',
        imageAlt: 'Sporteroo landing page preview',
      },
      {
        name: 'Multi-tenant AI Chatbot Platform',
        badge: 'Behind Login',
        href: '',
        role: 'Fullstack Contributor',
        stack: ['Laravel', 'JavaScript', 'MySQL', 'OpenRouter API'],
        summary:
          'A multi-tenant chatbot service on a shared database, isolating clients by site key with per-client branding, welcome messages and content policies. OpenRouter sits in front as an LLM gateway with a fallback chain for resilience against model outages and rate limits, plus keyword-based escalation to human support.',
        impact:
          'Shipped a framework-agnostic single-script widget running on React, Next.js, Angular, Laravel, Django, Flask, Node.js and Shopify.',
        imagePath: '/project_images/chatbot_dashboard1.png',
        imageAlt: 'Multi-tenant chatbot platform preview',
      },
      {
        name: 'Social Community Platform',
        badge: 'Client Work',
        // Client asked not to be named or linked — anonymised on purpose. Do not add a URL here.
        href: '',
        role: 'Fullstack Contributor',
        stack: ['Laravel', 'Angular', 'MySQL'],
        summary:
          'Built most of the frontend and backend for the live platform while collaborating with design, QA, and product direction from the team.',
        impact:
          'Production website with live chatbot experience and full-stack delivery across application flows.',
        imagePath: '/project_images/cclub_landing.png',
        imageAlt: 'Community platform landing page preview',
      },
    ],
  },
]

export type PersonalProject = {
  name: string
  badge: string
  href?: string
  desc: string
  impact: string
  stack: string[]
}

export const personalProjects: PersonalProject[] = [
  {
    name: 'HealthSync',
    badge: 'Live Build',
    href: 'https://github.com/RahMaisha/Health-Sync-Capstone',
    desc: 'AI healthcare diagnostic platform for kidney stone detection on ultrasound. Benchmarked five CNN and Transformer backbones, then applied self-supervised (BYOL) and semi-supervised (FlexMatch, FixMatch) learning. Grad-CAM heatmaps provide explainability alongside predictions, and NephroSense adds an AI healthcare chatbot.',
    impact:
      '99.89% accuracy on 10,500+ ultrasound images, cutting labeled-data needs by 80%.',
    stack: ['Laravel', 'FastAPI', 'PyTorch', 'Grad-CAM', 'MySQL'],
  },
  {
    name: 'MAE-ViT',
    badge: 'ICCIT 2025',
    desc: 'Hybrid Masked Autoencoder plus Vision Transformer for medical image segmentation, optimized for data-scarce environments.',
    impact: 'Outperformed CNN baselines in low-data medical imaging experiments.',
    stack: ['PyTorch', 'ViT', 'MAE', 'SSL', 'Python'],
  },
  {
    name: 'Neera',
    badge: 'AWS Hackathon',
    href: 'https://neera-maternal-care-assistant.vercel.app/',
    desc: 'Multilingual maternity care assistant built on a Bangla/English RAG pipeline over WHO and UNICEF guidance — scraped web content and OCR’d Bangla PDFs with Tesseract, embedded into Pinecone, with language-aware retrieval that matches queries to the reader’s language.',
    impact:
      'Built at Cloud Camp BD; a FastAPI ingestion service handles URL and PDF sources with background processing and webhooks.',
    stack: ['RAG', 'Pinecone', 'Mistral', 'FastAPI', 'Tesseract', 'NLP'],
  },
  {
    name: 'CareerHive',
    badge: 'Full-Stack',
    desc: 'Job portal with role-based access for job seekers and recruiters — JWT auth, job search and filtering, postings, company profiles, application tracking and a resume builder.',
    impact:
      'REST APIs on Express and MongoDB with Cloudinary-backed uploads; frontend on Redux Toolkit, Tailwind and Radix UI.',
    stack: ['Next.js', 'TypeScript', 'Express', 'MongoDB'],
  },
]
