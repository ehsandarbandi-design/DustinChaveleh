import Logo from "./Logo";
import TextLink from "./TextLink";
import Hairline from "./Hairline";
import Img from "./Img";
import Reveal from "./Reveal";
import { site } from "@/lib/copy";
import sectionStyles from "./Section.module.css";
import styles from "./Footer.module.css";

const brokerageLogos = [
  { src: "/images/logos/keller-williams-white.webp", alt: "Keller Williams", width: 168, height: 112 },
  { src: "/images/logos/realtor-white.webp", alt: "REALTOR®", width: 101, height: 112 },
  { src: "/images/logos/car-white.webp", alt: "California Association of REALTORS®", width: 112, height: 112 },
];

/** Footer (BUILD.md §4.9): Ink, Paper text; nav row, then a hairline, then contact/social and the license/logos rows. */
export default function Footer() {
  return (
    <footer className={`${sectionStyles.ink} ${styles.footer}`} data-tone="ink">
      <Reveal className={`${styles.row} ${styles.rowTop}`}>
        <Logo />
        <ul className={styles.nav}>
          {[...site.nav, site.cta].map((item) => (
            <li key={item.href}>
              <TextLink href={item.href} className="h4">
                {item.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </Reveal>
      <Hairline />

      <Reveal className={styles.row}>
        <address className={`mono ${styles.contact}`}>
          <TextLink href={site.phone.href}>{site.phone.label}</TextLink>
          <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
          <span>{site.office}</span>
        </address>
        <ul className={`mono ${styles.social}`}>
          {site.social.map((s) => (
            <li key={s.href}>
              <TextLink href={s.href}>{s.label}</TextLink>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className={`${styles.row} ${styles.rowLast}`}>
        <div className={styles.legal}>
          <span className="mono">{site.license}</span>
          <ul className={styles.logos}>
            {brokerageLogos.map((logo) => (
              <li key={logo.src}>
                <Img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={styles.logoImg} eager />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </footer>
  );
}
