

## Bento Box Portfolio Redesign

Rearrange the entire portfolio using modern UI patterns: bento grids, pill tags, circle avatars, masonry layouts, FAB, badges, tooltips, and modals.

### Changes to `src/pages/Home.tsx`

**Hero Section** — Keep existing layout but add circle avatar badge with status indicator (green dot), pill-shaped role tags instead of plain text tags.

**Stats Bar → Bento Grid** — Replace the linear 4-column stats with a bento box layout (mixed sizes: one large card spanning 2 cols, three smaller ones). Each stat gets an icon circle and gradient background.

**About Section → Bento Grid Layout** — Convert to a 4-column bento grid:
- Large card (2x2): Career Objective with gradient overlay
- Medium card (2x1): Profile summary with circle avatar
- Small cards (1x1 each): Key highlights (Agriculture, Dev, Startup, Debater) as icon-circle cards
- Education as a horizontal scrollable timeline strip

**Research → Masonry Grid** — 3 cards with varying heights based on content. Status shown as pill badges ("Ongoing" / "Completed"). Each card gets a colored top border accent.

**Experience → Mixed Bento Layout**:
- Featured Stock-X card spans full width with a large format
- 3 project cards in a masonry-style grid (one taller, two standard)
- Skills section as a grid of interactive pill tags grouped by category

**Achievements → Tabbed Cards with Badges** — Keep tabs as pills. Replace list items with badge-adorned cards. Add notification-style badge count on each tab pill.

**Personal Info → Compact Bento Grid** — Small info cards in a 3x3 grid with circle icons and tooltips on hover for full details.

**References → Circle Avatar Cards** — Circle initial avatars with hover card expansion showing details.

**Contact → Bento + FAB**:
- 3 contact methods as bento cards (phone large, email medium, location medium)
- Social links as circle icon buttons
- Add a floating action button (FAB) fixed bottom-right that scrolls to contact section

### Changes to `src/index.css`

Add utility classes:
- `.bento-card` — rounded-3xl with subtle gradient border and hover lift
- `.pill-tag` — rounded-full small tag style
- `.circle-icon` — circular icon container with bg tint
- Badge pulse animation for notification dots

### Changes to `src/components/Navigation.tsx`

- Nav links as pill-shaped buttons (already similar, minor refinement)

### New: Scroll-to-top FAB

Add a fixed circular button (bottom-right) that appears on scroll, providing quick navigation back to top or to the contact section.

### Technical Details

- All layout changes in `Home.tsx` using CSS Grid with `grid-template-columns` and `grid-row` spans for bento effect
- Responsive: bento collapses to single column on mobile, 2-col on tablet, 4-col on desktop
- Tooltips using existing `@/components/ui/tooltip` for personal info items
- Pill tags via existing Badge component or custom spans with `rounded-full`
- Circle elements with `rounded-full` and fixed dimensions
- FAB as a fixed-position Button with `rounded-full` and shadow
- All animations via existing framer-motion setup

