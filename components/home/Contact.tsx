import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import ContactForm from "@/components/ContactForm";
import { home } from "@/lib/copy";
import styles from "./Contact.module.css";

/** Home §8 — Contact (BUILD.md §4.8): Paper. H1 on two lines and the details list in columns 1–10,
 *  the form in columns 13–24. Reused at the end of blog posts. */
export default function Contact() {
  const { contact } = home;
  return (
    <Section label={contact.label} id="contact">
      <div className={`grid ${styles.grid}`}>
        <div className={styles.intro}>
          <Reveal as="h2" className="h1">
            {contact.headline[0]}
            <br />
            {contact.headline[1]}
          </Reveal>
          <dl className={styles.details}>
            {contact.details.map((d) => (
              <div key={d.label} className={styles.detail}>
                <dt className={`mono ${styles.term}`}>{d.label}</dt>
                <dd className="p2">
                  {d.href ? <TextLink href={d.href}>{d.value}</TextLink> : d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm className={styles.form} />
      </div>
    </Section>
  );
}
