import { forwardRef, type ReactNode } from "react";

/** Error message box: Paper text on Ink with a circled "!" drawn inline (no icon pack). Used for the summary at the
 *  top of the contact form (focusable, announced as an alert) and for each field's message (linked to its input
 *  with aria-describedby). Styles: .formError in styles/reset.css. */
const FormError = forwardRef<HTMLParagraphElement, { id?: string; children: ReactNode; className?: string }>(function FormError({ id, children, className = "" }, ref) {
  return (
    <p ref={ref} id={id} className={`p3 formError ${className}`} {...(ref ? { role: "alert", tabIndex: -1 } : {})}>
      <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
        <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 5.5v5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="10" cy="14.25" r="1.1" fill="currentColor" />
      </svg>
      <span>{children}</span>
    </p>
  );
});
export default FormError;
