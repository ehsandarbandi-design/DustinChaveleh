import Hero from "@/components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.after}>
        {/* Sections 2–9 are added here one at a time (BUILD.md §4). */}
        <div className={styles.placeholder} data-tone="paper" />
      </div>
    </main>
  );
}
