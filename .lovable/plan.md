

## UI/UX Polish: Mobile-First Responsiveness + Glassmorphism + Micro-Interactions

### Scope
Files: `src/pages/Home.tsx`, `src/components/Navigation.tsx`, `src/index.css`

---

### 1. Navigation Enhancements
- Add glassmorphism to scrolled nav: `bg-white/70 dark:bg-background/70 backdrop-blur-xl`
- Add `transition-all duration-200` to all nav buttons for smoother hover/active states
- Increase mobile Sheet drawer width slightly and add glassmorphism background

### 2. Hero Section
- Add glassmorphism to floating info cards (CGPA, Sprout icon)
- Smoother `transition-all duration-300` on CTA buttons
- Reduce hero vertical padding on mobile: `py-8 sm:py-12 md:py-20`
- Tighten spacing between elements on mobile: `space-y-4 md:space-y-8`

### 3. Stats Bento
- Apply glassmorphism to stat cards: `bg-white/40 dark:bg-card/40 backdrop-blur-md border-white/20 shadow-xl`
- Add `transition-all duration-200` hover effect on each card
- Reduce padding on mobile: `p-3 sm:p-6`

### 4. About Bento Grid
- Apply glassmorphism to all bento cards in this section
- Career Objective card: add subtle `shadow-xl` and frosted border
- Icon cards: add `transition-all duration-200` on hover for smooth color shift
- Education cards: glassmorphism treatment

### 5. Research Section
- Glassmorphism on research cards with preserved colored top borders
- Add `transition-all duration-200` to status pill badges
- Ensure cards don't overflow on mobile (text wrapping verified)

### 6. Experience Section
- Featured Stock-X card: full glassmorphism with `shadow-2xl` on hover
- Project cards: glassmorphism with smooth `transition-all duration-200` hover lift
- Skills pill tags: add `transition-all duration-150` for snappy hover feedback
- Ensure "Visit Site" button is full-width on mobile with `min-h-[48px]`

### 7. Achievements Section
- Tab pills: add `transition-all duration-200` (already has 300, tighten to 200)
- Achievement cards: glassmorphism treatment
- Increase card padding on mobile: `p-4 sm:p-6` (already done, verify)

### 8. Personal Info Grid
- Apply glassmorphism to info cards
- Ensure `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` (already correct)
- Remove tooltips wrapping on mobile (they don't trigger on touch anyway — keep but won't interfere)

### 9. References
- Glassmorphism on reference cards
- Circle avatar: add `transition-transform duration-200` for smooth scale

### 10. Contact Section
- Contact cards: glassmorphism with hover glow effect
- Social circle buttons: increase to `w-14 h-14` for better touch targets (48px+)
- Add `transition-all duration-200` to social buttons

### 11. FAB
- Apply glassmorphism: `bg-primary/80 backdrop-blur-md`
- Add `transition-transform duration-200`

### 12. CSS Updates (`src/index.css`)
- Update `.bento-card` class to include glassmorphism by default:
  ```
  background: hsl(var(--card) / 0.4);
  backdrop-filter: blur(16px);
  border: 1px solid hsl(var(--border) / 0.3);
  box-shadow: 0 8px 32px -8px hsl(var(--foreground) / 0.06);
  ```
- Update `.glass-card` to use stronger blur
- Add `.glass-hover` utility for consistent hover glow
- Ensure `overflow-x: hidden` on body (already present, verify)

### Technical Details
- All changes are CSS/class-only — no routing, logic, or Supabase changes
- Glassmorphism applied via Tailwind utility classes inline and updated `.bento-card` base class
- Micro-interactions use `transition-all duration-200` (200ms) for interactive elements
- Touch targets maintained at 48px minimum on all interactive elements
- Mobile-first breakpoints: `sm:`, `md:`, `lg:`, `xl:` only

