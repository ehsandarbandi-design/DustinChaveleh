import Section from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";
import { testimonials } from "@/lib/copy";
import styles from "./Testimonials.module.css";

/** Client reviews (Figma 682:3813, Stone): the H2, the two quotes stacked, each under a hairline, then the Google
 *  rating and a secondary button, all in columns 13–24. Full width on mobile. */
export default function Testimonials() {
  const { label, headline, rating, button, items } = testimonials;
  return (
    <Section label={label} tone="stone" id="reviews">
      <div className="grid">
        <div className={styles.column}>
          <Reveal as="h2" className="h2">
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
            <Button variant="outlined" arrow={false} href={button.href}>
              {button.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
