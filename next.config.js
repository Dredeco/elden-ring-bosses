/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['eldenring.fanapis.com'],
        unoptimized: true,
    },
    output: 'export',
}

module.exports = nextConfig
