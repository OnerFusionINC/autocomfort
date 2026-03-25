import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/autocomfort',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
