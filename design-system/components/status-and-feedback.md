# Status and feedback

## Status chip

A small, high-contrast label carrying one state. Text plus optional icon, never colour alone.

| State | Chip | Tokens |
|---|---|---|
| Waiting for you | `Waiting for you` | neutral fg/bg |
| Sent | `Sent 9:26` | subtle, `text-secondary` on `bg-sunken` |
| Paid | `Paid 12 Aug` | positive fg/bg |
| Overdue | `45 days` | attention fg/bg |
| Stopped | `Stopped` | critical fg/bg |
| Booked | `Tue 08:00` | scheduled fg/bg |

- 24px tall, `space-2` horizontal padding, radius `full`, 12px text at 500
- All chip pairings clear 7:1 (see `foundations/01-colour.md`)
- A chip is never interactive. If it needs a tap it is a button or a filter.
- Maximum **one chip per card**. Two chips is two ideas competing.

## The Dot

Covered in `foundations/00-brand.md`. In components it appears only on: a nav item with something waiting, a list row needing the owner, the mic, and an in-progress action. It is a presence indicator, never a count, and it never pulses.

## Banner

Persistent, in-flow, for a condition that applies to the whole screen. Not dismissible when it describes a real state, because dismissing it would not change the state.

```
┌─────────────────────────────────────┐
│ ⌁ No signal                         │
│   Saved on this phone. It'll send   │
│   when you're back.                 │
└─────────────────────────────────────┘
```

- Radius `md`, 1px border in the status colour, tint background
- Icon plus title plus one line, and at most one action
- Positions: below the app bar for screen-level conditions, inline for row-level ones

Uses: offline, a failed send, Werks stopped on a thread, a permission that is off and is preventing something.

## Toast

Transient confirmation of something the owner just did. Not for errors, ever.

- Appears above the mic dock, 240ms, `enter`
- Stays 4 seconds; 6 seconds when it carries an Undo
- One line, no title, no icon
- One action maximum, and only `Undo`
- Only one toast on screen at a time; a new one replaces the old

> `Sent to Sarah Whitfield.` `Undo`

**Undo is available for 6 seconds on anything that leaves the building**, where the channel makes recall possible. Where it is not possible, do not offer it and do not pretend: the confirm sheet is the last chance, which is why it exists.

Errors are never toasts. An error the owner needs to act on cannot disappear after four seconds while they are reaching for the phone.

## Empty state

Empty is the goal state of this product. It says so and stops.

```
        [icon, 28px, text-tertiary]

           Nothing waiting.

     Werks will bring you anything
       that needs a decision.
```

- Centred, `space-12` (48) of vertical padding
- One line at 20px Display 600, one supporting line at 17px `text-secondary`
- One icon, or none. **No illustration** (`foundations/00-brand.md`).
- An action only where there is genuinely one to offer. On the approvals screen there is not, and adding "Explore features" would be inventing work for someone who has none.

## Skeleton

For content that will arrive in under about two seconds. Beyond that, say what is happening in words.

- `bg-sunken` blocks matching the real content's shape and size
- 1.4s opacity pulse between 100% and 60%. No shimmer sweep.
- Never a skeleton for money. A blurred grey block where an amount goes reads as a figure being hidden.
- Never a full-screen skeleton. Show the structure that is already known, skeleton only the parts that are not.

## Loading

| Wait | Treatment |
|---|---|
| Under 300ms | Nothing. Do not flash a spinner. |
| 300ms–2s | Inline spinner or skeleton |
| 2s–10s | Words: `Working it out` |
| Over 10s | Words plus a reason plus a way out: `Signal's slow. Still going.` `Cancel` |

The spinner is a 16px Ink ring, 2px stroke, 800ms rotation. There is one spinner in the system.

## Audit timeline

The visible form of `01_vision`'s auditability requirement. It appears on every job and every thread.

```
09:14  Missed call from 07700 900123
       ─
09:14  Text sent
       "Hi, this is Whitfield Heating. Sorry we missed you..."
       ─
09:21  Reply received
       "No heat since last night, PE7 3RB"
       ─
09:22  Werks drafted a reply
       ─
09:26  Steve approved
       ─
09:26  Text sent
```

- Mono timestamps, 24-hour, `text-secondary`
- Actor is named: the owner's first name for their actions, `Werks` for Werks's
- **Customer-facing text is quoted in full, never summarised.** `01_vision` D6b requires the full transcript rather than a summary for calls; the same principle governs messaging.
- Werks-stopped events carry a critical left border and the reason
- Not collapsible, not paginated, not "show more". It is the audit trail; hiding it would defeat it.
- Read-only. Nothing in the timeline is editable, including by the owner.

## Feedback hierarchy

When more than one thing could be shown, this is the order. Only one occupies the owner's attention at a time.

1. **Red line** — full-screen or top banner, critical, never auto-dismissing, always with a phone number
2. **Error blocking an action** — banner or inline, with recovery
3. **Screen condition** (offline, permission off) — banner
4. **Confirmation of something done** — toast
5. **Something waiting** — the Dot, and the Waiting queue

Nothing lower interrupts anything higher.
