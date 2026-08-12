# Cards

A card is one thing that can be understood and acted on without opening it. If it needs opening to make sense, it is a list row, not a card.

## Base

```
┌─────────────────────────────────────┐
│ [chip]              [meta]          │  ← status and time, top row
│                                     │
│ Title                               │  ← 20px / Display 600
│ Supporting line                     │  ← 17px / text-secondary
│                                     │
│ [actions]                           │
└─────────────────────────────────────┘
```

- Radius `lg` (14px), 1px `border-subtle`, `bg-surface`
- Padding `space-4` (16), or `space-5` (20) when the card contains reading text
- `space-4` gap between cards
- Elevation is the border. `--w-elevation-card` is a whisper on light and `none` on dark.
- The whole card is tappable only when it has no buttons. A card with buttons is not itself a link.

## The approval card

The most important component in the product. Under `01_vision` D6a, every customer-facing message, quote and invoice passes through this card before it exists in the world. It is the surface where trust is either built or lost.

```
┌─────────────────────────────────────┐
│ Waiting for you            9:26     │
│                                     │
│ Reply to Sarah Whitfield            │  ← who it goes to, first
│ 14 Elm Road · No heat since Monday  │  ← the context Werks used
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Hi Sarah, this is Whitfield     │ │  ← the exact text that will be
│ │ Heating. Steve can come out     │ │     sent, in full, at reading
│ │ tomorrow morning between 8 and  │ │     size, never truncated
│ │ 10. Does that work?             │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │           Send it               │ │  ← primary, 64px, full width
│ └─────────────────────────────────┘ │
│ ┌──────────────┐ ┌────────────────┐ │
│ │  Edit first  │ │   Don't send   │ │  ← secondary and quiet
│ └──────────────┘ └────────────────┘ │
└─────────────────────────────────────┘
```

### Rules

1. **The draft is shown in full.** Never truncated, never behind "show more", never summarised. The owner is being asked to take responsibility for these exact words going out under their trading name. Hiding any of them makes the approval meaningless.
2. **Reading size, 17px, in a distinct container** with `bg-sunken` so it reads as a quotation rather than as interface text.
3. **The context line says what Werks used to write it.** "14 Elm Road, no heat since Monday" tells the owner which facts are in play. If Werks inferred something, it is named: "Assumed the Worcester 8000 from the last visit."
4. **Approve is never pre-selected, never auto-confirmed on scroll, and never triggered by a swipe.** A swipe-to-approve gesture would be the single most dangerous interaction in this product.
5. **The status chip is neutral, not amber.** Waiting is the normal state of the app. See `foundations/01-colour.md`.
6. **Edit first opens the draft in an editable field in place**, not on another screen. Editing must be as cheap as approving, or the edit rate that `01_vision` uses as its retention signal will be measuring friction rather than trust.
7. **When Werks is unsure, the card says so** above the draft, in text: "Werks isn't sure which property this is. Two are on record for this number."

### Variants

| Variant | Difference |
|---|---|
| Message | As above |
| Quote | Adds the amount as a money figure, and a line-item summary. Amount is Ink, never coloured. |
| Invoice | Adds amount, job reference, and the payment link that will be included |
| Chase | Adds the age in days, the amount, and how many chases have already gone |
| Batch | A header card: "4 waiting. Oldest since Monday." with `Send all 4` behind a confirm sheet listing every draft in full |

### The batch case

`Send all 4` is the one place where the product risks teaching approval-without-reading, which is precisely the failure mode `01_vision` warns about. It is therefore built to resist it: the confirm sheet lists all four drafts in full, at reading size, scrollable, with the confirm button at the bottom of that list rather than pinned. The owner must physically scroll past every message to reach the button.

## Job card

```
┌─────────────────────────────────────┐
│ Tue 12 Aug · 08:00–10:00     [chip] │
│                                     │
│ Sarah Whitfield                     │
│ 14 Elm Road, PE7 3RB                │
│ No heat. Worcester 8000, fitted     │
│ Mar 2019.                           │
│                                     │
│ Call Sarah   ·   Directions         │
└─────────────────────────────────────┘
```

The appliance line comes from the property record and is what `01_vision` D5 calls the moat, made visible. It is the line that a competitor signing this customer tomorrow cannot show.

## Money card

```
┌─────────────────────────────────────┐
│ OUTSTANDING                         │  ← overline
│ £6,400                              │  ← 38px Display Bold, tabular, Ink
│ Across 7 invoices. £2,400 over 45   │
│ days.                               │
└─────────────────────────────────────┘
```

The figure is never coloured, never animated, never abbreviated. Sentiment lives in the supporting line and in the chips on the rows below, not in the number.

## Memory card

The property and appliance record (`01_vision` D5). The card that makes switching expensive.

```
┌─────────────────────────────────────┐
│ 14 Elm Road, PE7 3RB      [Landlord]│
│                                     │
│ Worcester Bosch 8000 Life           │
│ Fitted Mar 2019 · Warranty to 2029  │
│ Serial 7731600123                   │  ← mono
│                                     │
│ Last service 4 Feb · Next due Feb   │
│ Key is with the tenant, Mrs Iqbal.  │
│ Back gate code 1990.                │
│                                     │
│ 3 visits · See the history          │
└─────────────────────────────────────┘
```

Access notes are shown in full on the card, not behind a tap. Standing at a locked back gate is exactly when that text is needed, and it must be readable without a connection.

## List rows

For anything scanned rather than acted on. 56px minimum, 72px when there are two lines, full-width separators, chevron at the end only when the row navigates.

```
┌─────────────────────────────────────┐
│ ● Sarah Whitfield        9:26  ›    │  ← Dot means: needs you
│   No heat, 14 Elm Road              │
└─────────────────────────────────────┘
```

The Dot on a row means the same as it means everywhere: Werks is on it, or it is waiting on you. Never a count badge, never a red dot.

## Do / Don't

| Do | Don't |
|---|---|
| Show the full draft | Truncate with "show more" |
| Say what Werks assumed | Present an inference as a fact |
| Neutral chip for waiting | Amber for the normal state |
| Approve and reject on separate rows | Two equal buttons side by side |
| Access notes visible on the card | Access notes one tap away |
| Money in Ink | Money in green because it is good news |
