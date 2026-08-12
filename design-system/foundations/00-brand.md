# Brand identity

> Sources: `MASTER_CONTEXT.md`, `docs/01_vision.md` (approved), `design/werks-brand-campaign-brief.md`.
> Where this document makes a claim the specification has not settled, it is marked **Assumption**.

## What Werks is

Werks runs the business side of a trade business, so the owner only has to do the trade.

The customer is a UK gas and heating engineer with one to three vans (`01_vision` D1). They are the owner and the operator. They are on a roof, under a floor, in a plant room, or in a van. They are not at a desk, and they will never be at a desk. Every design decision in this system follows from that one fact.

## The four words

The brand is **trustworthy, calm, simple, proactive**. Each has a design consequence, and each has an opposite the system must actively avoid.

| Word | What it means here | What it forbids |
|---|---|---|
| **Trustworthy** | You can always see what Werks did, in the customer's own words, before and after it happened. Nothing is hidden behind a summary. | Confidence displays. Percentage scores presented as certainty. Anything that reads as "trust me". |
| **Calm** | One thing at a time. Silence is the default state. A screen with nothing to do says so, plainly, and stops. | Badges on everything. Red dots for things that are not urgent. Celebration. Streaks. Gamification. |
| **Simple** | The next action is obvious without reading. Large targets, short sentences, real numbers. | Configuration as a feature. Dashboards. Anything requiring a settings tour. |
| **Proactive** | Werks brings the owner the decision, already prepared. It does not wait to be asked, and it does not ask twice. | Notification volume as a proxy for value. Nagging. Empty "reminders" with no draft attached. |

**Not noisy** is the binding constraint across all four. `01_vision` states the retention signal is that the owner approves drafts in a glance rather than a read. A noisy interface destroys that signal by making every item look equally important.

## Personality

Werks is the best office manager the owner never hired.

It is competent, quiet, and slightly ahead of you. It has already drafted the reply. It knows which boiler is in the airing cupboard at 14 Elm Road because it was there last February. It does not explain how it works, does not apologise at length, and does not have opinions about gas appliances.

It is **not**: a chatbot, an assistant with a name, a friendly robot, a coach, or a personality. Werks does not have a face, an avatar, or a first-person backstory. See `voice/voice-and-tone.md`.

## Two registers

The campaign and the product are the same brand at two volumes. This tension is deliberate and it must not be collapsed in either direction.

| | **Campaign** (outside) | **Product** (inside) |
|---|---|---|
| Job | Get noticed on a billboard, a trade counter wall, a phone feed | Get a decision made in eleven seconds at a van door |
| Volume | Loud. Neon on black-and-white photography, full bleed | Quiet. Ink on paper, one signal colour, almost no colour at all |
| Type | Archivo Black, condensed, poster scale, all caps | Archivo for headlines, Inter for everything read |
| Colour | Volt at 40% of the frame | Volt at under 2% of the screen |
| Feeling | "Finally, someone gets it" | "That's handled" |

**What carries across both:** the black, the paper white, the Volt, the wordmark, and the full stop. The product is what the campaign is promising. If the product shouted the way the poster does, the promise would be false.

The campaign is specified in `design/werks-brand-campaign-brief.md` and is out of scope for this system except for the shared assets below.

## The wordmark

**WERKS.**

Set in Archivo Black, all caps, tracking `-0.02em`. The full stop is part of the wordmark and is never dropped.

- **The full stop is Volt.** Everywhere, in every lockup, on every surface. It is the only element that is permitted to be Volt in the product.
- **The letters are Ink or Paper**, depending on the surface. Never Volt, never any other colour.
- **Clear space** on all four sides is the cap height of the W.
- **Minimum size** is 72px wide on screen, 20mm wide in print. Below that the full stop stops reading and the mark stops working.

### Lockups

1. **Primary** — `WERKS.` horizontal, Ink on Paper.
2. **Inverse** — `WERKS.` horizontal, Paper on Ink. The default for the app icon, the splash, and anything over photography.
3. **Mark only** — the full stop alone, as The Dot. Used at sizes where the wordmark cannot be read: favicon, notification badge, watch complication.

