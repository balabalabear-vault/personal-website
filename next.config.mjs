import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

// const dns = require("dns");
// dns.setDefaultResultOrder("ipv4first");

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
  // TODO: https://github.com/hashicorp/next-mdx-remote/issues/467
  transpilePackages: ['next-mdx-remote'],
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);