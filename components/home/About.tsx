import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import Img from "@/components/Img";
import { home, site } from "@/lib/copy";
import styles from "./About.module.css";

/** Home §2 — About: headline above the body in columns 1–11, Dustin's portrait in columns 13–24
 *  bleeding to the right edge; stacked on mobile (text, then photo). */
export default function About() {
  const { about } = home;
  return (
    <Section label={about.label} id="about">
      <div className={`grid ${styles.grid}`}>
        <div className={styles.text}>
          <Reveal as="h2" className={`h1 ${styles.headline}`}>
            {about.headline[0]}
            <br />
            {about.headline[1]}
          </Reveal>
          {about.body.map((paragraph) => (
            <p key={paragraph} className="p2">
              {paragraph}
            </p>
          ))}
          <p className={`mono ${styles.smallPrint}`}>{about.smallPrint}</p>
          <TextLink href={about.link.href} className={`h4 ${styles.link}`}>
            {about.link.label}
          </TextLink>
        </div>
        <Reveal as="figure" className={styles.media}>
          <Img src="/images/portrait/dustin-1.webp" alt={site.logo} fill sizes="(max-width: 767px) 100vw, 50vw" className={styles.img} />
        </Reveal>
      </div>
    </Section>
  );
}
