import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import Arrow from "./Arrow";
import styles from "./Button.module.css";

type Props = {
  /** filled = primary, outlined = secondary, tertiary = Mono label over a 2px Ink bar, no box. */
  variant?: "filled" | "outlined" | "tertiary";
  /** Every button label starts with the ⤷ arrow except the hero and nav CTA (pass arrow={false}). */
  arrow?: boolean;
  href?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
};

export default function Button({ variant = "filled", arrow = true, href, type = "button", onClick, className = "", disabled, children }: Props) {
  const cls = [styles.button, styles[variant], variant === "outlined" ? "h4" : "mono", className].join(" ");
  const label = (
    <>
      {arrow ? <Arrow /> : null}
      {arrow ? " " : null}
      {children}
    </>
  );
  if (href) {
    if (/^https?:/.test(href)) {
      return (
        <a href={href} className={cls} target="_blank" rel="noreferrer" onClick={onClick}>
          {label}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {label}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
