/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["gsap"],
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
