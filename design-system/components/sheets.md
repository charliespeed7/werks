# Sheets

Sheets are how Werks asks for a decision. They exist instead of modal dialogs because they arrive at the bottom of the screen, where the thumb already is, and because they can be dismissed one-handed by pushing them back down.

## Types

| Type | Height | Use |
|---|---|---|
| **Bottom sheet** | Content, up to 90% | Editing a draft, choosing from a list, appliance history |
| **Action sheet** | Content | A short list of actions, one per row |
| **Confirm sheet** | Content | Anything irreversible or customer-facing |

There are no other sheet types, and there is no modal dialog in the system.

## Anatomy

```
┌─────────────────────────────────────┐
│              ═════                  │  ← 32×4 drag handle, border-default
│                                     │
│  Title                              │  ← 20px Display 600
│  Supporting line if needed          │  ← 17px text-secondary
│                                     │
│  Content                            │
│                                     │
│  ┌───────────────────────────────┐  │
│  │          Primary              │  │  ← 64px, full width
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │          Not now              │  │  ← secondary
│  └───────────────────────────────┘  │
│              safe area              │
└─────────────────────────────────────┘
```

- Radius `2xl` (28px), top corners only
- `bg-surface`, `--w-elevation-sheet`
- Scrim `rgba(15,14,13,0.44)` on light, `rgba(0,0,0,0.64)` on dark
- Padding `space-5` (20) sides, `space-6` (24) top, `space-4` plus the safe area at the bottom
- Rises in 280ms with `enter`; falls in 240ms with `exit`

## Detents

Bottom sheets snap to three heights: **peek** (content height, up to 40%), **half** (55%), **full** (90%, never 100%, so the screen behind stays visible and the sheet still reads as temporary).

A sheet opens at the smallest detent that shows its content without scrolling. Dragging moves between detents; dragging below peek dismisses.

## Dismissal

| Method | Standard sheet | Confirm sheet |
|---|---|---|
| Drag down | Yes | Yes |
| Tap the scrim | Yes | Yes |
| Back gesture or button | Yes | Yes |
| Explicit "Not now" | Yes | Yes |

Every sheet is dismissible by every route. There are no trapping sheets, including the confirm sheet: dismissing a confirm sheet is the same as declining, which is always the safe outcome. A sheet the owner cannot escape from with a wet thumb is a bug.

## The confirm sheet

Required before anything that leaves the building: sending a customer message, sending an invoice, sending a batch, deleting a record.

```
┌─────────────────────────────────────┐
│              ═════                  │
│                                     │
│  Send this to Sarah Whitfield?      │
│  07700 900123                       │
│                                     │
│  ┌─────────────────────────────────┐│
│  │ Hi Sarah, this is Whitfield     ││  ← the full text, again
│  │ Heating. Steve can come out     ││
│  │ tomorrow morning between 8 and  ││
│  │ 10. Does that work?             ││
│  └─────────────────────────────────┘│
│                                     │
│  ┌───────────────────────────────┐  │
│  │           Send it             │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │           Not now             │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

Rules:

1. **The message is shown again, in full.** The confirm is not "are you sure", it is a second reading. That is what makes it worth the tap.
2. **The recipient's number is shown.** Sending to the wrong person is the most expensive mistake available here.
3. **The title is a question naming the consequence**: "Send this to Sarah Whitfield?", not "Confirm".
4. **The confirming button never sits directly beside the declining one.** Separate rows.
5. **Destructive confirms use the destructive button**, and the label names what is destroyed: "Delete this draft", not "Delete".

### The batch confirm

For `Send all 4`. Every draft is listed in full, at reading size, and the confirm button sits at the **bottom of the list**, not pinned to the sheet. The owner scrolls past all four messages to reach it. This is intentional friction, sized to the risk: it is the one interaction that could turn approval into a reflex, which is the failure `01_vision` D6a exists to prevent.

## Action sheet

One action per row, 56px, left-aligned, full width, separated by 1px lines. Destructive actions are last, in the destructive colour, after a larger gap. A `Not now` row closes the sheet.

## Nesting

Sheets do not stack. A sheet may replace itself with different content (sliding horizontally within the same sheet), but a second sheet never opens on top of a first. If a flow appears to need that, it is a screen.

## Keyboard

When a sheet contains an input, it rises with the keyboard rather than being covered by it. The primary action stays visible above the keyboard at all times. On a 375×667 phone with the keyboard up there are roughly 260px of usable height; a sheet that puts its send button below that is unusable.

## Accessibility

- `role="dialog"` with `aria-modal="true"` and `aria-labelledby` pointing at the title
- Focus moves to the sheet on open and returns to the trigger on close
- Focus is contained within the sheet while it is open, and Escape closes it
- The scrim is `aria-hidden` and the content behind is `inert`
- Under reduced motion the sheet appears without sliding
- The drag handle is decorative; dragging is never the only way to dismiss

## Do / Don't

| Do | Don't |
|---|---|
| Show the message again in the confirm | "Are you sure?" |
| Name the consequence in the title | "Confirm" |
| Actions on separate rows | Approve beside Delete |
| Always dismissible | A sheet with no way out |
| One sheet at a time | Sheets stacked on sheets |
| Rise with the keyboard | A send button under the keyboard |
