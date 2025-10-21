/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/space-portfolio',
  assetPrefix: '/space-portfolio/',
}

module.exports = nextConfig
