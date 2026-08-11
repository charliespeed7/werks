# Navigation

## Structure

Four tabs. Flat. No nested navigation deeper than two levels, ever.

| Tab | Icon | What it holds |
|---|---|---|
| **Today** | `sun` | The Daily Brief, what is booked, what happened |
| **Waiting** | `clock` | The approval queue. Carries the Dot when non-empty. |
| **Money** | `£` | Quotes out, invoices out, what is owed and how old |
| **Memory** | `property` | Customers, properties, appliances, history |

Four labels, four words, four ideas. This is the whole product. If a fifth tab is proposed, something is wrong with one of the four.

Note what is absent: there is no "Chat" tab and no "Assistant" tab. Werks is not a thing you go and talk to. It brings you work, in Waiting, and you use voice from wherever you are.

## Tab bar

```
┌──────────────────────────────────────────────┐
│   [icon]     [icon]●     [icon]     [icon]   │  56px + safe area
│   Today      Waiting     Money      Memory   │  11px, 500
└──────────────────────────────────────────────┘
```

- 56px tall, plus `--w-safe-bottom`
- `bg-surface` with a 1px top border. Not translucent: blur over a scrolling list costs frames on the mid-range Android in the van, and the extra contrast is worth more than the effect.
- Active: icon fills, label goes `text-primary` at 600. Inactive: outline icon, `text-secondary` at 500.
- **Every tab is labelled.** Icon-only tab bars fail the half-second glance test.
- **The Dot** appears on Waiting when something needs the owner. It is a presence indicator, not a count. A number would invite the owner to try to clear it, and clearing a queue is not the goal; deciding the right things is.
- Each tab's hit area is the full column height, minimum 48px.

## App bar

```
┌──────────────────────────────────────────────┐
│  ‹    Sarah Whitfield                    ⋯   │  56px
└──────────────────────────────────────────────┘
```

- 56px, `bg-canvas`, no shadow. A 1px bottom border appears only once the content has scrolled under it.
- Title is 24px Display 600 on a root screen, 20px on a detail screen where a back button is present.
- **One action, maximum**, on the right. If a screen needs three actions, they belong in a sheet behind an overflow, or the screen is doing too much.
- Back is a chevron with the parent's name where it fits: `‹ Waiting`. On Android, also honour the system back gesture.
- The app bar does not collapse, shrink, or transform on scroll. It may fade its bottom border in. Nothing else.

## Segmented control

For two to four mutually exclusive views of the same list. Never for navigation between screens.

```
┌─────────────┬─────────────┬─────────────┐
│   Waiting   │    Sent     │   Stopped   │
└─────────────┴─────────────┴─────────────┘
```

48px tall, full width, `bg-sunken` track with a `bg-surface` selected pill, 1px border, radius `md`. Selected is 600 weight; the rest are 400 `text-secondary`. Options never scroll horizontally: if they do not fit, there are too many.

## The mic dock

A persistent element, not navigation, but it lives in the same zone and is documented here so the two are designed together.

```
                    ┌─────┐
                    │  ◉  │   64px, floating, Ink circle, Volt Dot
                    └─────┘
┌──────────────────────────────────────────────┐
│   Today      Waiting     Money      Memory   │
└──────────────────────────────────────────────┘
```

- 64px circle, Ink fill, centred, sitting 12px above the tab bar with `--w-elevation-dock`
- The Dot sits inside it, static, Volt on Ink at 14.78:1
- Hold to talk. Full behaviour in `components/voice-input.md`.
- It is present on every screen, because a thought about a job arrives when it arrives, and never at a convenient screen.
- It never covers content: every scrolling screen ends with 120px of clearance.

## Depth

Two levels. Root screen, then detail. Anything below that is a sheet, and sheets do not stack.

```
Today          →  Job detail        →  [sheet]
Waiting        →  Approval detail   →  [sheet]
Money          →  Invoice detail    →  [sheet]
Memory         →  Property detail   →  [sheet: appliance history]
```

If a design needs a third level, the second level is holding two ideas that should be separate.

## Transitions

Forward: 12px slide from the right with a fade, 240ms, `standard`. Back: the reverse. Tab switches do not slide; they cross-fade at 120ms, so tapping through tabs does not feel like travelling.

## Deep links

Every notification opens the exact card it names, not the tab that contains it. A notification saying "Sarah Whitfield, no heat" that opens a list is a broken promise and adds two taps at the worst possible moment.

## Accessibility

- `<nav>` with `role="tablist"`, `aria-selected` on the active tab
- The Dot has an accessible label: `aria-label="Waiting. Something needs you."`
- 48px minimum on every target, including back
- Back is always available; there is no screen without a way out
- Tab labels are real text and scale with OS text settings, wrapping to two lines if needed
