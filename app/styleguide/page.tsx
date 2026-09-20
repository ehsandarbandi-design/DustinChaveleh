import type { Metadata } from "next";
import Section from "@/components/Section";
import Label from "@/components/Label";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import TextLink from "@/components/TextLink";
import Hairline from "@/components/Hairline";
import Card from "@/components/Card";
import FormField from "@/components/FormField";
import Reveal from "@/components/Reveal";
import { site, home, contactForm, posts } from "@/lib/copy";
import styles from "./styleguide.module.css";

export const metadata: Metadata = {
  title: `Styleguide — ${site.title}`,
  robots: { index: false, follow: false },
};

const palette = [
  { name: "Paper", hex: "#FBFBFB", token: "--paper" },
  { name: "Stone", hex: "#E2DFDB", token: "--stone" },
  { name: "Taupe", hex: "#918F85", token: "--taupe" },
  { name: "Graphite", hex: "#4B4A4A", token: "--graphite" },
  { name: "Ink", hex: "#2D2C2B", token: "--ink" },
];
const effects = [
  { name: "Hero night", hex: "#050063", token: "--hero-night" },
  { name: "Hero glow", hex: "rgba(255,229,160,.4)", token: "--hero-glow" },
];

const typeStyles = [
  { cls: "h1", spec: "H1 · Inter 400 · 76 / 44px · 1.0 · −0.06em", sample: <>{home.about.headline[0]}<br />{home.about.headline[1]}</> },
  { cls: "h2", spec: "H2 · Inter 400 · 50 / 34px · 1.0 · −0.06em", sample: home.journal.headline },
  { cls: "h3", spec: "H3 · Inter 400 · 33 / 26px · 1.05 · −0.06em", sample: home.neighborhoods.items[0].name },
  { cls: "h4", spec: "H4 · Inter 400 · 21px · 1.1 · −0.07em", sample: site.nav[1].label },
  { cls: "p1", spec: "P1 · Inter 300 · 38 / 26px · 1.25 · −0.02em", sample: home.iq.subheadline },
  { cls: "p2", spec: "P2 · Inter 300 · 27 / 20px · 1.45 · −0.03em", sample: home.about.body[0] },
  { cls: "p3", spec: "P3 · Inter 300 · 14px · 1.5 · −0.05em", sample: home.nextStep.buyers.body },
  { cls: "mono", spec: "Mono · Inconsolata 300 · 14px · 1.6 · +0.02em · uppercase", sample: site.license },
];

const spacing: [string, number][] = [
  ["3xl", 192], ["2xl", 128], ["xl", 96], ["l", 64], ["m", 40], ["s", 24], ["xs", 16], ["2xs", 8],
];