### Misuse

Do not: stretch, condense, outline, add a gradient, add a shadow, place on a busy area of a photograph, set in another typeface, translate, animate the letters, or colour the letters Volt. Do not add a strapline lockup: Werks does not have a strapline.

## The Dot

The single most important element in the system. Learn this rule and most of the colour decisions make themselves.

**The Dot is the full stop from the wordmark, reused as the product's only live indicator.** It is a filled circle, Volt, on an Ink surface. It means exactly one thing:

> **Werks is on it.**

It appears in only five places:

1. The full stop in the wordmark.
2. The listening state of the microphone, for as long as it is recording (see `components/voice-input.md`). Not the idle mic: at idle, Werks is not on it.
3. The active item in the bottom navigation.
4. The "needs you" marker on a nav item or list row.
5. The live indicator on an in-progress action, for as long as it is in progress.

It appears nowhere else. It is never used decoratively, never used as a bullet point, never used in a chart, and never used to mean "success". Success is green, and green is a different idea: the Dot is *present tense*.

**Sizes:** 6px (inline in text, in a nav badge), 8px (list rows, default), 10px (the wordmark's own full stop, optically matched to the type size), 12px (voice listening).

**Why this works:** the campaign trains the eye that the neon full stop is the payoff, the moment work becomes Werks. In the product, that same neon dot appears at the moment Werks is doing the work. The billboard and the app are making the same claim with the same shape.

## App icon

Ink `#1A1917` square, full bleed, no gradient, no bevel. `WERKS.` in Paper `#FBFAF8`, Archivo Black, optically centred, with the full stop in Volt `#C3FF33`. On sizes below 60px, drop the letters and show only the Dot, centred, at 34% of the tile width.

## Photography

Product surfaces use photography almost never. Where it appears — onboarding, marketing, empty states of the memory record — it follows the campaign rules: black and white, high contrast, full bleed, real work, hands, no eye contact with the camera, no smiling stock plumbers.

Never place UI text directly over a photograph without an Ink scrim at 60% or greater.

## Illustration

There is none. The system has no illustration style, no spot illustrations, and no mascot. Empty states use type and a single icon. This is a deliberate absence: illustration reads as consumer software, and the audience has already declined consumer-feeling software once (`01_vision`, Risks).

## What the brand refuses

Directly from the specification, and binding on every surface:

- **No "AI-powered" badges, no sparkle icons, no gradient-magic treatments.** `01_vision` D2 states Werks is not sold as an AI receptionist and the pitch is cash collected and hours returned. Decorating the interface with AI signifiers sells the exact frame the positioning rejects.
- **No claims of certainty about gas appliances.** `01_vision` D7 makes technical diagnosis presented to a customer as fact a safety boundary, not a scope boundary. No component may present a diagnosis, a likely cause, or a confidence figure about an appliance to a customer.
- **No dark patterns around approval.** `01_vision` D6a puts every outbound message behind explicit approval. The approve button is never pre-selected, never auto-confirmed on scroll, and never larger than the room the draft is given to be read in.
- **No celebrating the product's own activity.** "Werks answered 40 calls this week" is a feature metric. `01_vision` D2 and D3 say the unit of value is money collected and time returned. The interface reports outcomes, not effort.

## Open questions inherited from the specification

These are unresolved upstream and this system does not resolve them. Components that touch them are built to accept either answer.

- **Disclosure.** Whether Werks identifies itself as AI to the customer is open in `01_vision` and is partly a legal question. Every customer-facing message component therefore supports an optional, configurable disclosure line with its own token and position. See `voice/microcopy-library.md`.
- **Number strategy.** Whether the owner ports their number or takes a new one is open. Onboarding components must not assume either.
- **Out-of-hours policy.** What the 2am text-back says is open. The text-back composer is built with an explicit out-of-hours variant slot rather than a hard-coded string.
