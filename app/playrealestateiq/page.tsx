import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { realEstateIQ, site } from "@/lib/copy";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${realEstateIQ.title} — ${site.logo}` };

/** /playrealestateiq (BUILD.md §5): the page shell only — nav, footer, the hero copy, and a clearly marked
 *  container for the existing game. The game itself is not rebuilt here. */
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

      {/* ── Game embed target ─────────────────────────────────────────────────────────
          The existing Real Estate IQ game (Google Sheets backend) mounts here. Keep this id. */}
      <section id="game" className={`${styles.game} page`} data-tone="stone" data-game-embed="real-estate-iq">
        <div className={styles.gameSlot}>
          <span className="mono">[ REAL ESTATE IQ GAME EMBEDS HERE ]</span>
        </div>
      </section>
    </main>
  );
}
