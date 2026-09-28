import Logo from "./Logo";
import TextLink from "./TextLink";
import Hairline from "./Hairline";
import Img from "./Img";
import Reveal from "./Reveal";
import Social from "./Social";
import { site } from "@/lib/copy";
import sectionStyles from "./Section.module.css";
import styles from "./Footer.module.css";

const brokerageLogos = [
  { src: "/images/logos/keller-williams-white.webp", alt: "Keller Williams", width: 168, height: 112 },
  { src: "/images/logos/realtor-mark-white.webp", alt: "REALTOR®", width: 97, height: 112 },
  { src: "/images/logos/car-mark-white.webp", alt: "California Association of REALTORS®", width: 102, height: 112 },
];

/** Footer (Figma 678:2035): Ink, Paper text. Logo and nav; a 30% hairline; phone, email, office and CA DRE on the
 *  left with the social links on the right; then the three brokerage logos, 28px tall and bottom-aligned. */
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
      <Hairline className={styles.rule} />

      <Reveal className={styles.row}>
        <address className={`mono ${styles.contact}`}>
          <TextLink href={site.phone.href}>{site.phone.label}</TextLink>
          <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
          <span>{site.office}</span>
          <span>{site.license}</span>
        </address>
        <Social className={styles.social} />
      </Reveal>

      <Reveal className={`${styles.row} ${styles.rowLast}`}>
        <ul className={styles.logos}>
          {brokerageLogos.map((logo) => (
            <li key={logo.src}>
              <Img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={styles.logoImg} eager />
            </li>
          ))}
        </ul>
      </Reveal>
    </footer>
  );
}
