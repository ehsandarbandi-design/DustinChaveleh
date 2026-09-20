import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { home, posts } from "@/lib/copy";
import styles from "./Journal.module.css";

/** Home §4 — Journal (BUILD.md §4.4): Stone, H2 in columns 1–14, the three newest posts as 7-column cards
 *  spread from column 1 to column 24, and the filled button right-aligned below. */
export default function Journal() {
  const { journal } = home;
  const latest = posts.slice(0, 3);
  return (
    <Section label={journal.label} tone="stone" id="journal">
      <div className="grid">
        <Reveal as="h2" className={`h2 ${styles.headline}`}>
          {journal.headline}
        </Reveal>
      </div>
      <ul className={styles.cards}>
        {latest.map((post, i) => (
          <Reveal as="li" key={post.href} delay={i * 80} className={styles.card}>
            {/* Cover images (assets/images/blog/) do not exist yet → Stone placeholder */}
            <Card meta={post.dateLabel} title={post.title} text={post.excerpt} link={{ label: journal.cardLink, href: post.href }} sizes="(max-width: 767px) 100vw, 29vw" />
          </Reveal>
        ))}
      </ul>
      <div className={styles.actions}>
        <Button href={journal.button.href}>{journal.button.label}</Button>
      </div>
    </Section>
  );
}
