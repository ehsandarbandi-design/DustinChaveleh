import Link from "next/link";
import Reveal from "@/components/Reveal";
import Hairline from "@/components/Hairline";
import Img from "@/components/Img";
import Card from "@/components/Card";
import TextLink from "@/components/TextLink";
import { blog, home, posts, neighborhoodPosts, type Post } from "@/lib/copy";
import styles from "./BlogIndex.module.css";

/** Every post, newest first. Neighborhood Guide posts have no URLs in content/copy.md yet. */
export const allPosts: Post[] = [...posts, ...neighborhoodPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

/** A post matches a category when a tag equals it, or starts with its singular (so "Neighborhood Guide" sits under Neighborhoods). */
const matches = (post: Post, category: string) => {
  const c = category.toLowerCase();
  const stem = c.replace(/s$/, "");
  return (post.tags ?? []).some((t) => t.toLowerCase() === c || t.toLowerCase().startsWith(stem));
};

/** /blog and /blog/tag/[tag] (BUILD.md §5): H1, the category filter row in Mono (active category underlined),
 *  the newest post as a full-width featured row with a large image, then the rest in two columns. */
export default function BlogIndex({ category }: { category?: string }) {
  const list = category ? allPosts.filter((p) => matches(p, category)) : allPosts;
  const [featured, ...rest] = list;
  return (
    <main className="below-header">
      <section className={`${styles.head} page`} data-tone="paper">
        <div className="grid">
          <Reveal as="h1" className={`h1 ${styles.headline}`}>
            {blog.headline}
          </Reveal>
        </div>
        <nav className={styles.filters}>
          <ul className={styles.filterList}>
            {blog.categories.map((c) => {
              const active = !!category && c.toLowerCase() === category.toLowerCase();
              return (
                <li key={c}>
                  <Link href={`/blog/tag/${encodeURIComponent(c)}`} className={`mono ${styles.filter}`} aria-current={active ? "page" : undefined}>
                    {c}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Hairline />
        </nav>
      </section>

      <section className={`${styles.posts} page`} data-tone="paper">
        {featured ? (
          <article className={`grid ${styles.featured}`}>
            <Reveal as="figure" className={styles.featuredMedia}>
              {featured.image ? <Img src={featured.image} alt={featured.title} fill sizes="(max-width: 767px) 100vw, 55vw" className={styles.img} eager /> : <div className={styles.placeholder} aria-hidden="true" />}
            </Reveal>
            <div className={styles.featuredText}>
              <p className={`mono ${styles.meta}`}>{featured.dateLabel}</p>
              <h2 className="h2">{featured.href ? <TextLink href={featured.href}>{featured.title}</TextLink> : featured.title}</h2>
              <p className={`p2 ${styles.excerpt}`}>{featured.excerpt}</p>
              {featured.href ? (
                <TextLink href={featured.href} className="h4">
                  {home.journal.cardLink}
                </TextLink>
              ) : null}
            </div>
          </article>
        ) : null}
        {rest.length ? <Hairline /> : null}
        <ul className={`grid ${styles.list}`}>
          {rest.map((post, i) => (
            <Reveal as="li" key={post.title} delay={(i % 2) * 80} className={styles.item}>
              <Card image={post.image ? { src: post.image, alt: post.title } : undefined} meta={post.dateLabel} title={post.title} text={post.excerpt} link={post.href ? { label: home.journal.cardLink, href: post.href } : undefined} sizes="(max-width: 767px) 100vw, 45vw" />
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
