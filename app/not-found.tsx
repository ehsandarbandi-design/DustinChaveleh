import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import { site } from "@/lib/copy";
import styles from "./not-found.module.css";

/** /404 (BUILD.md §5): the H1 "This page has moved on." and a text link home. Nothing else. */
export default function NotFound() {
  return (
    <main className="below-header">
      <Section className={styles.section}>
        <div className="grid">
          <Reveal as="h1" className={`h1 ${styles.headline}`}>
            This page has moved on.
          </Reveal>
          <Reveal className={styles.link}>
            <TextLink href="/" className="h4">
              {site.nav[0].label}
            </TextLink>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
