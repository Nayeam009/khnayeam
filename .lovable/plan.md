

## Fix Hero Section — Layout, Zoom, and Mobile Responsiveness

### Problems Identified (from screenshot)
1. **Profile image too large** — overlaps the name text badly, especially "Ibna Nasir" is hidden behind the image
2. **Text alignment broken** — name lines sit behind the image instead of clearly above/below it
3. **Zoom/expansion effect too aggressive** — the `mediaWidth` goes from 260px to 1600px which is excessive
4. **Mobile layout broken** — bottom content (tags, status badge) cramped and overlapping with the expanding image
5. **mix-blend-difference on text** — causes readability issues when image overlaps text

### Changes to `src/components/sections/HeroSection.tsx`

**1. Reduce expansion range**
- Desktop: `mediaWidth` from `220` to max `~1100px` (was 1600)
- Desktop: `mediaHeight` from `280` to max `~650px` (was 800)
- Mobile: `mediaWidth` from `200` to max `~screen width` but capped smaller
- Mobile: `mediaHeight` from `250` to max `~450px`

**2. Fix layout structure — move text ABOVE the image**
- Instead of centering both text and image at `top-1/2 left-1/2` (causing overlap), restructure:
  - Name text positioned in the upper portion of the viewport (around 20-30% from top)
  - Profile image positioned in the center-bottom area
  - Bottom content (status, typing, tags) stays at absolute bottom
- Remove `mix-blend-difference` — use proper z-indexing so text is always readable above the background

**3. Reduce textTranslateX range**
- Desktop: cap at `80vw` (was 160vw) 
- Mobile: cap at `60vw` (was 200vw) — prevents text from flying completely off screen

**4. Mobile-specific fixes**
- Smaller initial image size on mobile: `180px` wide, `240px` tall
- Smaller font sizes: `text-4xl` on mobile (was `text-5xl`)
- Bottom content padding increased: `bottom-6` with `gap-2` 
- Tags use `text-[10px]` on mobile
- Hide CGPA and Sprout badges on mobile entirely (already `hidden sm:flex` but ensure consistency)

**5. Content opacity fade refined**
- `contentOpacity` fades slower: `Math.max(1 - scrollProgress * 2, 0)` (was `* 3`)
- This keeps bottom content visible longer during scroll

**6. Image positioning**
- Shift image center slightly below viewport center: `top-[55%]` instead of `top-1/2`
- This gives the name text clear space above

### File
Only `src/components/sections/HeroSection.tsx` changes.

