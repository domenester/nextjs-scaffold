/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    AUTH_URL: process.env.AUTH_URL
  },
  trailingSlash: false
}

module.exports = nextConfig
