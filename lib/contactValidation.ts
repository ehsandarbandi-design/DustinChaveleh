import { contactForm } from "./copy";

/** Contact form validation, shared by the form (instant messages) and /api/contact (the server never trusts the
 *  browser). Returns one message per field that has a problem, in the order the fields appear. */
export type ContactField = "firstName" | "lastName" | "email" | "phone" | "message";
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export const FIELD_ORDER: ContactField[] = ["firstName", "lastName", "email", "phone", "message"];

// something@domain.tld — letters-only top-level domain of 2+ characters
const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/;
// digits, spaces and + ( ) . - only; 10–15 digits
const PHONE_CHARS = /^[\d\s()+.-]+$/;

export function validateField(field: ContactField, raw: string): string | undefined {
  const { fields, errors } = contactForm;
  const value = raw.trim();
  const label = fields[field].label;
  if (field === "phone") {
    if (!value) return undefined;   // optional
    const digits = value.replace(/\D/g, "").length;
    return PHONE_CHARS.test(value) && digits >= 10 && digits <= 15 ? undefined : errors.phone;
  }
  if (!value) return `${label} ${errors.required}`;
  if (field === "email" && !EMAIL.test(value)) return errors.email;
  return undefined;
}

export function validateContact(values: ContactValues): ContactErrors {
  const out: ContactErrors = {};
  for (const field of FIELD_ORDER) {
    const message = validateField(field, values[field] ?? "");
    if (message) out[field] = message;
  }
  return out;
}

/** "First Name, Last Name, Email, and Message" */
export function listFields(fields: ContactField[]): string {
  const labels = fields.map((f) => contactForm.fields[f].label);
  if (labels.length <= 2) return labels.join(" and ");
  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}
