

## Fix Hero Section Layout & Centering

The profile picture and text are misaligned because the container uses `justify-end` with fixed bottom padding, which doesn't adapt well across screen sizes. The image also has hardcoded initial dimensions that don't scale properly on smaller or larger viewports.

### Changes — `src/components/ui/scroll-expand-hero.tsx`

**1. Center the content group (image + text) in the viewport**

Replace `justify-end pb-[12vh] sm:pb-[10vh]` with `justify-center` on the main layout container (line 156). This ensures the profile image + name text block is always vertically centered regardless of screen size.

**2. Use viewport-relative initial image dimensions**

Replace the hardcoded pixel values for `mediaWidth` and `mediaHeight` with viewport-relative calculations:
- Mobile: start at `55vw` width / `45vh` height, expand to full viewport
- Desktop: start at `22vw` width / `55vh` height, expand to full viewport

This prevents the image from being too large or too small on any screen.

**3. Adjust image object-position**

Change `object-[50%_15%]` to `object-[50%_20%]` so more of the face/upper body is visible in the initial cropped state.

**4. Constrain text font size for small screens**

Reduce mobile font clamp from `clamp(1.8rem, 10vw, 2.8rem)` to `clamp(1.5rem, 7vw, 2.2rem)` so text doesn't overflow on narrow screens. Desktop stays at `clamp(2.5rem, 4vw, 4rem)`.

**5. Add a small gap between image and text**

Keep `mt-4 sm:mt-6` but add `min-h-0` to prevent flex overflow issues on short viewports.

### Summary

Single file change: `src/components/ui/scroll-expand-hero.tsx`. The layout container switches to true centering, image dimensions become viewport-relative, and text sizing is tightened for small screens.

