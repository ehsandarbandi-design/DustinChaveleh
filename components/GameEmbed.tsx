"use client";
import { useEffect, useRef } from "react";
import styles from "./GameEmbed.module.css";

/** Mounts the existing Real Estate IQ game (public/real-estate-iq/index.html) in a same-origin iframe that
 *  sizes itself to the game's current screen, scrolls the page to the game when the screen changes, and
 *  passes this page's query string through so challenge links (?challenge=…&diff=…&host=…) keep working. */
export default function GameEmbed({ title }: { title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    let ro: ResizeObserver | null = null;
    let mo: MutationObserver | null = null;
    let last = 0;
    const fit = () => {
      const body = el.contentDocument?.body;
      if (!body) return;
      // The body's own height, not scrollHeight: the latter can never be smaller than the frame.
      const height = Math.ceil(body.getBoundingClientRect().height);
      if (!height || height === last) return;
      const screenChanged = last > 0;
      last = height;
      el.style.height = `${height}px`;
      if (screenChanged) {
        const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
        const top = el.getBoundingClientRect().top + window.scrollY - headerH;
        if (window.scrollY > top) window.scrollTo({ top, behavior: "instant" });
      }
    };
    const onLoad = () => {
      fit();
      const body = el.contentDocument?.body;
      if (body) {
        ro = new ResizeObserver(fit);
        ro.observe(body);
        // The game switches screens by toggling classes; refit on those too (fires even when the tab is hidden).
        mo = new MutationObserver(() => setTimeout(fit, 0));
        mo.observe(body, { attributes: true, attributeFilter: ["class", "style"], subtree: true, childList: true });
      }
    };
    el.addEventListener("load", onLoad);
    el.src = `/real-estate-iq/index.html${window.location.search}`;
    return () => {
      el.removeEventListener("load", onLoad);
      ro?.disconnect();
      mo?.disconnect();
    };
  }, []);

  return <iframe ref={frame} title={title} className={styles.frame} scrolling="no" />;
}
