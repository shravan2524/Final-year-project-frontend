/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains : ['www.jdrf.org','images.unsplash.com'],
},
}

module.exports = nextConfig