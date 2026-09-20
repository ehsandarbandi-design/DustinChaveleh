"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Rail.module.css";

type Props = {
  children: ReactNode;
  /** Rendered at the left of the controls row (e.g. the section's button). */
  leading?: ReactNode;
  /** Rendered at the right of the controls row, before the chevrons (e.g. a text link). */
  trailing?: ReactNode;
  /** "01 / 11" counter and a hairline progress bar on the left (BUILD.md §4.6). */
  counter?: boolean;
  className?: string;
};

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true" focusable="false">
      <path d={direction === "next" ? "M6 2.5 11.5 8 6 13.5" : "M10 2.5 4.5 8 10 13.5"} fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

/** A row of cards that scrolls sideways with the wheel, drag/swipe, arrow keys (native scroll-snap)
 *  and the Previous / Next chevrons. Cards set their own width. */
export default function Rail({ children, leading, trailing, counter = false, className = "" }: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ atStart: true, atEnd: false, index: 0, count: 0, progress: 0 });

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const items = Array.from(el.children) as HTMLElement[];
      const stride = items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : el.clientWidth;
      setState({
        atStart: el.scrollLeft <= 1,
        atEnd: el.scrollLeft >= max - 1,
        index: Math.min(items.length - 1, Math.round(el.scrollLeft / stride)),
        count: items.length,
        progress: max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 1,
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const second = first?.nextElementSibling as HTMLElement | null;
    const stride = first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
    el.scrollBy({ left: dir * stride, behavior: "smooth" });
  };

  return (
    <div className={`${styles.rail} ${className}`}>
      <div ref={scroller} className={styles.scroller} tabIndex={0} data-lenis-prevent>
        {children}
      </div>
      <div className={styles.controls}>
        <div className={styles.left}>
          {counter ? (
            <div className={styles.counter}>
              <p className="mono" aria-live="polite">
                {pad(state.index + 1)} / {pad(state.count)}
              </p>
              <div className={styles.track} aria-hidden="true">
                <div className={styles.fill} style={{ transform: `scaleX(${state.progress})` }} />
              </div>
            </div>
          ) : null}
          {leading}
        </div>
        <div className={styles.right}>
          {trailing}
          <div className={styles.chevrons}>
            <button type="button" className={styles.chevron} aria-label="Previous" onClick={() => step(-1)} disabled={state.atStart}>
              <Chevron direction="prev" />
            </button>
            <button type="button" className={styles.chevron} aria-label="Next" onClick={() => step(1)} disabled={state.atEnd}>
              <Chevron direction="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
