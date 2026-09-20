import Hero from "@/components/Hero";
import About from "@/components/home/About";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.after}>
        <About />
        {/* Sections 3–9 (journal onward) follow here, one at a time (BUILD.md §4). */}
      </div>
    </main>
  );
}
