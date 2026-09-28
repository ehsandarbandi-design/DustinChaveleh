import Reveal from "./Reveal";
import Button from "./Button";
import { site } from "@/lib/copy";
import styles from "./BookCall.module.css";

/** "Prefer to talk it through?" line and the Calendly button (a 15-minute call), under the contact details
 *  on the home Get In Touch section and on Work with Dustin. Opens Calendly in a new tab. */
export default function BookCall({ className = "" }: { className?: string }) {
  const { intro, button } = site.bookCall;
  return (
    <Reveal className={`${styles.block} ${className}`}>
      <p className={`p3 ${styles.intro}`}>{intro}</p>
      <Button variant="outlined" href={button.href}>
        {button.label}
      </Button>
    </Reveal>
  );
}
