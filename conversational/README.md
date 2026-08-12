# The conversational layer

**Werks design system v1.1.**

v1.0 designed the surfaces where a decision gets made: cards, chips, sheets, the approval card. It assumed those surfaces were the product.

They are not. Most of what the owner actually sees is a **conversation** — a customer texting in, Werks drafting a reply, the owner saying "send it" while walking to the van, Werks reporting back four hours later that she replied. The card is one frame of that. This layer is the rest of it.

---

## What this layer adds

| | File |
|---|---|
| The rules, and what v1.1 changes in v1 | `00-principles.md` |
| Bubbles, threads, inline actions, quiet blocks, who-is-speaking | `01-conversation-components.md` |
| The full voice flow, ambient, interruption, error recovery, hybrid | `02-voice-states.md` |
| The Brief, approval, nudges, escalation, handoff, multi-turn | `03-conversational-patterns.md` |
| Thinking, working, news, sleeping — the Dot as a living thing | `04-alive-states.md` |
| Every motion spec in the layer, in one place | `05-motion.md` |
| All of the above, implemented | `conversational.css` |

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/werks.css">
<link rel="stylesheet" href="conversational/conversational.css">
```

```bash
open design-system/preview/conversational.html
```

---

## The four ideas that generate the rest

**1. Werks does not get a bubble.**
The customer gets a bubble. The business gets a bubble. Werks speaks from a rail on the canvas with no container at all, because Werks is not a participant in the conversation. It is the surface the conversation is happening on. A bubble would make it a third person in the thread, and `foundations/00-brand.md` is explicit that Werks has no face, no avatar and no first-person self. This one decision does most of the work of keeping the product from looking like a chatbot.

**2. A draft is an unsent bubble, in the place it will occupy.**
Not a card floating above the thread. An outlined bubble, right-aligned, sitting exactly where the sent message will sit, showing exactly the words that will be there. Approving fills it in. The owner sees the future of the thread before agreeing to it, which is `patterns/approval-and-trust.md`'s test rendered as a shape.

**3. The Dot is the only thing that is alive.**
Absent, ambient, breathing, ringed, listening. Five states, one shape, one colour. Every "is Werks doing anything?" question in the product is answered by that 8 to 12 pixels. Nothing else animates to signal presence.

**4. Everything spoken is also on screen, always, in full.**
Speech is a second channel, never the only one. The owner can be in a loft with no signal, wearing ear defenders, or have hearing damage from twenty years on tools — which, per `patterns/accessibility.md`, most of this audience does. Audio that has no visual equivalent is a feature that stops working exactly when the job gets loud.

---

## What v1.1 changes in v1

Two v1 rules are amended, both narrowly, both written up with their constraints in `00-principles.md`:

- **`patterns/voice-first.md` rule 8, "Never speak back"** is now scoped to customer-facing voice. Werks may speak **to the owner**, under six conditions.
- **`foundations/05-motion.md`, "The Dot sits still"** is now "the Dot sits still unless Werks is working". It may breathe while thinking, and only while thinking.

Nothing else in v1 changes. No component is replaced, no token is redefined, no colour is added.

---

## What this layer deliberately does not have

- **A chat input box as the primary interface.** There is no "ask Werks anything" text field on the home screen. The product brings the owner decisions; it is not a prompt box waiting to be fed.
- **Typing indicators for Werks.** Three animated dots is a person pretending to type. Werks is not a person, and the Dot already says it is working.
- **A voice avatar, orb, or waveform sphere.** The listening bars are real amplitude, and everything else is the Dot.
- **Read receipts on Werks's own messages to the owner.**
- **Streaming text for anything that will be approved.** A draft appears complete or not at all. Words arriving one at a time invite the owner to start reading before the sentence has finished forming, and approval requires reading the whole thing. Live word-by-word reveal exists for one thing only: the owner's own transcript, where it is proof the microphone is working.
- **A conversation with a personality.** No greetings, no small talk, no "How can I help?", no name for the assistant.
