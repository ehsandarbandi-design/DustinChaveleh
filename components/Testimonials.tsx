import Section from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";
import { testimonials } from "@/lib/copy";
import styles from "./Testimonials.module.css";

/** Client reviews (Stone): H2 in columns 1–14, two quotes side by side in columns 1–11 and 14–24 over a hairline,
 *  then the Google rating and a tertiary button to the full reviews. Stacked on mobile. */
export default function Testimonials() {
  const { label, headline, rating, button, items } = testimonials;
  return (
    <Section label={label} tone="stone" id="reviews">
      <div className={`grid ${styles.grid}`}>
        <Reveal as="h2" className={`h2 ${styles.headline}`}>
          {headline}
        </Reveal>
        {items.map((t, i) => (
          <Reveal as="figure" key={t.name} stagger={i} className={styles.item}>
            <blockquote className={`p2 ${styles.quote}`}>
              <p>“{t.quote}”</p>
            </blockquote>
            <figcaption className={styles.caption}>
              <span className="mono">{t.name}</span>
              <span className={`mono ${styles.note}`}>{t.note}</span>
            </figcaption>
          </Reveal>
        ))}
        <Reveal className={styles.actions}>
          <span className={`mono ${styles.rating}`}>{rating}</span>
          <Button variant="tertiary" href={button.href}>
            {button.label}
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
