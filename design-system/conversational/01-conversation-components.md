# Conversation components

Everything in a thread, and the rules for who is allowed to look like what.

## The four voices

There are exactly four things that can appear in a Werks thread. Learn these and every layout decision below follows.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ┌────────────────────────────┐                      │
│  │ No heat since last night,  │   1. THE CUSTOMER    │  left, filled, paper
│  │ PE7 3RB                    │                      │
│  └────────────────────────────┘                      │
│   09:21                                              │
│                                                      │
│  ●  Werks drafted a reply. Sarah has been on record  │  2. WERKS            │  rail, no fill
│  │  since Feb. The Worcester 8000 is hers.           │
│                                                      │
│                    ┌─────────────────────────────┐   │
│                    │ Hi Sarah, this is Whitfield │   3. THE BUSINESS     │  right, ink
│                    │ Heating. Steve can come out │   │
│                    │ tomorrow 8 to 10.           │   │
│                    └─────────────────────────────┘   │
│                             Sent 09:26 · Delivered   │
│                                                      │
│  ─────────  09:26 · Steve approved  ─────────────    │  4. THE RECORD       │  mono, rule
│                                                      │
└──────────────────────────────────────────────────────┘
```

| Voice | Alignment | Surface | Type | Tokens |
|---|---|---|---|---|
| **The customer** | Left | Filled, `bubble-in-bg` | 17px | `--w-bubble-in-*` |
| **The business** (the owner's trading name) | Right | Filled, `bubble-out-bg` | 17px | `--w-bubble-out-*` |
| **Werks**, to the owner | Left, on a rail | **None** | 17px | `--w-werks-*` |
| **The record** (events, stops, times) | Full width | None, hairline rule | 14px, mono time | `--w-system-*` |

### Why Werks gets no bubble

A bubble says *a person said this to you*. Werks is not a person in the conversation and `foundations/00-brand.md` forbids it having a face, an avatar or a first-person self. It is the office manager reading the thread out over your shoulder.

Practically, it also solves a real problem: in a thread containing a customer, a business and a commentary track, three bubble styles are one too many to tell apart at arm's length in sunlight. Two bubbles and a rail read instantly.

### Why the business bubble is ink

Outgoing messages are the highest-consequence content in the product: they went out under a Gas Safe registered trading name. Ink at 16.84:1 makes them the heaviest thing in the thread, which is correct. It also uses no colour, so the four status colours stay free to mean what they mean.

---

## Message bubble

```html
<article class="w-msg w-msg--in">
  <div class="w-msg__bubble">
    <p class="w-msg__text">No heat since last night, PE7 3RB</p>
  </div>
  <p class="w-msg__meta"><span class="w-msg__who">Sarah Whitfield</span> · 09:21</p>
</article>
```

### Anatomy

- **Bubble** — `--w-bubble-pad-y` / `--w-bubble-pad-x`, radius `--w-bubble-radius` (20px) with the corner nearest its speaker at `--w-bubble-radius-tail` (4px). That single squared corner is the whole tail treatment. No pointer, no triangle, no tail SVG.
- **Text** — 17px `--w-text-md`, `leading-normal`. Reading size, because these are real sentences from real people.
- **Meta** — 12px, below the bubble, outside it. Sender name on the first bubble of a run only; time on the last bubble of a run only.
- **Max width** — `--w-bubble-max`, `min(85%, 26rem)`. A bubble never runs the full width of the screen: the asymmetry is what tells you who is speaking before you have read a word.

### Sender context

The first bubble of a run carries who is speaking and, where it is not obvious, what Werks knows about them:

```
Sarah Whitfield · 14 Elm Road · 09:21
```

Rules:
- Name from contacts where it exists, the number where it does not. Never "Unknown".
- The property is shown when the thread is not already scoped to one property.
- **Never an avatar photograph.** Initials in a 24px ink circle where a mark is genuinely needed, and usually it is not: in a two-party thread, alignment already says who is speaking.
- A number Werks has not matched to a customer says so plainly: `07700 900123 · not on the record`.

### Runs

Consecutive bubbles from the same speaker are a run: `--w-turn-gap-same` (4px) apart, only the last one carries the time, only the first carries the name. A new speaker starts a new turn at `--w-turn-gap` (16px). A gap of more than an hour, or a new day, breaks to `--w-turn-gap-block` (32px) with a centred date rule.

### States

| State | Treatment |
|---|---|
| Sending | Bubble at 60% opacity, meta reads `Sending` |
| Sent | `Sent 09:26` |
| Delivered | `Sent 09:26 · Delivered` |
| Read | `Read 09:31`. Never a coloured double tick. Werks is not a chat app. |
| Failed | Critical left border on the bubble, meta reads `Didn't send`, with `Try again` inline |
| Queued offline | Meta reads `Saved on this phone` |

