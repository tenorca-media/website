import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for static export
  trailingSlash: true, // Prevents 404 errors on Vercel static routing
  images: {
    unoptimized: true, // Recommended for static exports since Next.js image optimization requires a server
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "notion-avatars.netlify.app",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default nextConfig;