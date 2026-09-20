import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./Label.module.css";

/** Section label: "[ ABOUT ]" in .mono Taupe on the left, a 10px solid square at the far right. */
export default function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal className={`${styles.row} ${className}`}>
      <span className={`mono ${styles.text}`}>[ {children} ]</span>
      <span className={styles.marker} aria-hidden="true" />
    </Reveal>
  );
}
