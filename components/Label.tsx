import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./Label.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Inline: the label sits in the left columns beside the section's first title or image, with no ■. Its caps
   *  line up with the top of whatever it sits beside: an image (default), a .mono line, or a title set in .h1 / .h2 / .h3. */
  inline?: boolean;
  align?: "image" | "mono" | "h1" | "h2" | "h3";
};

/** Section label: "[ ABOUT ]" in .mono Taupe. On its own row it has a 10px solid square at the far right; inline
 *  (beside a title or image in the right columns) it has none. */
export default function Label({ children, className = "", inline = false, align = "image" }: Props) {
  if (inline) {
    return (
      <Reveal className={`${styles.inline} ${styles[align] ?? ""} ${className}`}>
        <span className={`mono ${styles.text}`}>[ {children} ]</span>
      </Reveal>
    );
  }
  return (
    <Reveal className={`${styles.row} ${className}`}>
      <span className={`mono ${styles.text}`}>[ {children} ]</span>
      <span className={styles.marker} aria-hidden="true" />
    </Reveal>
  );
}
