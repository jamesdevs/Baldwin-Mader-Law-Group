/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'as2.ftcdn.net',
      'as1.ftcdn.net',
      'backend.baldwinlawgroup.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/Contact-Us.aspx',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/Our-Practice-Areas/Securities-Fraud.aspx',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Articles/2017/March/Protecting-Loved-Ones-from-Fraud.aspx',
        destination: '/',
        permanent: true,
      },
      {
        source:
          '/Articles/2015/September/What-To-Know-About-Introducing-Broker-Dealers.aspx',
        destination: '/',
        permanent: true,
      },
      {
        source: '/attorneys.html',
        destination: '/',
        permanent: true,
      },

      {
        source: '/about.html',
        destination: '/',
        permanent: true,
      },

      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
