import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./TextLink.module.css";

/** Text link: Ink, no underline at rest; on hover an underline wipes in from the left over 200ms.
 *  Inherits its type style from the surrounding text (or pass a type class). */
export default function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const cls = `${styles.link} ${className}`;
  if (/^https?:/.test(href)) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  if (/^(mailto|sms|tel):/.test(href)) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
