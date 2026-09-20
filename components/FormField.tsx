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

/** Form field: no box. H4 label above ("(required)" in Graphite), transparent input with a 1px Stone
 *  bottom border only, H4 text, 12px bottom padding. Focus: 2px Ink bottom border. Minimum touch height 48px. */
export default function FormField(props: FormFieldProps) {
  const { id, label, required, error, className = "" } = props;
  const name = props.name ?? id;
  const errorId = error ? `${id}-error` : undefined;
  const labelNode = (
    <>
      {label}
      {required ? <span className={styles.required}>(required)</span> : null}
    </>
  );

  if (props.kind === "checkbox") {
    return (
      <div className={`${styles.field} ${styles.check} ${className}`}>
        <input id={id} name={name} type="checkbox" className={styles.checkbox} />
        <label htmlFor={id} className={`h4 ${styles.checkLabel}`}>
          {labelNode}
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
    className: `h4 ${styles.input}`,
  };

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={id} className={`h4 ${styles.label}`}>
        {labelNode}
      </label>
      {props.kind === "textarea" ? (
        <textarea {...shared} rows={props.rows ?? 6} placeholder={props.placeholder} className={`h4 ${styles.input} ${styles.textarea}`} />
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
