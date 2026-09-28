import Link from "next/link";
import Reveal from "@/components/Reveal";
import Hairline from "@/components/Hairline";
import Img from "@/components/Img";
import Card from "@/components/Card";
import TextLink from "@/components/TextLink";
import Button from "@/components/Button";
import { blog, home, posts, type Post } from "@/lib/copy";
import styles from "./BlogIndex.module.css";

/** Every post, newest first (content/blog/posts.json). */
export const allPosts: Post[] = posts;

/** A post is in a category when one of its tags is that category. */
const matches = (post: Post, category: string) => (post.tags ?? []).some((t) => t.toLowerCase() === category.toLowerCase());

/** The neighborhood's guide post, if one exists ("The Castro" → "The Castro Is Having a Moment"). */
const guideFor = (name: string) => {
  const key = name.replace(/^The /, "").toLowerCase();
  return posts.find((p) => p.href && matches(p, "Neighborhoods") && p.title.toLowerCase().includes(key));
};

/** /blog and /blog/tag/[tag] (BUILD.md §5): H1, the category filter row in Mono (active category underlined),
 *  the newest post as a full-width featured row with a large image, then the rest in three columns. */
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
        <Reveal as="nav" className={styles.filters}>
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
        </Reveal>
      </section>

      {category === "Neighborhoods" ? (
        <section className={`${styles.hoods} page`} data-tone="paper">
          <h2 className={`mono ${styles.subhead}`}>{blog.neighborhoodsPage.all}</h2>
          <ul className={`grid ${styles.list}`}>
            {home.neighborhoods.items.map((n, i) => {
              const guide = guideFor(n.name);
              return (
                <Reveal as="li" key={n.slug} stagger={i} className={styles.item}>
                  <Card image={n.image ? { src: n.image, alt: n.name } : undefined} title={n.name} text={n.description} link={guide ? { label: blog.neighborhoodsPage.guide, href: guide.href } : undefined} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 32vw" />
                </Reveal>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section className={`${styles.posts} page`} data-tone="paper">
        {category === "Neighborhoods" ? <h2 className={`mono ${styles.subhead}`}>{blog.neighborhoodsPage.posts}</h2> : null}
        {featured ? (
          <article className={`grid ${styles.featured}`}>
            <Reveal as="figure" mode="clip" className={styles.featuredMedia}>
              {featured.image ? <Img src={featured.image} alt={featured.title} fill sizes="(max-width: 767px) 100vw, 55vw" className={styles.img} eager /> : <div className={styles.placeholder} aria-hidden="true" />}
            </Reveal>
            <div className={styles.featuredText}>
              <Reveal as="p" className={`mono ${styles.meta}`}>{featured.dateLabel}</Reveal>
              <Reveal as="h2" className="h2">{featured.href ? <TextLink href={featured.href}>{featured.title}</TextLink> : featured.title}</Reveal>
              <Reveal as="p" className={`p2 ${styles.excerpt}`}>{featured.excerpt}</Reveal>
              {featured.href ? (
                <Reveal>
                  <Button variant="tertiary" arrow={false} href={featured.href}>
                    {home.journal.cardLink}
                  </Button>
                </Reveal>
              ) : null}
            </div>
          </article>
        ) : null}
        {rest.length ? <Hairline /> : null}
        <ul className={`grid ${styles.list}`}>
          {rest.map((post, i) => (
            <Reveal as="li" key={post.title} stagger={i} className={styles.item}>
              <Card image={post.image ? { src: post.image, alt: post.title } : undefined} meta={post.dateLabel} title={post.title} text={post.excerpt} link={post.href ? { label: home.journal.cardLink, href: post.href } : undefined} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 32vw" />
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
