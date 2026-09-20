"use client";
import { Children, isValidElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Mode = "rise" | "words" | "clip" | "fade";
type Tag = "div" | "span" | "h1" | "h2" | "h3" | "h4" | "p" | "li" | "ul" | "figure" | "dl" | "blockquote" | "nav" | "address";

type Props = {
  children: ReactNode;
  as?: Tag;
  /** rise: fade in while rising 2vh (default). words: h1–h3 rise word by word, 20ms apart (automatic for
   *  h1/h2/h3 whose children are plain text). clip: images wipe up from the bottom edge. fade: opacity only. */
  mode?: Mode;
  /** Page-load stagger for header elements and grid items: index × (1.0s ÷ number of blocks on the page). */
  stagger?: number;
  /** Explicit delay in ms (rise / clip / fade only). */
  delay?: number;
  /** A filled button inside also slides up out of its own box. */
  button?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  "data-tone"?: string;
};

const WORD_TAGS = new Set<Tag>(["h1", "h2", "h3"]);

/** Split text children (strings and <br />) into word boxes; null when anything else is inside. */
function splitWords(children: ReactNode): { nodes: ReactNode[]; count: number } | null {
  const nodes: ReactNode[] = [];
  let count = 0;
  let needSpace = false;
  for (const child of Children.toArray(children)) {
    if (typeof child === "string" || typeof child === "number") {
      for (const word of String(child).trim().split(/\s+/).filter(Boolean)) {
        if (needSpace) nodes.push(" ");
        nodes.push(
          <span key={count} className="flexWord">
            <span className="flexWordIn" style={{ "--i": count } as CSSProperties}>
              {word}
            </span>
          </span>,
        );
        count++;
        needSpace = true;
      }
    } else if (isValidElement(child) && child.type === "br") {
      nodes.push(<br key={`br-${count}`} />);
      needSpace = false;
    } else {
      return null;
    }
  }
  return { nodes, count };
}

/** Reveal on scroll — the "Flex" site animation, copied from its source (styles in reset.css):
 *  0.8s, once, as soon as any part of the element enters the viewport; also on page load.
 *  Blocks fade in while rising 2vh with cubic-bezier(.19,1,.22,1); images wipe up from their bottom edge;
 *  headings rise word by word with `ease`, 20ms apart, and return to plain text once finished.
 *  prefers-reduced-motion and no-JS: the element is simply visible. */
export default function Reveal({ children, as = "div", mode, stagger, delay, button = false, className, style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"pending" | "done" | "settled">("pending");

  const words = mode === "words" || (mode === undefined && WORD_TAGS.has(as)) ? splitWords(children) : null;
  const resolved: Mode = words ? "words" : mode === undefined || mode === "words" ? "rise" : mode;
  const count = words?.count ?? 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (resolved !== "words") {
      if (stagger !== undefined) {
        const blocks = document.querySelectorAll('[data-flex]:not([data-flex-mode="words"])').length || 1;
        el.style.transitionDelay = `${Math.round((stagger * 1000) / blocks)}ms`;
      } else if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
    }
    let timer = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        setPhase("done");
        if (resolved === "words") timer = window.setTimeout(() => setPhase("settled"), 800 + 20 * count + 100);
      },
      { threshold: 0 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [resolved, count, stagger, delay]);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      {...rest}
      className={className}
      style={style}
      data-flex={phase === "settled" ? undefined : phase}
      data-flex-mode={phase === "settled" ? undefined : resolved}
      data-flex-button={button || undefined}
    >
      {words && phase !== "settled" ? words.nodes : children}
    </Tag>
  );
}
