import Hero from "@/components/Hero";
import About from "@/components/home/About";
import Journal from "@/components/home/Journal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.after}>
        <About />
        <Journal />
        {/* Sections 5–9 follow here, one at a time (BUILD.md §4). */}
      </div>
    </main>
  );
}
