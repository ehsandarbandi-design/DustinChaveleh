import type { MetadataRoute } from "next";
import { site, blog } from "@/lib/copy";
import { linkedPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/meetdustin", "/market-update", "/blog", "/playrealestateiq", "/work-with-dustin"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...blog.categories.map((c) => ({ url: `${site.url}/blog/tag/${encodeURIComponent(c)}`, changeFrequency: "weekly" as const, priority: 0.4 })),
    ...linkedPosts.map((p) => ({ url: `${site.url}${p.href}`, lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
