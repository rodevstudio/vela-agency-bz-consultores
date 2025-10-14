/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['es', 'ca'],
    defaultLocale: 'es'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'trusty-sparkle-ba3baf85e4.media.strapiapp.com',
      }
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
