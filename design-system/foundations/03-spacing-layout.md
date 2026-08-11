# Spacing and layout

## The scale

4px base. Every measurement in the product is on this scale, with no exceptions and no arbitrary values.

| Token | px | Use |
|---|---|---|
| `space-1` | 4 | Icon to its label, chip padding |
| `space-2` | 8 | Inside a chip, between tightly related lines |
| `space-3` | 12 | Inside compact controls |
| `space-4` | 16 | **The gutter.** Screen edges, card padding, gap between cards |
| `space-5` | 20 | Card padding when the card carries reading text |
| `space-6` | 24 | Between groups inside a card, above a section heading |
| `space-8` | 32 | Between sections |
| `space-10` | 40 | Above a screen's first section |
| `space-12` | 48 | Between major blocks, empty state padding |
| `space-16` | 64 | Screen-level breathing room, marketing |
| `space-20`, `space-24` | 80, 96 | Marketing only |

If a value between two steps seems necessary, the layout is wrong somewhere else. Nudging 2px is how a design system dies.

## Rhythm

Space is the only hierarchy tool as powerful as type here, since colour is not available for it. The rule:

> **Related things are close. Unrelated things are far apart. There is no middle distance.**

Concretely, inside a card: 8px between a title and its subtitle, 20px between the content and the actions, 32px before the next section starts. A reader should be able to see the grouping with the screen out of focus.

## Screen layout

```
┌─────────────────────────────┐
│  safe-area-top              │
├─────────────────────────────┤
│  App bar            56px    │  ← sticky, title + one action
├─────────────────────────────┤
│                             │
│  16px gutter                │
│  ┌───────────────────────┐  │
│  │  Content              │  │  ← single column, always
│  └───────────────────────┘  │
│  16px gap                   │
│  ┌───────────────────────┐  │
│  │  Content              │  │
│  └───────────────────────┘  │
│                             │
│  120px bottom clearance     │  ← so the dock never covers the last card
├─────────────────────────────┤
│  Mic dock           64px    │  ← floating, above the tab bar
│  Tab bar            56px    │  ← 4 items
│  safe-area-bottom           │
└─────────────────────────────┘
```

**One column. Always.** There is no two-column mobile layout in Werks, no masonry, and no horizontal scroller of cards. A person scanning a screen at a customer's front door reads top to bottom and stops at the first thing that needs them. Side-by-side content forces a decision about where to look, and that decision costs more than the space it saves.

The only exception is a two-up row of equal statistics in the Brief, and only when both are money.

## Bottom clearance

Every scrolling screen ends with **120px** of padding: 64px for the mic dock, 56px for the tab bar, plus the safe area. Content that ends flush is content the owner cannot tap.

```css
.w-screen { padding-bottom: calc(7.5rem + var(--w-safe-bottom)); }
```

## Touch targets

Set by the environment, not by convention. The owner is wearing gloves, standing up, in the rain, one-handed, with the phone in the hand that is not holding something.

| Target | Minimum | Where |
|---|---|---|
| Absolute minimum | **48×48** | Anything tappable, including icon buttons and list chevrons |
| Mobile default | **56** | Buttons, list rows, form fields |
| Primary action | **64** | Approve, Send, the mic |
| Spacing between targets | **8** | Two adjacent tappables never touch |

A visually smaller control may extend its hit area with padding or a pseudo-element, but the *hit area* is never below 48. A 24px icon button gets 12px of padding on all sides, not a smaller target.

**Destructive and confirming actions are never adjacent.** Approve and Reject sit on separate rows, or Reject is quiet and Approve is filled. A mis-tap sends a real message to a real customer under the owner's business name.

## The thumb

```
┌─────────────────────────────┐
│  HARD                       │  ← status, titles, read-only content
│  (needs a second hand)      │
├─────────────────────────────┤
│  OK                         │  ← content, list rows
│                             │
├─────────────────────────────┤
│  EASY                       │  ← every action lives here
│  (natural thumb arc)        │     approve, send, mic, tabs
└─────────────────────────────┘
```

Bottom third: actions. Middle: content. Top: information and one low-frequency action at most (back, or a single overflow).

Sheets exist precisely so that a decision made about something at the top of the screen can be confirmed at the bottom. See `components/sheets.md`.

## Cards

- Radius `--w-radius-lg` (14px). Sheets use `--w-radius-2xl` (28px) on the top corners only.
- Padding `space-4` (16) by default, `space-5` (20) when the card contains reading text.
- Separation is by **1px border plus 16px gap**, not by shadow. `--w-elevation-card` is one nearly invisible shadow, and in dark theme it is `none`.
- Full-bleed on mobile is permitted for message threads and lists; cards elsewhere.

## Density

One density. There is no compact mode.

An owner with 200 jobs does not want smaller rows, they want better filtering and a Brief that tells them the four things that matter. Density is a desktop-software answer to a problem this product should not have.

## Breakpoints

| Name | Width | Notes |
|---|---|---|
| Phone | 0–599 | The design target. Everything is drawn here first. |
| Large phone / small tablet | 600–899 | Content max-width 34rem, centred. Layout otherwise unchanged. |
| Tablet / laptop | 900+ | Two-pane: list on the left (max 24rem), detail on the right. Nav moves from the bottom bar to a left rail. |

Nothing in the system requires the 900+ layout to exist. It is a convenience for an evening on a laptop, not a product surface.

## Text scaling

Test every screen at 200% OS text size. Rules that make this survivable:

- Heights are minimums, never fixed: `min-height`, never `height`, on anything containing text.
- Buttons wrap to two lines rather than truncating. A truncated "Approve and se…" is a trust problem.
- Icon-plus-label rows stack vertically above 130% scale.
- Never `overflow: hidden` on a container holding user or customer text.

## Safe areas

`env(safe-area-inset-*)` on every fixed element. The tab bar, the mic dock, sheets and toasts all respect it. Tokens: `--w-safe-top`, `--w-safe-bottom`.

## Grid

There isn't one. A single-column phone layout with a 16px gutter and a 4px scale does not need a twelve-column grid, and introducing one invites layouts the product should not have. The 900+ two-pane view uses fixed pane widths, not columns.
