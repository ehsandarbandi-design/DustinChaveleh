import type { ReactNode } from "react";
import styles from "./Label.module.css";

/** Section label: "[ ABOUT ]" in .mono Taupe on the left, a 10px solid square at the far right. */
export default function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${styles.row} ${className}`}>
      <span className={`mono ${styles.text}`}>[ {children} ]</span>
      <span className={styles.marker} aria-hidden="true" />
    </div>
  );
}
