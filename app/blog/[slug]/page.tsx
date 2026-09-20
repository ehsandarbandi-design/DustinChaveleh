import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Hairline from "@/components/Hairline";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Contact from "@/components/home/Contact";
import { mdxComponents } from "@/components/blog/mdx";
import { findPost, linkedPosts, readPostBody, slugOf } from "@/lib/posts";
import { site } from "@/lib/copy";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return linkedPosts.map((p) => ({ slug: slugOf(p) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = findPost((await params).slug);
  return { title: `${post?.title ?? site.title} — ${site.logo}`, description: post?.excerpt };
}

/** /blog/[slug] (BUILD.md §5): single column in columns 7–18, date and tags in Mono over the H1, body in P2
 *  (from content/blog/<slug>.mdx), a hairline, "⤷ Back to the blog", then the home page's contact section. */
export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();
  const source = await readPostBody(slug);
  const body = source ? (await compileMDX({ source, components: mdxComponents, options: { parseFrontmatter: true } })).content : null;

  return (
    <main className="below-header">
      <article className={`${styles.article} page`} data-tone="paper">
        <div className="grid">
          <div className={styles.column}>
            <header className={styles.header}>
              <Reveal as="p" className={`mono ${styles.meta}`}>
                <time dateTime={post.date}>{post.dateLabel}</time>
                {post.tags?.length ? <span className={styles.tags}>{post.tags.join(" · ")}</span> : null}
              </Reveal>
              <Reveal as="h1" className="h1">
                {post.title}
              </Reveal>
            </header>
            <Reveal className={styles.body}>
              {body ?? (
                <>
                  <p className="p2">{post.excerpt}</p>
                  {/* Article bodies are exported from Squarespace into content/blog/<slug>.mdx */}
                  <p className={`mono ${styles.needed}`}>[ ARTICLE BODY NEEDED — content/blog/{slug}.mdx ]</p>
                </>
              )}
            </Reveal>
            <Hairline className={styles.rule} />
            <Reveal>
              <Button variant="outlined" href="/blog">
                Back to the blog
              </Button>
            </Reveal>
          </div>
        </div>
      </article>
      <Contact />
    </main>
  );
}
