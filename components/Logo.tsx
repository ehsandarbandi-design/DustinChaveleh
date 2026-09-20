import Link from "next/link";
import { site } from "@/lib/copy";
import styles from "./Logo.module.css";

/** The logo is live text: "Dustin Chaveleh" in Inter Bold (32px desktop / 20px mobile). Links to "/". */
export default function Logo({ className = "", id }: { className?: string; id?: string }) {
  return (
    <Link href="/" id={id} className={`${styles.logo} ${className}`}>
      {site.logo}
    </Link>
  );
}
