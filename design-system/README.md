# Werks Design System

**v1.1** — adds the conversational and voice interaction layer. See `conversational/`.

The design system for Werks: an AI business partner for UK gas and heating engineers running one to three vans.

Built against `MASTER_CONTEXT.md` and `docs/01_vision.md` (approved). Where this system makes a claim the specification has not settled, it is marked as an assumption and says which document owns the answer.

---

## The brief, in one line

> **Trustworthy, calm, simple, proactive. Not noisy. Editorial, confident, understated.**

And the operating conditions that turn those words into decisions:

> A gas engineer, one hand, gloves on, in a driveway in June, on a four-year-old Android, with fifteen seconds and no signal.

---

## The five decisions that generate everything else

**1. Primary actions are black, not coloured.**
A black button is maximally legible in sunlight, reads as print rather than as software, and leaves the entire colour range free to carry meaning. When every button is blue, colour stops being information.

**2. There is one accent colour, and it is the full stop.**
Volt `#C3FF33` is the campaign neon, and in the product it appears only as **The Dot**: the wordmark's full stop reused as the single live indicator. It means *Werks is on it*, it covers under 2% of any screen, and it never appears as text on paper (1.14:1 — invisible).

**3. Waiting for you is neutral, not amber.**
Under `01_vision` D6a everything Werks drafts sits awaiting approval, so waiting is the product's normal state. Colouring it amber would make the default condition look like a problem and destroy amber's ability to flag the invoice that is genuinely 45 days late.

**4. The draft is always shown in full.**
Never truncated, never summarised, never behind "show more". The owner is accepting responsibility for those exact words going out under their trading name and their Gas Safe registration.

**5. Approving and editing cost the same.**
`01_vision` names *approval without editing* as the Horizon 1 retention signal. An interface that makes editing expensive fakes that signal; one that makes approving thoughtless fakes it in the other direction. Both must be one tap.

---

## What v1.1 adds, and what it amends

v1.0 designed the surfaces where a decision gets made. Most of what the owner actually sees is a **conversation**, and the approval card is one frame of it. `conversational/` is the rest: bubbles, threads, the full voice loop, and the Dot as the product's answer to "is Werks doing anything right now?"

Two v1.0 rules are amended, both narrowly, both written up with their constraints in `conversational/00-principles.md`:

| v1.0 said | v1.1 says | Why it is safe |
|---|---|---|
| `voice-first.md` rule 8: **never speak back** | Werks may speak **to the owner**, under six conditions | Everything spoken is simultaneously on screen, in full. Speech is a second channel, never the only one. Customer-facing voice is still Horizon 2. |
| `05-motion.md`: **the Dot sits still** | The Dot breathes **while Werks is working**, and stops the instant the work does | A dot moving because work is happening is a status readout. A dot moving to be noticed is a badge, and that is still banned. |

Nothing else changes. No component is replaced, no token is redefined, no colour is added.

---

## Structure

```
design-system/
├── foundations/
│   ├── 00-brand.md            Positioning, the four words, wordmark, The Dot, what the brand refuses
│   ├── 01-colour.md           Palette, semantic layer, dark theme, sunlight, measured contrast
│   ├── 02-typography.md       Archivo / Inter / Newsreader / JetBrains Mono, scale, money formatting
│   ├── 03-spacing-layout.md   4px scale, screen scaffold, touch targets, thumb zones, text scaling
│   ├── 04-iconography.md      Lucide at 1.75px, the domain set, what has no icon
│   └── 05-motion.md           Durations, easing, what may move and what may not
├── voice/
│   ├── voice-and-tone.md      Two registers, safety rules, punctuation, notification budget
│   └── microcopy-library.md   Ready strings, red lines, errors, empty states, the Brief
├── components/
│   ├── README.md              The component contract, and what is deliberately absent
│   ├── buttons.md
│   ├── inputs.md
│   ├── cards.md               Including the approval card
│   ├── navigation.md
│   ├── sheets.md
│   ├── voice-input.md         Six states, and the Horizon 1 scope boundary
│   ├── status-and-feedback.md Chips, banners, toasts, empty states, the audit timeline
│   └── werks.css              Every component above, implemented
├── patterns/
│   ├── mobile-first.md        The eleven-second rule, gloves, sunlight, offline, interruption
│   ├── voice-first.md         What voice is for, and the four rules that keep it safe
│   ├── approval-and-trust.md  The approval contract, batch friction, earned autonomy, red lines
│   └── accessibility.md       WCAG 2.2 AA, plus the two tests this audience actually fails
├── conversational/            v1.1 — most of the product is a conversation
│   ├── README.md              The four ideas, and what the layer refuses
│   ├── 00-principles.md       The eight rules, and the two v1.0 amendments in full
│   ├── 01-conversation-components.md  Bubbles, threads, inline actions, quiet blocks
│   ├── 02-voice-states.md     Nine states, ambient, transcript, interruption, recovery, hybrid
│   ├── 03-conversational-patterns.md  Brief, approval aloud, nudges, escalation, multi-turn, handoff
│   ├── 04-alive-states.md     The Dot: off, ambient, thinking, working, listening
│   ├── 05-motion.md           Every motion spec in the layer
│   └── conversational.css     All of the above, implemented
├── tokens/
│   ├── tokens.json            Source of truth (W3C DTCG format)
│   ├── tokens.css             CSS custom properties, light + dark
│   ├── tokens.ts              React Native / TypeScript export
│   ├── tailwind.config.js     Tailwind v3
│   ├── tailwind-v4.css        Tailwind v4 @theme
│   └── verify-contrast.mjs    CI check: 44 pairs, zero failures
└── preview/
    ├── index.html             Everything rendered, in both themes
    └── conversational.html    The v1.1 layer, rendered and animated
```

