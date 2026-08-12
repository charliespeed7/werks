# Voice interaction states

Expands `components/voice-input.md` from six states to the full loop, and adds the states that only exist once Werks can speak back.

`components/voice-input.md` remains correct and is not replaced. Everything it says about hold-to-talk, real amplitude, the mandatory review step and the keyboard being one tap away is unchanged. This document adds what happens around it.

---

## The state machine

```
                     ┌──────────────────────────────────────────┐
                     │                                          │
                     ▼                                          │
   OFF ──wake──▶ AMBIENT ──hold──▶ ARMED ──80ms──▶ LISTENING ────┤
    ▲               ▲                 │                │        │
    │               │           release <200ms         │ release
    │               │            (cancelled)           ▼        │
    │               │                          TRANSCRIBING     │
    │               │                                 │         │
    │               │                                 ▼         │
    │               │                            TRANSCRIPT ────┤ (live, word by word)
    │               │                                 │         │
    │               │                                 ▼         │
    │               ├──────────────────────────── CONFIRM/EDIT  │
    │               │                                 │         │
    │               │                                 ▼         │
    │               └───────────────────────────── COMMITTED    │
    │                                                           │
    │                        ERROR ◀────────────────────────────┘
    │                          │ retry / type it
    └── sleep ◀── 22:00 or manual
```

Nine states. Six are from v1.0. **Ambient**, **armed** and **speaking** are new, and speaking can occur from any state.

| State | The owner sees | The owner hears | The Dot |
|---|---|---|---|
| Off | Nothing. No dock. | Nothing | Absent |
| Ambient | Mic dock, no Dot | Nothing | Ambient, 55% |
| Armed | Dock grown to 72px, no bar yet | Nothing | Ambient |
| Listening | Voice bar, real amplitude, timer | Nothing | Listening, 12px |
| Transcribing | Bar holds shape, `Working it out` | Nothing | Breathing |
| Transcript | Words arriving live | Nothing | Breathing |
| Confirm / edit | Editable field, two actions | Read back, if hands-free | Speaking, or still |
| Committed | The draft, in the thread | Nothing | Still |
| Error | Plain sentence, keyboard offered | Spoken once, if hands-free | Still |

---

## 1. Ambient

**Werks is on, and is not recording anything.**

This is the resting state of the app and it must be honest about it: nothing is being captured, no wake word is armed, no audio is leaving the phone. `patterns/voice-first.md` rule 4 has not moved.

```
        ┌──────────┐
        │    ●     │   ← the Dot, 8px, 55% opacity, on the dock
        │   mic    │
        └──────────┘
        Werks is on
```

- The mic dock gains a **small Dot at `--w-ambient-opacity` (55%)**, top-right of the dock, 8px.
- It does not breathe by default. It breathes only when Werks is actually working on something, per `00-principles.md` amendment 2.
- Under an open hands-free session, the ambient Dot moves to **full opacity** and the dock carries the word `Hands-free` beneath it. A session that is listening for a spoken reply is a materially different state from one that is not, and the difference must be visible without interpretation.
- Long-press the dock at ambient: `Werks is on. Nothing is being recorded.` Say it in words, because a privacy claim in a graphic is not a claim.

> **v1.0 said the idle dock carries no Dot.** That was correct when there was no way to tell "app open" from "Werks active". With a hands-free session possible, the owner needs to know at a glance which one they are in, and absence-of-dot now means Werks is **off** rather than merely idle. Off is a real state (see `04-alive-states.md`), and it is now the one with no Dot.

---

## 2. Armed

The 80ms between the finger landing and recording starting. It exists because a mis-tap should not produce a 0.3 second recording and a failed transcription.

- Dock grows 64px → 72px over `--w-duration-instant` (80ms).
- Light haptic at the moment recording actually starts, not on touch down. The haptic is the contract: **you felt it, so it is recording.**
- Release before 200ms cancels silently. No error, no toast, no "too short". A mis-tap should cost nothing, including an explanation.

