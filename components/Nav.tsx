"use client";
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import TextLink from "./TextLink";
import { site } from "@/lib/copy";
import { getLenis } from "@/lib/lenis";
import styles from "./Nav.module.css";

type Theme = "light" | "dark" | "hero";

/** Site header (BUILD.md §3). Fixed. Transparent over the hero, Paper/Ink over light sections,
 *  Ink/Paper over dark ones — decided by whichever [data-tone] element sits under the header's
 *  bottom edge. Below 1280px: hamburger + full-screen Paper menu (Figma "Menue Mobile", 624:3). */
export default function Nav() {
  const pathname = usePathname();
  // The menu remembers the path it was opened on, so any navigation closes it without an effect.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const close = () => setOpenedAt(null);
  const [theme, setTheme] = useState<Theme>("light");
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // Which tone is under the header? Observe a 1px band at the header's bottom edge.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let io: IntersectionObserver | null = null;
    const observe = () => {
      io?.disconnect();
      const h = header.offsetHeight;
      const bottom = Math.max(window.innerHeight - h - 1, 0);
      // Several elements can sit under the band at once (the pinned hero stays there while the next
      // section slides over it), so the one that paints on top — last in document order — decides.
      const under = new Set<HTMLElement>();
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) under.add(el);
            else under.delete(el);
          }
          let top: HTMLElement | null = null;
          for (const el of under) {
            if (!top || top.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) top = el;
          }
          if (!top) return;
          header.dataset.ready = "1";
          const tone = top.dataset.tone;
          setTheme(tone === "hero" ? "hero" : tone === "ink" ? "dark" : "light");
        },
        { rootMargin: `-${h}px 0px -${bottom}px 0px`, threshold: 0 },
      );
      document.querySelectorAll<HTMLElement>("[data-tone]").forEach((el) => io?.observe(el));
    };
    observe();
    window.addEventListener("resize", observe);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", observe);
    };
  }, [pathname]);

  // Open menu: lock scroll, trap focus, close on Escape, return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const focusables = () => {
      const inPanel = panelRef.current ? Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button")) : [];
      return [toggleRef.current, ...inPanel].filter((el): el is HTMLElement => !!el);
    };
    const timer = window.setTimeout(() => focusables()[1]?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const els = focusables();
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const toggle = toggleRef.current;
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      lenis?.start();
      toggle?.focus();
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`${styles.header} ${styles[theme]} ${open ? styles.open : ""}`} data-theme={theme}>
      <Logo id="nav-logo" className={styles.logo} />

      <nav className={styles.desktop}>
        <ul className={styles.links}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <TextLink href={item.href} className="h4">
                {item.label}
              </TextLink>
            </li>
          ))}
        </ul>
        <Button variant="outlined" arrow={false} href={site.cta.href}>
          {site.cta.label}
        </Button>
      </nav>

      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpenedAt(open ? null : pathname)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <div id={panelId} ref={panelRef} className={styles.panel} role="dialog" aria-modal="true" inert={!open}>
        <div className={styles.panelBlock}>
        <ul className={styles.panelLinks}>
          {site.nav.map((item, i) => (
            <li key={item.href} style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}>
              <Link href={item.href} className={`h2 ${styles.panelLink}`} onClick={close}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.panelCta} style={{ transitionDelay: open ? `${site.nav.length * 60}ms` : "0ms" }}>
          <Button variant="outlined" arrow={false} href={site.cta.href} onClick={close}>
            {site.cta.label}
          </Button>
        </div>
        </div>
      </div>
    </header>
  );
}
