import Img from "./Img";
import Reveal from "./Reveal";
import Button from "./Button";
import styles from "./Card.module.css";

export type CardProps = {
  /** 4:5 portrait crop. Omit to render the Stone placeholder block (never substitute another photo). */
  image?: { src: string; alt: string };
  /** .mono meta line, e.g. the post date */
  meta?: string;
  title: string;
  text?: string;
  link?: { label: string; href: string };
  /** next/image sizes hint for the card's width */
  sizes?: string;
  className?: string;
};

/** Card (blog / neighborhood): no box, no border, no shadow. Image (wiping up into view like every other photo,
 *  no hover effect), then meta, .h3 title, .p3 text, tertiary button ("Read more →" carries its own arrow). */
export default function Card({ image, meta, title, text, link, sizes = "(max-width: 767px) 100vw, 33vw", className = "" }: CardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      <Reveal as="figure" mode="clip" className={styles.media}>
        {image ? <Img src={image.src} alt={image.alt} fill sizes={sizes} className={styles.img} /> : <div className={styles.placeholder} aria-hidden="true" />}
      </Reveal>
      {meta ? <p className={`mono ${styles.meta}`}>{meta}</p> : null}
      <h3 className={`h3 ${styles.title}`}>{title}</h3>
      {text ? <p className={`p3 ${styles.text}`}>{text}</p> : null}
      {link ? (
        <Button variant="tertiary" arrow={false} href={link.href} className={styles.link}>
          {link.label}
        </Button>
      ) : null}
    </article>
  );
}
