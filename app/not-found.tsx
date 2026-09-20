import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { site } from "@/lib/copy";
import styles from "./not-found.module.css";

/** /404 (BUILD.md §5): the H1 "This page has moved on." and a tertiary button home. Nothing else. */
export default function NotFound() {
  return (
    <main className="below-header">
      <Section className={styles.section}>
        <div className="grid">
          <Reveal as="h1" className={`h1 ${styles.headline}`}>
            This page has moved on.
          </Reveal>
          <Reveal className={styles.link}>
            <Button variant="tertiary" href="/">
              {site.nav[0].label}
            </Button>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