### Long messages, and what is never done to them

A 400-word message from a customer is shown in full. No "read more", no fade-out gradient, no height cap. If it is long, the thread scrolls. The one thing a message component in this product may never do is hide part of what someone actually said.

---

## Draft bubble

The approval card, moved into the thread where it belongs. Used when the owner is looking at a conversation. The standalone approval card in `components/cards.md` is unchanged and is still what appears in the Waiting queue.

```
                    ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
                    │ Hi Sarah, this is Whitfield │   ← outlined, not filled
                    │ Heating. Steve can come out │      1px dashed, ink
                    │ tomorrow 8 to 10. Does that │      17px, in full
                    │ work?                       │
                    └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
                     Draft · not sent

  ┌─────────────────────────────────────────────────┐
  │                   Send it                       │   ← 64px, full width
  └─────────────────────────────────────────────────┘
  ┌───────────────────┐  ┌──────────────────────────┐
  │    Edit first     │  │       Don't send         │
  └───────────────────┘  └──────────────────────────┘
```

- **Outlined, right-aligned, in position.** It sits exactly where the sent message will sit. Approving fills it in over 200ms and the meta becomes `Sent 09:26`. That fill is the only place in the system where a surface changes colour to confirm an action, and it earns it: the shape the owner approved becomes the shape that went out, in the same place.
- **Dashed border**, `--w-bubble-draft-border`. Dashed means *not yet real*. Nothing else in the system is dashed.
- **The full text. Always.** Same rule as the approval card, same reason: the owner is taking responsibility for these exact words.
- **Actions sit below the thread position, full width**, not inside the bubble. A 26rem bubble cannot hold a 64px primary action and a bubble with buttons inside it invites a mis-tap.
- **Werks's rail line above the draft says what it used**: `Werks drafted this from her message and the Feb visit.` One line, and it names any assumption.
- Uncertainty appears above the draft as text, never as a score: `Werks isn't sure which property. Two are on record for this number.`

---

## Werks's rail

How Werks talks to the owner inside a thread.

```html
<div class="w-werks">
  <span class="w-werks__mark" aria-hidden="true"><i class="w-dot"></i></span>
  <div class="w-werks__body">
    <p class="w-werks__text">Sarah replied. She wants Thursday instead.</p>
    <p class="w-werks__meta">11:04</p>
  </div>
</div>
```

- A 24px rail (`--w-rail-w`) on the left. A Dot at the top of it when Werks is doing something now; a 1px hairline (`--w-werks-rail`) down the rail when it is reporting something that already happened.
- Text at 17px on the canvas, no container, no fill.
- **Never more than three lines.** `voice/voice-and-tone.md` rule 6: one decision per message. If Werks has more to say than three lines, it has two things to say and they are two rail entries.
- The rail is where speech is rendered when Werks is reading aloud. See `02-voice-states.md`.

---

## Inline actions

Actions attached to a specific message rather than to the screen.

```
  ┌────────────────────────────┐
  │ Can you come Thursday      │
  │ instead? Morning is best.  │
  └────────────────────────────┘
   09:21

   [ Call Sarah ]  [ See the property ]  [ Draft a reply ]
```

- A row of secondary buttons at `--w-control-md` (48px), directly under the bubble they belong to, left-aligned to it.
- **Three maximum, and two is better.** A row of five is a menu, and a menu on a phone in the rain is a failure.
- Every action carries a word. No icon-only inline actions, per `foundations/04-iconography.md`.
- They wrap to a second row rather than scrolling horizontally. Nothing in this system scrolls sideways.
- Actions that leave the app (`Call Sarah`, `Directions`) say where they go.
- **`Send it` is never an inline action.** Approving lives on the draft, with the full text visible above it. An approve button attached to a collapsed or scrolled-away draft is the reflex path that `patterns/approval-and-trust.md` exists to prevent.

### The standard set

| Action | When it appears |
|---|---|
| `Call {first name}` | Any customer message. Always first when a red line has fired. |
| `See the property` | The thread is matched to a property record |
| `Draft a reply` | An unanswered customer message with no draft yet |
| `Approve the draft` | Scrolls to the draft; never sends |
| `See the conversation` | On a Werks rail entry in a summary view, opens the thread |
| `Try again` | A failed send |
| `Book it` | A message that has produced a proposed slot |

---

## The quiet block

Werks handled something and did not need anyone. This is the component that makes a proactive product calm instead of noisy.

```
   ─────────────────────────────────────────────
     Werks handled 4 messages while you were out    ⌄
     09:14 to 11:40 · nothing needed you
   ─────────────────────────────────────────────
```

Expanded:

