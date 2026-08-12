# Mobile-first patterns

`MASTER_CONTEXT` lists phone-first as the first product principle. That is not a statement about responsive breakpoints. It means the phone is the only surface that has to be good, and every other surface is a convenience.

## The design target

Assume all of this, always:

| | |
|---|---|
| Device | A three to four year old mid-range Android, or an older iPhone. Not the newest phone on the design team's desk. |
| Screen | 375×667 to 412×915, held in one hand |
| Hands | One. The other is holding a torch, a spanner, a clipboard, or a door open. |
| Gloves | Often |
| Light | Direct sun, or a dark cellar. Rarely an office. |
| Signal | Unreliable. Plant rooms, cellars, lofts, rural driveways. |
| Attention | Fifteen seconds, interrupted |
| Standing | Yes. Almost never sitting. |

Every rule below follows from that table.

## The eleven-second rule

Any single decision in Werks must be completable in about eleven seconds from lock screen to done, on the device above.

That is roughly: notification tap, read the draft, tap Send it, confirm. Four interactions, one screen, no navigation. If a task requires finding something first, the notification was wrong.

Test it on the real device with the screen at 40% brightness in daylight. Not in a simulator.

## One thumb

- Every action lives in the bottom third of the screen.
- The primary action is full width, 64px tall.
- Nothing important goes in a top corner. Back and one overflow action are the maximum allowance up there.
- No gesture is the only way to do anything. Swipe-to-archive may exist as a shortcut; the same action is always available as a button. A person in gloves gets swipes wrong.
- **Nothing destructive or customer-facing is ever behind a swipe.** No swipe-to-approve, no swipe-to-send. Ever.

## Gloves

- 48px is the absolute minimum target, 56px is the default, 64px for primary actions.
- 8px minimum between two adjacent targets.
- No small close buttons. Sheets are dismissed by dragging or by a full-width `Not now`.
- No precise gestures: no long-press-then-drag, no pinch, no two-finger anything.
- Tap targets extend beyond their visual bounds. A 24px chevron has a 48px hit area.

## Sunlight

- Body text at 16.84:1. Secondary at 6.78:1. No mid-greys.
- Never encode meaning in a tint alone: in bright light `green-100` and `paper-100` are the same beige.
- Avoid large light-grey areas: they bloom. Use white surfaces on a warm canvas with borders.
- Test at 40% brightness. Phones auto-dim in heat, which happens on a roof in July.
- Light theme is the default and stays the default. An auto-dark app in a sunlit street is unreadable.

## Offline first

Not an error state. The normal state, several times a day.

| Rule | |
|---|---|
| Reads work offline | Today's jobs, customer details, appliance records and access notes are on the device before they are needed. The back-gate code is useless if it requires signal at the back gate. |
| Writes queue | Notes, drafts and approvals are recorded locally and sent when signal returns. Nothing is lost, nothing is silently dropped. |
| Say so plainly | `Saved on this phone. It'll send when you're back.` Not a red error. |
| Never block on the network | No spinner that waits for a round trip before letting someone type. |
| Approvals are the exception | An approval made offline queues, and the card says `Will send when you're back` rather than `Sent`. Never tell the owner a customer has been contacted when they have not. |

That last row is a trust rule, not a technical one. Under `01_vision` D6a the owner is responsible for what goes out; being told something was sent when it is sitting in a queue is exactly the kind of small lie that ends the relationship.

## Interruption

The owner will be interrupted mid-task, every time. Design for resumption, not for completion.

- Everything is autosaved, continuously. There is no Save button anywhere in the product.
- Returning to the app returns to where they were, including scroll position and half-typed text.
- No multi-step wizards in the main flow. Onboarding may have steps; nothing else does.
- No session timeouts that lose work.
- No confirmation on leaving a screen. Just keep the draft.

## Notifications are the interface

Most days the owner never opens the app. The lock screen is the product.

- Three per day maximum, plus red lines. Budget enforced, not aspirational.
- Every notification names its subject in the first four words: `Sarah Whitfield, no heat`.
- Every notification deep-links to the exact card, never to a list.
- Actionable notifications carry the action: Approve and Call are available from the notification itself where the platform allows.
- No notification without something to do. Everything else waits for the Brief.

## Battery and data

The phone is also the business's only phone, and it needs to survive until six. No background polling loops, no video, no autoplaying anything, no analytics chatter. Images are the exception rather than the rule, and are compressed hard when they exist.

## What is not on the phone

Almost nothing. There is no "advanced settings, use the web app" tier. If a capability is real, it is on the phone. The 900px+ layout exists for an evening on a laptop and holds nothing the phone cannot do.

## Test protocol

Before any screen is called done:

1. Real mid-range Android, outdoors, 40% brightness
2. One hand, phone in the non-dominant hand
3. Gardening gloves on
4. Aeroplane mode for one full pass
5. OS text size at 200%
6. Lock screen to done, timed
7. Interrupted by an incoming call halfway through, then resumed
