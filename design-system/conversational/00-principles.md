# Principles, and what v1.1 amends

> Sources: `MASTER_CONTEXT.md`, `docs/01_vision.md` (approved), design system v1.0.
> Where this document changes a v1.0 rule, it says so, says why, and states the constraints that keep the original intent intact.

## The eight rules of the conversational layer

**1. Werks has no bubble.**
Bubbles are for people. The customer is a person and the business is a person, so both get one. Werks is neither: it is the office manager standing beside you, reading the thread out. It speaks from a 24px rail with a Dot at the top and no container. If Werks ever gets a bubble, it has become a chatbot, and `01_vision` D2 rejects that frame.

**2. Who is speaking is carried by position and surface, never by colour.**
Left and filled means the customer. Right and ink means the business. Rail and no fill means Werks. Mono and no fill means the record. All four are legible in direct sun, at 200% text size, and to someone who cannot distinguish colours, because none of them depends on hue.

**3. A draft occupies the space the sent message will occupy.**
Outlined, right-aligned, in the thread. Approval fills it. Nothing about a draft is smaller, shorter, or more summarised than the thing it becomes.

**4. Speech is a second channel, never the only one.**
Every word Werks says aloud is on screen at the same moment, in full, in the same words. Muting Werks removes nothing but the audio.

**5. The owner can always interrupt, and it always wins.**
Talking, tapping, or the phone leaving their ear stops Werks mid-syllable inside 120ms. There is no "let me finish", no queued speech, no resuming from where it was cut off.

**6. A conversation may collapse, but never summarise irreversibly.**
Werks handling four messages while the owner was under a floor collapses to one line. Expanding it is one tap and shows every word. The audit timeline in `components/status-and-feedback.md` is never collapsed at all: that is the record, and this is a view of it.

**7. Multi-turn conversations show their state.**
By the third exchange, nobody remembers what has been agreed. A booking conversation carries a working card of the facts captured so far, updating as they land, so the owner never has to scroll up to check what Werks thinks it knows.

**8. Every conversational surface ends in the same place.**
Speech, transcript, turn-taking and nudges are all routes to one thing: a draft, in full, behind approval. `01_vision` D6a is not relaxed anywhere in this layer. There is no voice command that sends, no "just send it" mode, and no conversational shortcut around the approval card.

---

## Amendment 1 — Werks may speak to the owner

**v1.0, `patterns/voice-first.md` rule 8:**

> **Never speak back.** Werks does not have a voice. It has no text-to-speech, no spoken confirmations, and no read-aloud. Output is text on a screen, because text can be checked, quoted in an audit trail, and read in a noisy room where audio cannot.

**v1.1 replaces it with:**

> **Werks speaks to the owner only, and never as the only channel.** Owner-facing speech is permitted under the six conditions below. Werks still has no voice to a customer: `01_vision` D6 puts customer-facing voice in Horizon 2, gated on `21_evaluation.md`, and nothing in this layer moves it.

### Why the original rule was right, and what changed

The v1.0 rule was defending three things: that output can be checked before it acts, that the audit trail is textual, and that a noisy room defeats audio. All three survive, because speech here is **additive**. It reads out text that is already on the screen and already in the record. Nothing exists only as audio.

What changed is the recognition of the actual moment: the owner is driving between jobs, or carrying a boiler up a staircase, and there are four approvals waiting. Making them stop, take a glove off and read is not calm. It is the same failure the product exists to fix, moved from paperwork to the phone.

### The six conditions

1. **Owner-facing only.** Werks never speaks to a customer. Unchanged from v1.0 and from `01_vision` D6.
2. **Everything spoken is simultaneously on screen, in full, word for word.** No spoken-only content, ever, including confirmations and errors.
3. **Speech never commits anything.** A spoken "send it" produces the same confirm step as a tap. `01_vision` D6a is untouched.
4. **Werks only speaks when spoken to, or in an explicitly opened hands-free session.** No unprompted audio. A notification arriving does not make the phone talk.
5. **Interruption always wins, inside 120ms.** See rule 5 above.
6. **Muting is one tap, from any surface, and it is remembered.** The product works identically with speech off. Mute is not a settings-page toggle: it is on the speaking surface itself.

### What Werks still never says out loud

