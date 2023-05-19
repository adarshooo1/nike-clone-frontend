/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Increase the timeout limit to a larger value (e.g., 120 seconds)
  serverRuntimeConfig: {
    staticPageGenerationTimeout: 120,
  },
};

module.exports = nextConfig;
