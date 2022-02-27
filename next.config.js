/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy"],
  },
  target: 'experimental-serverless-trace',
}


module.exports = nextConfig