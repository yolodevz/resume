/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["monograms-ui"],
  images: {
    domains: ["cdn.raster.app"],
  },
};

module.exports = nextConfig;
