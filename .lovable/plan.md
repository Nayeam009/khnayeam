

## Responsiveness Audit & Refactor Plan

### Scope
Landing page only (`src/pages/Home.tsx`, `src/components/Navigation.tsx`, `src/index.css`). No backend, routing, or content changes.

---

### 1. Navigation — Mobile Sheet Drawer
**Problem:** Current mobile menu is a basic dropdown div. On small screens it can feel abrupt.
**Fix:**
- Replace the mobile `{isOpen && <div>...` dropdown with shadcn `Sheet` component (side="top" or "right") for a smooth slide-in drawer
- Increase touch targets: `py-4 min-h-[48px]` on all nav links
- Add `SheetTitle` for accessibility

### 2. Hero Section
**Problem:** `lg:grid-cols-5` layout may leave the image cramped on tablets. Typed text line `h-8` can clip on mobile.
**Fix:**
- Change grid to `grid-cols-1 lg:grid-cols-2` (simpler split)
- Profile image: stack above text on mobile with `order-first lg:order-last`
- Reduce image container size on mobile: `w-48 h-56 sm:w-64 sm:h-72 md:w-72 md:h-80`
- Typed text: `h-7 sm:h-8` and `text-base sm:text-lg`
- Hero CTA buttons: `w-full sm:w-auto` on mobile for full-width tap targets
- Floating cards on image: hide on very small screens (`hidden sm:block`)

### 3. Stats Bento Section
**Problem:** `grid-cols-2` with one card spanning `col-span-2 lg:col-span-1` creates uneven layout on mobile.
**Fix:**
- Use `grid-cols-2 md:grid-cols-4` consistently, remove the col-span-2 on the first stat
- Reduce counter font: `text-2xl sm:text-3xl md:text-4xl`

### 4. About Bento Grid
**Problem:** `sm:col-span-2 sm:row-span-2` Career Objective card works but small icon cards may feel tight on mobile.
**Fix:**
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (already correct)
- Ensure Career Objective card: `col-span-1 sm:col-span-2` (keep)
- Icon cards: add `min-h-[140px]` on mobile for comfortable touch
- Education grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` (add sm breakpoint)

### 5. Research Masonry
**Problem:** Cards look fine but remove `sm:row-span-2` which creates awkward gaps.
**Fix:**
- Remove `sm:row-span-2 lg:row-span-1` from tall card — let natural height handle it
- Grid stays `sm:grid-cols-2 lg:grid-cols-3`

### 6. Experience Section
**Problem:** Featured Stock-X card's `flex-row` layout on `md:` can overflow. "Visit Site" button sits awkwardly.
**Fix:**
- Featured card: keep `flex-col md:flex-row`, add `gap-4` uniformly
- Visit button: `w-full sm:w-auto` and place below content on mobile
- Project cards grid: already `sm:grid-cols-2 lg:grid-cols-3` — fine
- Skills pill grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` — already correct

### 7. Achievements Tabs
**Problem:** Tab pills `flex-wrap` is fine but icons-only on mobile could be confusing since label is `hidden sm:inline`.
**Fix:**
- Always show short labels (remove `hidden sm:inline`, use shorter labels on mobile via truncation or keep as-is since labels are short)
- Cards grid `sm:grid-cols-2` — add `grid-cols-1` explicitly
- Increase card touch padding: `p-4 sm:p-6`

### 8. Personal Info Grid
**Problem:** `grid-cols-2 sm:grid-cols-3` — on narrow mobile, 2 columns can truncate names.
**Fix:**
- Change to `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` for mobile stacking
- Tooltips: add `delayDuration={0}` and ensure they don't block on touch (tooltips naturally don't fire on touch, which is fine)

### 9. References
**Fix:** `grid-cols-1 sm:grid-cols-2` — already fine. Just ensure phone pill is `text-xs` and doesn't overflow.

### 10. Contact Section
**Problem:** `sm:grid-cols-3` — address text overflows on small cards.
**Fix:**
- Change to `grid-cols-1 sm:grid-cols-3`
- Address card: add `line-clamp-2` or allow wrapping
- Social buttons: increase to `circle-icon-lg` (min 48px) for touch

### 11. FAB
**Fix:** Already 56px (`w-14 h-14`). Meets 48px minimum. Add `bottom-4 right-4 sm:bottom-6 sm:right-6` for mobile safe area.

### 12. Global Overflow Guard (`src/index.css`)
- Add `overflow-x: hidden` to `body` rule
- Ensure blob backgrounds don't cause horizontal scroll (already have `overflow-hidden` on sections — verify parent)

### 13. Footer
**Fix:** Already `flex-col sm:flex-row` — fine. Add `text-center sm:text-left`.

---

### Technical Details

**Files to edit:**
1. `src/pages/Home.tsx` — All responsive class adjustments listed above
2. `src/components/Navigation.tsx` — Replace mobile dropdown with Sheet drawer, increase touch targets
3. `src/index.css` — Add `overflow-x: hidden` to body, adjust FAB responsive classes

**No changes to:** routing, Supabase, backend logic, content, other pages.

**Breakpoint strategy:** Mobile-first with `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px). All standard Tailwind breakpoints.

