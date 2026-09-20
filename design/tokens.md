# Design Tokens

> Claude must not use any value not listed here. Values marked "from Figma" were read from the
> Hero frame on Sep 16, 2026. Values marked [TODO] still need Ehsan's palette.

## Colors
> Palette from Figma: https://www.figma.com/design/TppOPQxxg8Y4nSf6Brc3C8/Dusty?node-id=584-1605

### Brand palette (5 colors — the whole UI uses only these)
| Token | Hex | Name | Use |
|---|---|---|---|
| --color-paper | #FBFBFB | Paper | page background, text on dark/photo |
| --color-stone | #E2DFDB | Stone | light sections, cards, hairline rules on dark |
| --color-taupe | #918F85 | Taupe | labels, large secondary text, dividers |
| --color-graphite | #4B4A4A | Graphite | small secondary text, captions, meta (dates) |
| --color-ink | #2D2C2B | Ink | main text, headings, dark sections, filled buttons |

### Roles
| Token | Value |
|---|---|
| --color-bg | var(--color-paper) |
| --color-surface | var(--color-stone) |
| --color-text | var(--color-ink) |
| --color-text-muted | var(--color-graphite) |
| --color-label | var(--color-taupe) |
| --color-line | var(--color-stone) on light, rgba(251,251,251,0.3) on dark/photo |
| --color-inverse-bg | var(--color-ink) |
| --color-inverse-text | var(--color-paper) |
| --color-button-bg / hover | var(--color-ink) / var(--color-graphite) |
| --color-button-outline | var(--color-paper) (on the hero) |

### Hero-only effect colors (from the Hero frame, not part of the UI palette)
| Token | Value | Use |
|---|---|---|
| --color-night | #050063 | hero night overlay at 50% opacity |
| --color-glow | rgba(255, 229, 160, 0.4) | warm glow band at the bottom of the hero |

Note: the Hero frame's "Next section" placeholder is #E7E7E7 — use **Stone #E2DFDB** instead.

### Contrast rules (WCAG AA)
- Ink on Paper ≈ 13.5:1 and Graphite on Paper ≈ 8.5:1 → fine for any text.
- **Taupe on Paper ≈ 3.1:1 → only for large text (24px+) or decorative labels/lines, never for body text.**
- On Stone, use Ink or Graphite for text.
- White text on photos: add a subtle dark gradient if the photo is bright.

Photo palette (for image grading, not UI) is in `design/image-direction.md`.

## Typography
> Type sheet: https://www.figma.com/design/TppOPQxxg8Y4nSf6Brc3C8/Dusty?node-id=585-1606 (read Sep 18, 2026)
> **These 8 styles are the complete list. Claude must not invent a size, weight or letter-spacing that is not here.**

### Fonts
- **Inter** — everything except the monospace label style. Weights used: **Light 300**, **Regular 400**, **Bold 700**.
  Bold is used **only** for the logo and the hero name; it is not on the type sheet.
- **Inconsolata** — Light 300, uppercase. Only for the "Monospace" label style below.
- Both are Open Font License fonts (Google Fonts), so web use is allowed. Self-host or use `next/font/google`.

### The 8 styles (desktop, from the type sheet)
| Token | Style | Font | Weight | Size | Line height | Letter spacing | Typical use |
|---|---|---|---|---|---|---|---|
| --text-h1 | Heading 1 | Inter | 400 | 76px | 100% (1.0) | −6% (−4.56px) | page / section headline |
| --text-h2 | Heading 2 | Inter | 400 | 50px | 100% (1.0) | −6% (−3px) | section headline |
| --text-h3 | Heading 3 | Inter | 400 | 33px | 100% (1.0) | −6% (−1.98px) | card title, sub-section |
| --text-h4 | Heading 4 | Inter | 400 | 21px | 100% (1.0) | −7% (−1.47px) | nav link, button, small title |
| --text-p1 | Paragraph 1 | Inter | 300 | 38px | 100% (1.0) | −2% (−0.76px) | statement paragraph, hero subheadline |
| --text-p2 | Paragraph 2 | Inter | 300 | 27px | 100% (1.0) | −3% (−0.81px) | body |
| --text-p3 | Paragraph 3 | Inter | 300 | 14px | 100% (1.0) | −5% (−0.7px) | caption, meta, fine print |
| --text-mono | Monospace | Inconsolata | 300 | 14px | 100% (1.0) | 0 | UPPERCASE labels, e.g. `[ ABOUT ]` |

Letter spacing is given as a percentage of the font size, so it scales correctly with `em`
(for example, −6% = `-0.06em`).

### Open questions [TODO: Ehsan]
1. **Line height 100% on paragraphs.** At 1.0, lines of body text touch each other and are hard to read
   over more than one line. Suggested: keep 1.0 for H1–H4, and use ~1.4–1.5 for P1–P3. Confirm or overrule.
2. **Mobile sizes.** The sheet has one size per style. Suggested: scale H1–H3 down
   (76→44, 50→34, 33→26) and keep H4, P2, P3 and Monospace the same. Confirm or give mobile values.
3. **The hero is outside this scale** (see below) — confirm that is on purpose.

### Sizes used in the hero frames that are NOT on the type sheet
These came from the Figma hero frames. They are exceptions and need your OK:
| Where | Size | Style on the sheet? |
|---|---|---|
| Hero name (desktop) | Inter Bold 175px | no — far larger than H1 (76px) |
| Hero name (mobile) | Inter Bold 72px | no — close to H1 (76px) |
| Hero subheadline (desktop) | Inter Light 40px | close to P1 (38px) → **use P1** |
| Hero subheadline (mobile) | Inter Light 20px | not on the sheet → nearest is P3 14px |
| Logo (desktop / mobile) | Inter Bold 32px / 20px | not on the sheet (Bold) |
| Nav link, hero CTA (desktop) | 21px | = **H4** |
| CTA (mobile) | 18px | not on the sheet → nearest is H4 21px |

## Spacing
- Nav padding: 52.5px sides, 35px top/bottom (from Figma)
- Nav link gap: 52.5px (from Figma)
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160  [edit to match Figma]
- Section padding (desktop / mobile): __ / __  [TODO]
- Page side margin (desktop / mobile): 52.5px / __  [TODO]

## Layout grid
- Design width: 1792px (Figma)
- Desktop: __ columns, __ px gutter, max width __ px  [TODO]
- Mobile: __ columns, __ px gutter  [TODO]
- Breakpoints: 390 / 768 / 1024 / 1440 / 1792

## Shape and effects
- Border radius: 0 (sharp corners)
- Hairline / button border: 0.875px white (from Figma) — render as 1px
- Shadows: none
- Blur: backdrop-filter blur(22px) on the hero glow band (from Figma)

## Buttons and links
- Outline button (from Figma): transparent background, 1px white border, 10.5px padding, **--text-h4** (Inter 400 21px), white text
- Hover: fill Paper, text Ink [suggested — confirm]
- Filled button (on light sections): Ink background, Paper text, hover Graphite
- Text link: [TODO]

## Motion (general, not the hero)
- Default duration: [TODO, suggest 600ms]
- Default easing: [TODO, suggest cubic-bezier(0.22, 1, 0.36, 1)]
- Hover transitions: [TODO, suggest 200ms]
- Hero parallax: see `design/motion/hero-parallax.md`
