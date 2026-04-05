

## Production Hardening Plan — Portfolio App

### Diagnostic Summary

| Severity | Issue | Location |
|----------|-------|----------|
| HIGH | Any authenticated user can edit all site content (RLS too permissive) | Supabase RLS |
| HIGH | Admin panel has no role-based access control | `Admin.tsx` |
| HIGH | Nested `<button>` inside `<button>` causes DOM warning | `Admin.tsx` line 211-223 |
| MEDIUM | `fetchPriority` prop triggers React warning (should be lowercase) | `scroll-expand-hero.tsx` |
| MEDIUM | No error/empty states on data-fetching sections | All section components |
| MEDIUM | `touchStartY` used as stale closure in scroll handler | `scroll-expand-hero.tsx` |
| LOW | Missing `id` on some sections (stats, personal-info, references) | Section components |
| LOW | No 404-friendly fallback for `/admin` when not authenticated | `Admin.tsx` |

---

### Phase 1 — Critical Stabilization (3 changes)

**1. Fix nested button in Admin panel**
In `Admin.tsx`, the Save `<Button>` is inside the section toggle `<button>`. Move the Save button outside using a `<div>` wrapper with `onClick stopPropagation` or restructure the header to use a non-interactive container.

**2. Fix `fetchPriority` React warning**
In `scroll-expand-hero.tsx`, change `fetchPriority="high"` to `fetchpriority="high"` (lowercase attribute for DOM).

**3. Fix stale closure for touch handling**
The `touchStartY` state is used inside the `useEffect` but captured as stale. Store it in a ref instead of state.

---

### Phase 2 — Security (2 changes)

**4. Restrict site_content RLS to admin email only**
Create a migration that:
- Creates a `user_roles` table with `app_role` enum (`admin`, `user`)
- Creates a `has_role` security definer function
- Updates `site_content` INSERT/UPDATE policies to use `has_role(auth.uid(), 'admin')`
- Inserts the admin role for `khnayeam009@gmail.com`

**5. Add server-side admin check in Admin.tsx**
After auth loads, query `user_roles` to verify the user has the `admin` role. If not, redirect to home with a toast. This prevents any random authenticated user from accessing the CMS.

---

### Phase 3 — Resilience & Completeness (3 changes)

**6. Add error states to section components**
Wrap `useSiteContent` usage with error handling. If the query errors, show the hardcoded defaults silently (already happens via `??` fallback) but log the error. No user-facing error needed since defaults exist.

**7. Add missing section IDs for navigation**
Add `id="stats"` to StatsSection, `id="personal-info"` to PersonalInfoSection, `id="references"` to ReferencesSection so footer links work.

**8. Add loading skeleton to Admin image preview**
Show a small spinner/skeleton while `uploading` is true on the specific field being uploaded, rather than a global `uploading` boolean that blocks all upload buttons simultaneously. Track uploading state per field path.

---

### Phase 4 — UI Polish & Accessibility (3 changes)

**9. Fix accessibility gaps**
- Add `role="img"` and meaningful `alt` to decorative background images or mark them with `alt=""`
- Ensure all interactive elements have visible focus rings (already mostly done via Tailwind defaults)
- Add `aria-current="page"` to active nav item

**10. SEO meta tags**
Add `og:image` meta tag in `index.html` pointing to the profile image or a dedicated OG image. Add `canonical` link.

**11. Minor UI consistency**
- Ensure consistent section vertical padding (currently varies between `py-16` and `py-20`)
- Standardize heading sizes across sections

---

### Technical Details

**File changes summary:**
- `supabase/migrations/` — New migration for user_roles + RLS policy updates
- `src/pages/Admin.tsx` — Fix nested button, add role check, per-field upload state
- `src/components/ui/scroll-expand-hero.tsx` — Fix fetchpriority, fix touch ref
- `src/components/sections/StatsSection.tsx` — Add `id="stats"`
- `src/components/sections/PersonalInfoSection.tsx` — Add `id="personal-info"`
- `src/components/sections/ReferencesSection.tsx` — Add `id="references"`
- `index.html` — Add og:image, canonical link

**No changes to:** Color scheme, typography, content, button logic, global styles, or any page other than Admin.

