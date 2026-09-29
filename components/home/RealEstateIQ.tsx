import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Img from "@/components/Img";
import { home } from "@/lib/copy";
import styles from "./RealEstateIQ.module.css";

/** Home §5 — Real Estate IQ (Figma 695:3, Paper): the two-line H1, the P1 and the outlined button in columns 1–14;
 *  the game screen and the results screen side by side in columns 16–24, their tops level with the H1.
 *  On mobile: text, then the two screens. */
export default function RealEstateIQ() {
  const { iq } = home;
  return (
    <Section label={iq.label} id="real-estate-iq" className={styles.section}>
      <div className={`grid ${styles.grid}`}>
        <div className={styles.text}>
          <Reveal as="h2" className="h1">
            {iq.headline[0]}
            <br />
            {iq.headline[1]}
          </Reveal>
          <Reveal as="p" className={`p1 ${styles.sub}`}>{iq.subheadline}</Reveal>
          <Reveal button className={styles.actions}>
            <Button variant="outlined" href={iq.button.href}>{iq.button.label}</Button>
          </Reveal>
        </div>
        <div className={styles.screens}>
          {iq.screens.map((screen, i) => (
            <Reveal as="figure" mode="clip" key={screen.src} stagger={i} className={styles.screen}>
              <Img src={screen.src} alt={screen.alt} fill sizes="(max-width: 767px) 45vw, 18vw" className={styles.img} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
