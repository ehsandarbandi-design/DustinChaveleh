# Dustin Chaveleh — website

Next.js (App Router) + TypeScript, deployed on Vercel. The build brief is `BUILD.md`; the project
rules are `CLAUDE.md`; design tokens, motion spec and copy live in `design/` and `content/`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The design system lives at `/styleguide`.

- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run build` — production build

## Change copy

`content/copy.md` is the source of truth for every word on the site. `lib/copy.ts` mirrors it as
typed data that the pages import. Change the text in `copy.md` first, then update the matching
entry in `lib/copy.ts`.

## Images

Source photos live in `assets/` and are not committed. `npm run images` (optionally with group
names: `hero portrait neighborhoods press logos`) writes resized WebP/AVIF versions into
`public/images/` and records the mapping in `ASSETS.md`.

## Update the Market Update stats

Edit `content/market-stats.json`. Each entry has a `label`, `value`, `change` and `note`; they are
shown word for word on `/market-update`. Chart data lives in `content/market-charts.json` (the Home Price
Appreciation grid: one `[year, percent]` pair per year, per series). The other two charts stay as labelled
placeholders until their data is supplied.

## Add a blog post

1. Add the post to `posts` in `lib/copy.ts` (date, title, URL slug, excerpt, cover image under
   `public/images/blog/`, tags). The blog index, category pages and home page read from there.
2. Put the article body in `content/blog/<slug>.mdx` as Markdown (see `content/blog/README.md`).

A post without a body still gets its page (metadata and excerpt) with a visible marker where the body belongs.

## Videos

Background loops live in `public/videos/`, named by where they play (`meetdustin-quote-loop`), as MP4 (H.264) +
WebM with no audio, 1920px wide, plus a poster JPG with the same name. The `<Video>` component plays them muted,
looping, inline, only once they come near the viewport, and shows the poster under `prefers-reduced-motion`.
The sources stay in `assets/videos/` (not committed). Made with ffmpeg:

```bash
ffmpeg -i source.mp4 -an -vf "scale=1920:-2" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart public/videos/NAME.mp4
ffmpeg -i source.mp4 -an -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 public/videos/NAME.webm
ffmpeg -i source.mp4 -vf "scale=1600:-2" -frames:v 1 -q:v 9 public/videos/NAME.jpg
```