```
   ─────────────────────────────────────────────
     Werks handled 4 messages                       ⌃

     09:14  Missed call from 07700 900123
     09:14  Text sent — "Hi, this is Whitfield
            Heating. Sorry we missed you..."
     09:21  Reply received — "No heat since last
            night, PE7 3RB"
     09:22  Werks drafted a reply
   ─────────────────────────────────────────────
```

### Rules

1. **Only things that needed no decision may collapse.** Anything awaiting approval, anything Werks was unsure about, and anything that touched a red line is never inside a quiet block. Ever.
2. **Expanding is lossless and one tap.** Every message in full, in the customer's own words. `01_vision` D6b requires the transcript rather than a summary, and a collapsed view is only legitimate because the full text is one tap away and identical.
3. **The summary line is a count and a time range, not a characterisation.** `Werks handled 4 messages` is a fact. `Werks took care of everything` is a claim.
4. **Indented by `--w-quiet-inset` (24px), text at `--w-quiet-fg`.** Visually recessed. It is the part of the day the owner does not need to read.
5. **Never collapses more than one calendar day.** Yesterday's quiet block and today's are separate.
6. **The audit timeline is not this.** `components/status-and-feedback.md`'s timeline is never collapsed, never paginated, never summarised. This is a view for the thread; that is the record.

---

## Thread view

```
┌─────────────────────────────────────┐
│  ‹  Sarah Whitfield          [Call] │  ← app bar: name, one action
├─────────────────────────────────────┤
│  14 Elm Road · Worcester 8000       │  ← context strip, 1 line, always visible
├─────────────────────────────────────┤
│                                     │
│           Tue 12 Aug                │  ← date rule
│                                     │
│   ┌──────────────────┐              │
│   │ customer message │              │
│   └──────────────────┘              │
│    09:21                            │
│                                     │
│  ● Werks drafted a reply.           │
│                                     │
│              ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─┐   │
│              │ draft, in full   │   │
│              └ ─ ─ ─ ─ ─ ─ ─ ─ ─┘   │
│                                     │
│  [        Send it        ]          │
│  [ Edit first ] [ Don't send ]      │
│                                     │
│  ─── quiet block, collapsed ───     │
│                                     │
├─────────────────────────────────────┤
│           ( mic )                   │  ← the dock, on every screen
└─────────────────────────────────────┘
```

- **Newest at the bottom**, opening scrolled to the newest, like every message thread anyone has ever used. Do not invent a new convention here.
- **The context strip is permanent**, not a header that scrolls away: property and appliance, one line. Standing at the door, that line is the reason the product is worth paying for.
- **The thread never auto-scrolls away from something the owner is reading.** A message arriving while they are scrolled up shows a `1 new` pill at the bottom edge instead of jumping. Auto-jumping a thread under someone's thumb while they are reading a draft is how the wrong thing gets tapped.
- Bottom clearance is 120px as in `foundations/03-spacing-layout.md`, so the last bubble is never under the dock.
- **No text input at the bottom of the thread.** The owner does not type to the customer directly: they approve, edit, or dictate, and every route ends at a draft. A free-text field to the customer would be a path around D6a.

## Conversation list

The index of threads. A list row per conversation, per `components/cards.md`.

```
┌─────────────────────────────────────┐
│ ● Sarah Whitfield          09:26  › │  ← Dot: needs you
│   Draft ready. No heat, 14 Elm Rd   │
├─────────────────────────────────────┤
│   Mr Dixon                 Mon    › │
│   Paid. £480.                       │
├─────────────────────────────────────┤
│ ▌ Rachel Oyelaran          08:02  › │  ← critical left border: Werks stopped
│   Stopped. Mentioned a gas smell.   │
└─────────────────────────────────────┘
```

- Second line is **what the owner needs to know**, not the last message verbatim. `Draft ready. No heat, 14 Elm Rd` beats `Yes that works thanks`.
- **The Dot means it needs you.** Not unread, not new. A thread Werks handled entirely has no Dot no matter how much happened in it.
- Ordering: needs-you first by age, then everything else by recency. Never a manual sort, never a filter chip row by default.
- One stopped thread pins to the top with a critical left border until the owner has called.

---

## Do / Don't

| Do | Don't |
|---|---|
| Werks on a rail | Werks in a third bubble style |
| Draft outlined, in position | Draft in a floating card over the thread |
| Alignment carries the speaker | Colour carries the speaker |
| Quiet blocks expand losslessly | Summarise and discard the original |
| Full message text, always | Fade-out gradients and "read more" |
| Three inline actions maximum | An action row that scrolls sideways |
| `1 new` pill when scrolled up | Auto-scroll under the owner's thumb |
| Initials where a mark is needed | Avatar photographs |
| The Dot means needs-you | The Dot means unread |
