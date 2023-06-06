/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true
  },
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
      domains: ['eldenring.fanapis.com'],
      unoptimized: true,
  },
  output: 'export',
}