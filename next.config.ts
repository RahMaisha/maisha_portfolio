import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The résumé used to be served under its old filename. Anyone holding
        // that link — a recruiter, an old application — still lands on the
        // current PDF instead of a 404.
        source: '/Maisha_Rahman_Fullstack_Dev_Resume.pdf',
        destination: '/Maisha_Rahman_Software_Developer_Dhaka.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
