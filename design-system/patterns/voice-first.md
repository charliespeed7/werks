# Voice-first patterns

## What voice-first means here

`MASTER_CONTEXT` says "voice-first where valuable", and the qualifier is the whole design. Voice-first in Werks means:

> **Speaking is always available as the fastest input, and never required as the only one.**

It does not mean a voice assistant. There is no wake word, no conversation with a personality, and no screen you go to in order to talk. The mic is on every screen because a thought about a job arrives at an inconvenient moment, and it is held rather than toggled because a phone in a pocket must never be recording.

## Two kinds of voice, and only one of them is in Horizon 1

| | **Owner-facing (this document)** | **Customer-facing** |
|---|---|---|
| Who speaks | The owner, to Werks | Werks, to a customer, on a live call |
| Risk | Low. Output is a draft the owner reads. | High. Words leave the system as generated. |
| Governed by | `01_vision` D6a: approval before anything leaves | `01_vision` D6b: narrow envelope, red lines, transcript, reachability |
| Horizon | **1** (see the assumption below) | **2**, gated on `21_evaluation.md` thresholds, never on a date |

`01_vision` is unambiguous that there is no live voice in Horizon 1 and that inbound capture is missed-call text-back. Nothing in this pattern puts a synthesised voice in front of a customer, and no component in this system should be built as if it might.

> **Assumption, stated:** that owner-facing dictation is in scope for Horizon 1. `01_vision` defers only the customer-facing half of voice, and `MASTER_CONTEXT` keeps "voice-first where valuable" as a principle. If the founder decides Horizon 1 has no voice at all, remove the mic dock and this pattern moves to Horizon 2. Nothing else in the design system changes, which is the point of writing it down.

## The four things voice is actually for

1. **Job notes at the van door.** "Replaced the diverter at 14 Elm Road, pump's on the way out, told her about £340." Nine seconds, and the memory record that `01_vision` D5 calls the moat gets written. Typed, that note does not get written at all.
2. **Replying while walking.** "Text Sarah back, Thursday morning works, eight till ten."
3. **Asking the record a question.** "What did I do at 14 Elm Road last year?"
4. **Capturing something before it is forgotten.** "Order a pump for the Elm Road job."

Everything else should be a tap.

## Rules

**1. Voice produces a draft. It never produces an action.**
The chain is always: speech → transcript → draft → approval → action. No shortcuts, no "just send it" mode, no voice command that skips the review. Speech recognition mangles postcodes, surnames and model numbers, and under `01_vision` D6a the owner is responsible for every word that goes out under their trading name.

**2. The transcript is always shown, and always editable.**
Not a read-only bubble. A field, at reading size, with a cursor. Fixing one character must never require re-recording thirty seconds of speech.

**3. Hold to talk, release to finish.**
Not tap-to-toggle. A held control cannot be left recording in a pocket, in a customer's kitchen, or on a job. Slide up to cancel while holding. There is a tap-to-start alternative for assistive technology, and it is used automatically when one is detected.

**4. No wake word.**
Saying "Hey Werks" in a customer's kitchen is embarrassing, false triggers in a noisy plant room are worse, and always-on listening is a privacy claim this product should not have to defend.

**5. The keyboard is always one tap away.**
From idle, from an error, from the review step. Voice is a faster path, not the only path. Somebody in a loud plant room must never be stuck.

**6. Show real amplitude.**
The listening bars are driven by microphone levels, not by a keyframe loop. A canned animation looks identical when the mic is muted, which is a lie the interface should not be able to tell.

**7. Offline is normal.**
Audio queues locally with `Saved on this phone`. It transcribes when signal returns. Cellars and lofts have no signal and the product assumes it.

**8. Never speak back.**
Werks does not have a voice. It has no text-to-speech, no spoken confirmations, and no read-aloud. Output is text on a screen, because text can be checked, quoted in an audit trail, and read in a noisy room where audio cannot.

## Latency

The owner is standing up, holding a phone, waiting.

| Elapsed | What is shown |
|---|---|
| 0–400ms | Nothing new. The bar keeps its shape. |
| 400ms–2s | `Working it out` |
| 2–5s | `Working it out` plus a cancel action |
| 5s+ | `Signal's slow. Still going.` plus cancel, plus an offer to keep the audio and carry on |
| Failure | Never lose the audio. It queues. |

Audio is never discarded because a request failed. The owner said the words once; asking them to say them again in the rain is the fastest way to stop them using it.

## Noise

The room contains a running boiler, a radio, traffic, or a vacuum.

- Push-to-talk's hard start and end beats any automatic endpointing in noise.
- No voice activity detection to auto-stop: in a noisy room it either truncates mid-sentence or never fires.
- If levels are flat for two seconds, say so immediately rather than at the end: `Can't hear you.`
- Expect and tolerate British regional accents. `01_vision` flags accent and noise handling as a physics problem rather than a model problem, and that is as true for owner dictation as for customer calls. The mitigation here is the same one that makes owner-facing voice low risk in the first place: the owner reads the transcript before anything happens.

## Privacy

- Recording only while the button is held. Say this in the permission prompt: `Nothing is recorded unless you're holding the button.`
- No background listening, ever.
- Audio is deleted after transcription unless the owner keeps it. Where it is kept, say where and for how long.
- Never record a customer's voice through this component. It is for the owner only. Customer call recording is a Horizon 2 question with its own legal requirements, and it does not enter through this door.

## Accessibility

Voice is an accessibility feature for some people and an accessibility barrier for others. Both are true, so:

- Every voice path has a typed equivalent, reachable in one tap.
- Hold-to-talk has a tap-to-start alternative, automatic under assistive technology.
- State changes are announced through a polite live region.
- The timer carries the live state when animation is disabled.
- Transcripts are text, so they work with screen readers, translation and OS text scaling for free. This is another reason output is never audio.
