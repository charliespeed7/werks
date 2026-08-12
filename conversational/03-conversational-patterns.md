# Conversational patterns

Six flows. Each one is a whole interaction, not a component, and each ends in the same place: a draft, in full, behind approval.

---

## 1. The Daily Brief, as a conversation

The Brief in v1.0 is a screen you read. In v1.1 it is a screen you read **or** two sentences Werks reads to you while you are unlocking the van.

### The surface

```
┌─────────────────────────────────────┐
│                                     │
│  Tuesday 12 August                  │  ← editorial, Newsreader
│                                     │
│  £1,860 came in yesterday. Dixon    │  ← 30px editorial, the money sentence
│  paid 12 minutes after the chase.   │
│  Three things are waiting for you.  │
│                                     │
│  ● Werks is reading this            │  ← only while speaking
│                                     │
│  ┌───────────────────────────────┐  │
│  │  Take me through them         │  │  ← 64px primary
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  Later                        │  │
│  └───────────────────────────────┘  │
│                                     │
│  Say "take me through them".        │  ← only in a hands-free session
└─────────────────────────────────────┘
```

### Rules

- **The Brief is two sentences.** Unchanged from `voice/microcopy-library.md`, spoken or read. Money first if there is money. Never the product's own activity.
- **Werks speaks it only if the owner opened it by voice, or is in a hands-free session.** Opening the app with a thumb produces a silent Brief. The phone does not start talking because it was unlocked.
- **The spoken Brief is the on-screen Brief, word for word.** No expanded audio version, no extra detail "since we're talking".
- **`Take me through them` starts a multi-turn approval run** (pattern 2, batched). It is the only place in the product where approvals are queued one after another, and every one still gets its full text and its own decision.
- Answering by voice is permitted and accepted loosely: `yes`, `go on`, `take me through them`, `not now`, `later`. Anything unrecognised gets `Say it again, or tap.` once, then the buttons carry it.
- **`Later` means later today, not never.** It reappears in the Waiting queue, silently. It does not re-notify. `voice/voice-and-tone.md`: Werks never nags.

### What the Brief never does

Ask a question with no draft behind it. Read out a list of more than three items. Congratulate anyone. Mention how many things Werks did. Play a sound before speaking.

---

## 2. Approval, as a conversation

The highest-stakes flow in the product, done hands-free. Every guarantee in `patterns/approval-and-trust.md` survives it.

```
  ●  One of three. Reply for Sarah Whitfield, 14 Elm Road.
  │
  │  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐
  │  │ Hi Sarah, this is Whitfield Heating. Steve   │  ← draft, in full, on screen
  │  │ can come out tomorrow between 8 and 10.      │     before a word is spoken
  │  │ Does that work?                              │
  │  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘
  │
  │  Send it, edit it, or leave it.
  │
  │  [        Send it        ]
  │  [ Edit first ] [ Don't send ]
```

### The sequence

| Step | Werks | The owner |
|---|---|---|
| 1 | Names the recipient and the context, aloud and on screen | — |
| 2 | Reads the draft in full, read-along highlight on screen | May interrupt at any point |
| 3 | Offers exactly three: send it, edit it, leave it | Says one, or taps one |
| 4 | **Reads back the decision before acting**: `Sending to Sarah Whitfield, 07700 900123.` | 3 seconds to say `stop` |
| 5 | Sends. The draft bubble fills. `Sent 09:26.` | — |

### The rules that do not bend

1. **Step 4 is not optional and is not skippable.** A spoken approval gets a spoken read-back with the recipient's number in it, and a 3-second window. This is the voice equivalent of the confirm sheet, and it exists because "send it" is two of the most common words in English and a false positive puts a message under someone's Gas Safe registration.
2. **The full draft is on screen before speech begins.** Not revealed as it is read. The owner can read ahead, and reading ahead is exactly what the retention signal in `01_vision` measures.
3. **Editing by voice is as cheap as approving by voice.** `Edit first` accepts a spoken correction — `change Thursday to Friday` — which produces a **new draft, shown in full, read back in full**. It never patches the text silently.
4. **No batch approval by voice. Ever.** `Send all 4` requires the scroll-past-every-draft sheet in `components/cards.md`. There is no spoken equivalent, because there is no way to prove someone heard four messages the way the sheet proves they scrolled past four.
5. **Anything Werks flagged as uncertain leaves the spoken run** and goes back to the Waiting queue to be looked at. Werks says so: `One of them needs your eyes. It's in Waiting.`
6. **A red line never enters a run.** It interrupts it. See pattern 4.
7. **The Dot breathes only while Werks is speaking.** Between drafts it is still.

