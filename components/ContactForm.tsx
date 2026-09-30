"use client";
import { useRef, useState, type FocusEvent, type FormEvent } from "react";
import FormField from "./FormField";
import FormError from "./FormError";
import Button from "./Button";
import { contactForm } from "@/lib/copy";
import { FIELD_ORDER, listFields, validateContact, validateField, type ContactErrors, type ContactField, type ContactValues } from "@/lib/contactValidation";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const isField = (name: string): name is ContactField => (FIELD_ORDER as string[]).includes(name);

/** The contact form (Home and Work with Dustin). Posts JSON to /api/contact, which re-checks it and forwards it to
 *  CONTACT_FORM_ENDPOINT. Validation follows the reference form: pressing Send Message with a problem shows a
 *  summary at the top (focused, so screen readers announce it) and each field's message between its label and
 *  input; what was typed stays. A message clears as soon as its field is fixed, and a filled field is checked
 *  when you leave it. Send Message is only disabled while sending. The success and error messages for the server
 *  response are still [TODO] in content/copy.md. */
export default function ContactForm({ className = "" }: { className?: string }) {
  const { fields, button, messages, errors: text } = contactForm;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [showSummary, setShowSummary] = useState(false);
  const summaryRef = useRef<HTMLParagraphElement>(null);

  const setFieldError = (field: ContactField, message: string | undefined) =>
    setErrors((prev) => {
      if (prev[field] === message) return prev;
      const next = { ...prev };
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });

  // While a field shows a message, re-check it as you type so the message goes away once it is right
  const onInput = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as unknown as HTMLInputElement;
    if (isField(target.name) && errors[target.name]) setFieldError(target.name, validateField(target.name, target.value));
  };
  // Leaving a field you have typed in checks it (empty fields wait for Send Message)
  const onBlur = (e: FocusEvent<HTMLFormElement>) => {
    const target = e.target as unknown as HTMLInputElement;
    if (isField(target.name) && (target.value.trim() || errors[target.name])) setFieldError(target.name, validateField(target.name, target.value));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = Object.fromEntries(FIELD_ORDER.map((f) => [f, String(fd.get(f) ?? "")])) as ContactValues;
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setShowSummary(true);
      setStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setShowSummary(false);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, newsletter: fd.get("newsletter") === "on", company: fd.get("company") }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const invalid = FIELD_ORDER.filter((f) => errors[f]);

  return (
    <form className={`${styles.form} ${className}`} noValidate onSubmit={onSubmit} onInput={onInput} onBlur={onBlur} data-status={status} aria-busy={status === "sending"}>
      {showSummary && invalid.length ? (
        <FormError className={`${styles.full} ${styles.summary}`} ref={summaryRef}>
          {text.summary} {listFields(invalid)}.
        </FormError>
      ) : null}
      <FormField id="contact-first-name" name="firstName" label={fields.firstName.label} required autoComplete="given-name" error={errors.firstName} className={styles.half} />
      <FormField id="contact-last-name" name="lastName" label={fields.lastName.label} required autoComplete="family-name" error={errors.lastName} className={styles.half} />
      <FormField id="contact-email" name="email" kind="email" label={fields.email.label} required autoComplete="email" error={errors.email} className={styles.half} />
      {/* The sign-up box belongs to the email: right under it on phones; on wider screens after the Email | Phone row */}
      <FormField id="contact-newsletter" name="newsletter" kind="checkbox" label={fields.newsletter.label} className={`${styles.full} ${styles.newsletter}`} />
      <FormField id="contact-phone" name="phone" kind="tel" label={fields.phone.label} autoComplete="tel" error={errors.phone} className={styles.half} />
      <FormField id="contact-message" name="message" kind="textarea" label={fields.message.label} required placeholder={fields.message.placeholder} error={errors.message} className={`${styles.full} ${styles.after}`} />
      {/* Honeypot: hidden from people, filled by bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className={`${styles.full} ${styles.after}`}>
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
