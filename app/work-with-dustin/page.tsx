import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import ContactForm from "@/components/ContactForm";
import { workWithDustin, site } from "@/lib/copy";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${workWithDustin.headline} — ${site.logo}` };

/** /work-with-dustin (BUILD.md §5): H1, P2 intro and the contact details in columns 1–10, the same form as
 *  the home page in columns 13–24 under its own headline and intro. */
export default function WorkWithDustinPage() {
  return (
    <main className="below-header">
      <Section label={workWithDustin.label} id="work-with-dustin">
        <div className={`grid ${styles.grid}`}>
          <div className={styles.intro}>
            <Reveal as="h1" className="h1">
              {workWithDustin.headline}
            </Reveal>
            <p className={`p2 ${styles.body}`}>{workWithDustin.body}</p>
            <dl className={styles.details}>
              {workWithDustin.details.map((d) => (
                <div key={d.label} className={styles.detail}>
                  <dt className={`mono ${styles.term}`}>{d.label}</dt>
                  <dd className="p3">{d.href ? <TextLink href={d.href}>{d.value}</TextLink> : d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={styles.formBlock}>
            <h2 className="h3">{workWithDustin.formHeadline}</h2>
            <p className={`p2 ${styles.formIntro}`}>{workWithDustin.formIntro}</p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
