/** Runs `fn` after the browser's next paint (so heavy setup never delays the first render).
 *  Hidden documents get no frames, so there it runs on a plain timeout instead. Returns a cancel. */
export function afterFirstPaint(fn: () => void): () => void {
  let raf = 0;
  let timer = 0;
  const run = () => {
    timer = window.setTimeout(fn, 0);
  };
  if (document.hidden) run();
  else raf = requestAnimationFrame(run);
  return () => {
    cancelAnimationFrame(raf);
    clearTimeout(timer);
  };
}
