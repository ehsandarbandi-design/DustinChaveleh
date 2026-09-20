# Hero Parallax Spec (v2 — current)

> Source: Figma file "Dusty", frame **Hero Section** node `585:1633` (1792 × 988), timeline 8,140ms, loop.
> https://www.figma.com/design/TppOPQxxg8Y4nSf6Brc3C8/Dusty?node-id=585-1633
> Read with the Figma MCP server: `get_design_context` + `get_motion_context` (recursive).
> This replaces the older hero frame `584:1494` (that one had an extra warm "Blur" band; v2 does not).

## How to read the Figma timeline
Figma cannot animate on scroll, so the 8,140ms loop stands in for one scroll gesture.
The **"Next section" layer moves at normal page-scroll speed (1.0×)** and finishes at **43.33% of the
timeline** — that moment is the end of the hero. So:

- **Scroll progress p = 0 → 1** maps to **timeline 0% → 43.33%**.
- Scroll distance to pin the hero: **≈1509px at the 1792px design width** (the distance "Next section"
  travels: from y +171 to y −1338). Scale it with the viewport, e.g. `120vh`, and confirm by feel.
- Percentages in the table below are **percent of the scroll**, already converted for you.

## Layers (bottom → top, as stacked in Figma)
| # | Layer | Asset | What it does | Speed / timing (in scroll %) |
|---|---|---|---|---|
| 1 | Sky | `assets/images/hero/layer-1-sky.png` | static background | 0× |
| 2 | Bay | `assets/images/hero/layer-2-bay.png` | drifts up slowly | ≈0.12× (−182px over 0→100%) |
| 3 | **Headline "Dustin Chaveleh"** | live text | **flies up-left and shrinks into the nav logo** | starts at 0%, lands at **68%**, ease-in-out |
| 4 | City | `assets/images/hero/City.png` | skyline rises | ≈0.19× (−288px over 0→100%) |
| 5 | Cloude (clouds) | `assets/images/hero/Cloude.png` | clouds rise fastest of the photo layers | ≈0.44× (−659px, finishes at 100%) |
| 6 | Night Layer | CSS `#050063` | day turns to dusk | opacity **0 → 0.5**, linear, finishes at 100% |
| 7 | CTA "Work with Dustin" | live | static (outlined, 1px white, 10.5px padding, 21px — **use Inter**, Figma shows Helvetica Neue) | — |
| 8 | Subheadline "Your home-buying journey starts here" | live text, Inter Light 40px | static | — |
| 9 | Next section | next section, `#E7E7E7` in Figma → use **Stone #E2DFDB** | slides up and covers the hero | **1.0×**, finishes at 100% |
| 10 | Nav Bar | `nav-bar-bg.png` or a CSS gradient | fixed on top | — |
| 11 | Nav logo text "Dustin Chaveleh" | live text, Inter Bold 32px | **fades in as the headline arrives** | opacity 0 until **68%**, then 0 → 1 by **100%**, ease `cubic-bezier(0.5, 0, 0.5, 1)` |

Note: the Night Layer sits **below** the CTA and the subheadline, so those two stay bright while the
scene darkens. The headline sits **behind the City layer**, so the name reads through/behind the skyline.

## The headline → logo move (the signature moment)
In Figma the headline (centre at 896.25, 422.88, Inter Bold 175px) animates to
`translate(−720.89px, −363.795px)` and `scale(0.18)` — its final centre is (175.4, 59.1), which is exactly
the nav logo's position, and 175px × 0.18 ≈ 31.5px ≈ the logo's 32px. The nav logo text then fades in
and takes over.

**Build it responsively, not with these hard-coded numbers.** At runtime, measure the nav logo's
bounding box and the headline's bounding box, then animate the headline with a FLIP-style transform:

```
scale  = logoRect.width / headlineRect.width          // ≈0.18 at 1792px
dx     = logoRect.centerX - headlineRect.centerX
dy     = logoRect.centerY - headlineRect.centerY
```
- Set `transform-origin: center` and animate `transform: translate(dx*p2, dy*p2) scale(1 + (scale-1)*p2)`
  where `p2 = clamp(p / 0.68, 0, 1)` with an ease-in-out curve.
- Keep the real nav logo in the DOM at `opacity: 0` (so layout and screen readers are correct) and fade
  it in from p = 0.68 to 1. Hide the flying headline from screen readers (`aria-hidden`), or swap
  visibility at the end so there is only ever one visible "Dustin Chaveleh".
- Recalculate on resize.

## Checked against the reference videos
Desktop: `assets/videos/hero-parallax-reference.mp4`; mobile: `assets/videos/hero-parallax-reference-mobile.mp4`.
The desktop recording (Figma prototype recording, 1792 × 988, 3.6s) matches the
numbers above. What the video adds:
- The headline shrinks **continuously** while it travels — no pause, no fade. It is readable the whole way
  and simply becomes the logo. It is logo-sized at roughly 70% of the scroll, which matches the 68% figure.
