

## About Section — Bento Box Mixed Card Redesign

Redesign the About Me section using a true asymmetric bento grid with varied card sizes, creating visual hierarchy through mixed spans.

### Layout Structure

```text
Desktop (lg) — 6-column grid:
┌──────────────────────┬────────────┬────────────┐
│  Career Objective    │  Agri Sci  │  Full-Stack │
│  (span 3, row 2)     │  (span 1)  │  (span 2)  │
│                      ├────────────┤            │
│                      │  Startup   │            │
├──────────────────────┼────────────┼────────────┤
│  Award-Winning       │  Quick Stats Card       │
│  (span 2)            │  (span 4)               │
├──────────────────────┴────────────────────────-─┤
│  Education Row (3 equal cards)                  │
└─────────────────────────────────────────────────┘

Mobile: all cards stack to 1 column
Tablet (sm): 2 columns with selective spans
```

### Changes to `src/components/sections/AboutSection.tsx`

1. **Replace** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` with `grid-cols-1 sm:grid-cols-2 lg:grid-cols-6` for more layout flexibility

2. **Career Objective card** — `lg:col-span-3 lg:row-span-2` with a decorative gradient blob background, larger padding, and a quote-style pull quote for the objective text

3. **Skill cards** — varied spans:
   - Agricultural Science: `lg:col-span-1` (small square)
   - Full-Stack Dev: `sm:col-span-1 lg:col-span-2 lg:row-span-1` (wide)
   - Startup Leadership: `lg:col-span-1` (small square, stacks under Agri)
   - Award-Winning: `sm:col-span-2 lg:col-span-2` (wide accent card)

4. **New "Quick Stats" mini card** — `lg:col-span-4`, a horizontal strip with inline stats (Languages, Projects, Experience duration) using pill tags in a row

5. **Education section** — keep the 3-column grid below but wrap each card with a subtle numbered step indicator (01, 02, 03) in the top-left for visual rhythm

6. **Visual enhancements on all cards:**
   - Glassmorphism hover with `hover:shadow-xl hover:border-primary/20`
   - Subtle gradient accent stripe on left edge of Career Objective card
   - Staggered `MotionCard` delays for a cascading reveal effect

### File
Only `src/components/sections/AboutSection.tsx` is modified. No other files change.

