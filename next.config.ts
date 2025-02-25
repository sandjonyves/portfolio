import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storyset.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  /* config options here */
};

export default nextConfig;
