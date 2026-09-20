import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  variant?: "filled" | "outlined";
  /** Every button label starts with "⤷ " except the hero and nav CTA (pass arrow={false}). */
  arrow?: boolean;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
};

export default function Button({ variant = "filled", arrow = true, href, type = "button", className = "", children }: Props) {
  const cls = [styles.button, styles[variant], variant === "filled" ? "mono" : "h4", className].join(" ");
  const label = (
    <>
      {arrow ? <span aria-hidden="true">⤷</span> : null}
      {arrow ? " " : null}
      {children}
    </>
  );
  if (href) {
    if (/^https?:/.test(href)) {
      return (
        <a href={href} className={cls} target="_blank" rel="noreferrer">
          {label}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {label}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {label}
    </button>
  );
}
