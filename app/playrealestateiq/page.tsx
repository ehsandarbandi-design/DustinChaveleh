import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import GameEmbed from "@/components/GameEmbed";
import { realEstateIQ, site } from "@/lib/copy";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${realEstateIQ.title} — ${site.logo}` };

/** /playrealestateiq (BUILD.md §5): nav, footer, the hero copy, and the existing game embedded (not rebuilt). */
export default function PlayRealEstateIQPage() {
  return (
    <main className="below-header">
      <Section label={realEstateIQ.label} tone="ink" id="real-estate-iq-hero" className={styles.hero}>
        <div className="grid">
          <Reveal as="h1" className={`h1 ${styles.headline}`}>
            {realEstateIQ.headline}
          </Reveal>
          <p className={`p1 ${styles.sub}`}>{realEstateIQ.subheadline}</p>
          <div className={styles.actions}>
            <Button href="#game">{realEstateIQ.button}</Button>
            <a href="#game" className={`mono ${styles.hint}`}>
              {realEstateIQ.scrollHint}
            </a>
          </div>
        </div>
      </Section>

      {/* The existing Real Estate IQ game (public/real-estate-iq/index.html, Google Sheets backend), embedded as-is. */}
      <section id="game" className={`${styles.game} page`} data-tone="stone" data-game-embed="real-estate-iq">
        <GameEmbed title={realEstateIQ.title} />
      </section>
    </main>
  );
}
