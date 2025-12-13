/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // helps catch potential React issues
  swcMinify: true,       // faster builds
  // Rewrite root path to serve index.html
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
