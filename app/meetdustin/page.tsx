import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Img from "@/components/Img";
import Button from "@/components/Button";
import Hairline from "@/components/Hairline";
import { meetDustin, site } from "@/lib/copy";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${meetDustin.headline} — ${site.logo}` };

/** /meetdustin (BUILD.md §5, laid out like the reference "Our Founder" screen): the H1 across the top, then the
 *  subheadline, body and outlined button in columns 1–11 beside the portrait in columns 13–24; As Featured In on Stone, the pull-quote
 *  on Ink, three hairline resource rows. */
export default function MeetDustinPage() {
  const { featured, quote, resources } = meetDustin;
  return (
    <main className="below-header">
      <section className={`${styles.hero} page`} data-tone="paper">
        <div className={`grid ${styles.heroGrid}`}>
          <Reveal as="h1" className={`h1 ${styles.headline}`}>
            {meetDustin.headline}
          </Reveal>
          <div className={styles.heroText}>
            <Reveal as="p" className={`h3 ${styles.subheadline}`}>
              {meetDustin.subheadline}
            </Reveal>
            <div className={styles.body}>
              {meetDustin.body.map((p) => (
                <Reveal as="p" key={p} className="p2">
                  {p}
                </Reveal>
              ))}
            </div>
            <Reveal className={styles.heroAction}>
              <Button variant="outlined" href={meetDustin.button.href}>
                {meetDustin.button.label}
              </Button>
            </Reveal>
          </div>
          <Reveal as="figure" mode="clip" className={styles.portrait}>
            <Img src={meetDustin.image} alt={site.logo} fill sizes="(max-width: 767px) 100vw, 50vw" className={styles.img} eager />
          </Reveal>
        </div>
      </section>

      <Section label={featured.label} tone="stone" id="featured">
        <div className="grid">
          <Reveal as="p" className={`mono ${styles.publication}`}>{featured.publication}</Reveal>
          <div className={styles.featuredBody}>
            {featured.body.map((p) => (
              <Reveal as="p" key={p} className="p2">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
        <ul className={styles.press}>
          {featured.images.map((src, i) => (
            <Reveal as="li" key={src} mode="clip" stagger={i} className={styles.pressItem}>
              {/* alt text for the Business Insider images is [TODO] in content/copy.md */}
              <Img src={src} alt={featured.publication} fill sizes="(max-width: 767px) 100vw, 30vw" className={styles.img} />
            </Reveal>
          ))}
        </ul>
        <Reveal className={styles.featuredAction}>
          <Button variant="outlined" href={featured.button.href}>
            {featured.button.label}
          </Button>
        </Reveal>
      </Section>

      <section className={`${styles.quote} page`} data-tone="ink">
        <div className="grid">
          <blockquote className={styles.blockquote}>
            <Reveal as="p" className="p1">
              {quote.text}
            </Reveal>
            <Reveal as="p" className={`mono ${styles.attribution}`}>{quote.attribution}</Reveal>
          </blockquote>
        </div>
      </section>

      <Section label={resources.label} id="resources">
        <div className="grid">
          <Reveal as="h2" className={`h2 ${styles.resourcesHeadline}`}>
            {resources.headline}
          </Reveal>
        </div>
        <div className={styles.rows}>
          <Hairline />
          {resources.items.map((item) => (
            <div key={item.title}>
              <div className={`grid ${styles.row}`}>
                <Reveal as="h3" className={`h3 ${styles.rowTitle}`}>
                  {item.title}
                </Reveal>
                <Reveal as="p" className={`p2 ${styles.rowText}`}>
                  {item.text}
                </Reveal>
              </div>
              <Hairline />
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
