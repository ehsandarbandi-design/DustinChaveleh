import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Label from "@/components/Label";
import BookCall from "@/components/BookCall";
import JsonLd from "@/components/JsonLd";
import { faq, site, seo } from "@/lib/copy";
import { pageMeta, faqJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = pageMeta({ title: `FAQ: Buying and Selling in San Francisco — ${site.logo}`, description: seo.faq, path: "/faq" });

/** /faq: H1 and intro in columns 1–11 with the Calendly block under them; the questions in two groups as
 *  hairline accordions in columns 13–24. Answers stay in the HTML (collapsed, not removed) so search can read them.
 *  DRAFT copy awaiting Dustin's approval (content/copy.md → FAQ). */
export default function FaqPage() {
  return (
    <main className="below-header">
      <JsonLd data={faqJsonLd(faq)} />
      <Section id="faq">
        <div className={`grid ${styles.grid}`}>
          <Label inline align="mono">{faq.label}</Label>
          <div className={styles.intro}>
            <Reveal as="h1" className="h1">
              {faq.headline}
            </Reveal>
            <Reveal as="p" className={`p2 ${styles.lead}`}>
              {faq.intro}
            </Reveal>
            <BookCall />
          </div>
          <div className={styles.groups}>
            {faq.groups.map((group) => (
              <Reveal key={group.title} className={styles.group}>
                <h2 className={`mono ${styles.groupTitle}`}>{group.title}</h2>
                <Accordion
                  items={group.items.map((item, i) => ({
                    id: `${group.title}-${i}`,
                    title: item.q,
                    content: (
                      <div className={styles.answer}>
                        {item.a.map((p) => (
                          <p key={p} className="p3">
                            {p}
                          </p>
                        ))}
                        {item.link ? (
                          <Button variant="tertiary" href={item.link.href}>
                            {item.link.label}
                          </Button>
                        ) : null}
                      </div>
                    ),
                  }))}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