- Anything to a customer.
- A red line as the only channel. A gas-smell stop is spoken **and** breaks through as a notification **and** holds the screen with a phone number. Audio alone can be missed in a plant room.
- Money figures without them being on screen. A misheard amount is a wrong invoice.
- Postcodes, serial numbers, or phone numbers as the only representation. Always spoken **and** shown, and confirmed visually before use.
- Anything about its own cleverness. The voice rules in `voice/voice-and-tone.md` apply verbatim to spoken output, including the ban on adjectives about the product's own work.

### Voice character

The synthesised voice is chosen against the same brief as the typeface: **calm, unhurried, regional-neutral British, mid-range, no upward inflection at the end of statements.** Not warm, not chirpy, not a persona. It reads like someone reading a note aloud, because that is exactly what it is doing.

- Speaking rate: 0.95× a neutral default. Slightly slower than conversational, because it is often heard over an engine.
- No filler, no "um", no breathing sounds, no laughter.
- No earcons, no chimes, no start-up sound. The only non-speech audio in the product is nothing.
- The voice has no name and is never referred to in the first person. It says "Werks stopped this one", not "I stopped this one".

---

## Amendment 2 — The Dot may breathe while Werks is working

**v1.0, `foundations/05-motion.md`:**

> **The Dot.** It sits still. A pulsing dot is a notification badge begging for attention, which is the opposite of what this brand is.

**v1.1 replaces it with:**

> **The Dot sits still unless Werks is working on something right now.** While Werks is thinking, the Dot breathes: a 3.2s symmetrical sine on scale and opacity, no attack, no bounce. It stops the moment the work does. The Dot never breathes to attract attention, never breathes at idle, and never breathes because something is waiting.

### Why this is not the thing the original rule banned

The banned behaviour was a dot pulsing **to be noticed** — an unread badge, an attention hook, an animation whose purpose is to make you look. This is the opposite: a dot moving **because work is happening**, which stops when the work stops. It is a status readout, not a solicitation.

The distinction is enforceable, so enforce it:

| Permitted | Forbidden |
|---|---|
| Breathing while a request is in flight | Breathing while something waits for the owner |
| Breathing while Werks is speaking | Breathing on a notification arriving |
| Breathing bounded by a real operation, typically 1 to 6 seconds | Breathing indefinitely, or on an idle screen |
| Stopping the instant the work ends | Fading out slowly to prolong the effect |

The test: **if the animation would still be running with nothing happening, it is a badge and it is banned.**

### And the rest of `05-motion.md` still holds

Money never animates. Icons never animate to convey state. Nothing bounces, springs or overshoots. No confetti. Nothing on scroll. `prefers-reduced-motion` is honoured, and every state in this layer has a static equivalent that carries the same information — set out per component in `05-motion.md`.

---

## What v1.1 does not change

- `01_vision` D6a. Every customer-facing message, quote and invoice still passes an approval card. Voice does not shorten that chain.
- `01_vision` D6b and D7. Red lines behave exactly as `patterns/approval-and-trust.md` specifies. The conversational layer adds a stop marker in the thread; it removes nothing.
- No wake word. Still no wake word. Hands-free sessions are opened deliberately, by holding the mic or by a car connection, and they end.
- The 2% Volt rule. A screen with a breathing Dot has one Dot.
- The three-a-day notification budget in `voice/voice-and-tone.md`. Proactive nudges live inside the product, not on the lock screen, except within that budget.
- The typed path. Everything in this layer can be done with thumbs, and the keyboard is always one tap away.

## Open questions this layer does not resolve

| Question | Where it bites | Owned by |
|---|---|---|
| **Does owner-facing speech ship in Horizon 1?** This layer assumes yes, as v1.0 assumed for dictation. | If not, `02-voice-states.md` speaking states and the spoken Brief move to Horizon 2. Bubbles, threads, quiet blocks and the Dot states are unaffected. | founder |
| **Is a hands-free driving session in scope?** It is the strongest case for speech and the strongest case for regulatory care. | The hands-free session in `03-conversational-patterns.md` is specified but marked. | founder, `04` |
| **Disclosure.** Unchanged from v1.0. | Customer bubbles carry the optional disclosure slot. Werks's rail never carries one, because the owner already knows. | `08`, `10`, `16`, `21` |
