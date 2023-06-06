/** @type {import('next').NextConfig} */

module.exports = {
  output:'standalone',
  trailingSlash:true,
  experimental:{
    appDir:true,
    images:{
      domains: ['eldenring.fanapis.com'],
  },
  },
  compiler:{
    styledComponents:true,
  },
}