import styles from "./Hairline.module.css";

/** 1px rule: Stone on light surfaces, rgba(251,251,251,.3) on dark. Used between rows instead of cards. */
export default function Hairline({ vertical = false, className = "" }: { vertical?: boolean; className?: string }) {
  if (vertical) {
    return <div role="separator" aria-orientation="vertical" className={`${styles.v} ${className}`} />;
  }
  return <hr className={`${styles.h} ${className}`} />;
}
