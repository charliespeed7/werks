# Button

## Variants

Four. There is no fifth.

| Variant | Appearance | Use |
|---|---|---|
| **Primary** | Ink fill, Paper label | The one action this screen exists for. **One per screen.** |
| **Secondary** | Transparent, 1px `border-control`, Ink label | The alternative. "Edit first", "Not now". |
| **Quiet** | Text only, secondary colour | Tertiary actions, inline, in app bars |
| **Destructive** | Red fill, or red quiet text | Deleting, cancelling something real. Always behind a confirm sheet. |

**Primary is black, not coloured.** See `foundations/01-colour.md`. It reads in direct sunlight, it looks like print rather than software, and it leaves colour free to mean something.

> **One primary per screen.** Two primary buttons is the design telling you it has not decided what the screen is for. In an approval card, `Send it` is primary and `Edit first` is secondary; they are not equals.

## Sizes

| Size | Height | Text | Use |
|---|---|---|---|
| `sm` | 40 | 14 | Inline in a row, in a chip group. **Never a primary action.** |
| `md` | 48 | 16 | The floor for anything important |
| `lg` | 56 | 16 | **Mobile default** |
| `xl` | 64 | 17 | The primary action on an approval. Glove-safe. |

Horizontal padding is `space-5` (20) at `lg` and `xl`, `space-4` at `md`, `space-3` at `sm`. Full-width buttons are the norm on mobile for the primary action; auto-width for everything else.

## States

| State | Treatment |
|---|---|
| Default | As above |
| Hover (pointer only) | Primary → `ink-800`. Secondary and quiet → `bg-hover`. |
| Pressed | Primary → `ink-700`. Background change only, 80ms. No scale, no ripple. |
| Focus | 3px `--w-focus-ring` outline, 2px offset. Never removed. |
| Disabled | `bg-disabled` fill, `text-disabled` label, `cursor: not-allowed`. |
| Loading | Label is replaced by the verb in progress ("Sending"), plus a small spinner. Width is held so the layout does not jump. Button is `aria-busy` and non-interactive. |

**Disabled is a last resort.** A disabled Approve button with no explanation is a dead end for someone standing in the rain. Prefer an enabled button that explains what is missing when tapped.

## Anatomy

```
┌──────────────────────────────────────┐
│  [icon]  Label                       │  ← 56px tall, 20px side padding
└──────────────────────────────────────┘
     8px gap between icon and label
```

Icons are optional, 20px at `md`/`lg`, leading position. Never trailing, except a chevron on a navigation-like button. Never icon-only, except the mic and back (see `foundations/04-iconography.md`).

## Labels

Verb first, and say what will happen. From `voice/microcopy-library.md`:

> ✅ `Send it` `Approve` `Edit first` `Don't send` `Try again` `Call Sarah`
> ❌ `Submit` `Confirm` `OK` `Yes` `Continue` `Learn more`

Sentence case. Never Title Case. Never ALL CAPS. Two words is usually enough; four is the maximum before a button stops being scannable.

## Code

```html
<button class="w-btn w-btn--primary w-btn--lg">Send it</button>
<button class="w-btn w-btn--secondary w-btn--lg">Edit first</button>
<button class="w-btn w-btn--quiet w-btn--md">Not now</button>
<button class="w-btn w-btn--destructive w-btn--md">Delete draft</button>

<button class="w-btn w-btn--primary w-btn--xl w-btn--block">
  <svg class="w-icon" aria-hidden="true">…</svg>
  Send it
</button>

<button class="w-btn w-btn--primary w-btn--lg" aria-busy="true" disabled>
  <span class="w-spinner" aria-hidden="true"></span> Sending
</button>
```

## Accessibility

- Real `<button>` elements. Never a `div` with an onClick.
- Minimum hit area 48×48 regardless of visual size.
- 8px minimum gap between two adjacent buttons.
- Approve and a destructive action are never side by side on the same row.
- Focus visible at all times; the ring is Ink on light, Volt on dark, both above 3:1.
- Loading buttons set `aria-busy="true"` and keep the label as text, not as an icon alone.
- Labels wrap to two lines at large OS text sizes. They never truncate.

## Do / Don't

| Do | Don't |
|---|---|
| One primary per screen | Two filled buttons competing |
| `Send it` | `Submit` |
| Full-width primary on mobile | A 90px "OK" in the corner |
| Explain what is missing on tap | Disable and say nothing |
| Keep the label when loading | Replace the whole label with a spinner |
| Place the primary in the bottom third | Place it in the top right, out of thumb reach |
