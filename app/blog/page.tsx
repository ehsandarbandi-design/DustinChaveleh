import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { blog, site, seo } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ title: `${blog.headline} — ${site.logo}`, description: seo.blog, path: "/blog" });

export default function BlogPage() {
  return <BlogIndex />;
}
