/** @type {import('next').NextConfig} */
const nextConfig = {
  // The name of your GitHub repo
  basePath: '/newdotsite',
  assetPrefix: '/newdotsite/',
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
