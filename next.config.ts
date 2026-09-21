import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Vehicle photography is served from /public/vehicles by default.
    // Add your CDN / storage host here when you switch to remote images.
    remotePatterns: [],
  },
};

export default nextConfig;
