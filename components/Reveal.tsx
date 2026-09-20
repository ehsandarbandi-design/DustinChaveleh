"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger siblings by 80ms: pass index * 80. */
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "li" | "figure";
  className?: string;
  style?: CSSProperties;
  /** For the header theme when the revealed element is itself a section-level block. */
  "data-tone"?: string;
};

/** Reveal on scroll (BUILD.md §2.4): rises 24px and fades in over --dur-slow with --ease, once,
 *  at 20% into view. Use only on section headings, images and cards — never on every element.
 *  prefers-reduced-motion is handled in reset.css: the element is simply visible. */
export default function Reveal({ children, delay = 0, as = "div", className, style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDone(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag ref={ref} {...rest} data-reveal={done ? "done" : "pending"} className={className} style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}>
      {children}
    </Tag>
  );
}
