import type Lenis from "lenis";

let instance: Lenis | null = null;

/** The live Lenis instance (null under prefers-reduced-motion). Set by components/SmoothScroll.tsx. */
export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}
export function getLenis() {
  return instance;
}