---

## 3. Proactive nudges

Werks starting the conversation. This is the pattern with the most potential to make the product noisy, so it is the one with the most constraints.

```
  ●  Sarah hasn't replied since Thursday.
  │
  │  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
  │  │ Hi Sarah, just checking you got the      │  ← the draft comes WITH the nudge
  │  │ quote for the boiler swap. Any           │
  │  │ questions, reply here.                   │
  │  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
  │
  │  [      Send it      ]
  │  [ Edit first ] [ Leave it ] [ Never for Sarah ]
```

### The five conditions a nudge must meet

A nudge may only exist if **all five** are true. If one fails, it is not a nudge, it is noise.

1. **It carries a draft.** `foundations/00-brand.md` forbids "empty reminders with no draft attached". A nudge that says "you should chase Sarah" and stops has moved work onto the owner, which is the opposite of the product.
2. **Something changed, or time passed a threshold the owner would recognise.** Three days of silence on a quote. 45 days on an invoice. Not "we noticed you haven't opened the app".
3. **It names its subject in the first four words.** `Sarah hasn't replied since Thursday.` Not `You have a follow-up opportunity.`
4. **It is answerable in one decision.** Send, edit, leave, never.
5. **It has not been asked before.** Once. `voice/voice-and-tone.md` rule 7: an item that has been waiting is stated once, factually, with its age. Werks does not repeat itself louder.

### Budget and placement

- **One nudge visible at a time**, at the top of Today. Others queue behind it and appear as the first is resolved.
- **Nudges live inside the product, not on the lock screen**, except within the three-a-day notification budget in `voice/voice-and-tone.md`, and then only batched.
- **Never spoken unprompted.** A nudge does not make the phone talk. It is read aloud only inside a hands-free session the owner opened.
- **Never at all between 20:00 and 07:00**, red lines excepted. `01_vision`'s promise is hours returned, and a product that returns hours does not spend them at nine in the evening.

### The four answers

| Answer | What happens |
|---|---|
| `Send it` | Normal approval path, including the read-back if spoken |
| `Edit first` | Editable in place |
| `Leave it` | Gone from Today. Not re-raised for this item for 7 days. Silent. |
| `Never for {customer}` | Werks stops nudging on this thread permanently, and says so once |

`Never for {customer}` is deliberately prominent rather than hidden in settings. A nudge the owner cannot switch off is a nag, and the ability to end it is what makes the other three answers honest.

---

## 4. Escalation

A gas smell, carbon monoxide, a person in distress. `01_vision` D6b and D7. Categories live in `21_evaluation.md`; this is how the conversational layer presents them.

**Calm but urgent means: the loudest thing on the screen is the phone number, and nothing moves.**

```
┌─────────────────────────────────────┐
│ ▌                                   │  ← critical left border, full height
│ ▌  Stopped.                         │  ← 30px display
│ ▌                                   │
│ ▌  Rachel Oyelaran mentioned a      │  ← 17px, plain
│ ▌  smell of gas at 08:02.           │
│ ▌                                   │
│ ▌  Werks sent her the emergency     │
│ ▌  number and nothing else. Nothing │
│ ▌  further will go out on this      │
│ ▌  thread.                          │
│ ▌                                   │
│ ▌  ┌─────────────────────────────┐  │
│ ▌  │   Call Rachel                │  │  ← 64px, primary, the phone number
│ ▌  │   07700 900123               │  │     is IN the button
│ ▌  └─────────────────────────────┘  │
│ ▌                                   │
│ ▌  See what was sent                │  ← quiet
└─────────────────────────────────────┘
```

### Rules

1. **Zero motion.** No pulse, no flash, no shake, no breathing Dot, no animated border. The most urgent state in the product is the stillest one. Movement here would read as an alarm, and an alarm is something you turn off; this is something you act on.
2. **No colour beyond the critical border and the chip.** No red screen. A field of red is a system failure; this is the system working correctly.
3. **The phone number is inside the primary action**, not next to it. One 64px target, in the thumb zone, with the number legible on it so it can be dialled from another phone if this one is dead.
4. **Not dismissible until the call is placed or the owner explicitly overrides**, and the override is a quiet action that says what it does: `I've dealt with this another way`.
5. **Spoken once, if speech is active, and never as the only channel.** Speaking, notification, and screen. All three.
6. **It interrupts everything**, including an approval run and the owner mid-sentence. It is the only thing permitted to.
7. **The thread keeps a permanent inline marker** at the point Werks stopped, with the reason and the time. It is never collapsed into a quiet block and never removed.
8. **Never framed as an error.** No "something went wrong", no apology. `patterns/approval-and-trust.md`: the stop is the product working.

