import type { Metadata } from "next";
import GameEmbed from "@/components/GameEmbed";
import { realEstateIQ, site } from "@/lib/copy";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${realEstateIQ.title} — ${site.logo}` };

/** /playrealestateiq: nav, the existing game embedded as-is (public/real-estate-iq/index.html), footer. */
export default function PlayRealEstateIQPage() {
  return (
    <main className="below-header">
      <section id="game" className={`${styles.game} page`} data-tone="stone" data-game-embed="real-estate-iq">
        <GameEmbed title={realEstateIQ.title} />
      </section>
    </main>
  );
}
