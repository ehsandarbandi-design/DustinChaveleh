import type { Metadata } from "next";
import GameEmbed from "@/components/GameEmbed";
import { realEstateIQ, site, seo } from "@/lib/copy";
import { pageMeta } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = pageMeta({ title: `${realEstateIQ.title} — ${site.logo}`, description: seo.realEstateIQ, path: "/playrealestateiq" });

/** /playrealestateiq: nav, the existing game embedded as-is (public/real-estate-iq/index.html), footer. */
export default function PlayRealEstateIQPage() {
  return (
    <main className="below-header">
      <section id="game" className={styles.game} data-tone="paper" data-game-embed="real-estate-iq">
        <GameEmbed title={realEstateIQ.title} />
      </section>
    </main>
  );
}
