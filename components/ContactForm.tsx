"use client";
import { useState, type FormEvent } from "react";
import FormField from "./FormField";
import Button from "./Button";
import { contactForm } from "@/lib/copy";
import styles from "./ContactForm.module.css";

/** The contact form (Home and Work with Dustin). Where submissions go has not been chosen yet
 *  (BUILD.md §7), so submitting only blocks the browser's default navigation for now. */
export default function ContactForm({ className = "" }: { className?: string }) {
  const { fields, button } = contactForm;
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send to the chosen endpoint; success and error messages are [TODO] in content/copy.md
    setSubmitted(true);
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={onSubmit} noValidate={false} data-submitted={submitted}>
      <FormField id="contact-first-name" name="firstName" label={fields.firstName.label} required autoComplete="given-name" className={styles.half} />
      <FormField id="contact-last-name" name="lastName" label={fields.lastName.label} autoComplete="family-name" className={styles.half} />
      <FormField id="contact-email" name="email" kind="email" label={fields.email.label} required autoComplete="email" className={styles.full} />
      <FormField id="contact-newsletter" name="newsletter" kind="checkbox" label={fields.newsletter.label} className={styles.full} />
      <FormField id="contact-phone" name="phone" kind="tel" label={fields.phone.label} autoComplete="tel" className={styles.full} />
      <FormField id="contact-message" name="message" kind="textarea" label={fields.message.label} required placeholder={fields.message.placeholder} className={styles.full} />
      <div className={styles.full}>
        <Button type="submit" variant="outlined" arrow={false} className={styles.submit}>
          {button}
        </Button>
      </div>
    </form>
  );
}
