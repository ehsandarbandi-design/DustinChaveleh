import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Img from "@/components/Img";
import Button from "@/components/Button";
import Hairline from "@/components/Hairline";
import { meetDustin, site } from "@/lib/copy";
import styles from "./page.module.css";

export const metadata: Metadata = { title: `${meetDustin.headline} — ${site.logo}` };

/** /meetdustin (BUILD.md §5): hero beside a half-width portrait, body in columns 1–14, As Featured In on Stone,
 *  the pull-quote on Ink, three hairline resource rows, and the outlined button at the end. */
export default function MeetDustinPage() {
  const { featured, quote, resources } = meetDustin;
  return (
    <main className="below-header">
      <section className={`${styles.hero} page`} data-tone="paper">
        <div className={`grid ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <Reveal as="h1" className="h1">
              {meetDustin.headline}
            </Reveal>
            <p className={`h4 ${styles.subheadline}`}>{meetDustin.subheadline}</p>
          </div>
          <Reveal as="figure" className={styles.portrait}>
            <Img src={meetDustin.image} alt={site.logo} fill sizes="(max-width: 767px) 100vw, 50vw" className={styles.img} eager />
          </Reveal>
          <div className={styles.body}>
            {meetDustin.body.map((p) => (
              <p key={p} className="p2">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Section label={featured.label} tone="stone" id="featured">
        <div className="grid">
          <p className={`mono ${styles.publication}`}>{featured.publication}</p>
          <div className={styles.featuredBody}>
            {featured.body.map((p) => (
              <p key={p} className="p2">
                {p}
              </p>
            ))}
          </div>
        </div>
        <ul className={styles.press}>
          {featured.images.map((src, i) => (
            <Reveal as="li" key={src} delay={i * 80} className={styles.pressItem}>
              {/* alt text for the Business Insider images is [TODO] in content/copy.md */}
              <Img src={src} alt={featured.publication} fill sizes="(max-width: 767px) 100vw, 30vw" className={styles.img} />
            </Reveal>
          ))}
        </ul>
        <div className={styles.featuredAction}>
          {/* the article URL is [TODO] in content/copy.md — until then this button has no destination */}
          <Button variant="outlined" type="button">
            {featured.button.label}
          </Button>
          <span className={`mono ${styles.needed}`}>[ URL NEEDED ]</span>
        </div>
      </Section>

      <section className={`${styles.quote} page`} data-tone="ink">
        <div className="grid">
          <blockquote className={styles.blockquote}>
            <Reveal as="p" className="p1">
              {quote.text}
            </Reveal>
            <p className={`mono ${styles.attribution}`}>{quote.attribution}</p>
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
                <h3 className={`h3 ${styles.rowTitle}`}>{item.title}</h3>
                <p className={`p2 ${styles.rowText}`}>{item.text}</p>
              </div>
              <Hairline />
            </div>
          ))}
        </div>
        <div className={styles.end}>
          <Button variant="outlined" arrow={false} href={meetDustin.button.href}>
            {meetDustin.button.label}
          </Button>
        </div>
      </Section>
    </main>
  );
}
