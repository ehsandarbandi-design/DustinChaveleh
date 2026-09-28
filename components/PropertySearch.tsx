import Section from "./Section";
import Reveal from "./Reveal";
import Label from "./Label";
import Button from "./Button";
import { propertySearch } from "@/lib/copy";
import styles from "./PropertySearch.module.css";

/** Property search (Ink): why Dustin sets buyers up on Zenlist, in his words from his platforms post. The label on
 *  the left level with the H2; the H2, body, three numbered hairline rows, the invite note and the Zenlist button
 *  in columns 13–24. Used on Home (between Neighborhoods and Taking the Next Step) and on Market Update. */
export default function PropertySearch() {
  const { label, headline, body, points, note, button } = propertySearch;
  return (
    <Section tone="ink" id="property-search">
      <div className="grid">
        <Label inline align="h2">{label}</Label>
        <div className={styles.column}>
          <Reveal as="h2" className="h2">
            {headline}
          </Reveal>
          <Reveal as="p" className="p2">
            {body}
          </Reveal>
          <ol className={styles.points}>
            {points.map((point, i) => (
              <Reveal as="li" key={point.title} stagger={i} className={styles.point}>
                <span className={`mono ${styles.number}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h4">{point.title}</h3>
                <p className={`p3 ${styles.text}`}>{point.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className={styles.actions}>
            <p className={`mono ${styles.note}`}>{note}</p>
            <Button href={button.href}>{button.label}</Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
