/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        HOSTNAME: 'localhost',
        PORT: '3001',
        HOST: 'http://localhost:3001'
    },
    async redirects() {
        return [
          {
            source: '/home',
            destination: '/',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
