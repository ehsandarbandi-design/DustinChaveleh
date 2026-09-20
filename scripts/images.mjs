// Generates web versions of the source assets (assets/, not in git) into public/images
// and records the mapping in ASSETS.md (from scripts/assets.json).
//
//   npm run images                 all groups
//   npm run images -- hero logos   only these groups: hero portrait neighborhoods press logos
//
// Sizes follow BUILD.md §8: hero layers 2560 + 1280 (WebP + AVIF), photos 2560 full-bleed,
// 1600 for cards. Nothing is enlarged past its source size.
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const RECORD = path.join(ROOT, "scripts/assets.json");

const jobs = [
  // hero parallax layers (PNG with transparency for City and Cloude → keep alpha)
  { group: "hero", src: "assets/images/hero/Sky.png", out: "hero/sky", widths: [2560, 1280], formats: ["avif", "webp"] },
  { group: "hero", src: "assets/images/hero/Bay.png", out: "hero/bay", widths: [2560, 1280], formats: ["avif", "webp"] },
  { group: "hero", src: "assets/images/hero/City.png", out: "hero/city", widths: [2560, 1280], formats: ["avif", "webp"] },
  { group: "hero", src: "assets/images/hero/Cloude.png", out: "hero/clouds", widths: [2560, 1280], formats: ["avif", "webp"] },
  // portraits — full-bleed
  { group: "portrait", src: "assets/images/portrait/dustin-1.png", out: "portrait/dustin-1", widths: [2560], formats: ["webp"] },
  { group: "portrait", src: "assets/images/portrait/dustin-2.png", out: "portrait/dustin-2", widths: [2560], formats: ["webp"] },
  // neighborhoods — cards (source files are named by title; output by slug)
  ...Object.entries({
    "castro.jpg": "castro", "civic-center.jpg": "civic-center", "mission.jpg": "mission", "nob-hill.jpg": "nob-hill",
    " Twin Peaks.jpg": "twin-peaks", "Duboce Triangle.jpg": "duboce-triangle", "Embarcadero.jpg": "embarcadero",
    "Excelsior.jpg": "excelsior", "Haight Ashbury.jpg": "haight-ashbury", "Marina.webp": "marina",
    "Noe_Valley.jpg": "noe-valley", "North Beach.webp": "north-beach",
  }).map(([file, slug]) => ({ group: "neighborhoods", src: `assets/images/neighborhoods/${file}`, out: `neighborhoods/${slug}`, widths: [1600], formats: ["webp"] })),
  // blog covers — cards (source files are named by post title; output by post slug)
  ...Object.entries({
    "San Francisco Property Transfer Taxes 2026 Guide.jpg": "san-francisco-transfer-taxes",
    "Rent Control in San Francisco.jpg": "rent-control-in-san-francisco",
    "Ranking the Best Platforms for Home Searching (2026 Guide)45.PNG": "i0ccwm3gm435y9qc8i31gw5zbbqd88",
    "Tenant Buyout Costs in San Francisco.jpg": "tenantbuyouts",
    "Schools in San Francisco.jpg": "schools-in-san-francisco",
    "Home Buyers and Sellers Generational Trends.jpg": "home-buyers-and-sellers-generational-trends",
    "Why Real Estate Deals Fall Through.jpg": "why-real-estate-deals-fall-through",
    "Before You Buy in the Sunset, Know Its History.webp": "before-you-buy-in-the-sunset-know-its-history",
  }).map(([file, slug]) => ({ group: "blog", src: `assets/images/blog/${file}`, out: `blog/${slug}`, widths: [1600], formats: ["webp"] })),
  // press — Meet Dustin "As Featured In"
  { group: "press", src: "assets/images/press/business-insider/business-insider-1.webp", out: "press/business-insider-1", widths: [1600], formats: ["webp"] },
  { group: "press", src: "assets/images/press/business-insider/business-insider-2.webp", out: "press/business-insider-2", widths: [1600], formats: ["webp"] },
  { group: "press", src: "assets/images/press/business-insider/business-insider-3.webp", out: "press/business-insider-3", widths: [1600], formats: ["webp"] },
  // brokerage logos — shown 28px tall in the footer; exported at 4× height
  { group: "logos", src: "assets/images/logos/keller-williams.webp", out: "logos/keller-williams", heights: [112], formats: ["webp"] },
  { group: "logos", src: "assets/images/logos/realtor.webp", out: "logos/realtor", heights: [112], formats: ["webp"] },
  { group: "logos", src: "assets/images/logos/car.webp", out: "logos/car", heights: [112], formats: ["webp"] },
];

const wanted = process.argv.slice(2);
const selected = wanted.length ? jobs.filter((j) => wanted.includes(j.group)) : jobs;
if (!selected.length) {
  console.error(`No jobs matched. Groups: ${[...new Set(jobs.map((j) => j.group))].join(" ")}`);
  process.exit(1);
}

let record = {};
try {
  record = JSON.parse(await readFile(RECORD, "utf8"));
} catch {}

for (const job of selected) {
  const input = sharp(path.join(ROOT, job.src), { limitInputPixels: false }).rotate();
  const sizes = job.widths ? job.widths.map((width) => ({ width })) : job.heights.map((height) => ({ height }));
  for (const size of sizes) {
    for (const fmt of job.formats) {
      const suffix = sizes.length > 1 ? `-${size.width ?? size.height}` : "";
      const rel = `public/images/${job.out}${suffix}.${fmt}`;
      const dest = path.join(ROOT, rel);
      await mkdir(path.dirname(dest), { recursive: true });
      let pipeline = input.clone().resize({ ...size, withoutEnlargement: true });
      pipeline = fmt === "avif" ? pipeline.avif({ quality: 55, effort: 4 }) : pipeline.webp({ quality: 82, effort: 5, alphaQuality: 95 });
      const info = await pipeline.toFile(dest);
      record[rel] = { source: job.src, width: info.width, height: info.height, bytes: info.size };
      console.log(`${rel}  ${info.width}×${info.height}  ${Math.round(info.size / 1024)} KB`);
    }
  }
}

await writeFile(RECORD, JSON.stringify(record, null, 2) + "\n");

const rows = Object.entries(record)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([rel, r]) => `| \`${rel}\` | \`${r.source}\` | ${r.width} × ${r.height} | ${Math.round(r.bytes / 1024)} KB |`);
await writeFile(
  path.join(ROOT, "ASSETS.md"),
  [
    "# Assets",
    "",
    "Web versions in `public/images/` are generated from the source files in `assets/` (not in git) by `npm run images`.",
    "This file is written by that script — do not edit by hand.",
    "",
    "| Public file | Source | Size | Weight |",
    "|---|---|---|---|",
    ...rows,
    "",
  ].join("\n"),
);
console.log(`\nRecorded ${rows.length} files in ASSETS.md`);
