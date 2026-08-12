# Expressive states — the Dot as a living thing

`foundations/00-brand.md` calls the Dot the single most important element in the system. v1.0 used it as a static presence marker. v1.1 makes it the product's whole answer to "is Werks doing anything right now?"

One shape. One colour. Five states. Nothing else in the product animates to signal presence.

---

## The five states

```
   OFF          AMBIENT        THINKING       WORKING        LISTENING
                                                (background)

   (nothing)       ●              ◉               ○            ● ▍▍▍
                 55%          breathing        ring only      12px + bars
                 8px          8 → 12px          12px           real amplitude
```

| State | Meaning | Form | Motion |
|---|---|---|---|
| **Off** | Werks is not running. Night, or switched off. | No dot at all | None |
| **Ambient** | Werks is on. Nothing is happening. | 8px, `--w-ambient-opacity` (55%) | None |
| **Thinking** | Werks is working on something, now, and you are waiting for it | 12px, full opacity | Breathes, `--w-duration-breath` |
| **Working** | Werks is on something in the background. You are not waiting. | 12px ring, 2px stroke, hollow | None |
| **Listening** | The microphone is recording | 12px solid + amplitude bars | Real levels only |

**Absence is a state.** No dot means Werks is off. That is the most important line in this document: it is what makes the presence of a dot mean something, and it is why the ambient dot is at 55% rather than full — so that "on" and "working" are distinguishable at a glance without either of them shouting.

---

## 1. Werks is thinking

The calm alternative to a spinner. Used whenever the owner has asked for something and is waiting: transcribing, drafting, searching the record, looking at the diary.

```css
@keyframes w-breathe {
  0%, 100% { transform: scale(var(--w-breath-scale-min)); opacity: var(--w-breath-opacity-min); }
  50%      { transform: scale(var(--w-breath-scale-max)); opacity: 1; }
}
.w-dot--thinking {
  width: var(--w-dot-thinking); height: var(--w-dot-thinking);
  animation: w-breathe var(--w-duration-breath) var(--w-ease-breath) infinite;
}
```

| Property | Value | Why |
|---|---|---|
| Period | `--w-duration-breath`, 3200ms | A resting adult breathes about every 4 seconds. Anything under 2s reads as a heartbeat under stress; anything over 5s reads as broken. |
| Scale | 0.86 → 1.0 → 0.86 | Small. The change should be noticed peripherally, not watched. |
| Opacity | 0.55 → 1.0 → 0.55 | Carries the state when scale is imperceptible at 8px |
| Easing | `--w-ease-breath`, symmetrical sine | No attack. A breath has no accent; a pulse does. |
| Loops | While the work runs. Typically 1 to 6 seconds. | Bounded by a real operation |
| Stops | Instantly, at the frame the work completes | No fade-out, no easing to a halt |

**Never rotates. Never has a ring around it. Never has a second dot.** If the wait exceeds 2 seconds, words appear beside it, per `components/status-and-feedback.md`: `Working it out`, then `Signal's slow. Still going.` with a way out. The Dot never has to carry a long wait on its own.

### Reduced motion

Solid 12px at full opacity, plus the word. Under reduced motion the words are not optional at any duration: they arrive immediately, because the only other proof that something is happening has been switched off.

---

## 2. Werks is working in the background

Different from thinking, and the difference matters: **nobody is waiting.** A chase went out, a reply is expected, an invoice is tracking. This runs for hours or days.

```
      ○  Chasing Dixon. Sent Monday, no reply yet.
```

- **A ring, not a fill.** 12px, 2px Volt stroke, hollow centre. Out on an errand rather than in the room.
- **It does not move.** A thing that runs for three days must not animate for three days. This is the state a badge would be, and this is exactly the case `foundations/05-motion.md` was protecting.
- It always sits beside a sentence naming what is being tracked and when it started. A ring on its own is a mystery.
- Where it appears: the Werks rail in a thread, a list row, the Today screen. Never in the tab bar: the tab bar Dot means *needs you*, and this does not need you.

### The tracking line

```
  ○  Chasing Dixon                          Sent Mon
  ○  Waiting on Sarah                       Sent Thu
  ○  Quote to Mrs Iqbal                     Sent 4 Aug
```

Facts, ages, no adjectives, no progress bars, no percentages. Tapping opens the thread. `01_vision` D2 and D3: outcomes, not effort. The list exists so the owner can see what is in flight, not so Werks can show how busy it is, and if it is ever longer than five rows it is showing too much.

