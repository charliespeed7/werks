# Colour

Werks is a black-and-paper system with one signal colour and four status colours used sparingly. There is no brand blue, no gradient, and no accent palette. A screen where everything is grey except the one thing that matters is not a limitation of the palette. It is the palette working.

Every pair below is verified by `node tokens/verify-contrast.mjs`. Ratios in this document are the real measured values.

## The palette

### Ink and Paper

Warm neutrals, not cool greys. A pure `#000` on pure `#FFF` reads as cheap and glares in daylight; a warm near-black on warm paper reads as printed matter, which is the editorial register the brand wants.

| Token | Hex | Use |
|---|---|---|
| `--w-paper-50` | `#FBFAF8` | App canvas |
| `--w-paper-100` | `#F5F3EF` | Sunken areas, hover, message bubbles from the customer |
| `--w-paper-200` | `#EBE8E2` | Subtle borders, awaiting-approval chip |
| `--w-paper-300` | `#DCD8D0` | Default borders, dividers |
| `--w-paper-400` | `#C2BDB3` | Disabled surfaces |
| `--w-ink-400` | `#96918A` | Disabled text (3.00:1, never the only signal) |
| `--w-ink-450` | `#8C877F` | Control borders (3.42:1 on canvas, meets WCAG 1.4.11) |
| `--w-ink-500` | `#78736C` | Tertiary text, placeholders (4.51:1) |
| `--w-ink-600` | `#5C5851` | Secondary text (6.78:1) |
| `--w-ink-700` | `#403C36` | Pressed state of primary action |
| `--w-ink-800` | `#2A2724` | Hover state of primary action |
| `--w-ink-900` | `#1A1917` | **Primary text and the primary action.** 16.84:1 |
| `--w-ink-950` | `#0F0E0D` | Dark canvas, the mic dock |

**Primary actions are black, not coloured.** This is the single biggest decision in the palette. A black button is maximally legible in direct sunlight, reads as editorial rather than as software, and leaves the entire colour range free to mean something. When every button is blue, colour stops carrying information.

### Volt — the signal

| Token | Hex | Use |
|---|---|---|
| `--w-volt-100` | `#F2FFD1` | Signal tint background, used almost never |
| `--w-volt-300` | `#DCFF8A` | Dot on very dark surfaces where 500 is too hot |
| `--w-volt-500` | `#C3FF33` | **The Dot.** The campaign neon. |
| `--w-volt-700` | `#7FAD00` | Print and merchandise only |
| `--w-volt-900` | `#3F5600` | The only Volt legible as text on paper (7.92:1) |

Three hard rules:

1. **Volt is never text on a light surface.** `volt-500` on `paper-50` is 1.14:1. It is invisible. If you need Volt-coloured text on paper, you need `volt-900`, and you almost certainly do not need it at all.
2. **Volt only appears on Ink.** `volt-500` on `ink-900` is 14.78:1 and sings. On dark surfaces it is also the focus ring.
3. **Volt covers under 2% of any screen.** Measure it if you are unsure. One dot, one indicator, one waveform. If a screen has two Volt elements, one of them is wrong.

Volt means *live, now, Werks is on it*. It never means success, never means selected-and-finished, never means good.

### Status

Four colours, each with a tint background, a strong variant for inline text and icons, and a foreground for text on the tint.

| Meaning | Token family | Strong (on paper) | Chip fg / bg |
|---|---|---|---|
| **Positive** — paid, sent, done | `green` | `#0E7C55` (4.99:1) | `#0A4F37` on `#DCF3E9` (8.25:1) |
| **Attention** — overdue, chase due, expiring | `amber` | `#8F5A00` (5.55:1) | `#6E4400` on `#FBEFD9` (7.41:1) |
| **Critical** — red line, failed send, escalation | `red` | `#B0271B` (6.39:1) | `#731810` on `#FBE5E1` (9.32:1) |
| **Scheduled** — booked, upcoming, calendar | `blue` | `#1A5C96` (6.68:1) | `#123C63` on `#E2EEF8` (9.62:1) |

### Waiting is not a warning

The most common state in the whole product is **awaiting your approval**. Under `01_vision` D6a, every outbound message, quote and invoice sits in that state before it is sent, which means it is the normal condition of the app rather than an exception.

It is therefore **neutral ink on paper-200**, not amber.

```
--w-status-neutral-fg: var(--w-ink-900);
--w-status-neutral-bg: var(--w-paper-200);
```

Painting the approval queue amber would make the default state of the product look like a problem, teach the owner that the colour means nothing, and destroy amber's ability to flag the one invoice that is actually forty-five days late. Amber is earned by time passing, not by existing.

## Semantic layer

Components never reference `--w-ink-900`. They reference `--w-text-primary`. This is what makes the dark theme a fifty-line override rather than a rewrite, and it is what stops "make this grey slightly lighter" from becoming a palette change.

```css
/* wrong */                        /* right */
color: var(--w-ink-600);           color: var(--w-text-secondary);
background: var(--w-paper-100);    background: var(--w-bg-sunken);
border-color: var(--w-paper-300);  border-color: var(--w-border-default);
```

The full semantic list is in `tokens/tokens.css` under TIER 2.

## Dark theme

Light is the default. The app is used outdoors in daylight more often than it is used in the dark, and an auto-dark app in a sunlit street is unreadable.

Dark exists for the evening — the owner going through the day's approvals on the sofa at nine o'clock, which `01_vision` describes as the exact hour the product is supposed to give back. It is also the right theme in a plant room and in a van at night.

Rules for dark:

- **Primary action inverts to Paper on Ink text.** A black button on a black canvas is not a button.
- **Shadows do almost nothing on near-black.** Elevation is carried by `--w-border-subtle` and a lighter surface, not by shadow. `--w-elevation-card` is `none` in dark.
- **Status colours move to the 300s.** `green-600` on a dark surface fails; `green-300` is 10.72:1.
- **Focus rings become Volt.** On light surfaces the focus ring is Ink; on dark it is `volt-500` at 16.23:1.
- **Never pure black.** `#0F0E0D` is warm and matches the Ink family. Pure black on an OLED next to a warm-grey card looks like a rendering bug.

Three states are handled in `tokens.css`: explicit `[data-theme="dark"]`, explicit `[data-theme="light"]`, and the system default via `prefers-color-scheme`.

## Sunlight

The app is read on a phone held at arm's length in a driveway in June. Two consequences:

- **Body text targets 7:1, not 4.5:1.** Primary text is 16.84:1. Secondary is 6.78:1. Do not introduce a mid-grey because a mock looks cluttered; reduce what is on the screen instead.
- **Never encode meaning in a tint alone.** In bright light, `green-100` and `paper-100` are the same beige. Status chips always carry text, and status rows always carry an icon and a word.

## Colour is never the only signal

Binding, and not only for accessibility. Every status must be legible to someone who is colour-blind, someone in direct sun, and someone glancing at the screen for half a second with a spanner in the other hand.

| State | Colour | Plus |
|---|---|---|
| Paid | green | the word "Paid", a tick icon |
| Overdue | amber | the word "45 days", a clock icon |
| Red line | red | the word "Stopped", a hand icon, and a border-left |
| Booked | blue | the date, a calendar icon |
| Awaiting you | neutral | the word "Approve", and the Dot on the nav item |

## Adding a colour

Do not. If you believe you need one, the answer is almost always a status token you have not found yet, or a hierarchy problem that colour is being asked to solve. If a colour genuinely must be added: define the full family, add every permitted pair to `verify-contrast.mjs`, and write down what it means and what it does not mean, in the table above, before it is used.
