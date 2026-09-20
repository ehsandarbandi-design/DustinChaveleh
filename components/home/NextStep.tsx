import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import Hairline from "@/components/Hairline";
import { home } from "@/lib/copy";
import styles from "./NextStep.module.css";

/** Home §7 — Taking the Next Step (BUILD.md §4.7): Stone. For Sellers in columns 1–11 and For Buyers in
 *  columns 14–24, a vertical hairline between them, Buyers offset 80px lower. Stacked on mobile. */
export default function NextStep() {
  const { nextStep } = home;
  const blocks = [nextStep.sellers, nextStep.buyers];
  return (
    <Section label={nextStep.label} tone="stone" id="next-step">
      <div className={`grid ${styles.grid}`}>
        {blocks.map((block, i) => (
          <div key={block.title} className={i === 0 ? styles.sellers : styles.buyers}>
            <Reveal as="h2" className="h2">
              {block.title}
            </Reveal>
            <p className={`p2 ${styles.body}`}>{block.body}</p>
            <TextLink href={block.link.href} className="h4">
              {block.link.label}
            </TextLink>
          </div>
        ))}
        <Hairline vertical className={styles.divider} />
      </div>
    </Section>
  );
}
