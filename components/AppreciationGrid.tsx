"use client";
import { useState } from "react";
import styles from "./AppreciationGrid.module.css";

type Series = { key: string; label: string; source: string; data: [number, number][] };

/* Six tiers, encoded within the palette: gains fill the cell (Ink, Graphite, Taupe by size),
   flat is Stone, declines are outlined (Taupe, then Ink for −10% and beyond). */
const tier = (pct: number) => (pct >= 15 ? "pos3" : pct >= 5 ? "pos2" : pct >= 1 ? "pos1" : pct === 0 ? "flat" : pct >= -9 ? "neg1" : "neg2");
const fmt = (pct: number) => (pct === 0 ? "0%" : `${pct > 0 ? "+" : "−"}${Math.abs(pct)}%`);

/** Home Price Appreciation Over Time — a grid of years, one cell per year, with a series switch. */
export default function AppreciationGrid({ series, legend }: { series: Series[]; legend: string[] }) {
  const [active, setActive] = useState(series[0].key);
  const current = series.find((s) => s.key === active) ?? series[0];
  const tiers = ["pos3", "pos2", "pos1", "flat", "neg1", "neg2"] as const;
  return (
    <div className={styles.wrap}>
      <div className={styles.tabs} role="tablist">
        {series.map((s) => (
          <button key={s.key} type="button" role="tab" aria-selected={s.key === active} className={`mono ${styles.tab}`} onClick={() => setActive(s.key)}>
            {s.label}
          </button>
        ))}
      </div>
      <ul className={styles.legend}>
        {legend.map((label, i) => (
          <li key={label} className={`mono ${styles.legendItem}`}>
            <span className={`${styles.swatch} ${styles[tiers[i]]}`} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
      <ul className={styles.grid} role="tabpanel">
        {current.data.map(([year, pct]) => (
          <li key={year} className={`${styles.cell} ${styles[tier(pct)]}`}>
            <span className={`h4 ${styles.pct}`}>{fmt(pct)}</span>
            <span className={`mono ${styles.year}`}>{year}</span>
          </li>
        ))}
      </ul>
      <p className={`p3 ${styles.source}`}>{current.source}</p>
    </div>
  );
}
