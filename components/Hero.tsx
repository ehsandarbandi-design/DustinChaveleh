"use client";
import { useEffect, useRef, type Ref } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Button from "./Button";
import { home } from "@/lib/copy";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger, CustomEase);

/* Motion values read from the Figma timelines (frames 585:1633 desktop, 601:1042 mobile), as design px of
   travel over one full scroll. `layerScale` is the photo layers' size in that frame relative to 1792px,
   `land` is the scroll fraction at which the headline arrives on the nav logo. */
const DESKTOP = { frame: 1792, layerScale: 1, bay: -182.824, city: -288.147, clouds: -659, land: 0.6792 };
const MOBILE = { frame: 393, layerScale: 1400 / 1792, bay: -157.658, city: -248.483, clouds: -568.287, land: 0.8693 };
/** Pin distance in viewport heights: the "Next section" travels 1509px in the 988px-tall frame. */
const PIN_VH = 1.527;
const LAYER_H = 1330; // layer image height at scale 1 (1792 × 1330)

type LayerName = "sky" | "bay" | "city" | "clouds";

function Layer({ name, priority = false, ref }: { name: LayerName; priority?: boolean; ref?: Ref<HTMLDivElement> }) {
  return (
    <div className={styles.layer} ref={ref} data-layer={name}>
      <picture>
        <source media="(max-width: 767px)" type="image/avif" srcSet={`/images/hero/${name}-1280.avif`} />
        <source media="(max-width: 767px)" type="image/webp" srcSet={`/images/hero/${name}-1280.webp`} />
        <source type="image/avif" srcSet={`/images/hero/${name}-2560.avif`} />
        <img
          src={`/images/hero/${name}-2560.webp`}
          alt=""
          width={2560}
          height={1900}
          decoding="async"
          loading="eager"
          fetchPriority={priority ? "high" : undefined}
          draggable={false}
        />
      </picture>
    </div>
  );
}

/** Bounding box of the nav logo, or of one of its words ("Dustin" / "Chaveleh") — measured, never hard-coded. */
function logoWordRect(logo: HTMLElement, wordIndex: number | null): DOMRect {
  const text = logo.firstChild;
  if (wordIndex === null || !(text instanceof Text)) return logo.getBoundingClientRect();
  const words = text.data.split(" ");
  const start = words.slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0);
  const range = document.createRange();
  range.setStart(text, start);
  range.setEnd(text, start + words[wordIndex].length);
  return range.getBoundingClientRect();
}

/** Home hero (design/motion/hero-parallax.md): four photo layers, the name that flies into the nav logo,
 *  dusk overlay, and a pinned scroll over which the next section slides up and covers it. */
export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const bayRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const nightRef = useRef<HTMLDivElement>(null);
  const [first, second] = home.hero.headline.split(" ");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const logo = document.getElementById("nav-logo");
    const mm = gsap.matchMedia();

    mm.add(
      { mobile: "(max-width: 767px)", desktop: "(min-width: 768px)", reduce: "(prefers-reduced-motion: reduce)" },
      (ctx) => {
        const { mobile, reduce } = ctx.conditions as { mobile: boolean; reduce: boolean };
        const P = mobile ? MOBILE : DESKTOP;

        // Layer scale: match the frame's crop by width, but never let the layers be shorter than the viewport.
        const applyScale = () => {
          const k = Math.max((window.innerWidth / P.frame) * P.layerScale, window.innerHeight / LAYER_H);
          root.style.setProperty("--k", k.toFixed(4));
          return k / P.layerScale; // multiplies design-px travel
        };
        let unit = applyScale();
        if (reduce) return; // static hero: CSS shows the dusk state, the nav logo stays visible

        const onRefreshInit = () => {
          unit = applyScale();
        };
        ScrollTrigger.addEventListener("refreshInit", onRefreshInit);

        const words = Array.from(root.querySelectorAll<HTMLElement>("[data-word]")).filter((el) => el.offsetParent !== null);
        // FLIP target for a word: its counterpart in the nav logo. Measured relative to the hero's top edge,
        // which is the viewport top while the hero is pinned.
        const target = (i: number) => {
          const heroTop = root.getBoundingClientRect().top;
          const w = words[i].getBoundingClientRect();
          const l = logo ? logoWordRect(logo, words.length === 1 ? null : i) : w;
          return {
            scale: l.width / w.width,
            x: l.left + l.width / 2 - (w.left + w.width / 2),
            y: l.top + l.height / 2 - (w.top - heroTop + w.height / 2),
          };
        };

        const tl = gsap.timeline({
          defaults: { ease: "none", duration: 1 },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${Math.round(window.innerHeight * PIN_VH)}`,
            pin: true,
            pinSpacing: false,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(bayRef.current, { y: () => P.bay * unit }, 0)
          .to(cityRef.current, { y: () => P.city * unit }, 0)
          .to(cloudsRef.current, { y: () => P.clouds * unit }, 0)
          .to(nightRef.current, { opacity: 0.5 }, 0);
        words.forEach((el, i) => {
          tl.to(el, { x: () => target(i).x, y: () => target(i).y, scale: () => target(i).scale, ease: "power2.inOut", duration: P.land }, 0);
        });
        if (logo) {
          // Figma: desktop fade uses cubic-bezier(0.5, 0, 0.5, 1); mobile is linear.
          const ease = mobile ? "none" : CustomEase.create("heroLogo", "0.5,0,0.5,1");
          tl.fromTo(logo, { opacity: 0 }, { opacity: 1, ease, duration: 1 - P.land, immediateRender: true }, P.land);
        }

        const onFonts = () => ScrollTrigger.refresh();
        document.fonts.ready.then(onFonts);

        return () => {
          ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
          tl.scrollTrigger?.kill();
          tl.kill();
          gsap.set([...words, bayRef.current, cityRef.current, cloudsRef.current, nightRef.current], { clearProps: "all" });
          if (logo) gsap.set(logo, { clearProps: "opacity" });
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      <section ref={rootRef} className={styles.hero} data-tone="hero">
        <h1 className="sr-only">{home.hero.headline}</h1>

        <Layer name="sky" priority />
        <Layer name="bay" priority ref={bayRef} />

        {/* The name: one line on desktop, two words on mobile (Figma 601:1042). Hidden from screen readers —
            the nav logo is the accessible "Dustin Chaveleh". */}
        <div className={`${styles.line} ${styles.lineDesktop}`} aria-hidden="true">
          <span className={styles.word} data-word>{home.hero.headline}</span>
        </div>
        <div className={`${styles.line} ${styles.lineMobile1}`} aria-hidden="true">
          <span className={styles.word} data-word>{first}</span>
        </div>
        <div className={`${styles.line} ${styles.lineMobile2}`} aria-hidden="true">
          <span className={styles.word} data-word>{second}</span>
        </div>

        <Layer name="city" priority ref={cityRef} />
        <Layer name="clouds" ref={cloudsRef} />
        <div className={styles.night} ref={nightRef} aria-hidden="true" />

        <p className={`p1 ${styles.sub}`}>{home.hero.subheadline}</p>
        <div className={styles.cta}>
          <Button variant="outlined" arrow={false} href={home.hero.cta.href}>
            {home.hero.cta.label}
          </Button>
        </div>
      </section>
      {/* Scroll room for the pin: the next section starts rising at 35% of the scroll and covers the hero at 100%. */}
      <div className={styles.spacer} aria-hidden="true" />
    </>
  );
}
