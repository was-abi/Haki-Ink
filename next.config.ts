import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external placeholder images during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
