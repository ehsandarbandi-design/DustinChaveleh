import Section from "./Section";
import Reveal from "./Reveal";
import Button from "./Button";
import Label from "./Label";
import Img from "./Img";
import { testimonials } from "@/lib/copy";
import styles from "./Testimonials.module.css";

/** Client reviews (Figma 682:3813, Stone): the label at the top left level with the H2 and the photo in columns
 *  1–7 at the bottom, its bottom edge level with the button; the H2, the two quotes stacked, each under a hairline,
 *  then the Google rating and a secondary button in columns 13–24. On mobile: label, reviews, then the photo. */
export default function Testimonials() {
  const { label, headline, image, rating, button, items } = testimonials;
  return (
    <Section tone="stone" id="reviews">
      <div className={`grid ${styles.grid}`}>
        <Label inline align="h2">{label}</Label>
        <Reveal as="figure" mode="clip" className={styles.media}>
          <Img src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 20vw" className={styles.img} />
        </Reveal>
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
