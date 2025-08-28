// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // <-- Add this line
  },
};

module.exports = nextConfig;
