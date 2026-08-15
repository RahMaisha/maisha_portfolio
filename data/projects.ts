/**
 * Single source of truth for project data.
 *
 * Both the home page's Selected Work section and the /projects index read from
 * here — previously the same list was maintained in two files and had already
 * drifted (the Sporteroo entry was named differently in each).
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
        name: 'Guest & Visitor CRM',
        badge: 'Internal Tool',
        // Internal system — described only, no screenshots or public link.
        href: '',
        role: 'Sole Fullstack Developer',
        stack: ['Laravel', 'Angular', 'MySQL', 'REST APIs'],
        summary:
          'End-to-end visitor tracking CRM with multi-criteria filtering, blacklist enforcement, interview tracking, guest-category analytics, automated flagging rules, and a stakeholder dashboard for raising and approving meeting requests.',
        impact:
          'Owned the full lifecycle solo: requirement analysis, system design, UI/UX, frontend, backend, and unit testing.',
      },
      {
        name: 'E-commerce Platform',
        badge: 'Live Product',
        // TODO: add the public storefront URL here to surface a "Visit" link.
        href: '',
        role: 'Sole Fullstack Developer',
        stack: ['Laravel', 'Angular', 'MySQL', 'WhatsApp API', 'Chatbot'],
        summary:
          'Full-stack storefront backed by a deep admin panel: bulk product import from CSV, dynamic gift vouchers, order tracking, inventory management, sales analytics, WhatsApp integration, and an embedded chatbot.',
        impact:
          'Complete commerce stack built and shipped single-handedly, from system design through to production release.',
      },
      {
        name: 'MSME E-Commerce Marketplace',
        badge: 'Platform Handover',
        // TODO: add the public URL once it launches.
        href: '',
        role: 'Upgrade & Redevelopment',
        stack: ['Laravel', 'Angular', 'MySQL'],
        summary:
          'Multi-vendor MSME marketplace originally built by a senior engineer to a scope comparable to Amazon and Daraz. Handed to me for upgrade and redevelopment, and for preparing the platform for commercial launch.',
        impact:
          'Working inside an established production-scale codebase — reading someone else’s architecture, extending it, and taking it to launch.',
      },
      // -----------------------------------------------------------------------
      // Inventory Management System — build starts Sep 2026.
      // Uncomment this entry once it is actually built and shipped.
      // {
      //   name: 'Inventory Management System',
      //   badge: 'Internal Tool',
      //   href: '',
      //   role: 'Sole Fullstack Developer',
      //   stack: ['Laravel', 'Angular', 'MySQL'],
      //   summary:
      //     'Inventory management system for the group brand, covering stock tracking, movement history, and reporting.',
      //   impact:
      //     'Built solo from requirement analysis through system design, implementation, and unit testing.',
      // },
      // -----------------------------------------------------------------------
      {
        name: 'Resume Builder — NTI Learn',
        badge: 'EdTech Feature',
        // TODO: add the NTI Learn URL here to surface a "Visit" link.
        href: '',
        role: 'Fullstack Developer',
        stack: ['Laravel', 'Angular', 'MySQL'],
        summary:
          'Resume-building tool for an educational platform offering online courses, taking the feature from requirement gathering through interface design to production release.',
        impact:
          'Shipped a user-facing feature on a live learning platform, coordinating with product, design, and SQA.',
      },
    ],
  },
  {
    employer: 'Inkphase',
    period: 'Nov 2025 – May 2026',
    projects: [
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
      {
        name: 'Sporteroo — Sports Marketplace',
        badge: 'Client Work',
        href: 'https://sporteroo.com/',
        role: 'Fullstack Contributor',
        stack: ['Laravel', 'Angular', 'MySQL'],
        summary:
          'Developed the majority of the frontend and backend application layers for the live product, including feature implementation and system integration.',
        impact:
          'Live sports platform shipped with chatbot integration and coordinated full-stack execution.',
        imagePath: '/project_images/sporteroo_landing.png',
        imageAlt: 'Sporteroo landing page preview',
      },
      {
        name: 'Multi-tenant Chatbot Platform',
        badge: 'Behind Login',
        href: '',
        role: 'Fullstack Contributor',
        stack: ['Laravel', 'Angular', 'MySQL', 'LLM APIs'],
        summary:
          'Developed a multi-tenant chatbot platform integrating third-party LLM APIs with customer-facing web applications and internal management dashboards.',
        impact:
          'Best shown with screenshots because the platform is private and not accessible from the public site.',
        imagePath: '/project_images/chatbot_dashboard1.png',
        imageAlt: 'Multi-tenant chatbot platform preview',
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
    href: 'https://github.com/RahMaisha/Health-Sync-Capstone.git',
    desc: 'AI healthcare platform with real-time kidney stone detection. Microservices backend with Explainable AI heatmaps via Grad-CAM++.',
    impact: '98.6% diagnostic accuracy and 10k+ samples through self-supervised learning.',
    stack: ['Laravel', 'FastAPI', 'PyTorch', 'Docker', 'Grad-CAM++'],
  },
  {
    name: 'MAE-ViT',
    badge: 'ICCIT 2025',
    desc: 'Hybrid Masked Autoencoder plus Vision Transformer for medical image segmentation, optimized for data-scarce environments.',
    impact: 'Outperformed CNN baselines in low-data medical imaging experiments.',
    stack: ['PyTorch', 'ViT', 'MAE', 'SSL', 'Python'],
  },
  {
    name: 'Career Hive',
    badge: 'MERN Stack',
    desc: 'Full-stack job portal with resume builder, JWT auth, and automated CI/CD pipelines.',
    impact: 'Strong showcase project for product thinking, auth, and developer workflow automation.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'GitHub Actions'],
  },
  {
    name: 'LLM Recommender',
    badge: 'NLP / AI',
    desc: 'AI recommendation assistant using NLP parsing, embeddings, and hybrid collaborative filtering.',
    impact: 'Demonstrates practical LLM integration and recommendation-system thinking.',
    stack: ['OpenAI API', 'Python', 'HuggingFace', 'Scikit-learn'],
  },
]
