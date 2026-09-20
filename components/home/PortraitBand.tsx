import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/copy";
import styles from "./PortraitBand.module.css";

/** Home §3 — Portrait band (BUILD.md §4.3): full-bleed photo, 70vh tall, nothing over it. */
export default function PortraitBand() {
  return (
    <Reveal as="figure" className={styles.band} data-tone="paper">
      <Img src="/images/portrait/dustin-1.webp" alt={site.logo} fill sizes="100vw" className={styles.img} />
    </Reveal>
  );
}
