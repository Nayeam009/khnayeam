

## Soften Dark Mode Colors

The current dark mode uses very low lightness values (6%, 9%, 14%) making it feel too black. Raising these by ~4-6% will create a softer, more refined dark theme with better contrast.

### Changes — `src/index.css` (`.dark` block only)

| Variable | Current | New | Purpose |
|---|---|---|---|
| `--background` | `30 15% 6%` | `30 12% 10%` | Less black base |
| `--card` | `30 15% 9%` | `30 12% 13%` | Cards stand out more |
| `--popover` | `30 15% 9%` | `30 12% 13%` | Match card |
| `--secondary` | `30 15% 14%` | `30 12% 18%` | Softer secondary |
| `--muted` | `30 12% 14%` | `30 10% 17%` | Less harsh muted areas |
| `--muted-foreground` | `30 8% 55%` | `30 8% 60%` | Slightly brighter muted text |
| `--border` | `30 12% 18%` | `30 10% 22%` | More visible borders |
| `--input` | `30 12% 18%` | `30 10% 22%` | Match border |
| `--soil` | `28 30% 18%` | `28 28% 22%` | Softer soil tone |
| `--primary-foreground` | `30 15% 6%` | `30 12% 10%` | Match new background |
| `--accent-foreground` | `30 15% 6%` | `30 12% 10%` | Match new background |
| `--warm-foreground` | `30 15% 6%` | `30 12% 10%` | Match new background |

Single file change: `src/index.css`

