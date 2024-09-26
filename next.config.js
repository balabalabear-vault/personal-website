const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'muselabs-eng.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.petsaveorg.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig