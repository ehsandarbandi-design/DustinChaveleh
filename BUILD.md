# BUILD — Dustin Chaveleh website

Paste this into Claude Code from inside the `Website` folder. It is the complete build brief.

**Read these files in the folder before writing any code:**
`CLAUDE.md` · `design/tokens.md` · `design/motion/hero-parallax.md` · `design/image-direction.md` ·
`reference/reference-site.md` · `content/copy.md`

**Rules that never bend**
1. Only the 8 text styles in `design/tokens.md` (H1–H4, P1–P3, Mono). Never invent a size, weight or letter-spacing. Only exceptions: the hero name and the logo (Inter Bold).
2. Only the 5 palette colors (Paper #FBFBFB, Stone #E2DFDB, Taupe #918F85, Graphite #4B4A4A, Ink #2D2C2B) plus the two hero-only effect colors.
3. Only two fonts: Inter (300/400/700) and Inconsolata (300).
4. All text comes from `content/copy.md`, word for word. Never write marketing copy. If text is missing, stop and ask.
5. Corners are always square (`border-radius: 0`). No drop shadows anywhere.
6. Build one section at a time and stop for review after each.

---

## 1. Stack

- Next.js (App Router) + TypeScript, deployed on Vercel
- Plain CSS Modules or vanilla CSS with custom properties. If you use Tailwind, its config must contain ONLY the tokens below — delete the default palette, spacing and type scales.
- Fonts via `next/font/google`: Inter (300, 400, 700), Inconsolata (300). `display: swap`.
- Motion: GSAP + ScrollTrigger (hero pin) and Lenis (smooth scroll). Nothing else.
- Images: `next/image`, AVIF/WebP. Blog posts: MDX files in `content/blog/`.

---

## 2. Design system

### 2.1 Tokens

```css
:root {
  /* color */
  --paper:#FBFBFB; --stone:#E2DFDB; --taupe:#918F85; --graphite:#4B4A4A; --ink:#2D2C2B;
  --hero-night:#050063; --hero-glow:rgba(255,229,160,.4);

  /* type — sizes are desktop; see 2.2 for mobile */
  --h1:76px; --h2:50px; --h3:33px; --h4:21px;
  --p1:38px; --p2:27px; --p3:14px; --mono:14px;

  /* layout */
  --gutter:2vw;          /* page side margin: 29px @1440 */
  --gutter-mobile:24px;
  --col-gap:20px;        /* 24-column grid desktop, 8-column mobile */

  /* rhythm */
  --space-3xl:192px; --space-2xl:128px; --space-xl:96px; --space-l:64px;
  --space-m:40px; --space-s:24px; --space-xs:16px; --space-2xs:8px;

  /* motion */
  --dur-fast:200ms; --dur:400ms; --dur-slow:700ms;
  --ease:cubic-bezier(.22,1,.36,1);
}
```

Type styles (apply as classes, never ad-hoc):

| Class | Font | Weight | Size | Line height | Letter spacing |
|---|---|---|---|---|---|
| `.h1` | Inter | 400 | 76px | 1.0 | −0.06em |
| `.h2` | Inter | 400 | 50px | 1.0 | −0.06em |
| `.h3` | Inter | 400 | 33px | 1.05 | −0.06em |
| `.h4` | Inter | 400 | 21px | 1.1 | −0.07em |
| `.p1` | Inter | 300 | 38px | 1.25 | −0.02em |
| `.p2` | Inter | 300 | 27px | 1.45 | −0.03em |
| `.p3` | Inter | 300 | 14px | 1.5 | −0.05em |
| `.mono` | Inconsolata | 300 | 14px | 1.6 | +0.02em, UPPERCASE |

> Line heights above are the build values. The Figma sheet says 100% for everything; 1.0 is kept for
> headings, and paragraphs are opened up so body text is readable. Do not change them without asking.

Mobile sizes (below 768px): h1 44 · h2 34 · h3 26 · h4 21 · p1 26 · p2 20 · p3 14 · mono 14.
Same weights and letter-spacing. Use `clamp()` between the two.

### 2.2 Grid and rhythm — measured from the reference site at 1440px

- Desktop: 24 columns, 20px gap, page margin 2vw (≈29px at 1440). No max content width — the layout is full-bleed.
- Mobile: 8 columns, 20px gap, page margin 24px.
- Header height 83px; header padding 6px 29px; background fades in on scroll over 300ms.
- Sections are tall: 600–900px of content on desktop, one idea each. Vertical padding `--space-2xl` (128px) desktop, `--space-xl` (96px) mobile. Between a section's label and its content: `--space-l`.
- Text columns never run full width: statement paragraphs span about 17 of 24 columns starting at column 5; hero-style text blocks span about 9 columns on the right.

### 2.3 Components

**Label** — every section starts with one, top-left, in the page margin column:
`[ ABOUT ]` in `.mono`, color Taupe. A 10px solid Ink square (■) sits at the far right of the same row. This pairing is the signature of the site — use it on every section.

**Button** — two variants, both square, no radius:
- *Filled*: Ink background, Paper text, `.mono` uppercase, padding 20px 26px. Hover: background Graphite over 200ms.
- *Outlined*: transparent, 1px current-color border, `.h4` text, padding 10px 11px. On the hero it is white-on-photo; elsewhere Ink. Hover: fills with the border color, text flips to the opposite color, 200ms.
- Every button label starts with the arrow `⤷` followed by one space (reference-site detail), except the hero and nav CTA, which stay plain "Work with Dustin".

**Text link** — Ink, no underline at rest; on hover an underline wipes in from the left over 200ms.

**Hairline** — 1px Stone on light backgrounds, `rgba(251,251,251,.3)` on dark/photo. Used between rows instead of cards.

**Card (blog / neighborhood)** — no box, no border, no shadow. Just: image (4:5 portrait crop), then `--space-s`, then a `.mono` meta line, then `.h3` title, then `.p3` text, then a text link. Image hover: scale 1.03 over 700ms with `--ease`, and opacity 0.9 → 1 over 200ms.

**Form field** — no box. Label in `.mono` Taupe above, input is transparent with a 1px Stone bottom border only, `.p2` text, 12px bottom padding. Focus: bottom border becomes Ink, 2px, 200ms. Error text in `.p3` Ink under the field. Minimum touch height 48px.

### 2.4 Motion rules

- Reveal on scroll: content rises 24px and fades 0 → 1 over `--dur-slow` with `--ease`, once, at 20% into view. Stagger siblings by 80ms. **Only on section headings, images and cards — never on every element.**
- Images fade in over 200ms ease-in when loaded (reference-site behavior).
- Header: transparent over the hero; once past the hero, background Paper (or Ink on dark sections) fading in over 300ms.
- Everything respects `prefers-reduced-motion`: no parallax, no pin, no reveal, no smooth scroll — content simply visible.

---

## 3. Navigation

**Desktop** (from the Figma hero frame): logo "Dustin Chaveleh" Inter Bold 32px on the left; links Home · Meet Dustin · Market update · Blog · Play Games in `.h4`, 52px apart; outlined "Work with Dustin" button at the right. Side padding 52px, vertical 35px. Over the hero everything is white; after the hero, Ink on Paper.
Link hover: underline wipes in, 200ms.

**Mobile** (from the Figma "Menue Mobile" frame, node `624:3`):
- Closed: logo Inter Bold 20px + hamburger (37 × 22px) at the right, 24px padding. White logo over the hero, Ink after.
- Open: full-screen Paper panel. Links **right-aligned**, starting 52px from the left, 231px from the top, in `.h2` (50px, Ink), 16px apart, in nav order. Then a 120px gap, then the outlined "Work with Dustin" button (1px Ink border, 10.5px padding, `.h4`), also right-aligned.
- Open/close: panel wipes down over 400ms with `--ease`; links stagger in 60ms apart. Hamburger becomes an X. Lock body scroll, trap focus, close on Escape.

---

## 4. Home page — section by section

Copy for every section is in `content/copy.md`. Build in this order.

**1 · Hero** — exactly as specified in `design/motion/hero-parallax.md` (desktop frame `585:1633`, mobile frame `601:1042`). Layers are in `assets/images/hero/` (`Sky.png`, `Bay.png`, `City.png`, `Cloude.png`). Read those frames through the Figma MCP server. Do not redesign it.

**2 · About — "Texas roots. San Francisco hustle."**
Paper background. Label `[ ABOUT ]` + ■. Headline in `.h1` on two lines, left-aligned, spanning columns 1–12. The three body paragraphs in `.p2`, spanning columns 14–22 — so the headline and the text sit side by side with a wide gap, not centered. Under the text: `CA DRE # 02368948` in `.mono` Taupe, then the text link "Learn more about Dustin". On mobile the two stack, headline first.

**3 · Portrait band**
Full-bleed image (`assets/images/portrait/dustin-1.png`), 70vh tall, `object-fit: cover`. Nothing over it. This is a breathing moment between sections.

**4 · Journal (blog preview)**
Stone background. Label `[ JOURNAL ]` + ■. `.h2` headline "Read About Your Neighborhood, Your Move" spanning columns 1–14. Then the three newest posts as cards in a 3-column row (each spans 7 columns, 20px gap; the row starts at column 1 and ends at column 24 with the last card). Card meta line = post date in `.mono`. Below the row, right-aligned: filled button "⤷ Read the blog" → `/blog`. Mobile: one card per row.

**5 · Real Estate IQ**
Full-bleed **Ink** background, Paper text — the only dark section on the page, so it reads as a break. Label `[ TEST YOURSELF ]` + ■ in Taupe. `.h1` "Think You Know the San Francisco Market?" spanning columns 1–16. `.p1` "Test your local market expertise." below. Filled button in Paper/Ink: "⤷ Play Real Estate IQ" → `/playrealestateiq`. Section height ≈ 70vh.

**6 · Neighborhoods**
Paper. Label `[ NEIGHBORHOODS ]` + ■. A horizontal rail of 11 cards that scrolls sideways with the mouse wheel, drag, and arrow keys (native scroll-snap, not a library). Each card: 4:5 image, `.h3` name, `.p3` description, fixed width of 6 columns desktop / 6 of 8 columns mobile. A `.mono` counter "01 / 11" sits under the rail on the left, and a hairline progress bar under it that fills as you scroll. Right-aligned text link "View the Neighborhood Guide" → `/blog/tag/Neighborhoods`.
Photos are in `assets/images/neighborhoods/` — only `castro`, `civic-center`, `mission`, `nob-hill` exist so far. For any missing neighborhood, render the card with a Stone placeholder block and the name; do not substitute another photo.

**7 · Taking the Next Step**
Stone. Label `[ THE NEXT STEP ]` + ■. Two blocks separated by a vertical hairline: **For Sellers** (columns 1–11) and **For Buyers** (columns 14–24). Each: `.h2` title, `.p2` body, text link. Asymmetric on purpose — give the Buyers block 80px more top padding than Sellers so the two are offset vertically. Mobile: stacked, hairline becomes horizontal.

**8 · Contact**
Paper. Label `[ GET IN TOUCH ]` + ■. `.h1` "Ready to make / your move?" on two lines, columns 1–10. Contact details (DRE, phone, email, office) as a `.mono` label + `.p2` value list, columns 1–10, below the headline. The form occupies columns 13–24: First Name, Last Name, Email, newsletter checkbox, Phone, Message, then the filled button "⤷ Send Message".

**9 · Footer**
Ink background, Paper text. Three rows separated by hairlines:
- Row 1: logo (Inter Bold 32px) left; nav links `.h4` right.
- Row 2: `.mono` contact block (phone, email, office) left; social links (Instagram, TikTok, YouTube, Google) as `.mono` text links right.
- Row 3: `CA DRE #02368948` and the brokerage logos from `assets/images/logos/` (`keller-williams`, `realtor`, `car`), height 28px, opacity 0.7, in a row; `.p3` fine print line at the far right.

---

## 5. Other pages

All follow the same system: `[ LABEL ]` + ■, one idea per section, hairlines instead of boxes.

**`/meetdustin`** — Hero: `.h1` "Meet Dustin Chaveleh" + `.h4` "San Francisco REALTOR®" over a portrait, half-width image on the right. Body paragraphs in `.p2`, columns 1–14. Then: `[ AS FEATURED IN ]` section on Stone with "BUSINESS INSIDER" in `.mono`, the two paragraphs in `.p2`, the three press images in a 3-up row, and the article link. Then the pull-quote on Ink: `.p1`, attributed in `.mono`. Then `[ RESOURCES ]`: three items (Buyer & Seller Guides, Trusted Vendors List, Neighborhood Breakdowns) as hairline-separated rows — `.h3` title left, `.p2` text right. Ends with the outlined button "Work with Dustin".

**`/market-update`** — `.h1` headline, `.p1` intro. Then the four stats as **full-width hairline rows**, not cards: `.mono` label left, `.h1` value center-left, `.mono` change (e.g. "+22% YoY") right, and the explanation in `.p3` under the row spanning columns 14–24. Then the three chart blocks (leave a labelled Stone placeholder where data is missing — do not invent numbers). Then "Dustin's take 2026" as a `.p2` block on Stone. Then the two outlined external links and the "Start Your Property Search" button → the Zenlist URL in `content/copy.md`.

**`/blog`** — `.h1` "The San Francisco Real Estate Blog". Category filter row in `.mono` (Buyer Resources, condo, Home Ownership, Listings, Market News, Neighborhoods, Things to Do); active category is underlined. Posts in a 2-column list; the newest post spans the full width with a large image (a featured row). Keep every existing URL from `content/copy.md`.

**`/blog/[slug]`** — single column, columns 7–18 (about 60% width). Date and tags in `.mono` above an `.h1` title. Body in `.p2` with `--space-m` between paragraphs, `.h3` for sub-headings, images full-bleed out to the page margins. Ends with a hairline, a "⤷ Back to the blog" link and the contact section reused from the home page.

**`/buyers-guide` and `/sellers-guide`** — a numbered list of steps. Each step is a hairline row: the number ("01") in `.h2` Taupe on the left (columns 1–3), the step title in `.h3` and the italic sub-title in `.mono` (columns 5–10), the body in `.p2` (columns 12–24). Buyer's Guide ends with the download button; the Seller's Guide step 05 text is missing — render the row with the title only and a visible `[ TEXT NEEDED ]` marker.

**`/work-with-dustin`** — `.h1` "Ready to make your move?", `.p2` intro, the contact details block, and the same form as the home page.

**`/playrealestateiq`** — do NOT rebuild the game. Build a page shell with the nav, footer and the page's hero copy, and leave a clearly marked container for the existing game to be embedded into.

**`/404`** — `.h1` "This page has moved on." + a text link home. Nothing else.

---

## 6. Build order

1. Project setup: Next.js, fonts, `tokens.css` from section 2.1, global reset, Lenis + reduced-motion guard.
2. Primitives: Label, Button, TextLink, Hairline, Card, FormField, Section wrapper. Build a `/styleguide` route that renders every token and component. **Stop and show me this first.**
3. Nav (desktop + mobile menu) and Footer.
4. Home hero (from the parallax spec). **Stop and show me.**
5. Home sections 2–9, in order, stopping after each.
6. Inner pages in the order listed in section 5.
7. Blog engine (MDX), then deploy to Vercel.

After every section: take screenshots at 1440px and 390px, compare against the Figma frame (hero) or this brief (everything else), and fix the differences before stopping. Report Lighthouse Performance and Accessibility once the home page is complete; both must be 90+.

---

## 7. Things you must ask about, never invent

- Any copy not in `content/copy.md` (including the Seller's Guide step 05, meta descriptions, form success and error messages).
- Market Update chart data and the two external report URLs.
- Where the contact form submits (no endpoint has been chosen yet).
- Alt text for the Business Insider images and the Business Insider article URL.
- Missing neighborhood photos, the favicon, the social share image, and the Buyer's Guide PDF.
- The nav bar background from the Figma hero: if it is not exported, rebuild it as a CSS gradient and tell me.

---

## 8. Repo and deployment

- **GitHub repo:** https://github.com/ehsandarbandi-design/DustinChaveleh (push to `main`)
- **Vercel team:** `ehsan-darbandi-s-projects` — connect the repo in the Vercel dashboard; every push to `main` then deploys automatically
- **Live domain:** dustinchaveleh.com — still on Squarespace. Deploy to the Vercel preview URL first; the domain moves only when Ehsan says so.

**Never commit the source assets.** `.gitignore` must include:

```
assets/
*.mp4
.DS_Store
.next/
node_modules/
.env*.local
```

The working files in `assets/` are originals (the four hero PNGs are ~28MB together, and there are 4K videos). Instead:
1. Generate web versions into `public/` — hero layers resized to 2560px and 1280px as WebP/AVIF, photos to 2560px full-bleed and 1600px for cards.
2. Commit only what is in `public/`.
3. Keep a short `ASSETS.md` in the repo saying which source file each `public/` file came from, so the step can be repeated.

**Commits:** small and per section, e.g. `feat(home): about section`. Do not push until the `/styleguide` route and the hero have been reviewed.

**Before the first deploy:** add `robots.txt` and a sitemap, set per-page titles and meta descriptions from `content/copy.md`, add Open Graph tags with the social share image, and keep every existing URL from the current site so nothing breaks.

**When the domain moves (Ehsan's call, not yours):** add `dustinchaveleh.com` and `www.dustinchaveleh.com` in Vercel, then update the DNS records where the domain is registered. Redirect any old URL that changed. Do not touch DNS without being asked.

---

## 9. Note on the reference videos

Videos in `assets/videos/`: `hero-parallax-reference*.mp4` are references only — never ship them. The three 4K clips are unassigned and uncompressed; ignore them until I tell you where they go.
