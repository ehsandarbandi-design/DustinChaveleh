import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Img from "@/components/Img";
import Button from "@/components/Button";
import Social from "@/components/Social";
import Hairline from "@/components/Hairline";
import Video from "@/components/Video";
import { meetDustin, site } from "@/lib/copy";
import assets from "@/scripts/assets.json";
import styles from "./page.module.css";

/** One press screenshot at its own aspect ratio (from scripts/assets.json), wiping up into view. */
function PressImage({ src, stagger }: { src: string; stagger: number }) {
  const dims = (assets as Record<string, { width: number; height: number }>)[`public${src}`];
  return (
    <Reveal as="figure" mode="clip" stagger={stagger} className={styles.pressItem} style={dims ? { aspectRatio: `${dims.width} / ${dims.height}` } : undefined}>
      {/* alt text for the Business Insider images is [TODO] in content/copy.md */}
      <Img src={src} alt={meetDustin.featured.publication} fill sizes="(max-width: 767px) 50vw, 25vw" className={styles.img} />
    </Reveal>
  );
}

export const metadata: Metadata = { title: `${meetDustin.headline} — ${site.logo}` };

/** /meetdustin (BUILD.md §5, laid out like the reference "Our Founder" screen): the H1 across the top, then the
 *  subheadline, body and outlined button in columns 1–11 beside the portrait in columns 13–24; As Featured In on Stone (Figma 630:39: publication
 *  left, body + button and the screenshot collage in columns 13–24), the pull-quote over the background loop (Ink scrim), three hairline resource rows. */
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
            <Reveal className={styles.social}>
              <Social />
            </Reveal>
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
        <div className={`grid ${styles.featuredGrid}`}>
          <Reveal as="p" className={`mono ${styles.publication}`}>
            {featured.publication}
          </Reveal>
          <div className={styles.featuredBody}>
            {featured.body.map((p) => (
              <Reveal as="p" key={p} className="p2">
                {p}
              </Reveal>
            ))}
            <Reveal className={styles.featuredAction}>
              <Button variant="outlined" href={featured.button.href}>
                {featured.button.label}
              </Button>
            </Reveal>
          </div>
          {/* The article screenshots in the Figma collage (630:39): two stacked on the left, the tall one on the right */}
          <div className={styles.press}>
            <div className={styles.pressStack}>
              {[featured.images[0], featured.images[2]].map((src, i) => (
                <PressImage key={src} src={src} stagger={i} />
              ))}
            </div>
            <PressImage src={featured.images[1]} stagger={2} />
          </div>
        </div>
      </Section>

      <section className={`${styles.quote} page`} data-tone="ink">
        <Video src="/videos/meetdustin-quote-loop" className={styles.quoteVideo} />
        <div className={`grid ${styles.quoteGrid}`}>
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
