# Dustin Chaveleh — Real Estate Website

> Claude Code reads this file automatically. Read everything in /design, /reference
> and /content before writing code. If something is missing or marked [TODO], ask. Don't guess.

## 1. Project
- **Client:** Dustin Chaveleh, REALTOR® (Keller Williams), San Francisco — CA DRE #02368948
- **Audience:** first-time buyers, young professionals, relocators, investors
- **Goal of the site:** start a conversation with Dustin (contact form / text), and show he knows SF
- **Main call to action:** "Work with Dustin"
- **Current site (content source):** https://www.dustinchaveleh.com — all copy is in `content/copy.md`
- **Hosting:** Vercel
- **Domain:** dustinchaveleh.com

## 2. Feeling
- **It should feel:** quiet luxury, editorial, calm, confident, lots of white space, very San Francisco
- **It should NOT feel:** template, SaaS startup, busy, salesy, "AI-generated"

## 3. Tech stack
- Framework: Next.js (App Router) + TypeScript  [or Astro, pick one]
- Styling: CSS variables from `design/tokens.md` (Tailwind is OK only if its config uses these tokens; no default Tailwind colors)
- Fonts: **Inter** (Light 300, Regular 400, Bold 700) and **Inconsolata** (Light 300, uppercase labels only), via `next/font/google` or self-hosted from `assets/fonts/`. No other font.
- Logo: the words **"Dustin Chaveleh" in Inter Bold** as live text (no image). Paper on the hero/dark, Ink on light. Build it as a `<Logo />` component that links to `/`.
- Colors: the 5-color palette in `design/tokens.md` (Paper, Stone, Taupe, Graphite, Ink). No other colors except the hero night/glow effects.
- Motion: GSAP + ScrollTrigger for the hero parallax, Lenis for smooth scroll
- Images: next/image, WebP/AVIF, lazy-load below the fold
- Blog: Markdown/MDX files in `content/blog/` (migrated from Squarespace)

## 4. Pages and sections
1. **Home** `/`: Hero (parallax) → About ("Texas roots. San Francisco hustle.") → Blog preview → Real Estate IQ promo → Neighborhoods carousel → Taking the Next Step (Sellers / Buyers) → Contact + form → Footer
2. **Meet Dustin** `/meetdustin`
3. **Market Update** `/market-update`
4. **Blog** `/blog` and posts `/blog/[slug]` (keep the existing URLs so links don't break)
5. **Play Real Estate IQ** `/playrealestateiq` — existing game; keep as-is for now, restyle only the page around it
6. **Work with Dustin** `/work-with-dustin`
7. **Buyer's Guide** `/buyers-guide` and **Seller's Guide** `/sellers-guide`
Nav: Home · Meet Dustin · Market Update · Blog · Play Games · Work with Dustin (outlined button)

## 5. Assets
```
assets/
├── fonts/                         Inter (optional if using next/font)
├── images/
│   ├── hero/                      parallax layers (layer-1-sky … layer-4-clouds)
│   ├── press/business-insider/    Business Insider feature photos → Meet Dustin "As Featured In"
│   ├── portrait/                  photos of Dustin
│   ├── neighborhoods/             one photo per neighborhood, named by slug (e.g. noe-valley.webp)
│   ├── blog/                      blog cover images, named by post slug
│   └── listings/                  (not used yet)
├── videos/                        background / feature videos (see rules below)
└── logo/                          favicon / social share image only (logo itself is live text)
```
**Video rules:** name files by where they're used (e.g. `home-about-loop.mp4`). For each video, export
MP4 (H.264) + WebM, 1920px wide max, no audio for background loops, under ~10MB each, and a poster image
with the same name (`home-about-loop.jpg`). Play with `muted autoplay loop playsinline`; show the poster
for reduced motion. Videos over ~20MB go to Vercel Blob (or Mux/Cloudinary), not the Git repo.

## 6. Source of truth (in this order)
1. Figma frames in `design/figma-links.md` (use the Figma MCP server)
2. PNG exports in `design/screens/`
3. `design/tokens.md`
4. `design/motion/hero-parallax.md`
5. `content/copy.md`
6. `design/image-direction.md` (photo style)
7. `reference/reference-site.md` (mood only, never copy)

## 7. Rules
- **Only two typefaces: Inter and Inconsolata.** No serif, no Helvetica, no system font (Figma's CTA uses Helvetica Neue — change it to Inter).
- **Only the 8 text styles in `design/tokens.md` (H1–H4, P1–P3, Monospace).** Never invent a size, weight or letter-spacing. Every piece of text must map to one of these tokens. The hero name and the logo are the only listed exceptions.
- Use ONLY colors, sizes and spacing from `design/tokens.md`. No other values.
- Text comes from `content/copy.md` word for word. Never invent text. Missing text → ask me.
- Keep existing URLs (`/meetdustin`, `/blog/...`, etc.) so SEO and shared links keep working.
- Match the Figma design first. Suggest ideas separately; don't add them on your own.
- No stock icon packs, emoji, or placeholder illustrations unless I approve them.
- `content/listings.json` is not used yet (property search links to Zenlist).
- Build one section at a time. After each section, stop and show me.

## 8. Avoid (these make a site look generic)
- Centered hero on a gradient background (our hero is a layered photo scene)
- Purple/blue gradients, glassmorphism, glowing blobs
- Rounded cards with drop shadows everywhere
- 3-column "icon + title + text" feature grids
- Heavy bold Inter everywhere (the default "startup" look) — Bold is only for the logo and the hero name
- Fade-up animation on every element
- Copy like "Unlock your dream home" or "Elevate your lifestyle"

## 9. What "expensive" means here
- Inter Light/Regular at large sizes with **negative letter spacing**
- Full-bleed, muted, golden-hour SF photography (see `design/image-direction.md`)
- Small uppercase labels in brackets, e.g. `[ ABOUT ]`, with a small ■ marker
- Left-aligned statement paragraphs, asymmetric grids, generous margins
- Sharp corners, hairline borders, no shadows
- A small live "San Francisco, CA" local time in the hero or nav
- Few animations, slow and intentional

## 10. Quality bar
- Lighthouse: 90+ for Performance and Accessibility
- Works with a keyboard; visible focus states; alt text on all images
- Respects `prefers-reduced-motion` (no parallax, still hero)
- Responsive at 390, 768, 1024, 1440, 1792 px
- After building each section: take screenshots at 1440px and 390px, compare them
  with `design/screens/` and the Figma frame, and fix differences before stopping.

## 11. Deliverables
- Deployed on Vercel
- README with: how to run locally, how to add a blog post, how to update the Market Update stats, how to change copy
