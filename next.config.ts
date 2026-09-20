import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1792, 2560],
  },
  // The guides live on the home page (Taking the Next Step); keep the old URLs working.
  async redirects() {
    return [
      { source: "/buyers-guide", destination: "/#next-step", permanent: true },
      { source: "/sellers-guide", destination: "/#next-step", permanent: true },
    ];
  },
};

export default nextConfig;
