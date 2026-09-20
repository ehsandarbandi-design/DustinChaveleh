"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/** next/image that fades in over 200ms ease-in once loaded (see reset.css). */
export default function Img({ alt, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
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
