import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { home } from "@/lib/copy";
import styles from "./RealEstateIQ.module.css";

/** Home §5 — Real Estate IQ (BUILD.md §4.5): the only dark section. Ink, Paper text, label and ■ in Taupe,
 *  H1 in columns 1–16, P1 below, Paper/Ink filled button. ≈70vh tall. */
export default function RealEstateIQ() {
  const { iq } = home;
  return (
    <Section label={iq.label} tone="ink" id="real-estate-iq" className={styles.section}>
      <div className="grid">
        <Reveal as="h2" className={`h1 ${styles.headline}`}>
          {iq.headline}
        </Reveal>
        <Reveal as="p" className={`p1 ${styles.sub}`}>{iq.subheadline}</Reveal>
        <Reveal button className={styles.actions}>
          <Button href={iq.button.href}>{iq.button.label}</Button>
        </Reveal>
      </div>
    </Section>
  );
}
