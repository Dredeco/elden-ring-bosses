/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['eldenring.fanapis.com'],
        unoptimized: true,
    }
}

module.exports = nextConfig
