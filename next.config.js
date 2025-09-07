/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/trenchpad' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/trenchpad' : '',
}

module.exports = nextConfig 