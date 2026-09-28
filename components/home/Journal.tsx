import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Rail from "@/components/Rail";
import { home, posts } from "@/lib/copy";
import styles from "./Journal.module.css";

/** Home §4 — Journal (Stone): H2 in columns 1–14, then the newest ten posts in the same rail as Neighborhoods:
 *  three 8-column cards per view with titles, excerpts and Read more aligned across cards, the "01 / 10" counter
 *  and progress line at the left, View all blogs (tertiary) beside the chevrons at the right. */
export default function Journal() {
  const { journal } = home;
  return (
    <Section label={journal.label} tone="stone" id="journal">
      <div className="grid">
        <Reveal as="h2" className={`h2 ${styles.headline}`}>
          {journal.headline}
        </Reveal>
      </div>
      <Rail className={styles.rail} counter trailing={
          <Reveal button>
            <Button variant="tertiary" href={journal.button.href}>{journal.button.label}</Button>
          </Reveal>
        }>
        {posts.slice(0, 10).map((post, i) => (
          <Reveal as="div" key={post.href} stagger={i} className={styles.card}>
            <Card image={post.image ? { src: post.image, alt: post.title } : undefined} meta={post.dateLabel} title={post.title} text={post.excerpt} link={{ label: journal.cardLink, href: post.href }} sizes="(max-width: 767px) 75vw, 32vw" />
          </Reveal>
        ))}
      </Rail>
    </Section>
  );
}
