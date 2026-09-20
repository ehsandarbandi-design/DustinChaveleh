import styles from "./Arrow.module.css";

/** The "⤷" that starts every button label, drawn as an SVG so it matches the text stroke
 *  on every platform (the Google Fonts latin subsets contain no arrow glyphs). Scales with font-size. */
export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`${styles.arrow} ${className}`} viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true" focusable="false">
      <path d="M4 1.5V9c0 1.66 1.34 3 3 3h6.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10.75 9.25 13.5 12l-2.75 2.75" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
