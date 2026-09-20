import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Rail from "@/components/Rail";
import { home, posts } from "@/lib/copy";
import styles from "./Journal.module.css";

/** Home §4 — Journal: Stone, H2 in columns 1–14, every post as a 7-column card in a sideways rail
 *  (three per view on desktop) with Previous / Next chevrons; the filled button sits at the left. */
export default function Journal() {
  const { journal } = home;
  return (
    <Section label={journal.label} tone="stone" id="journal">
      <div className="grid">
        <Reveal as="h2" className={`h2 ${styles.headline}`}>
          {journal.headline}
        </Reveal>
      </div>
      <Rail className={styles.rail} leading={<Button href={journal.button.href}>{journal.button.label}</Button>}>
        {posts.map((post, i) => (
          <Reveal as="div" key={post.href} delay={Math.min(i, 2) * 80} className={styles.card}>
            <Card image={post.image ? { src: post.image, alt: post.title } : undefined} meta={post.dateLabel} title={post.title} text={post.excerpt} link={{ label: journal.cardLink, href: post.href }} sizes="(max-width: 767px) 75vw, 29vw" />
          </Reveal>
        ))}
      </Rail>
    </Section>
  );
}
