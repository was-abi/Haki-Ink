/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external placeholder images during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/reviews/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
