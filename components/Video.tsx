"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  /** Path without extension: `${src}.webm` and `${src}.mp4` are offered, `${src}.jpg` is the poster. */
  src: string;
  className?: string;
};

/** Background loop (CLAUDE.md §5 video rules): muted, autoplay, loop, playsinline, no audio track. The poster
 *  shows first; the video is only requested once it comes within ~300px of the viewport, and never under
 *  prefers-reduced-motion or without JS — the poster stands in. Decorative: hidden from assistive tech. */
export default function Video({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Sources added after mount are only picked up by an explicit load()
  useEffect(() => {
    const el = ref.current;
    if (!near || !el) return;
    el.load();
    el.play().catch(() => {});
  }, [near]);

  return (
    <video ref={ref} className={className} poster={`${src}.jpg`} muted autoPlay loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
      {near ? (
        <>
          <source src={`${src}.webm`} type="video/webm" />
          <source src={`${src}.mp4`} type="video/mp4" />
        </>
      ) : null}
    </video>
  );
}
