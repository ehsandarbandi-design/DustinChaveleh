"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Rail.module.css";

type Props = {
  children: ReactNode;
  /** Rendered at the left of the controls row (e.g. the section's button). */
  leading?: ReactNode;
  className?: string;
};

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" aria-hidden="true" focusable="false">
      <path d={direction === "next" ? "M6 2.5 11.5 8 6 13.5" : "M10 2.5 4.5 8 10 13.5"} fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/** A row of cards that scrolls sideways with the wheel, drag/swipe, arrow keys (native scroll-snap)
 *  and the Previous / Next chevrons. Cards set their own width. */
export default function Rail({ children, leading, className = "" }: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
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
        <div>{leading}</div>
        <div className={styles.chevrons}>
          <button type="button" className={styles.chevron} aria-label="Previous" onClick={() => step(-1)} disabled={atStart}>
            <Chevron direction="prev" />
          </button>
          <button type="button" className={styles.chevron} aria-label="Next" onClick={() => step(1)} disabled={atEnd}>
            <Chevron direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
