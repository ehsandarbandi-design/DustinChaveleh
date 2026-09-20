import Hero from "@/components/Hero";
import About from "@/components/home/About";
import Journal from "@/components/home/Journal";
import RealEstateIQ from "@/components/home/RealEstateIQ";
import Neighborhoods from "@/components/home/Neighborhoods";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.after}>
        <About />
        <Journal />
        <RealEstateIQ />
        <Neighborhoods />
        {/* Sections 7–9 follow here, one at a time (BUILD.md §4). */}
      </div>
    </main>
  );
}
