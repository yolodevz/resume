/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["monogram-ui"],
  images: {
    domains: ["cdn.raster.app"],
  },
};

module.exports = nextConfig;
