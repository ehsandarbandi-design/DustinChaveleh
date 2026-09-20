"use client";
import { useEffect } from "react";
import type Lenis from "lenis";
import { setLenis } from "@/lib/lenis";
import { afterFirstPaint } from "@/lib/afterFirstPaint";

/** Lenis smooth scroll, driven by the GSAP ticker so ScrollTrigger stays in sync.
 *  GSAP and Lenis are imported after first paint so they never delay the initial render.
 *  Disabled entirely under prefers-reduced-motion (and switches off live if the setting changes). */
export default function SmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;
    let libs: { gsap: typeof import("gsap").default; Lenis: typeof Lenis } | null = null;

    const start = () => {
      if (lenis || !libs) return;
      const { gsap, Lenis: LenisCtor } = libs;
      lenis = new LenisCtor({ lerp: 0.1, smoothWheel: true });
      tick = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      setLenis(lenis);
    };
    const stop = () => {
      if (tick && libs) libs.gsap.ticker.remove(tick);
      lenis?.destroy();
      lenis = null;
      tick = null;
      setLenis(null);
    };
    const apply = () => (mq.matches ? stop() : start());

    // After first paint, off the critical path
    const cancel = afterFirstPaint(async () => {
        const [{ default: gsap }, { ScrollTrigger }, { default: LenisCtor }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger"), import("lenis")]);
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        libs = { gsap, Lenis: LenisCtor };
        apply();
        if (lenis) lenis.on("scroll", ScrollTrigger.update);
        mq.addEventListener("change", apply);
    });

    return () => {
      cancelled = true;
      cancel();
      mq.removeEventListener("change", apply);
      stop();
    };
  }, []);
  return null;
}
