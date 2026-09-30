import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/TextLink";
import ContactForm from "@/components/ContactForm";
import BookCall from "@/components/BookCall";
import Label from "@/components/Label";
import { home } from "@/lib/copy";
import styles from "./Contact.module.css";

type Props = {
  /** h2 on the home page; h1 on Work with Dustin, where this section is the page (Figma 704:2482) */
  headingAs?: "h1" | "h2";
  /** P2 paragraph above the contact details (Work with Dustin) */
  body?: string;
  id?: string;
};

/** Get In Touch (Paper, Figma 684:3814 home / 704:2482 Work with Dustin): the label at the top left; at the bottom
 *  left the optional paragraph, the contact details and the call button, the call button level with Send Message;
 *  the two-line headline on top of the form in columns 13–24. On phones: label, headline and form, then the rest. */
export default function Contact({ headingAs = "h2", body, id = "contact" }: Props) {
  const { contact } = home;
  return (
    <Section id={id} className={styles.section}>
      <div className={`grid ${styles.grid}`}>
        <Label inline align="h1">{contact.label}</Label>
        <div className={styles.intro}>
          {body ? (
            <Reveal as="p" className={`p2 ${styles.body}`}>
              {body}
            </Reveal>
          ) : null}
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
          <Reveal as={headingAs} className={`h1 ${styles.headline}`}>
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
