import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Hairline from "@/components/Hairline";
import Button from "@/components/Button";
import { marketUpdate, site } from "@/lib/copy";
import marketStats from "@/content/market-stats.json";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${marketUpdate.headline} — ${site.logo}` };

/** /market-update (BUILD.md §5): H1 + P1, the four stats as full-width hairline rows, three chart blocks
 *  (labelled Stone placeholders until data exists), Dustin's take on Stone, the two external links and the
 *  Zenlist button. Stats come from content/market-stats.json. */
export default function MarketUpdatePage() {
  const { charts, take, wantMore } = marketUpdate;
  return (
    <main className="below-header">
      <Section label={marketUpdate.label} id="market">
        <div className="grid">
          <Reveal as="h1" className={`h1 ${styles.headline}`}>
            {marketUpdate.headline}
          </Reveal>
          <p className={`p1 ${styles.intro}`}>{marketUpdate.intro}</p>
        </div>

        <div className={styles.stats}>
          <Hairline />
          {marketStats.stats.map((stat) => (
            <div key={stat.label}>
              <div className={`grid ${styles.stat}`}>
                <p className={`mono ${styles.statLabel}`}>{stat.label}</p>
                <p className={`h1 ${styles.statValue}`}>{stat.value}</p>
                <p className={`mono ${styles.statChange}`}>{stat.change}</p>
                <p className={`p3 ${styles.statNote}`}>{stat.note}</p>
              </div>
              <Hairline />
            </div>
          ))}
        </div>
      </Section>

      <section className={`${styles.charts} page`} data-tone="paper">
        {charts.map((chart, i) => (
          <Reveal as="figure" key={chart.title} delay={i * 80} className={styles.chart}>
            <figcaption className={styles.chartCaption}>
              <h2 className="h3">{chart.title}</h2>
              {"legend" in chart && chart.legend ? (
                <ul className={styles.legend}>
                  {chart.legend.map((item) => (
                    <li key={item} className="mono">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </figcaption>
            {/* Chart data is [TODO] in content/copy.md — a labelled placeholder, never invented numbers */}
            <div className={styles.placeholder}>
              <span className="mono">[ CHART DATA NEEDED ]</span>
            </div>
            {"source" in chart && chart.source ? <p className={`p3 ${styles.source}`}>{chart.source}</p> : null}
          </Reveal>
        ))}
      </section>

      <Section label={take.label} tone="stone" id="take">
        <div className="grid">
          <div className={styles.take}>
            {take.body.map((p) => (
              <p key={p} className="p2">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section label={wantMore.label} id="want-more">
        <div className="grid">
          <p className={`p2 ${styles.wantMoreBody}`}>{wantMore.body}</p>
          <div className={styles.actions}>
            {wantMore.links.map((link) => (
              <span key={link.label} className={styles.action}>
                {/* the report URLs are [TODO] in content/copy.md */}
                <Button variant="outlined" type="button">
                  {link.label}
                </Button>
                <span className={`mono ${styles.needed}`}>[ URL NEEDED ]</span>
              </span>
            ))}
            <Button href={wantMore.button.href}>{wantMore.button.label}</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
