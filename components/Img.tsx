"use client";
import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

/** next/image that (1) is only requested once it comes within ~300px of the viewport, so below-the-fold
 *  photos never compete with the first paint, and (2) fades in over 200ms ease-in once loaded (reset.css).
 *  Pass `eager` for images that must load immediately. Without JS the <noscript> copy renders instead. */
export default function Img({ alt, onLoad, eager = false, ...props }: ImageProps & { eager?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [near, setNear] = useState(eager);
  const sentinel = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (near) return;
    const el = sentinel.current;
    if (!el) return;
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
  }, [near]);

  if (!near) {
    const size = props.fill ? { position: "absolute" as const, inset: 0 } : { display: "block", width: props.width, height: props.height };
    return (
      <>
        <span ref={sentinel} style={size} aria-hidden="true" />
        <noscript>
          <Image {...props} alt={alt} />
        </noscript>
      </>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      data-loaded={loaded ? "true" : "false"}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
