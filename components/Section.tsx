import type { CSSProperties, ReactNode } from "react";
import Label from "./Label";
import styles from "./Section.module.css";

export type Tone = "paper" | "stone" | "ink";

type Props = {
  label?: string;
  tone?: Tone;
  id?: string;
  className?: string;
  contentClassName?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Section wrapper: tone (background), page gutters, vertical rhythm, and the [ LABEL ] + ■ row. */
export default function Section({ label, tone = "paper", id, className = "", contentClassName = "", style, children }: Props) {
  return (
    <section id={id} data-tone={tone} className={`${styles.section} ${styles[tone]} ${className}`} style={style}>
      {label ? <Label>{label}</Label> : null}
      <div className={`${label ? styles.content : ""} ${contentClassName}`}>{children}</div>
    </section>
  );
}