- The subheadline and the CTA never move. They are **covered** by the next section as it rises, so the hero's
  visible area shrinks from the bottom.
- The dusk (Night Layer) is clearly visible in the second half: the scene goes from warm gold to cool violet-navy.
- Nav links and the nav button stay fully visible and unchanged from the first frame.

## Implementation notes
- GSAP ScrollTrigger with `pin: true` and `scrub: 1`, plus Lenis for smooth scrolling.
- Animate only `transform` and `opacity`. Put each moving layer in its own compositing layer (`will-change: transform`).
- Figma's easing is linear for the layers; the headline uses ease-in-out and the logo fade uses `cubic-bezier(0.5, 0, 0.5, 1)`.
- Design width is 1792px — scale sizes with the viewport (headline ≈ `clamp(56px, 9.8vw, 175px)`).
- The layer images are 1330px tall inside a 988px frame, so they never leave a gap while they move.

## Layer files (already exported)
- `assets/images/hero/` has all four layers, exported from Figma with their layer names: `Sky.png`, `Bay.png`, `City.png`, `Cloude.png` (PNG with transparency, very large).
- At build time, resize to 2560px (desktop) and 1280px (mobile) and convert to WebP/AVIF. Keep the whole hero under ~1.5MB.
- Nav Bar background: [TODO — export from Figma, or rebuild as a CSS gradient]

## Exporting more layers from Figma
Select the layer → Export → PNG @2x. Keep transparency for City and Cloude.

## On page load
- [TODO: intro animation? e.g. headline fades up 24px over 900ms — or none]

## Mobile (393 × 852) — from Figma frame `601:1042`
> https://www.figma.com/design/TppOPQxxg8Y4nSf6Brc3C8/Dusty?node-id=601-1042
> Reference video: `assets/videos/hero-parallax-reference-mobile.mp4` · timeline 3,527ms.
> Here **everything finishes at 100% of the timeline**, so scroll progress p = 0→1 maps to 0%→100%
> (unlike desktop, where the end is at 43.33%).

**Layout**
- Frame 393 × 852. Nav: 24px padding all round, logo "Dustin Chaveleh" Inter Bold **20px** on the left,
  **hamburger** on the right (two 30px lines, 12px apart, 8px padding — make the tap target ≥44px).
  No nav links and no nav button on mobile.
- The photo layers are **1400 × 1039, centred** — i.e. much wider than the screen, cropped equally on both
  sides. Anchor them centre-top; do not stretch them to the viewport width.
- Headline: **two separate lines**, "Dustin" and "Chaveleh", Inter Bold **72px**, centred, at y ≈ 245 and y ≈ 332.
- Subheadline: Inter Light **20px**, centred, at y ≈ 438.
- CTA: outlined, 0.755px white border, 9px padding, **18px** text — **use Inter** (Figma shows Helvetica Neue).
- Night Layer and Next section are 393 × 852.

**Motion (percent of scroll)**
| Layer | What it does | Value |
|---|---|---|
| Sky | static | 0× |
| Bay | drifts up | −158px over 0→100% (≈0.13×) |
| City | rises | −248px over 0→100% (≈0.21×) |
| Cloude | rises | −568px over 0→100% (≈0.48×) |
| Night Layer | day → dusk | opacity 0 → 0.5, linear, over the whole scroll |
| Next section | covers the hero | travels 1186px (from y +147 to −1039) = **1.0×** |
| "Dustin" | flies to the logo | translate(−139.8, −208.3), scale → **0.28**, lands at **87%**, ease-in-out |
| "Chaveleh" | flies to the logo | translate(−58.2, −294.3), scale → **0.28**, lands at **87%**, ease-in-out |
| Nav logo text | fades in | opacity 0 until 87%, then 0 → 1 by 100%, `cubic-bezier(0.5, 0, 0.5, 1)` |

**The two-line headline becomes one line.** The two words are separate elements. They travel different
distances so they end up **side by side on one line** at the nav logo: "Dustin" lands with its centre at
(56.7, 37.2) and "Chaveleh" at (138.3, 38.2), and 72px × 0.28 ≈ 20px — exactly the mobile logo size.
Build it the same responsive way as desktop: measure the logo's two words (or the logo's box) at runtime and
compute each word's own dx, dy and scale, rather than hard-coding these numbers.

**Pin length:** ≈1186px of scroll at 393 × 852 ≈ **140vh** (desktop is ≈1509px ≈ 150vh). The name lands later
than on desktop (87% vs 68%), so the last part of the scroll is mostly the next section covering the hero.

## Reduced motion
- No pinning and no parallax. Show a still hero (layers static, night layer at 0.5, nav logo visible, headline in place).

## Performance
- Preload the Sky layer and Inter
- Target 60fps on a mid-range phone