## 3. Listening

Unchanged from `components/voice-input.md`. Real amplitude, three Volt bars, running timer, `Release to finish. Slide up to cancel.`

Two additions:

- **The flat-level warning.** If amplitude stays below threshold for 2 seconds, the copy under the bar changes to `Can't hear you.` while still recording. Telling someone at the end of thirty seconds is a hostile interface; telling them at second two lets them move.
- **Barge-in from listening.** If Werks was speaking when the owner pressed the mic, speech stops inside `--w-duration-bargein` (120ms). The owner pressing the button always wins.

## 4. Transcribing

The bar holds its shape. Bars stop. `Working it out`. Cancel available throughout. Latency copy is in `patterns/voice-first.md` and is unchanged.

The Dot **breathes** here. It is doing something, it is bounded, and it stops when the transcript appears. This replaces the spinner in the voice path: `foundations/05-motion.md` has one spinner in the system and it is not this.

## 5. Transcript — the live reveal

The transcript appears **word by word as the words are recognised**, in the field, at reading size.

```
Frame 0ms     │ Boiler
Frame 130ms   │ Boiler at
Frame 260ms   │ Boiler at 14
Frame 390ms   │ Boiler at 14 Elm Road,
```

### Spec

| Property | Value |
|---|---|
| Per-word fade in | `--w-duration-word` (90ms), opacity 0 → 1 |
| Per-word rise | 2px, `translateY`, same 90ms |
| Stagger between words | `--w-stagger-word` (40ms) |
| Easing | `--w-ease-arrive` |
| Caret | A 2px Volt caret at the end of the text while words are still arriving. It is not blinking: it moves. |
| Interim words | Words the recogniser has not committed render at `--w-text-secondary` and settle to `--w-text-primary` when finalised, over 90ms |
| Reduced motion | Words appear at full opacity with no rise, no stagger. The caret becomes a static 2px block. |

**Why word by word here and nowhere else.** This is the owner's own speech coming back to them, and the reveal is doing a job: it proves the microphone heard *those* words, in real time, so a misheard postcode is visible at second three instead of second twenty. Everything else in the product — drafts especially — appears complete, because approval requires reading a finished sentence, and a sentence that is still forming invites approving before it exists.

**Never reflow the text.** New words append. If the recogniser revises an earlier word, that word crossfades in place over 90ms; the paragraph never re-wraps under the reader's eyes. Text jumping while someone is reading it is the fastest way to make a transcript feel unreliable.

## 6. Confirm and edit

Unchanged in substance from `components/voice-input.md`: always, every time, editable field, nothing is committed from voice. What is added is **the uncertain span**.

### Uncertain spans

Speech recognition mangles postcodes, surnames, boiler model numbers and serials. Rather than presenting a confident wrong answer, low-confidence spans are marked:

```
   Boiler at 14 Elm Road, replaced the diverter valve.
   Postcode PE7 3RB.
                ‾‾‾‾‾‾‾  ← 1px dashed underline, tappable
```

- **Dashed 1px underline**, `--w-bubble-draft-border`, on the span only. Never a colour, never a highlight fill: a yellow highlight over a customer's postcode looks like an error the owner caused.
- Tapping it opens a 48px-row chooser with the alternates the recogniser returned, plus `Type it`:

```
   ┌─────────────────────────────┐
   │  PE7 3RB                  ● │
   │  PE7 3RD                    │
   │  PE7 3AB                    │
   │  Type it                    │
   └─────────────────────────────┘
```
- **Postcodes, serial numbers, phone numbers and money are always marked as uncertain the first time they appear**, regardless of the recogniser's own confidence. `patterns/voice-first.md` already requires these to be confirmed visually; this is that rule with a target on it.
- Werks reads a serial back **in groups**: `7731 600 123`, not seven-seven-three-one-six-hundred-thousand-one-hundred-and-twenty-three.
- No confidence percentage anywhere near this. `patterns/approval-and-trust.md` rule 4: uncertainty is stated, never scored.

