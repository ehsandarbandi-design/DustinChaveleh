import Link from "next/link";
import { site } from "@/lib/copy";
import styles from "./Logo.module.css";

/** The logo is live text: "Dustin Chaveleh" in Inter Bold (32px desktop / 20px mobile). Links to "/". */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`${styles.logo} ${className}`}>
      {site.logo}
    </Link>
  );
}
