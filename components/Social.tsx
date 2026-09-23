import TextLink from "./TextLink";
import { site } from "@/lib/copy";
import styles from "./Social.module.css";

/** Instagram · TikTok · YouTube · Google as .mono text links. Used in the footer, under the About
 *  paragraphs on the home page, and under the Meet Dustin body. */
export default function Social({ className = "" }: { className?: string }) {
  return (
    <ul className={`mono ${styles.list} ${className}`}>
      {site.social.map((s) => (
        <li key={s.href}>
          <TextLink href={s.href}>{s.label}</TextLink>
        </li>
      ))}
    </ul>
  );
}
