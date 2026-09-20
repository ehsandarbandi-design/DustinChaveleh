import styles from "./FormField.module.css";

type Base = {
  id: string;
  name?: string;
  label: string;
  required?: boolean;
  /** Error text in .p3 Ink under the field. */
  error?: string;
  className?: string;
};
type TextProps = Base & { kind?: "text" | "email" | "tel"; placeholder?: string; autoComplete?: string };
type TextareaProps = Base & { kind: "textarea"; placeholder?: string; rows?: number };
type CheckboxProps = Base & { kind: "checkbox" };
export type FormFieldProps = TextProps | TextareaProps | CheckboxProps;

/** Form field: no box. .mono Taupe label above; transparent input with a 1px Stone bottom border only,
 *  .p2 text, 12px bottom padding. Focus: 2px Ink bottom border. Minimum touch height 48px. */
export default function FormField(props: FormFieldProps) {
  const { id, label, required, error, className = "" } = props;
  const name = props.name ?? id;
  const errorId = error ? `${id}-error` : undefined;

  if (props.kind === "checkbox") {
    return (
      <div className={`${styles.field} ${styles.check} ${className}`}>
        <input id={id} name={name} type="checkbox" className={styles.checkbox} />
        <label htmlFor={id} className={`mono ${styles.checkLabel}`}>
          {label}
        </label>
      </div>
    );
  }

  const shared = {
    id,
    name,
    required,
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": errorId,
    className: `p2 ${styles.input}`,
  };

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={id} className={`mono ${styles.label}`}>
        {label}
      </label>
      {props.kind === "textarea" ? (
        <textarea {...shared} rows={props.rows ?? 3} placeholder={props.placeholder} className={`p2 ${styles.input} ${styles.textarea}`} />
      ) : (
        <input {...shared} type={props.kind ?? "text"} placeholder={props.placeholder} autoComplete={props.autoComplete} />
      )}
      {error ? (
        <p id={errorId} className={`p3 ${styles.error}`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
