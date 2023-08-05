/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three, monogram-ui"],
  images: {
    domains: ["cdn.raster.app"],
  },
};

module.exports = nextConfig;
