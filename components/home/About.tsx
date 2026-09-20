import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import { home } from "@/lib/copy";
import styles from "./About.module.css";

/** Home §2 — About (BUILD.md §4.2): headline in columns 1–12, body in columns 14–22, stacked on mobile. */
export default function About() {
  const { about } = home;
  return (
    <Section label={about.label} id="about">
      <div className={`grid ${styles.grid}`}>
        <Reveal as="h2" className={`h1 ${styles.headline}`}>
          {about.headline[0]}
          <br />
          {about.headline[1]}
        </Reveal>
        <div className={styles.text}>
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
      </div>
    </Section>
  );
}
