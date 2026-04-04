## Hero Section Redesign — Scroll-Expand with Background Image

### Concept

Adapt the scroll-expansion hero pattern for a portfolio context: the profile image starts as a centered rounded card that expands as the user scrolls, with a beautiful background image behind it. The hero content (name, typing effect, CTA buttons, tags) overlays on top. Once fully expanded, the rest of the page becomes scrollable.

**Key difference from the reference:** This is NOT a separate page-blocking component. The scroll-hijacking UX from the reference would break the portfolio flow. Instead, we take the visual DNA — centered expanding image over a background, text with mix-blend-difference, smooth transitions — but implement it as a standard scroll-parallax hero that doesn't hijack scrolling.

### Layout

```text
┌─────────────────────────────────────────────┐
│  Full-screen background image (Unsplash     │
│  nature/agriculture landscape)              │
│  with dark overlay gradient                 │
│                                             │
│         ┌─────────────────┐                 │
│         │  Profile Image  │                 │
│         │  (rounded card) │                 │
│         └─────────────────┘                 │
│                                             │
│        KH. NAYEAM IBNA NASIR                │
│     Agriculture Graduate | Developer        │
│                                             │
│     [Get In Touch]  [Download CV]           │
│     📍 Dhaka  🎓 GSTU  💼 Stock-X BD        │
│                                             │
│              ▼ Scroll Down                  │
└─────────────────────────────────────────────┘
```

### Design Details

1. **Background image**: Use a beautiful Unsplash agriculture/nature landscape as `bg_image` field in Supabase hero content (with a hardcoded fallback URL). Full-screen cover with `bg-black/40` overlay gradient for text readability.
2. **Profile image**: Centered at the top portion of the hero, larger than current (w-40 h-48 on mobile, w-56 h-64 on desktop). Rounded-2xl with a gradient border ring and shadow. Floating CGPA badge and Sprout icon retained.
3. **Text layout**: Centered below the profile image instead of side-by-side grid. Name in large bold white text, typing effect below, subtitle in muted white. All text is white/light since it's over the dark background image.
4. **CTA buttons**: Centered row, white/translucent glass style to match the dark background aesthetic.
5. **Tags**: Centered pill tags in glass/translucent style.
6. **Parallax**: Keep existing `useScroll`/`useTransform` for subtle parallax on scroll — background moves slower than content. No scroll hijacking.
7. **Scroll indicator**: Animated chevron-down at bottom.

### Backend Integration

Add `bg_image` field to the hero content interface and DEFAULTS. The admin panel already supports editing any field in the hero JSON, so adding a new string field is automatically editable.

### Technical Notes

- Replace `next/image` with standard `<img>` tags (no Next.js)
- No scroll hijacking — standard parallax only
- All colors switch to white/light variants for dark background contrast
- Button variants: primary button stays solid, outline button gets `border-white/30 text-white` styling
- Fallback background: `https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920` (golden wheat field)

### File Changes

- `src/components/sections/HeroSection.tsx` — full rewrite with new layout. Update the backend & admin panel as well. 