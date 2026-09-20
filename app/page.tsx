import Hero from "@/components/Hero";
import About from "@/components/home/About";
import PortraitBand from "@/components/home/PortraitBand";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.after}>
        <About />
        <PortraitBand />
        {/* Sections 4–9 follow here, one at a time (BUILD.md §4). */}
      </div>
    </main>
  );
}
