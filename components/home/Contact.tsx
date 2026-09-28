import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import ContactForm from "@/components/ContactForm";
import BookCall from "@/components/BookCall";
import Label from "@/components/Label";
import { home } from "@/lib/copy";
import styles from "./Contact.module.css";

/** Home §8 — Get In Touch (Paper): the label, then the contact details (phone, e-mail, office, license) and the call button in
 *  columns 1–10; the two-line headline on top of the form in columns 13–24. Reused at the end of blog posts. */
export default function Contact() {
  const { contact } = home;
  return (
    <Section id="contact" className={styles.section}>
      <div className={`grid ${styles.grid}`}>
        <Label inline align="h1">{contact.label}</Label>
        <div className={styles.intro}>
          <Reveal as="dl" className={styles.details}>
            {contact.details.map((d) => (
              <div key={d.label} className={styles.detail}>
                <dt className={`mono ${styles.term}`}>{d.label}</dt>
                <dd className="p3">
                  {d.href ? <TextLink href={d.href}>{d.value}</TextLink> : d.value}
                </dd>
              </div>
            ))}
          </Reveal>
          <BookCall />
        </div>
        <div className={styles.form}>
          <Reveal as="h2" className={`h1 ${styles.headline}`}>
            {contact.headline[0]}
            <br />
            {contact.headline[1]}
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