---

## 5. Multi-turn conversations

Booking a job takes three or four exchanges, and by the third nobody remembers what has been agreed. So the conversation shows its own state.

### The working card

A card pinned at the top of the conversation, updating as facts land. Not a form: a receipt of what Werks currently believes.

```
┌─────────────────────────────────────┐
│  BOOKING                            │
│  Sarah Whitfield · 14 Elm Road      │  ← known
│  No heat · Worcester 8000           │  ← known
│  Thursday 8 to 10                   │  ← just landed
│  ─────                              │
│  Still needed: nothing              │
└─────────────────────────────────────┘
```

- **Known facts in `text-primary`. Missing ones named in `text-secondary`** as `Still needed: a time`. Never a blank field, never a placeholder, never a progress bar. Werks does not report its own progress; it reports what it knows.
- A fact landing does **not** animate. It appears, at `--w-duration-bubble` (200ms) fade only. Money and times never count up or slide in.
- **The card is tappable and every fact on it is correctable.** Wrong property, wrong appliance, wrong day: one tap, fixed, without going back through the conversation.
- The card carries the source where it is not obvious: `Worcester 8000, from the Feb visit.` This is the assumption-naming rule from `patterns/approval-and-trust.md` in its natural home.

### Turn budget

| Turn | What it is for |
|---|---|
| 1 | The customer's problem, captured. Werks asks for at most one missing thing. |
| 2 | The slot. One question, up to three options, per the hybrid rules in `02-voice-states.md`. |
| 3 | Anything genuinely unresolved. Usually nothing. |
| 4 | The draft confirmation, in full, behind approval. |

**Four turns is the ceiling.** If Werks cannot get there in four, it stops asking and hands over: `Werks can't get this booked. Two properties are on this number and she hasn't said which.` plus `Call Sarah`. A conversation that keeps asking questions is a form with a worse interface, and `01_vision` D1 is explicit that these people are not at a desk.

### Rules

- **One question per turn.** Two questions get one answer and it is usually to the wrong one. Straight from `voice/voice-and-tone.md`.
- **Never re-ask something already on the working card.** If it is on the card, it is known; if it is wrong, the owner taps it.
- **Any turn can be abandoned with nothing lost.** The working card persists. Coming back an hour later resumes with everything captured, and says so: `Picking up the booking for Sarah. Thursday 8 to 10 was agreed.`
- **The end of a multi-turn conversation is always an approval**, never an automatic send. Turn 4 exists for that reason.
- **Interruptions do not end it.** A red line on a different thread interrupts, is dealt with, and the working card is still there.

---

## 6. Handoff between voice and touch

Not a pattern the owner ever chooses. It is a property the product has to have, because the environment changes mid-sentence: they walk into a plant room, a customer appears, it starts raining, someone else's phone rings.

### The invariant

> **The transcript is the state.** Whatever is on screen is the thing being worked on, and changing input method never resets it, never restarts it, and never asks about it.

### The four handoffs

| | Trigger | Behaviour |
|---|---|---|
| **Voice → touch** | Any tap | Speech stops in 120ms. Everything stays. The tapped control does exactly what its label says. No confirmation dialog about switching. |
| **Touch → voice** | Holding the mic | The utterance is applied to the current context, not to a fresh one. `Make it Friday` on an open draft edits that draft. |
| **Voice → keyboard** | `Type it`, always available | Transcript carried into the field, cursor at the end, keyboard open. Nothing re-dictated. |
| **Keyboard → voice** | Holding the mic with a field open | Dictated words append at the cursor. Typed words are never replaced. |

### And the rules around it

- **No mode.** The owner is never in "voice mode". The mic is on every screen and touch works on every screen, always, at the same time.
- **No confirmation of a switch.** Asking "do you want to switch to typing?" is a modal in the rain.
- **A half-finished voice input survives an interruption**: a phone call, the app backgrounding, the screen locking. It is there when they come back, marked `Saved on this phone`.
- **Werks never announces the handoff.** It just works. A product that narrates its own state changes is describing effort, and `01_vision` D2 and D3 say the unit of value is outcomes.

---

## The test for any conversational flow

Same shape as the approval test in `patterns/approval-and-trust.md`:

> **If this conversation went wrong, could the owner point at the screen afterwards and see exactly what was said, by whom, in what order, and what they agreed to?**

If any part of the flow existed only as audio, only as an inference, or only in a summary, the answer is no and the flow is not finished.
