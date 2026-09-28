import type { NextConfig } from "next";

/** Hosts where the site is live. Every other host (the vercel.app previews) is served with noindex,
 *  so search engines never index a copy that competes with dustinchaveleh.com. */
const PRODUCTION_HOST = "(www\\.)?dustinchaveleh\\.com";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1792, 2560],
  },
  // Previews (vercel.app and any host but dustinchaveleh.com) must never be indexed.
  async headers() {
    return [
      {
        source: "/:path*",
        missing: [{ type: "host", value: PRODUCTION_HOST }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
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
