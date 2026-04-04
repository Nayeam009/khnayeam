

## Footer Section UI/UX Redesign

Inspired by the provided 4-column footer design with glassmorphism, social icons with hover effects, structured link columns, and contact info section.

### Layout

```text
Desktop (lg) — 5 sections across 2 rows:
┌──────────────────────┬──────────┬──────────┬──────────┬──────────┐
│  Brand + Description │  About   │ Projects │ Helpful  │ Contact  │
│  + Social Icons      │  Links   │  Links   │  Links   │  Info    │
│  (col-span-2)        │          │          │          │          │
├──────────────────────┴──────────┴──────────┴──────────┴──────────┤
│  Bottom bar: Copyright + "All rights reserved"                   │
└──────────────────────────────────────────────────────────────────┘

Tablet (sm): 2 columns  |  Mobile: 1 column stacked
```

### Changes to `src/components/sections/FooterSection.tsx`

1. **Grid**: Change to `lg:grid-cols-6` — brand takes `lg:col-span-2`, each link column takes `lg:col-span-1`

2. **Brand column** (expanded):
   - Larger logo area with `w-10 h-10` circle icon
   - Longer description text with `max-w-sm`
   - Social icons row with glassmorphism hover: `hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300`
   - Each social icon `w-10 h-10` (larger touch targets)

3. **Add new "About" column**: Links to #about, #personal-info, #research, #references

4. **Navigation column** renamed to "Quick Links": #experience, #achievements, #stats, #contact

5. **Projects column**: Keep existing 3 projects with `ArrowUpRight` icon

6. **New "Contact Us" column**:
   - Email with `Mail` icon
   - Phone with `Phone` icon
   - Address with `MapPin` icon
   - Each item as horizontal flex with icon + text

7. **Bottom bar**:
   - Add top border with `border-border/20`
   - Flex row with "All rights reserved" on left, copyright on right
   - Increase font size slightly to `text-xs`

8. **Visual polish**:
   - Link hover underline effect via `hover:translate-x-1 transition-transform`
   - Section headers: `text-sm font-semibold uppercase tracking-wider` with subtle bottom border or dot accent
   - Overall padding increase: `py-16 md:py-20`
   - Subtle gradient background kept but strengthened slightly

### File
Only `src/components/sections/FooterSection.tsx` changes.