## 7. Speaking

Werks reading something to the owner. Permitted under the six conditions in `00-principles.md`.

```
  ●  Reply ready for Sarah Whitfield.
  │
  │  Hi Sarah, this is Whitfield Heating. Steve can come out
  │  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  │  tomorrow 8 to 10. Does that work?
  │
  │  [ Stop ]                                   [ Mute ]
```

- **Full text on screen before the first word is spoken.** Not revealed as it is read: revealed all at once, then read.
- **The word being spoken is `--w-text-primary`; text not yet reached is `--w-text-secondary`.** A single progressive weight change, no highlight box, no karaoke fill, no bouncing. The transition per word is 90ms opacity only.
- The Dot at the top of the rail is at `--w-dot-speaking` (12px) and **breathes** for the duration of the speech.
- `Stop` is a 48px target, always present, always in the same position.
- `Mute` is always one tap away and is remembered. Muting mid-sentence stops the audio immediately and leaves the text exactly where it is.
- **Under reduced motion**, the read-along colour change is retained (it is not motion, it is state) but the Dot does not breathe: it is solid at 12px.

---

## Interruption

Both directions. This is the state most conversational products get wrong, and getting it wrong here means talking over someone who is holding a customer's boiler apart.

### The owner interrupts Werks

Triggers, all equal: pressing the mic, tapping `Stop`, tapping anything at all, the phone being raised to the ear, an incoming call.

| Rule | Value |
|---|---|
| Speech stops within | `--w-duration-bargein`, **120ms**, hard ceiling |
| Audio fade | 60ms linear to silence, so it does not click |
| Text on screen | Stays exactly as it was. Nothing is removed because it was not heard. |
| Resume | **Never automatic.** A `Read the rest` action appears where the reading stopped, and stays until dismissed. |
| Announcement | None. Werks does not say "sorry, go ahead". It stops. |

Werks never re-reads from the beginning. The owner interrupted because they had heard enough.

### Werks interrupts the owner

Only ever for a red line, and only when the owner is in a hands-free session. Nothing else in the product is permitted to interrupt a person who is speaking.

- Recording continues. The audio is kept and transcribed. Nothing the owner said is discarded because Werks needed to speak.
- The interruption is one sentence, and it names the reason first: `Stopped. Rachel Oyelaran mentioned a smell of gas.`
- Then the screen holds it, per the escalation pattern in `03-conversational-patterns.md`, with a phone number as the primary action.
- It happens once. Werks does not repeat itself louder.

### Both talking at once

The owner wins, always, without exception. There is no arbitration, no ducking, no "Werks lowers its volume and continues". It stops.

---

## Error recovery

Every voice failure has three parts, in the order from `voice/voice-and-tone.md`: what happened, what it means, what to do now. And in every case **the keyboard is one tap away**.

| Failure | Copy | Recovery | Audio kept? |
|---|---|---|---|
| Too quiet | `Can't hear you. Move somewhere quieter or type it.` | Keyboard, and retry | Yes |
| Background noise | `Too much noise here. Try again or type it.` | Keyboard, and retry | Yes |
| Nothing recognised | `Didn't catch that. Try again or type it.` | Keyboard, and retry | Yes |
| Cut off mid-sentence | `That got cut off. Here's what was caught.` + partial transcript, editable | Continue dictating into the same field | Yes |
| Misheard postcode | Marked as an uncertain span, alternates offered | Tap to fix, or type | n/a |
| Misheard serial | Read back in groups, marked uncertain | Tap to fix, or scan the plate | n/a |
| Wrong customer matched | `Werks matched this to Sarah Whitfield. Two customers are on this number.` | `Change customer` | n/a |
| No permission | `Werks needs the microphone to take notes. Turn it on in Settings.` | Deep link | n/a |
| Offline | `No signal. Saved on this phone, it'll go when you're back.` | Queued | **Yes, always** |
| Speech unavailable | Silent fallback to text. No error, no dialog. | n/a | n/a |

