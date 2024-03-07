/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "as2.ftcdn.net",
      "as1.ftcdn.net",
    ],
  },
};

module.exports = nextConfig;
