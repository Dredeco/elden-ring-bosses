/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['eldenring.fanapis.com'],
        unoptimized: true,
    }
}

module.exports = nextConfig
