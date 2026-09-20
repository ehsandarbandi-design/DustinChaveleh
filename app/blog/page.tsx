import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { blog, site } from "@/lib/copy";

export const metadata: Metadata = { title: `${blog.headline} — ${site.logo}` };

export default function BlogPage() {
  return <BlogIndex />;
}
