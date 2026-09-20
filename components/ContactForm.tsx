"use client";
import { useState, type FormEvent } from "react";
import FormField from "./FormField";
import Button from "./Button";
import { contactForm } from "@/lib/copy";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/** The contact form (Home and Work with Dustin). Posts JSON to /api/contact, which forwards it to the
 *  endpoint in CONTACT_FORM_ENDPOINT. The success and error messages are still [TODO] in content/copy.md,
 *  so both states show a visible marker until the text exists. */
export default function ContactForm({ className = "" }: { className?: string }) {
  const { fields, button, messages } = contactForm;
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
      newsletter: fd.get("newsletter") === "on",
      company: fd.get("company"),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={onSubmit} data-status={status} aria-busy={status === "sending"}>
      <FormField id="contact-first-name" name="firstName" label={fields.firstName.label} required autoComplete="given-name" className={styles.half} />
      <FormField id="contact-last-name" name="lastName" label={fields.lastName.label} autoComplete="family-name" className={styles.half} />
      <FormField id="contact-email" name="email" kind="email" label={fields.email.label} required autoComplete="email" className={styles.full} />
      <FormField id="contact-newsletter" name="newsletter" kind="checkbox" label={fields.newsletter.label} className={styles.full} />
      <FormField id="contact-phone" name="phone" kind="tel" label={fields.phone.label} autoComplete="tel" className={styles.full} />
      <FormField id="contact-message" name="message" kind="textarea" label={fields.message.label} required placeholder={fields.message.placeholder} className={styles.full} />
      {/* Honeypot: hidden from people, filled by bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className={styles.full}>
        <Button type="submit" variant="outlined" arrow={false} className={styles.submit} disabled={status === "sending"}>
          {button}
        </Button>
      </div>
      <p className={`p3 ${styles.status}`} role="status" aria-live="polite">
        {status === "sent" ? messages.success : status === "error" ? messages.error : ""}
      </p>
    </form>
  );
}
