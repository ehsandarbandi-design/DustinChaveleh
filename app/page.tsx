import Hero from "@/components/Hero";
import About from "@/components/home/About";
import Journal from "@/components/home/Journal";
import RealEstateIQ from "@/components/home/RealEstateIQ";
import Neighborhoods from "@/components/home/Neighborhoods";
import NextStep from "@/components/home/NextStep";
import Contact from "@/components/home/Contact";
import Testimonials from "@/components/Testimonials";
import PropertySearch from "@/components/PropertySearch";
import { site, seo } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMeta({ title: site.title, description: seo.home, path: "/" });

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.after}>
        <About />
        <Journal />
        <RealEstateIQ />
        <Testimonials />
        <Neighborhoods />
        <PropertySearch />
        <NextStep />
        <Contact />
      </div>
    </main>
  );
}