---

## 3. Werks has news

Something happened while the owner was away. The nudge surface.

```
┌─────────────────────────────────────┐
│                                     │
│  ●  Since you were out              │  ← Dot, full, still
│                                     │
│     Sarah replied. She wants        │  ← 20px
│     Thursday instead.               │
│                                     │
│     Dixon paid. £480.               │
│                                     │
│     ─────────────────────────       │
│     Werks handled 4 others          │  ← quiet block, collapsed
│                                     │
│  ┌───────────────────────────────┐  │
│  │  See the reply                │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Rules

1. **Arrival is a single animation, once.** 200ms fade with a 4px rise, `--w-ease-arrive`, staggered `--w-stagger-bubble` (60ms) between items. Then it is a static piece of the screen forever. Nothing here loops.
2. **The Dot does not breathe.** Nothing is in progress. Breathing to attract attention is the exact behaviour banned in `00-principles.md` amendment 2.
3. **Two items maximum at full size.** Everything else collapses into the quiet block. Three headlines is a newsfeed.
4. **Money first if there is money**, same rule as the Brief.
5. **It appears once and does not come back.** Returning to Today an hour later shows Today, not a re-run of the news. `voice/voice-and-tone.md`: Werks does not repeat itself.
6. **No count badge, anywhere, ever.** `4 new` is a number about the product's activity. `Sarah replied. She wants Thursday instead.` is the thing that happened.
7. **Only spoken if the owner opened it by voice.**

---

## 4. Werks is off

Night, or manually switched off. The state most products do not bother to design, and the one this brand should be best at: **`01_vision` promises hours returned, and an app that is never off is not returning any.**

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│           Nothing waiting.          │  ← 20px display
│                                     │
│     Werks is off until 07:00.       │  ← 17px secondary
│     Anything urgent still gets      │
│     through.                        │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

- **No Dot.** The only screen in the product with no Dot on it, and that absence is the design.
- Dark theme, whether or not the system is in dark. This is the one surface that picks its own theme, because it is a statement about the hour rather than about ambient light.
- **No count of what is waiting.** `Four things are waiting` at 22:40 is precisely the thought that keeps someone up. It will be there in the morning and the Brief will say so.
- The mic still works. Holding it wakes Werks for that note and it goes back to sleep after. The owner having an idea at eleven at night is not an emergency, but it should still get written down.
- **Red lines still break through**, always, with a phone number. That never sleeps.
- Waking is one tap: `Wake Werks`. No settings screen, no schedule editor buried three levels down. Quiet hours are set once during onboarding and are one tap from here.

### Why it is a designed state

Every other state in this document is Werks being present. This one is Werks being absent, deliberately and visibly, and it is the strongest single proof of the "calm, not noisy" claim in `foundations/00-brand.md`. A business partner who is still emailing at midnight is not calm no matter how quietly they do it.

---

## Where each state may appear

| Surface | Off | Ambient | Thinking | Working | Listening |
|---|:--:|:--:|:--:|:--:|:--:|
| Mic dock | – | ● | ● | – | ● |
| Werks rail in a thread | – | – | ● | ● | – |
| Tab bar (needs you) | – | ● | – | – | – |
| List row | – | ● | – | ● | – |
| Today / news surface | – | ● | ● | ● | – |
| Wordmark full stop | always | always | always | always | always |

The wordmark's full stop is the wordmark's, always, in every state. It is not a status indicator and it never changes.

---

## The 2% rule still binds

`foundations/01-colour.md`: Volt covers under 2% of any screen, and **if a screen has two Volt elements, one of them is wrong.**

This layer makes that easier to break, so it is worth being explicit. One Dot per screen. A breathing Dot on the rail and an ambient Dot on the dock at the same time is a bug: while Werks is thinking on the rail, the dock's Dot is suppressed. The mic bars during recording are the one permitted exception, and they are the same signal in the same place.

---

## Do / Don't

| Do | Don't |
|---|---|
| Breathe only while working | Breathe to attract attention |
| Stop the instant the work does | Fade the animation out slowly |
| Ring for background work | Animate something that runs for days |
| Absence of the Dot means off | A dot on every screen all day |
| One Dot per screen | A dot on the dock and one on the rail |
| Words beside the Dot after 2s | A dot carrying a ten-second wait alone |
| `Sarah replied` | `4 new` |
| Werks visibly off at night | A 24-hour product with a quiet mode |
