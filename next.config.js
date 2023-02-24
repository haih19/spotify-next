/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'scontent.fmaa10-1.fna.fbcdn.net',
         },
         {
            protocol: 'https',
            hostname: 'i.scdn.co',
         },
         {
            protocol: 'https',
            hostname: 'mosaic.scdn.co',
         },
      ],
      minimumCacheTTL: 1500000,
   },
}

module.exports = nextConfig
