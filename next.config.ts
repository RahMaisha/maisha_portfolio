import type { NextConfig } from 'next'

/* Every filename the résumé has ever been served under. Recruiters keep links
   from applications sent months earlier, so each old path redirects to the
   current file rather than 404ing. Add to this list, never replace it. */
const RESUME = '/maisharahman-software-engineer.pdf'
const OLD_RESUME_PATHS = [
  '/Maisha_Rahman_Fullstack_Dev_Resume.pdf',
  '/Maisha_Rahman_Software_Developer_Dhaka.pdf',
]

const nextConfig: NextConfig = {
  async redirects() {
    return OLD_RESUME_PATHS.map((source) => ({
      source,
      destination: RESUME,
      permanent: true,
    }))
  },
}

export default nextConfig
