import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "@/components/blog/BlogIndex";
import { blog, site, seo } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";

type Params = { params: Promise<{ tag: string }> };

const resolve = (tag: string) => blog.categories.find((c) => c.toLowerCase() === decodeURIComponent(tag).toLowerCase());

export function generateStaticParams() {
  return blog.categories.map((c) => ({ tag: c }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const category = resolve((await params).tag);
  if (!category) return { title: `${blog.headline} — ${site.logo}` };
  return pageMeta({ title: `${category} — ${site.logo}`, description: seo.blogCategory(category), path: `/blog/tag/${encodeURIComponent(category)}` });
}

/** /blog/tag/[tag] — the same index filtered to one category (existing URLs such as /blog/tag/Neighborhoods). */
export default async function BlogTagPage({ params }: Params) {
  const category = resolve((await params).tag);
  if (!category) notFound();
  return <BlogIndex category={category} />;
}
