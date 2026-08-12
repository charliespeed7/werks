# Iconography

Icons in Werks are labels' companions, never their replacement. The audience glances at the screen for half a second, in bad light, with something in the other hand. An icon they have to interpret costs more than the space a word would have taken.

## The rule

> **Every icon has a text label, except the microphone and the back arrow.**

The microphone is exempt because it is the single most-used control in the app and its meaning is universal. Back is exempt because it is a platform convention. Everything else — including the tab bar, including toolbar actions, including chip icons — carries a word.

This is not a compromise for accessibility. It is faster for everyone in the conditions this app is used in.

## Style

Base set: **Lucide** (ISC licence, 24px grid, open source, well maintained). Werks overrides the stroke and adds a small domain set.

| Property | Value |
|---|---|
| Grid | 24×24, with a 1px optical margin |
| Stroke | **1.75px** (Lucide ships 2px; 1.75 is quieter and matches the type weight) |
| Caps and joins | Round |
| Corners | 2px radius on right angles |
| Fill | None. Outline only, with one exception below |
| Colour | `currentColor`, always. Never a hard-coded hex. |

**The one filled exception is The Dot**, a filled Volt circle. Nothing else in the system is a filled shape.

In particular, the active tab is **not** marked by filling its icon. Filling an outline icon destroys the detail that made it legible: a filled clock is a disc, and a filled sun is a blob. The active tab is marked by colour, a heavier label, and a slightly heavier stroke (2.25px).

## Sizes

| Token | px | Use |
|---|---|---|
| `icon-sm` | 16 | Inline in text, inside chips |
| `icon-md` | 20 | List rows, secondary buttons, form field affixes |
| `icon-lg` | 24 | **Default.** Tab bar, app bar, primary buttons |
| `icon-xl` | 28 | The mic, empty states |

Stroke stays at 1.75px at every size. It is not scaled. A 16px icon with a 1.17px stroke disappears; a 28px icon with a 2.9px stroke looks like a different family.

## Optical alignment

Icons sit on the text baseline optically, not mathematically. In a row of `base` text with a 20px icon, the icon's vertical centre aligns with the lowercase x-height centre, which is usually 1px above the mathematical centre. Align by eye, then fix the offset in the component.

## The domain set

Lucide does not have a boiler. These are drawn to the same grid, stroke and joins, and live in `assets/icons/` when they are built:

| Icon | What it is | Where it is used |
|---|---|---|
| `boiler` | Wall-mounted combi: rounded rectangle, flue top-left, pipes below | Appliance record, job cards |
| `radiator` | Panel with vertical fins and a valve | Job type |
| `flame` | A single clean flame, no swoosh | Gas jobs, heating |
| `cylinder` | Vertical cylinder with a top fitting | System and unvented jobs |
| `certificate` | Document with a seal mark | Gas Safety Record, landlord certificate |
| `van` | Side profile, flat, no wheels detail | On the way, capacity |
| `spanner` | Combination spanner at 45 degrees | Service, works done |
| `property` | House outline, no chimney, no smoke | Property record |
| `landlord` | House with a key | Landlord-owned property |

Drawing rules for anything new: build on the 24px grid, 1.75px stroke, round caps, one concept per icon, no perspective, no shading, no more than eight paths. If it needs a ninth path, it is a picture, not an icon.

## Semantic icons

Fixed pairings. These never vary, because the owner learns them once.

| Meaning | Icon | Notes |
|---|---|---|
| Awaiting approval | `clock` | Never a warning triangle. Waiting is normal. |
| Approved and sent | `check` | Single tick, not a double tick. Werks is not a chat app. |
| Paid | `check-circle` | Positive strong colour |
| Overdue | `clock-alert` | Attention colour, plus the day count in text |
| Red line / stopped | `hand` | Critical colour, plus a left border on the row |
| Escalated to you | `arrow-up-right` | With the reason as text |
| Listening | The Dot | Not a microphone with waves. The Dot plus a waveform. |
| Offline | `cloud-off` | Plus the words "Saved on this phone" |
| Customer | `user` | Never an avatar photo; initials if a mark is needed |
| Money | none | Money uses the figure. `£` is the icon. |

## What has no icon

- **Money.** The number is the icon. A pound-coin glyph beside `£1,240` is decoration.
- **AI, sparkles, magic, stars, robots, brains, wands.** `01_vision` D2 rejects the AI-receptionist frame; decorating the interface with AI signifiers sells that frame back. Werks does not signal that it is clever.
- **Success celebration.** No confetti, no trophies, no thumbs up. An invoice being paid is reported as a fact.
- **Company logos.** WhatsApp, Google, banking apps: word marks in a settings list, not colourful tiles on the main surfaces.

## Accessibility

- Decorative icons: `aria-hidden="true"`, always, and they must accompany a real label.
- Standalone icon buttons (the mic, back): `aria-label` describing the action, not the icon. `aria-label="Record a note"`, not `"Microphone"`.
- Icons that carry status meaning need 3:1 against their background (WCAG 1.4.11). Every status pairing in `01-colour.md` clears this.
- Never animate an icon to convey state. State is text.

## Delivery

Inline SVG with `currentColor` and no hard-coded width, sized by CSS. No icon fonts: they break with OS text scaling, misalign at large sizes, and render as squares on failure.

```html
<svg class="w-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <!-- paths -->
</svg>
```

```css
.w-icon { width: var(--w-icon-lg); height: var(--w-icon-lg); flex-shrink: 0; }
```
