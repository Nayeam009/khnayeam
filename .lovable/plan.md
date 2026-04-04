

## Redesign Personal Info Section — Testimonial-Column Inspired Layout

### Inspiration
The testimonial column component uses a clean card-based design with avatar circles, names, and roles in a structured grid. We adapt this aesthetic for the Personal Info section: larger cards with prominent circle icons, clear label/value hierarchy, and smooth staggered animations.

### Design

```text
Desktop (md+): 3-column grid, 3 rows of 3 cards
┌─────────────────┬─────────────────┬─────────────────┐
│ ○  FULL NAME    │ ○  FATHER       │ ○  MOTHER       │
│   KH. Nayeam…  │   Kh Nasir…     │   Nasima…       │
├─────────────────┼─────────────────┼─────────────────┤
│ ○  DATE OF BIRTH│ ○  BLOOD GROUP  │ ○  NATIONALITY  │
│   31 Jan, 2000  │   AB+ve         │   Bangladeshi   │
├─────────────────┼─────────────────┼─────────────────┤
│ ○  RELIGION     │ ○  GENDER       │ ○  MARITAL…     │
│   Islam         │   Male          │   Unmarried     │
└─────────────────┴─────────────────┴─────────────────┘
Mobile: 1 column | Tablet (sm): 2 columns
```

### Changes to `src/components/sections/PersonalInfoSection.tsx`

1. **Card redesign** — Each card gets:
   - Larger padding (`p-6`) with `rounded-2xl` corners
   - `bg-card/80 backdrop-blur-sm border border-border/50` for subtle glassmorphism
   - `hover:shadow-lg hover:border-primary/20 transition-all duration-300` for interactive feel
   - Larger circle icon (`w-12 h-12`) with `bg-primary/10 rounded-full` centered icon

2. **Layout** — Horizontal flex inside each card: circle icon on left, label+value on right
   - Label: `text-xs uppercase tracking-widest text-muted-foreground font-semibold`
   - Value: `text-base font-bold text-foreground` (larger, bolder than current)

3. **Grid** — Keep `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` but increase `gap-5`

4. **Section header** — Add a subtitle line below the heading for context

5. **Animation** — Staggered `MotionCard` with `index={i}` delays already in place; keep as-is

6. **Remove tooltips** — The tooltip wrapper adds complexity without value here since all info is visible. Remove `Tooltip`/`TooltipTrigger`/`TooltipContent` wrappers for cleaner code.

### File
Only `src/components/sections/PersonalInfoSection.tsx` changes.

