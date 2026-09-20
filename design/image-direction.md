# Image Direction

> Source: Google Drive folder "Imagery direction" (9 photos)
> https://drive.google.com/drive/folders/1pAL0OYBs-2kLcEYoqgpz7GZeywTSElJB

## What the 9 reference photos have in common

**Subjects**
- San Francisco landmarks and neighborhoods: aerial downtown over a sea of fog, the Golden Gate
  (from Marin cliffs, from the beach, a single tower in fog), Transamerica skyline, Lombard Street
  gardens, a hilltop street with palms and a Victorian house, cypress trees in the Presidio,
  a Mission-style tower over the skyline.
- Place first, people almost never (one tiny walking figure at most).

**Light**
- Golden hour and blue hour: low sun, soft backlight, sun flare kept gentle.
- Marine layer / fog used as a soft white "blanket" — it adds depth and calm.
- No harsh midday light, no hard black shadows.

**Color**
- Muted and slightly faded. Average tones are warm grey-beige (≈ #A59F95, #8C867F).
- Highlights: warm cream `#F0EFD0`, pale peach, soft pink sky.
- Mid-tones: dusty teal-blue water `#507070`, pale sky blue `#B0D0D0`–`#C0D4D6`.
- Accents: Golden Gate red-orange (International Orange), sage and olive greens.
- Shadows: lifted, deep charcoal — never pure black.

**Style**
- Editorial / fine-art travel photography, 35mm film feel, fine grain.
- Wide, calm compositions with lots of sky or fog (negative space for text).
- Natural, not HDR. Low-to-medium contrast, lowered saturation, warm white balance.

## Palette pulled from the photos (for reference)
| Role | Hex |
|---|---|
| Fog cream | #F0EFD0 |
| Mist grey | #D0D0D0 |
| Pale sky | #C0D4D6 |
| Bay teal | #507070 |
| Warm stone | #A59F95 |
| Dusk rose | #B09090 |
| Sage | #707050 |
| Charcoal | #303030 |
| Bridge orange | #C0362C (approx.) |

---

## Master prompt (new images)

```
Editorial fine-art photograph of [SUBJECT], San Francisco. Golden hour, low warm sun with soft
backlight and a gentle haze; a light marine-layer fog adds depth. Muted, slightly faded color
palette: warm cream highlights, pale sky blue, dusty teal water, soft peach and rose tones in the
sky, sage greens, lifted charcoal shadows. Low-to-medium contrast, reduced saturation, warm white
balance, subtle 35mm film grain, natural and calm, not HDR. Wide, quiet composition with generous
negative space [in the upper third / on the left] for text. Shot on a full-frame camera,
35mm lens, f/8, sharp but soft light. Timeless, understated luxury, cinematic, real place.
Aspect ratio [16:9 / 3:2 / 4:5].
```

**Negative prompt / avoid**
```
oversaturated, HDR, harsh midday sun, hard black shadows, neon, teal-and-orange grading,
lens-flare streaks, dramatic storm, fisheye, tilt-shift, cartoon, illustration, 3D render,
plastic look, over-sharpened, text, logos, watermarks, crowds, cars in focus, stock-photo people
posing, distorted architecture, extra bridge towers, wrong landmarks
```

### Fill in [SUBJECT] — examples
- Hero layers: "the downtown skyline seen from Twin Peaks at dusk, fog rolling over the hills"
- Neighborhoods: "a quiet street of pastel Victorian homes in Noe Valley", "Mission District mural
  street with a café", "Marina Green with the Golden Gate in the distance", "North Beach café corner
  with Coit Tower above", "Castro Theatre marquee at blue hour", "Nob Hill cable car climbing
  California Street", "Embarcadero and the Ferry Building", "Haight Ashbury Victorians",
  "Outer Sunset stucco homes with fog", "Excelsior hillside homes near McLaren Park"
- Interiors (listings/blog): "a bright SF Edwardian living room with bay windows and city view,
  warm afternoon light, neutral oak and linen" — keep the same color grade
- Portrait backdrops: "a quiet hilltop street at golden hour, soft background blur"

---

## Edit prompt (make any existing photo match)

```
Edit this photo to match a muted editorial San Francisco look: warm golden-hour white balance,
lower saturation by about 20%, lift the shadows to soft charcoal (no pure black), soften the
highlights to warm cream, reduce contrast slightly, shift blues toward pale sky and dusty teal,
shift greens toward sage, keep reds (like the Golden Gate) natural but not bright. Add a subtle
haze and fine 35mm film grain. Keep the scene, buildings and people exactly as they are —
do not add or remove objects, do not change the composition.
```

**Optional add-ons**
- Add fog: "add a soft, low marine-layer fog across the lower third, realistic, not dense"
- Make space for text: "extend the sky upward to make a 16:9 frame with calm negative space at the top"
- Parallax layers: "separate the scene into sky, water, city and fog layers on transparent backgrounds"

## Rules for the website
- Only use photos you have the rights to (these references came from Unsplash and Pexels — check each license and credit when needed).
- Keep one color grade across the whole site. If a photo doesn't match, run the edit prompt.
- Export: WebP, 2560px wide for full-bleed, 1600px for cards.
