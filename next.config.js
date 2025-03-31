/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'bg', 'de'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  images: {
    domains: ['www.elegantthemes.com'],
  },
}

module.exports = nextConfig
