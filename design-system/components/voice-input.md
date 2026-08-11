# Voice input

## Scope, and an important distinction

This component is **owner-facing voice capture**: the owner speaking to Werks, from the van, from a loft, from a driveway. Talking instead of typing.

It is **not** the AI answering a customer's call. `01_vision` D6 and the MVP boundary are explicit: there is no live voice in Horizon 1, and customer-facing voice arrives in Horizon 2 gated on the evaluation thresholds in `21_evaluation.md`. Nothing in this component puts a synthesised voice in front of a customer.

The distinction matters for the design as much as for the roadmap. Owner-facing capture is low risk because the output is a draft the owner sees before anything happens. Every rule below preserves that property.

> **Assumption, stated:** that owner-facing dictation is in scope for Horizon 1. `MASTER_CONTEXT` lists "voice-first where valuable" as a product principle and `01_vision` defers only the customer-facing half. If the founder intends Horizon 1 to have no voice of any kind, this component is Horizon 2 and the mic dock comes out of the navigation. The rest of the system is unaffected.

## Why voice matters here

Typing is the worst part of any trade app. The owner has gloves on, or wet hands, or is holding a torch. A job note dictated in nine seconds at the van door is a job note that gets recorded. The same note requiring two minutes of thumb-typing is a note that gets remembered until it isn't, and `01_vision` D5 makes that record the entire moat.

## The states

Six, and the transitions between them.

```
   IDLE ──hold──▶ LISTENING ──release──▶ WORKING ──▶ REVIEW ──▶ done
     ▲                 │                    │           │
     │                 │ too quiet          │ nothing   │ try again
     └─────────────────┴────────────────────┴───────────┘
                            ERROR
```

### 1. Idle

The mic dock: a 64px Ink circle with a microphone glyph in Paper, static, above the tab bar. Label `Hold to talk` appears on first use and after seven days of not using it, then stops appearing.

The idle dock does **not** carry the Dot. The Dot means *Werks is on it*, and at idle it is not. The Dot appears the moment recording starts, in the listening bar, and disappears when it stops. A Volt dot sitting on every screen all day would be a nagging interface, and Werks is not that.

### 2. Listening

The dock expands upward into a bar. Ink surface, full width, above the tab bar.

```
┌──────────────────────────────────────────────┐
│  ▍▍▍   Listening                    0:07     │  ← Volt bars, Volt Dot, timer
│                                              │
│  Release to finish. Slide up to cancel.      │
└──────────────────────────────────────────────┘
```

- Three Volt bars driven by **real microphone amplitude**, not a canned loop. Real levels prove the mic is hearing this room. A decorative animation looks identical when the mic is muted, which is a lie the interface should not be capable of telling.
- A running timer. This is what proves recording is live when animation is disabled, so it is always shown, not only under reduced motion.
- **Hold to talk, release to send.** Not tap-to-toggle. A held button cannot be left recording by accident in a pocket, on a job, in a customer's kitchen. That matters more here than the small convenience of hands-free.
- **Slide up to cancel** while still holding: the standard gesture, and the escape hatch when someone walks into the room.
- Light haptic on start and on release.

### 3. Working

The bar keeps its shape, bars stop, `Working it out`. A cancel action is available throughout. If it takes longer than 4 seconds, the copy adds `Signal's slow. Still going.` rather than leaving a spinner to speak for itself.

### 4. Review

**Always. Every time. No exceptions.**

```
┌──────────────────────────────────────────────┐
│  Is this right?                              │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │ Boiler at 14 Elm Road, replaced the    │  │  ← editable, 17px
│  │ diverter valve, needs a new pump next  │  │
│  │ visit. Told her about £340.            │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ┌────────────────┐  ┌────────────────────┐  │
│  │   Use this     │  │    Try again       │  │
│  └────────────────┘  └────────────────────┘  │
└──────────────────────────────────────────────┘
```

- The transcript is **editable text in a field**, not a read-only bubble. Speech recognition mangles postcodes, boiler model numbers and surnames, and the owner should be able to fix a character without re-recording thirty seconds of speech.
- **Nothing is ever sent or committed straight from voice.** Voice produces a draft; a draft produces an approval; an approval produces an action. Skipping the middle step for speed would put a transcription error in front of a customer under the owner's trading name, which `01_vision` D6a exists to prevent.
- Where the transcript will trigger an action ("text Sarah back and say Thursday"), the review step shows the **resulting draft**, not the raw transcript, with the transcript underneath in `text-secondary` so the owner can see what was heard.

### 5. Error

| Cause | Copy | Recovery |
|---|---|---|
| Too quiet or too noisy | `Can't hear you. Move somewhere quieter or type it.` | Keyboard offered immediately |
| Nothing recognised | `Didn't catch that. Try again or type it.` | Keyboard offered immediately |
| No permission | `Werks needs the microphone to take notes. Turn it on in Settings.` | Deep link to settings |
| Offline | `No signal. Saved on this phone, it'll go when you're back.` | Audio is queued, never discarded |

**The keyboard is always one tap away from any voice failure.** Voice is a faster path, not the only path. An owner who cannot make voice work in a noisy plant room must never be stuck.

### 6. Offline

Audio is recorded and queued locally. The state is stated plainly: `Saved on this phone`. It transcribes and appears in the approval queue when signal returns. Nothing is lost, and nothing is silently dropped. Plant rooms, cellars and rural driveways have no signal, and the product must assume that as the normal case rather than the exception.

## Noise

The environment is a running boiler, a radio, a vacuum, traffic. Design consequences:

- Push-to-talk gives a hard start and end, which is worth more in noise than any amount of automatic endpointing.
- No wake word. "Hey Werks" in a customer's kitchen is embarrassing, and it fails in noise anyway.
- No voice activity detection to auto-stop. In a noisy room it either cuts the owner off mid-sentence or never stops.
- Show the amplitude honestly. If the levels are flat, the owner can see the mic is not picking them up before they have said thirty seconds of nothing.

## What voice is for

| Good | Bad |
|---|---|
| Job notes at the van door | Long-form quote descriptions |
| "Text Sarah back, Thursday morning works" | Entering a postcode |
| "What did I do at 14 Elm Road last year?" | Editing an existing draft word by word |
| Recording what was deferred for next time | Anything with a number that must be exact |

Numbers, postcodes and model references should be **confirmed visually** in the review step, which they always are, because the review step always happens.

## Code

```html
<button class="w-mic" aria-label="Hold to record a note">
  <svg class="w-icon w-icon--xl" aria-hidden="true"><use href="#i-mic"/></svg>
</button>

<div class="w-voice-bar" role="status" aria-live="polite">
  <div class="w-voice-bar__meter" aria-hidden="true">
    <span class="w-listening-bar"></span>
    <span class="w-listening-bar"></span>
    <span class="w-listening-bar"></span>
  </div>
  <span class="w-voice-bar__state">Listening</span>
  <span class="w-voice-bar__timer w-tabular">0:07</span>
</div>
```

## Accessibility

- The mic has an `aria-label` describing the action, not the icon.
- State changes are announced through a polite live region: "Listening", "Working it out", "Ready to check".
- Hold-to-talk needs a keyboard and switch-control equivalent: a tap-to-start, tap-to-stop mode, available in settings and used automatically when an assistive technology is detected. Hold gestures are inaccessible to a lot of people.
- Under reduced motion, the bars are static at full height and the timer carries the live state.
- Voice is never the only way to do anything.
