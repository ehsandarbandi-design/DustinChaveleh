import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import ContactForm from "@/components/ContactForm";
import BookCall from "@/components/BookCall";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Testimonials from "@/components/Testimonials";
import { workWithDustin, site, seo } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = pageMeta({ title: `${workWithDustin.headline} — ${site.logo}`, description: seo.workWithDustin, path: "/work-with-dustin" });

/** /work-with-dustin (BUILD.md §5): H1, P2 intro and the contact details in columns 1–10, the same form as
 *  the home page in columns 13–24 under its own headline and intro. */
export default function WorkWithDustinPage() {
  return (
    <main className="below-header">
      <Section id="work-with-dustin" className={styles.section}>
        <div className={`grid ${styles.grid}`}>
          <Label inline align="h3">{workWithDustin.label}</Label>
          <div className={styles.intro}>
            <Reveal as="h1" className="h1">
              {workWithDustin.headline}
            </Reveal>
            <Reveal as="p" className={`p2 ${styles.body}`}>{workWithDustin.body}</Reveal>
            <Reveal as="dl" className={styles.details}>
              {workWithDustin.details.map((d) => (
                <div key={d.label} className={styles.detail}>
                  <dt className={`mono ${styles.term}`}>{d.label}</dt>
                  <dd className="p3">{d.href ? <TextLink href={d.href}>{d.value}</TextLink> : d.value}</dd>
                </div>
              ))}
            </Reveal>
            <BookCall />
            <Reveal className={styles.faqLink}>
              <Button variant="tertiary" href={site.faq.href}>
                Read the FAQ
              </Button>
            </Reveal>
          </div>
          <div className={styles.formBlock}>
            <Reveal as="h2" className="h3">
              {workWithDustin.formHeadline}
            </Reveal>
            <Reveal as="p" className={`p3 ${styles.formIntro}`}>{workWithDustin.formIntro}</Reveal>
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Section>
      <Testimonials />
    </main>
  );
}
