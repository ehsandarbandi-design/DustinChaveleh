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
shown word for word on `/market-update`. The chart blocks stay as labelled placeholders until chart data
is supplied.

## Add a blog post

Added with the blog engine (build step 7).