export default function Styleguide() {
  const post = posts[0];
  const castro = home.neighborhoods.items.find((n) => n.slug === "castro")!;
  const marina = home.neighborhoods.items.find((n) => n.slug === "marina")!;

  return (
    <main>
      <div className={styles.bar}>
        <Logo />
      </div>

      <Section label="COLORS">
        <ul className={styles.swatches}>
          {[...palette, ...effects].map((c) => (
            <li key={c.token} className={styles.swatch}>
              <div className={styles.chip} style={{ background: c.hex }} />
              <p className="mono">{c.name}</p>
              <p className={`mono ${styles.muted}`}>{c.hex} · {c.token}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="TYPE">
        {typeStyles.map((t, i) => (
          <div key={t.cls}>
            {i > 0 ? <Hairline /> : null}
            <div className={styles.typeRow}>
              <p className={`mono ${styles.typeSpec}`}>{t.spec}</p>
              <p className={`${t.cls} ${styles.typeSample}`}>{t.sample}</p>
            </div>
          </div>
        ))}
        <Hairline />
        <div className={styles.typeRow}>
          <p className={`mono ${styles.typeSpec}`}>Logo · Inter 700 · 32 / 20px · exception</p>
          <div className={styles.typeSample}>
            <Logo />
          </div>
        </div>
      </Section>

      <Section label="SPACING" tone="stone">
        <ul>
          {spacing.map(([k, px]) => (
            <li key={k} className={styles.spaceRow}>
              <span className={`mono ${styles.spaceLabel}`}>--space-{k} · {px}px</span>
              <span className={styles.spaceBar} style={{ width: px }} />
            </li>
          ))}
        </ul>
        <div className={styles.motion}>
          <p className="mono">--gutter 2vw / 24px · --col-gap 20px · 24 / 8 columns</p>
          <p className="mono">--dur-fast 200ms · --dur 400ms · --dur-slow 700ms</p>
          <p className="mono">--ease cubic-bezier(.22, 1, .36, 1)</p>
        </div>
      </Section>

      <Section label="GRID">
        <div className={`grid ${styles.gridDemo}`}>
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className={styles.cell}>
              <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
          <p className={`p2 ${styles.spanStatement}`}>{home.about.body[2]}</p>
          <p className={`p1 ${styles.spanRight}`}>{home.hero.subheadline}</p>
        </div>
      </Section>

      <Section label="COMPONENTS">
        <div className={styles.block}>
          <p className={`mono ${styles.blockTitle}`}>Label</p>
          <Label>{home.about.label}</Label>
        </div>
        <Hairline />

        <div className={styles.block}>
          <p className={`mono ${styles.blockTitle}`}>Button · filled / outlined</p>
          <div className={styles.rowWrap}>
            <Button href={home.journal.button.href}>{home.journal.button.label}</Button>
            <Button type="button">{contactForm.button}</Button>
            <Button variant="outlined" arrow={false} href={site.cta.href}>{site.cta.label}</Button>
            <Button variant="outlined" href={site.propertySearch}>Start Your Property Search</Button>
          </div>
        </div>
        <Hairline />

        <div className={styles.block}>
          <p className={`mono ${styles.blockTitle}`}>Text link · underline wipes in on hover</p>
          <div className={styles.rowWrap}>
            <TextLink href={home.about.link.href} className="h4">{home.about.link.label}</TextLink>
            <TextLink href={home.nextStep.buyers.link.href} className="p2">{home.nextStep.buyers.link.label}</TextLink>
            <TextLink href={home.neighborhoods.link.href} className="p3">{home.neighborhoods.link.label}</TextLink>
          </div>
        </div>
        <Hairline />

        <div className={styles.block}>
          <p className={`mono ${styles.blockTitle}`}>Hairline · horizontal and vertical</p>
          <div className={styles.hairDemo}>
            <p className="p3">{site.office}</p>
            <Hairline vertical />
            <p className="p3">{site.email}</p>
          </div>
          <Hairline />
        </div>
        <Hairline />

        <div className={styles.block}>
          <p className={`mono ${styles.blockTitle}`}>Card · blog (Stone placeholder until cover images exist) · neighborhood · missing photo</p>
          <div className={`grid ${styles.cards}`}>
            <Reveal className={styles.cardCell}>
              <Card meta={post.dateLabel} title={post.title} text={post.excerpt} link={{ label: home.journal.cardLink, href: post.href }} />
            </Reveal>
            <Reveal delay={80} className={styles.cardCell}>
              <Card image={{ src: castro.image!, alt: castro.name }} title={castro.name} text={castro.description} />
            </Reveal>
            <Reveal delay={160} className={styles.cardCell}>
              <Card title={marina.name} text={marina.description} />
            </Reveal>
          </div>
        </div>
        <Hairline />

        <div className={styles.block}>
          <p className={`mono ${styles.blockTitle}`}>Form field · default · error · checkbox · textarea</p>
          <div className={`grid ${styles.form}`}>
            <FormField id="sg-first" label={contactForm.fields.firstName.label} required autoComplete="given-name" className={styles.half} />
            <FormField id="sg-last" label={contactForm.fields.lastName.label} autoComplete="family-name" className={styles.half} />
            <FormField id="sg-email" kind="email" label={contactForm.fields.email.label} required autoComplete="email" error="[ TEXT NEEDED ]" className={styles.half} />
            <FormField id="sg-phone" kind="tel" label={contactForm.fields.phone.label} autoComplete="tel" className={styles.half} />
            <FormField id="sg-news" kind="checkbox" label={contactForm.fields.newsletter.label} className={styles.full} />
            <FormField id="sg-message" kind="textarea" label={contactForm.fields.message.label} required placeholder={contactForm.fields.message.placeholder} className={styles.full} />
            <div className={styles.full}>
              <Button type="button">{contactForm.button}</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section label={home.iq.label} tone="ink">
        <div className={styles.block}>
          <p className={`mono ${styles.blockTitle}`}>On Ink · label · buttons · text link · hairline</p>
          <p className={`p1 ${styles.inkSample}`}>{home.iq.subheadline}</p>
          <div className={styles.rowWrap}>
            <Button href={home.iq.button.href}>{home.iq.button.label}</Button>
            <Button variant="outlined" arrow={false} href={site.cta.href}>{site.cta.label}</Button>
            <TextLink href={home.about.link.href} className="h4">{home.about.link.label}</TextLink>
          </div>
        </div>
        <Hairline />
      </Section>
    </main>
  );
}
