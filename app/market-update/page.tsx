import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Hairline from "@/components/Hairline";
import Button from "@/components/Button";
import { marketUpdate, site } from "@/lib/copy";
import marketStats from "@/content/market-stats.json";
import marketCharts from "@/content/market-charts.json";
import AppreciationGrid from "@/components/AppreciationGrid";
import Img from "@/components/Img";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${marketUpdate.headline} — ${site.logo}` };

/** /market-update (BUILD.md §5): H1 + P1, the four stats as full-width hairline rows, three chart blocks
 *  (labelled Stone placeholders until data exists), Dustin's take on Stone, the two report links stacked with the
 *  Zenlist button under them beside the bird's-eye photo. Stats come from content/market-stats.json. */
export default function MarketUpdatePage() {
  const { charts, take, wantMore } = marketUpdate;
  return (
    <main className="below-header">
      <Section label={marketUpdate.label} id="market">
        <div className="grid">
          <Reveal as="h1" className={`h1 ${styles.headline}`}>
            {marketUpdate.headline}
          </Reveal>
          <Reveal as="p" className={`p1 ${styles.intro}`}>{marketUpdate.intro}</Reveal>
        </div>

        <div className={styles.stats}>
          <Hairline />
          {marketStats.stats.map((stat) => (
            <div key={stat.label}>
              <Reveal className={`grid ${styles.stat}`}>
                <p className={`mono ${styles.statLabel}`}>{stat.label}</p>
                <p className={`h1 ${styles.statValue}`}>{stat.value}</p>
                <p className={`mono ${styles.statChange}`}>{stat.change}</p>
                <p className={`p3 ${styles.statNote}`}>{stat.note}</p>
              </Reveal>
              <Hairline />
            </div>
          ))}
        </div>
      </Section>

      <section className={`${styles.charts} page`} data-tone="paper">
        {charts.map((chart, i) => (
          <Reveal as="figure" key={chart.title} stagger={i} className={styles.chart}>
            <figcaption className={styles.chartCaption}>
              <h2 className="h3">{chart.title}</h2>
            </figcaption>
            {i === 2 ? (
              <AppreciationGrid series={marketCharts.appreciation.series as { key: string; label: string; source: string; data: [number, number][] }[]} legend={marketCharts.appreciation.legend} />
            ) : (
              /* Data for the first two charts is still [TODO] in content/copy.md — a labelled placeholder, never invented numbers */
              <div className={styles.placeholder}>
                <span className="mono">[ CHART DATA NEEDED ]</span>
              </div>
            )}
          </Reveal>
        ))}
      </section>

      <Section label={take.label} tone="stone" id="take">
        <div className="grid">
          <div className={styles.take}>
            {take.body.map((p) => (
              <Reveal as="p" key={p} className="p2">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section label={wantMore.label} id="want-more">
        <div className={`grid ${styles.wantMoreGrid}`}>
          <div className={styles.wantMoreText}>
            <Reveal as="p" className="p2">
              {wantMore.body}
            </Reveal>
            <Reveal className={styles.links}>
              {wantMore.links.map((link) => (
                <Button key={link.label} variant="outlined" href={link.href}>
                  {link.label}
                </Button>
              ))}
            </Reveal>
            <Reveal button className={styles.search}>
              <Button href={wantMore.button.href}>{wantMore.button.label}</Button>
            </Reveal>
          </div>
          <Reveal as="figure" mode="clip" className={styles.wantMoreMedia}>
            <Img src="/images/market/bird-view.webp" alt="" fill sizes="(max-width: 767px) 100vw, 50vw" className={styles.img} />
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
