import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { site } from "@/lib/copy";
import styles from "./not-found.module.css";

/** /404 (BUILD.md §5): the H1 "This page has moved on." and a text link home. Nothing else. */
export default function NotFound() {
  return (
    <main className="below-header">
      <Section className={styles.section}>
        <div className="grid">
          <h1 className={`h1 ${styles.headline}`}>This page has moved on.</h1>
          <TextLink href="/" className={`h4 ${styles.link}`}>
            {site.nav[0].label}
          </TextLink>
        </div>
      </Section>
    </main>
  );
}
