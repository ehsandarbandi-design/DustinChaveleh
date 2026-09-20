import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Card from "@/components/Card";
import Rail from "@/components/Rail";
import TextLink from "@/components/TextLink";
import { home } from "@/lib/copy";
import styles from "./Neighborhoods.module.css";

/** Home §6 — Neighborhoods (BUILD.md §4.6): Paper, a sideways rail of the 11 neighborhood cards
 *  (6 columns each; 6 of 8 on mobile), "01 / 11" counter + progress hairline, text link at the right.
 *  Neighborhoods without a photo get the Stone placeholder — never a substitute photo. */
export default function Neighborhoods() {
  const { neighborhoods } = home;
  return (
    <Section label={neighborhoods.label} id="neighborhoods">
      <Rail
        className={styles.rail}
        counter
        trailing={
          <TextLink href={neighborhoods.link.href} className="h4">
            {neighborhoods.link.label}
          </TextLink>
        }
      >
        {neighborhoods.items.map((n, i) => (
          <Reveal as="div" key={n.slug} delay={Math.min(i, 3) * 80} className={styles.card}>
            <Card image={n.image ? { src: n.image, alt: n.name } : undefined} title={n.name} text={n.description} sizes="(max-width: 767px) 75vw, 25vw" />
          </Reveal>
        ))}
      </Rail>
    </Section>
  );
}
