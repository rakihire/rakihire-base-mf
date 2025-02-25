import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/rakigeneric/rakigeneric-workflows/blob/main/docs/docs/assets/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
