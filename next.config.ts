import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    qualities: [70, 75, 80],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "goexecution.com" },
    ],
  },
};
export default nextConfig;
