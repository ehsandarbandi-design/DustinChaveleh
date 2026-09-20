import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import Img from "@/components/Img";
import Accordion from "@/components/Accordion";
import { home, guides } from "@/lib/copy";
import styles from "./NextStep.module.css";

/** Home §7 — Taking the Next Step, in the reference layout: for each of Sellers and Buyers, the H2 title,
 *  P2 body and text link on one side with the guide's steps as expandable hairline rows, and the photo on
 *  the other. Sellers photo right, Buyers photo left. Stacked on mobile. */
export default function NextStep() {
  const { nextStep } = home;
  const blocks = [
    { ...nextStep.sellers, guide: guides.sellers, flip: false },
    { ...nextStep.buyers, guide: guides.buyers, flip: true },
  ];
  return (
    <Section label={nextStep.label} tone="stone" id="next-step">
      <div className={styles.blocks}>
        {blocks.map((block) => (
          <div key={block.title} className={`grid ${styles.block} ${block.flip ? styles.flip : ""}`}>
            <div className={styles.text}>
              <Reveal as="h2" className="h2">
                {block.title}
              </Reveal>
              <p className={`p2 ${styles.body}`}>{block.body}</p>
              <Accordion
                className={styles.steps}
                items={block.guide.steps.map((step) => ({
                  id: step.number,
                  title: `${step.number}  ${step.title}`,
                  meta: step.subtitle,
                  content: step.body ? <p className="p2">{step.body}</p> : <p className="mono">[ TEXT NEEDED ]</p>,
                }))}
              />
              <TextLink href={block.link.href} className={`h4 ${styles.link}`}>
                {block.link.label}
              </TextLink>
            </div>
            <Reveal as="figure" className={styles.media}>
              <Img src={block.guide.image} alt={block.title} fill sizes="(max-width: 767px) 100vw, 50vw" className={styles.img} />
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
