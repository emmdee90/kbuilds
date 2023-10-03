/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Arc Kasm',
    description: 'Arc custom store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://emmdee90.github.io/kbuilds/',
    contactUrl: 'https://github.com/emmdee90/kbuilds/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
