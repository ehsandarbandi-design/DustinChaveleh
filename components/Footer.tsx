import Logo from "./Logo";
import TextLink from "./TextLink";
import Hairline from "./Hairline";
import Img from "./Img";
import { site } from "@/lib/copy";
import sectionStyles from "./Section.module.css";
import styles from "./Footer.module.css";

const brokerageLogos = [
  { src: "/images/logos/keller-williams.webp", alt: "Keller Williams", width: 168, height: 112 },
  { src: "/images/logos/realtor.webp", alt: "REALTOR®", width: 101, height: 112 },
  { src: "/images/logos/car.webp", alt: "California Association of REALTORS®", width: 113, height: 112 },
];

/** Footer (BUILD.md §4.9): Ink, Paper text, three rows separated by hairlines. */
export default function Footer() {
  return (
    <footer className={`${sectionStyles.ink} ${styles.footer}`} data-tone="ink">
      <div className={`${styles.row} ${styles.rowTop}`}>
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
      </div>
      <Hairline />

      <div className={styles.row}>
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
      </div>
      <Hairline />

      <div className={styles.row}>
        <div className={styles.legal}>
          <span className="mono">{site.license}</span>
          <ul className={styles.logos}>
            {brokerageLogos.map((logo) => (
              <li key={logo.src}>
                <Img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={styles.logoImg} />
              </li>
            ))}
          </ul>
        </div>
        {/* Fine print: no text for this line exists in content/copy.md yet */}
        <p className={`p3 ${styles.finePrint}`}>[ TEXT NEEDED ]</p>
      </div>
    </footer>
  );
}
