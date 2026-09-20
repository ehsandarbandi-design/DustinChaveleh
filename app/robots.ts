import type { MetadataRoute } from "next";
import { site } from "@/lib/copy";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/styleguide", "/real-estate-iq/"] },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
