/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // enables static export
  images: {
    unoptimized: true,
  },
  basePath: "/newdotsite",  // IMPORTANT: replace with your repo name
  assetPrefix: "/newdotsite",
};

module.exports = nextConfig;