### The rules underneath the table

1. **Audio is never discarded because a request failed.** `patterns/voice-first.md`: the owner said the words once, and asking them to say them again in the rain is the fastest way to stop them using it.
2. **A misheard word is never silently corrected.** Werks does not quietly change `PE7 3RB` to a postcode it likes better. It marks the span.
3. **Repeated failure changes the offer, not the volume.** Second failure in a row: the keyboard opens automatically with the partial transcript in it. Werks does not ask a third time.
4. **No error is a toast.** `components/status-and-feedback.md`: an error the owner needs to act on cannot vanish after four seconds while they are pulling a glove off.
5. **An error is spoken only if speech was already in use**, and never as the only channel.

---

## Voice and visual together

The hybrid state: Werks reads options aloud while the same options sit on screen as targets.

```
  ●  Thursday's free. Two slots.
  │
  │  ┌───────────────────────────────────┐
  │  │  Thursday morning, 8 to 10        │   ← 56px rows, tappable
  │  ├───────────────────────────────────┤
  │  │  Thursday afternoon, 1 to 3       │
  │  ├───────────────────────────────────┤
  │  │  Something else                   │
  │  └───────────────────────────────────┘
  │
  │  Say it or tap it.
```

### Rules

1. **Never speak an option that is not on screen.** If it can be chosen, it can be seen and tapped.
2. **Never more than three spoken options.** Nobody holds four options in their head while carrying a radiator. More than three: Werks reads the first two and says `there are more on screen`.
3. **The spoken words and the on-screen words are identical.** Not paraphrased, not shortened. If the button says `Thursday morning, 8 to 10`, that is exactly what is spoken, so that saying it back is unambiguous.
4. **Options appear on screen before they are spoken**, staggered at `--w-stagger-option` (40ms), so the list is complete and readable while the first one is still being read.
5. **Selection is confirmed in the same channel it came from, and shown in the other.** Said aloud: Werks reads it back before acting. Tapped: no read-back, the selection state is enough.
6. **A spoken answer never commits.** Choosing a slot produces a draft confirmation to the customer, which goes to approval like everything else.
7. **`Something else` is always present.** A closed list of two is a trap when the real answer is Friday.

### Handoff, both directions

| From | To | Behaviour |
|---|---|---|
| Voice → touch | Tapping anything stops speech in 120ms, keeps all state, keeps the transcript | The tapped control does what it says. No "are you sure you want to switch". |
| Touch → voice | Holding the mic mid-flow adds to the current context rather than starting over | `Actually make it Friday` on an open draft edits that draft |
| Voice → keyboard | One tap, transcript carried into the field, cursor at the end | Never re-dictate from scratch |
| Keyboard → voice | Holding the mic appends at the cursor | Never replaces what was typed |

The invariant: **the transcript is the state.** Whatever route the owner takes, the words on screen are the thing being worked on, and switching input never resets them.

---

## Accessibility

Everything in `components/voice-input.md` and `patterns/accessibility.md` still applies. Additions for this layer:

- **Speech is not a screen reader.** If a screen reader is active, Werks's own speech is off by default: two voices talking at once is worse than either. The read-along text is exposed as ordinary text and the screen reader handles it.
- Live transcript uses `aria-live="polite"` on the container with `aria-atomic="false"`, so words are announced as they are added rather than the paragraph being re-read on every word.
- Uncertain spans are real buttons with `aria-label="PE7 3RB, might be wrong. Choose the right one."` A dashed underline is not perceivable to everyone.
- Hold-to-talk keeps its tap-to-start alternative, used automatically under assistive technology.
- `Stop` and `Mute` are 48px targets, always in the same position, never inside a moving element.
- Every state change is announced once, not on every frame of the animation.
- **Deaf and hard-of-hearing owners lose nothing.** That is the whole point of the "speech is a second channel" rule, and it is worth restating here because this audience has a high rate of noise-induced hearing loss.