---

## Start here

```bash
open design-system/preview/index.html            # see all of it
open design-system/preview/conversational.html   # the v1.1 conversational layer
node design-system/tokens/verify-contrast.mjs    # prove the palette
```

Then read, in order: `foundations/00-brand.md`, `patterns/approval-and-trust.md`, `components/cards.md`. Those three carry most of the thinking.

## Using it in code

**Web**
```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/components/werks.css">
<link rel="stylesheet" href="design-system/conversational/conversational.css">
```

**Tailwind v3** — `module.exports = require('./design-system/tokens/tailwind.config.js')`
**Tailwind v4** — `@import "./design-system/tokens/tailwind-v4.css";` after `tokens.css`
**React Native** — `import { lightTheme, space, size } from './design-system/tokens/tokens'`

The Tailwind configs replace the default palette entirely rather than extending it, so an off-token colour fails to compile. That is deliberate.

## The one rule for contributors

> **Components reference semantic tokens only.**
> `var(--w-text-secondary)`, never `var(--w-ink-600)`.

This is what makes the dark theme a fifty-line override instead of a rewrite, and what stops "make this grey a bit lighter" from silently becoming a palette change. If you add a colour pair, add it to `verify-contrast.mjs` before you use it.

---

## What this system deliberately does not have

Modal dialogs. Tooltips. Tables. Carousels. Progress bars. Illustrations. A mascot. Dropdown menus in the main flow. A compact density mode. Confetti. Sparkle icons. Confidence scores. Swipe-to-approve. A settings page of permission toggles. A fifth tab.

Each absence has a reason, written down where it applies.

---

## Open questions this system does not resolve

These are unresolved in `01_vision.md` and belong to the founder, not to the design. Components that touch them accept either answer rather than assuming one.

| Question | Where it bites | Owned by |
|---|---|---|
| **Disclosure** — does Werks identify itself as AI to the customer? Partly a legal question. | Every customer-facing message carries an optional disclosure slot, off by default | `08`, `10`, `16`, `21` |
| **Out of hours** — what does the text-back say at 2am? | The text-back composer takes the string; it does not assume one | `04`, `08` |
| **Number strategy** — port the existing number, or a new one? | Onboarding assumes neither | `04`, `09` |
| **Owner-facing voice in Horizon 1** — `01_vision` defers only customer-facing voice; `MASTER_CONTEXT` keeps "voice-first where valuable" as a principle. This system assumes owner-facing dictation is in scope. | If it is not, the mic dock comes out of the navigation and `voice-input.md` moves to Horizon 2. Nothing else changes. | founder |

---

## Relationship to the campaign

`design/werks-brand-campaign-brief.md` specifies the outbound campaign: full-bleed black-and-white photography, neon poster type, **WORK. WORK. WORK. WORK. WERKS.**

The campaign shouts and the product whispers, and that is the design, not a contradiction. What crosses between them is the black, the paper, the Volt, the wordmark, and the full stop. The product is what the poster is promising: if the app shouted the way the billboard does, the promise would be false.
