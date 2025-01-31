import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", 'us-west-2.graphassets.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
