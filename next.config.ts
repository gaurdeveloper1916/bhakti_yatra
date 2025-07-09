import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.gettyimages.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pinnacle.works",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
