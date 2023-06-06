/** @type {import('next').NextConfig} */

const nextConfig = {
  output:'export',
  trailingSlash:true,
  experimental:{
    appDir:true,
  },
  images:{
    domains: ['eldenring.fanapis.com'],
  },
  compiler:{
    styledComponents:true,
  },
}

module.exports = nextConfig