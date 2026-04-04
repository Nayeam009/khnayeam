

## Fix About Section Bento Grid Layout

### Problem
The current 6-column grid creates awkward proportions: the 1-column skill cards (Agricultural Science, Startup Leadership) are too narrow on desktop, the Career Objective card dominates too much space, and the Quick Stats strip leaves a visual gap. The overall grid feels unbalanced and cramped.

### New Layout

```text
Desktop (lg) — 4-column grid:
┌────────────────┬────────────┬────────────┐
│  Career        │  Agri Sci  │  Full-Stack │
│  Objective     │  (span 1)  │  Dev        │
│  (span 2,      ├────────────┤  (span 1)   │
│   row-span 2)  │  Startup   │             │
│                │  (span 1)  │             │
├────────────────┼────────────┴─────────────┤
│  Award-Winning │  Quick Stats             │
│  (span 1)      │  (span 3)                │
├────────────────┴──────────────────────────┤
│  Education (3 equal cards, full width)    │
└───────────────────────────────────────────┘

Tablet (sm): 2 columns
Mobile: 1 column, all stacked
```

### Changes to `src/components/sections/AboutSection.tsx`

1. **Grid**: Change from `lg:grid-cols-6` to `lg:grid-cols-4` for better proportions
2. **Career Objective**: `lg:col-span-2 lg:row-span-2` — feels balanced, not overwhelming
3. **Skill cards**: All `lg:col-span-1` — equal width, clean alignment. Full-Stack Dev gets `lg:row-span-2` to pair with Career Objective height
4. **Award-Winning**: `lg:col-span-1` — same width as others
5. **Quick Stats**: `lg:col-span-3` — fills remaining row cleanly with full-width feel
6. **Visual improvements**:
   - Increase `min-h` on skill cards for better vertical rhythm
   - Center icon and text vertically in small cards
   - Add subtle background patterns to differentiate card types
   - Make the Quick Stats strip span full remaining width
   - Improve spacing and padding consistency

### File
Only `src/components/sections/AboutSection.tsx` changes.

