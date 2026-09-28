import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { posts, type Post } from "@/lib/copy";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Every post with a URL, newest first. */
export const linkedPosts: Post[] = posts.filter((p) => p.href);

export const slugOf = (post: Post) => post.href.replace(/^\/blog\//, "");
/** Route params can arrive percent-encoded (the Duboce Triangle URL has spaces). */
const same = (a: string, b: string) => a === b || safeDecode(a) === safeDecode(b);
const safeDecode = (s: string) => { try { return decodeURIComponent(s); } catch { return s; } };

export function findPost(slug: string): Post | undefined {
  return linkedPosts.find((p) => same(slugOf(p), slug));
}

/** The MDX body for a slug, if content/blog/<slug>.mdx (or .md) exists. */
export async function readPostBody(slug: string): Promise<string | null> {
  for (const ext of ["mdx", "md"]) {
    try {
      return await readFile(path.join(BLOG_DIR, `${slug}.${ext}`), "utf8");
    } catch {
      /* try the next extension */
    }
  }
  return null;
}

export async function listPostBodies(): Promise<string[]> {
  try {
    return (await readdir(BLOG_DIR)).filter((f) => /\.mdx?$/.test(f)).map((f) => f.replace(/\.mdx?$/, ""));
  } catch {
    return [];
  }
}
