# 01 Vision

> Status: approved
> Owner: founder
> Last updated: 2026-08-02
> Depends on: none
> Downstream: 19_competitor_analysis, 03_customer_persona, 02_product_principles, 04_user_journey, 20_pitch

## The decisions, in one page

Read this page and you know what was decided. Everything below it is the
reasoning, the evidence and the open questions — reference material, to be
consulted rather than read end to end.

| | Decision | Status |
|---|---|---|
| **D1** | **Wedge: UK gas and heating engineers, one to three vans.** Not trades in general. Addressable via Gas Safe, high job value, emergency-driven inbound, annually recurring. | settled |
| **D2** | **WERKS is not sold as an AI receptionist.** Answering is table stakes and we never lead with it. The pitch is cash collected and hours returned, not calls answered. | settled |
| **D3** | **The unit of value is the job lifecycle, not the interaction.** Enquiry through to next year's service. The schema carries all nine steps from day one; Horizon 1's active workflows stop at paid. Cut automation if you must, never cut the schema. | settled |
| **D4** | **WERKS does not compete on the answering-service price.** Meeting it concedes D2. The number and the pricing model are open and belong to `18_pricing.md`. | settled in principle, open in number |
| **D5** | **Memory is the retention mechanism, and it is property- and appliance-shaped.** The barrier is accumulated time, not lock-in — so clean export is a first-class capability, not a threat. | settled |
| **D6** | **Autonomy is earned per action class, never granted globally.** Asynchronous actions: approval first, then earned autonomy. Synchronous actions: constraint and escalation, because approval is structurally unavailable on a live call. | settled |
| **D7** | **Out of scope for the MVP:** procurement, parts identification, lending, insurance, bookkeeping, tax, route optimisation, subcontractor networks — and any technical diagnosis presented to a customer as fact. The last is a safety boundary, not a scope one. | settled |

**The MVP boundary.** Horizon 1 is **asynchronous only**. A missed call triggers
a text-back within sixty seconds; the conversation then happens in messaging,
under approval, through quoting, invoicing and chasing. **There is no live voice
in Horizon 1.** Voice arrives in Horizon 2, gated on the evaluation thresholds in
`21_evaluation.md` — an evidential gate, never a date.

**The single sentence a customer must be able to say:** *"Nothing gets missed, my
quotes go out same day, it chases my money, and it remembers every boiler I've
ever touched."*

## Purpose

This document fixes the three decisions that every later document inherits: **who we are for**, **what we are actually selling**, and **what we refuse to be**. It exists to stop the specification drifting into a generic "AI for SMBs" product, and to force an early confrontation with the fact that the most obvious version of WERKS is already a commodity.

If a downstream document contradicts this file, this file wins or this file gets changed. Not both.

## Context

From `MASTER_CONTEXT.md`: WERKS is an AI business partner for small service businesses, phone-first, wedging into UK trades. The moat is stated as workflow library, memory, trust, integrations and habit — explicitly *not* the model.

Two facts from outside the repository change how that thesis has to be expressed.

**The market is real and countable.** Gas Safe Register lists roughly 70,000 registered businesses and over 130,000 engineers in the UK. Registration is a legal requirement, the register is public and searchable by postcode, and it carries trade categories per business. This is an unusually good wedge market: bounded, addressable, and self-identifying.

*Source caveat: these figures are unverified in-repository and are stated here from recollection, not from the register. Check them against Gas Safe directly before they appear in `20_pitch.md` or any external material. Note also that "public register" and "usable for outreach" are different claims; the second is not established.*

**The obvious product is already sold at £45 a month.** As of 2026 there is a live UK category of AI phone answering aimed directly at plumbers and gas engineers — trade-specific voice agents at roughly £45–£50/month with no contracts, plus US home-services players in the $229–629/month band with native integrations into Jobber and Housecall Pro. These already advertise the exact opening pitch in `MASTER_CONTEXT.md`: never miss a call, capture the emergency, book the job, text a confirmation. Some of them already claim trade vocabulary — combi versus system boilers, pressure loss diagnosis, urgency triage.

*Source caveat: the above is drawn from vendor marketing pages and one comparison article, all commercially motivated. Treat the pricing as directionally reliable and the capability claims as unverified. `19_competitor_analysis.md` must test them by actually calling these services.*

The consequence: **capabilities 1–3 in `MASTER_CONTEXT.md` are entry price, not position.** A specification that leads with them describes a product that arrives late to a market with the price already set below where WERKS needs to sell.

## Decisions

Settled decisions are binding on downstream documents. Recommendations are the current best answer and may be overturned by evidence, but not by preference.

### D1 — Wedge: UK gas and heating engineers, one to three vans (settled)

Not "trades" in general. Gas and heating specifically, for four reasons that compound:

1. **Addressable.** Gas Safe is a public register with postcode and trade-category search. Cold outreach is a data problem, not a discovery problem.
2. **High job value.** Boiler replacement runs into thousands. A single recovered job pays for a year of software, which makes the ROI argument arithmetic rather than rhetoric.
3. **Emergency-driven inbound.** No heat, no hot water, and leaks are urgent. Urgency means the caller phones the next name on the list within minutes, which makes a missed call a lost job rather than a delayed one. *This reason is in direct tension with D6's decision to ship text-back rather than live answering — see the sixty-second question in Open Questions, which exists precisely because of this paragraph.*
4. **Annual recurrence.** Landlord gas safety checks and boiler servicing are legally or contractually annual. This is the property that makes memory compound — see D5.

Adjacent trades in `MASTER_CONTEXT.md` remain valid expansion. They are not the MVP.

### D2 — WERKS is not sold as an AI receptionist (settled)

Call answering is table stakes. We must have it eventually (Horizon 2, per D6), it must be excellent when it arrives, and we must never lead with it. Leading with it puts WERKS in a price fight it enters late and cannot win, against sellers with lower cost bases.

The positioning is the *money*, not the *phone*: WERKS is how the business gets paid without the owner losing Sunday to it. The pitch is measured in cash collected and hours returned, not calls answered.

### D3 — The unit of value is the job lifecycle, not the interaction (settled)

The lifecycle runs: **enquiry → qualified → booked → attended → quoted → completed → invoiced → paid → serviced again next year.**

Answering-service competitors own steps 1–3 and then hand off. Field-service software owns steps 4–8 but requires the owner to drive it. Nobody runs the whole line unattended.

*Unverified. This is the load-bearing competitive claim in the document — the positioning in D2, D3 and D4 all rest on it — and it is currently an assumption rather than a finding. `19_competitor_analysis.md` must confirm or overturn it.*

WERKS enters at step 1, because that is where the pain is loudest and the sale is easiest. Steps 6–9 are where the defensible price sits, because "we answered 40 calls" is a feature and "we collected £6,400 that was sitting unpaid at 45 days" is an outcome.

"Instruments the entire line from day one" is two claims, and they have different scopes:

- **The data model covers the full lifecycle, including step 9, from day one.** Every job records what a service reminder would need a year later — appliance identity, what was done, what was deferred, when it is next due, who to contact and how. This is non-negotiable and binding on `13_database.md` and `07_memory_model.md`. A job captured in month one without those fields is a job that cannot generate revenue in month thirteen, and the loss is unrecoverable: you cannot backfill a service history you never wrote down.
- **The active workflows in Horizon 1 stop at paid.** Steps 1–8 run. Step 9 is recorded, not yet driven. The annual loop fires in Horizon 2, off data the MVP has been quietly accumulating the whole time.

This also settles an honest limit: step 9 cannot be *proven* inside a Horizon 1 that runs less than a year. The MVP can demonstrate that the record is complete enough to fire the reminder. It cannot demonstrate that the reminder converts.

Note what "enters at step 1" now means under D6: capture is by missed-call text-back within sixty seconds, not by answering the call. The enquiry is caught and moved into messaging, where it can be handled under approval. The lifecycle claim is unchanged; the capture mechanism is narrower than it first appears, and `04_user_journey.md` must specify it as text-back rather than as answering.

**Implication for the MVP, binding on `17_roadmap.md`:** shipping only steps 1–3 is not a smaller MVP, it is a different and worse product. If scope must be cut, cut breadth of trades or channels, not depth of lifecycle. Note the distinction from D6: deferring live voice cuts a *channel* into step 1, not depth of lifecycle, which is why it is consistent with this decision rather than an exception to it.

**The scope rule, stated so it survives a deadline: cut automation if you must, never cut the schema.** Dropping a workflow costs time. Dropping a field costs a year of history that cannot be reconstructed.

### D4 — WERKS does not compete on the answering-service price (settled in principle, open in number)

This decision has a settled half and an open half, and they must be kept apart.

**Settled.** WERKS does not compete on the answering-service price. Meeting that price concedes D2's positioning — it accepts the frame that WERKS is an answering service with extras, which is the one frame in which WERKS arrives late against sellers with lower cost bases. The refusal is positional and does not depend on what the anchor turns out to be.

**Open.** The actual number and the pricing model. Both belong to `18_pricing.md` and are tracked as OQ1. Two live options it must resolve:

- **Flat subscription above the anchor.** Simple, predictable, easier to sell to owners who distrust variable pricing.
- **Base plus a share of recovered cash.** Aligns to outcome, harder to explain on a doorstep, and creates an incentive to chase aggressively — which conflicts with the customer's own reputation. Note the conflict now rather than discovering it in the pricing doc.

**Load-bearing caveat.** The settled half tells us which direction to price in; it does not tell us where the floor is. That floor is currently the £45–50 anchor, which this document has flagged as unverified and commercially sourced. So D4's *force* — how much room there is above the anchor, and whether "materially higher" means £120 or £400 — rests on a claim we have not checked. `19_competitor_analysis.md` must verify the anchor before `18_pricing.md` sets a number against it. If the anchor moves, the principle survives unchanged and every quantity derived from it does not.

### D5 — Memory is the retention mechanism, and it is property-shaped (settled)

The compounding asset is not conversation history. It is a structured record per **property and appliance**: boiler make, model, serial, install date, warranty expiry, parts fitted, last service date, access notes, who holds the key, which tenant, which landlord, what went wrong last time.

That record makes three things possible that a call-answering competitor structurally cannot do:

1. Year-two service reminders that write themselves, converting one-off jobs into recurring revenue the owner never had to chase.
2. Quotes that arrive faster because the appliance history is already known.
3. A switching cost that grows every month — not because the record is locked in, but because it takes time to accumulate and a competitor starting today has an empty one.

**On portability.** The record is both portable and partly reconstructable, and the moat does not depend on it being neither. Under UK GDPR Article 20 the data subject has a right to portability, and much of the record — make, model, serial, install date — is reconstructable from the appliance itself, from the manufacturer, or from Gas Safe. The moat is not that the data cannot leave. It is that eighteen months of service history, access notes and job outcomes cannot be created on the day a competitor signs the customer. Time is the barrier, not lock-in.

This distinction is load-bearing downstream: `07_memory_model.md`, `13_database.md` and `15_security.md` must design for clean, complete export as a first-class capability, not treat it as a threat to be slowed down. Making export painful would trade a real and legal moat for an unlawful and reputationally toxic one.

**This is the moat, stated concretely.** `07_memory_model.md` and `13_database.md` must treat the property/appliance record as a first-class entity, not as metadata hanging off a conversation.

### D6 — Autonomy is earned per action class, never granted globally (settled)

Rationale first, because it drives the split: the owner's trade licence, reputation and Checkatrade-equivalent rating are on the line, not ours. The asymmetry is severe — a hundred correctly captured leads do not offset one confidently wrong statement about a gas appliance to a worried customer.

Customer-visible actions divide into two regimes with genuinely different control surfaces. They must not be conflated: a rule written for one is unenforceable on the other.

**D6a — Asynchronous actions: governed by approval, then earned autonomy.**
Texts, quotes, invoices and payment chases are composed before they are sent. There is a reviewable artifact and an arbitrary amount of time to review it. These ship at *drafts everything, sends nothing without approval*, and expand per action class as measured accuracy justifies it — not per customer, and not per settings toggle the owner clicks once during onboarding and forgets. Autonomy is granted by us, against evidence, one action class at a time.

**D6b — Synchronous actions: governed by constraint and escalation.**
A live call cannot be drafted, queued or approved; the words leave the system as they are generated. Approval is structurally unavailable, so control has to come from the shape of the interaction rather than from a review step. Four requirements, all mandatory:

1. **A narrow envelope.** A defined, enumerated set of things the agent may say and do. Outside it, it escalates rather than improvises.
2. **Hard red lines.** Categories that terminate the interaction into a human path immediately — anything touching gas safety, smells, carbon monoxide, or a customer in distress. Specified in `21_evaluation.md`, not here.
3. **Immediate transcript to the owner.** Every call, in full, without the owner asking. Not a summary.
4. **Reachability mid-call.** The owner must be able to be brought into a live call in progress, and the agent must be able to initiate that.

**MVP scope, binding on `17_roadmap.md`: the MVP ships asynchronous only. There is no live voice in Horizon 1.** Inbound capture is missed-call text-back within sixty seconds, after which the conversation happens in messaging — where D6a applies and every outbound message is reviewable.

This is a positioning decision, not a capability apology. We do not put an AI on a live gas emergency until it has been proven on thousands of text conversations first. That sentence is a stronger sales asset with a safety-conscious trade than a voice demo is, and it inverts the commoditisation risk in D2: the competitors leading with voice are the ones taking the unmanaged risk.

Live voice moves to Horizon 2, **gated on evaluation thresholds defined in `21_evaluation.md` rather than on a date.** No calendar commitment, internal or external, may be attached to it.

**Architectural constraint, binding on `05_system_architecture.md`, `06_agent_architecture.md` and `09_tool_integrations.md`:** text-back and voice must share one intent capture, one job record, one permission model and one escalation path. Voice is a new *input channel* onto the existing spine, never a parallel system with its own state. If voice ends up needing its own conversation store or its own permission logic, the design is wrong and the review should stop there.

*Tension with `MASTER_CONTEXT.md`, stated rather than smoothed: initial capability 2 is "AI call answering and lead capture". This document defers the answering half to Horizon 2 and keeps the capture half via text-back. The capability list is not being rejected, it is being sequenced.*

Binding on `16_permissions.md` and `21_evaluation.md`.

### D7 — Out of scope for the MVP (settled)

Not built, not specified, not implied in any sales material: autonomous procurement, parts identification from images, lending or insurance, bookkeeping and tax filing, multi-team route optimisation, subcontractor networks, and any form of technical diagnosis presented to a customer as fact.

The last one is a safety boundary, not a scope boundary. WERKS captures symptoms. It does not diagnose gas appliances to customers. See Risks.

## Detailed Specification

### The one-line vision

**WERKS runs the business side of a trade business, so the owner only has to do the trade.**

### What "working" looks like, by horizon

**Horizon 1 — MVP (target: 10–20 paying gas and heating businesses). Asynchronous only, per D6.**
No live voice. A missed call triggers a text-back within sixty seconds, and the enquiry is then handled in messaging under approval, through quoting, invoicing and chasing.

The question being tested is narrow and behavioural: *will an owner let WERKS write to their customers, and does the money move faster?* Success is not usage. Success is: enquiries captured that would have rung out and gone nowhere, quote turnaround measured in hours rather than days, and invoice-to-cash time down measurably.

The retention signal that matters most is that the owner **approves drafts without editing them**, and eventually approves in a glance rather than a read. Note carefully what this is not: under D6a the owner cannot unilaterally stop reviewing, because autonomy is granted per action class against evidence, not per owner by preference. The signal is that review has become a formality, not that it has been switched off. `21_evaluation.md` should measure edit rate and edit distance, not approval clicks.

**Horizon 2 — Operator.** WERKS completes repeatable operational work end to end within earned permissions. The annual service book starts running itself off the memory built in Horizon 1. Revenue per customer rises without the owner selling.

**Live voice enters here, not before**, under the D6b regime and gated on the thresholds in `21_evaluation.md` — proven intent capture and escalation behaviour across a large volume of real text conversations first. The gate is evidential. It is not a date, and it must not be sold as one.

**Horizon 3 — Business partner.** WERKS makes recommendations the owner would not have reached alone: which jobs to stop taking, which customers cost more than they pay, where capacity is being wasted, when to put prices up. This is where the product stops being software and starts being judgement.

The unit that gates it is **completed annual service cycles, not elapsed time.** Judgement of this kind requires seeing the same property and appliance come round again — what was deferred and then failed, which customers rebook and which vanish, which jobs were underpriced once the return visit is counted. One cycle produces anecdotes; enough cycles produce patterns. How many is *enough* is not derivable from this document and should not be guessed here — it depends on jobs per customer, and on how much of the base turns out to be landlord-driven and therefore genuinely annual. `21_evaluation.md` should set it once the Horizon 1 data exists.

### The single sentence a customer must be able to say

*"Nothing gets missed, my quotes go out same day, it chases my money, and it remembers every boiler I've ever touched."*

It leads with the outcome rather than the channel: true of text-back today, still true when voice arrives in Horizon 2.

If a proposed feature does not help an owner say that sentence, it waits.

## Risks and Trade-offs

**Commoditisation of the wedge.** The most likely failure is WERKS being read as another £45 AI receptionist and priced accordingly. Mitigation is positional, not technical: never demo the phone answering first. Demo the money.

**Voice quality is a physics problem, not a model problem.** UK regional accents, a caller in a panic, background noise from a running tap or a boiler, poor mobile signal in a plant room. A voice agent that performs well in a quiet demo and badly on a real call is worse than voicemail, because voicemail does not misrepresent the business. `10_voice_design.md` and `21_evaluation.md` must be tested on genuinely degraded audio, not clean recordings.

*Under D6 this is now a Horizon 2 risk rather than an MVP one, and it is part of why voice was deferred: the failure mode is not fixable by a better model and needs measuring before it ships, not after. Deferring it does not reduce it — it buys the time to test it honestly.*

**The catastrophic-error asymmetry.** One AI-generated reassurance about a gas smell is an existential event for both the customer's business and ours. This is why D7 draws diagnosis out of scope and why D6 is per-action-class. Treat it as a safety constraint with a hard red line in `21_evaluation.md`, not as a quality target.

**Channel dependency.** WhatsApp is named as a core channel. It is a third-party platform with template approval, session-window rules, per-conversation pricing and policy risk we do not control. `09_tool_integrations.md` must specify what happens when WhatsApp is unavailable, expensive or non-compliant — not assume it away.

**Incumbents adding AI.** Established UK field-service platforms hold the job, quote and invoice data already. If they bolt on competent messaging or voice, they attack from a stronger position than the answering services do — they own the second half of the lifecycle we are claiming.

Our advantage is about *which customer*, not about architecture. Incumbents serve owners who already chose software and use it. Our target is the owner who never did — who runs the business on a phone, a diary and memory, and who has already declined or abandoned that category of product. We are not yet competing for the same customer, and an incumbent's own base constrains them: they cannot degrade a working product for paying users in order to chase ours. Their AI has to fit the existing workflow, the existing data model and the existing expectations, and it has to not break anything.

That constraint is real but temporary. It weakens as soon as an incumbent can ship the capability as an additive feature rather than a change, and it disappears entirely once our customer stops being distinct from theirs — which is the direction our own success pushes, since an owner running their business through WERKS *is* a software-using owner. **The advantage is time-limited by construction, and we should size the window rather than assume it.** See Open Questions.

**Platform absorption, and why D6 increased it.** Phone-first is a strategy built on a surface owned by Apple and Google. If OS-level call screening and summarisation become good and free, the "never miss a call" value evaporates at the platform layer.

This risk was written for a live-voice product, where the platform would have had to replicate a full conversation to displace us. **Choosing text-back moved us closer to the platform, not further from it.** Missed-call detection, an automatic reply, a transcript and a summary are precisely the features Apple and Google are already building into the OS, and they ship them for free, pre-installed, with no integration step. Horizon 1's headline capability is the one most exposed to being absorbed, and the deferral of voice raised that exposure rather than lowering it. This should be stated plainly in `19_competitor_analysis.md`, which must treat the operating systems as competitors in the text-back category and not only the paid vendors.

The mitigation is unchanged and now carries more weight: the durable layers are memory and money. A platform can reply to a missed call. It cannot quote the job, chase the invoice, or know which boiler is in the airing cupboard at that address. Every month the MVP spends on text-back alone is a month spent in the most contested part of the stack, which is an argument for reaching quoting and collections quickly — see D3's insistence on lifecycle depth over channel breadth.

**Rejected alternative — lead with a mobile CRM.** Considered and rejected. It fails the first-hour usefulness principle, it competes directly with entrenched incumbents on their terms, and it requires the owner to do data entry, which is the exact behaviour we claim to remove.

## Open Questions

- [ ] **Price test.** What does a one-to-three-van gas business actually pay, and is the ceiling set by the £45 answering anchor or by what they currently lose in unbilled admin time? Blocks `18_pricing.md`.
- [ ] **Number strategy.** Does the customer port their existing number to WERKS, or take a new one and forward? Porting is far stickier and far scarier to sell. This is a positioning decision, not a telephony one, and it materially affects churn. Blocks `04_user_journey.md` and `09_tool_integrations.md`.
- [ ] **Who handles the 2am emergency?** Restated for D6: WERKS no longer answers the call, so the question is what the text-back says at 2am when the owner is asleep and a customer has no heat in January. Silence until morning is a reputational event; a text that implies someone is coming when nobody is, worse. This needs an explicit out-of-hours policy — what WERKS commits to, what it refuses to promise, and whether the owner is woken. Getting it wrong is a reputational event either way. Blocks `04_user_journey.md` and `08_workflow_library.md`.
- [ ] **Disclosure.** Does WERKS identify itself as an AI? Under D6 this now lands in Horizon 1 as a *messaging* question before it is ever a voice one — the text-back is the first thing a customer receives, and it goes out under the owner's business name. Competitor marketing implies non-disclosure, on the argument that customers do not care. That is a claim about consumer tolerance in 2026 we should verify rather than inherit. Note it is only partly a preference question: it is substantially a legal and regulatory one, and competitor behaviour is not evidence of compliance. Answer the regulatory half first, because it may remove the choice. Blocks `08_workflow_library.md`, `10_voice_design.md`, `16_permissions.md` and `21_evaluation.md`.
- [ ] **How long before an incumbent ships competent messaging?** The incumbent defence in Risks is explicitly time-limited, so the window needs sizing rather than assuming. Concretely: have the established UK field-service platforms already shipped AI messaging or call handling, is it announced, or is it absent? What did it take them to ship comparable features historically, and does their pricing model let them give it away? The answer sets how much of the lifecycle WERKS must own before the distinction stops protecting us — and if the honest answer is twelve months, that changes `17_roadmap.md` sequencing rather than merely informing it. Blocks `19_competitor_analysis.md` and `17_roadmap.md`.

- [ ] **Landlord and letting agent volume.** Do enough target businesses have a landlord-heavy customer base to make the annual-certificate loop the primary retention driver, or is it a minority segment? State the threshold before gathering the evidence: what share of a target business's work must be landlord-driven, across what share of the wedge, for the annual loop to count as the primary driver rather than a secondary one? Without that number this question cannot be answered, only discussed. This is load-bearing for D5. Blocks `03_customer_persona.md` and `07_memory_model.md`.
- [ ] **Single-source claims flagged for verification:** the £45–50 UK price anchor, the Gas Safe register figures in Context, the "nobody runs the whole line unattended" claim in D3, and a cited 2026 Fix Radio survey of 220+ tradespeople reporting that around a third had lost work through unanswered calls. Most come from commercially interested sources. Verify before any of them appears in `20_pitch.md`. The decision this forces, rather than the task: **D4 is built on the £45–50 anchor, so what happens to D4 if the anchor is wrong in either direction?** If the real anchor is materially lower, "price above it" gets easier and less meaningful; if it is materially higher, D4's premise dissolves. Answer that before `18_pricing.md` runs, not during it. Blocks `18_pricing.md` and `19_competitor_analysis.md`.

- [x] **Live voice versus D6. Resolved 2026-08-02.** D6 now splits into D6a (asynchronous, approval then earned autonomy) and D6b (synchronous, constraint and escalation). The MVP ships asynchronous only; live voice moves to Horizon 2 gated on `21_evaluation.md` thresholds. The Horizon 1 retention signal was restated as approval-without-editing, which is measurable and consistent with D6a.

- [ ] **Is sixty-second text-back fast enough to win an emergency job?** This is the single biggest risk created by the D6 split, and it attacks D1 directly. D1's own reasoning says an emergency caller "phones the next name on the list within minutes" — so the question is whether a text arriving within sixty seconds reaches them before a competitor's human answers, or whether it arrives after they have already booked someone else. Plausible outcomes differ by job type and by time of day, and the answer may well be *yes for a leak on a weekday, no for no-heat at 9pm in January*. That distinction, if real, sets the Horizon 2 voice gate far more precisely than an accuracy threshold would.

  **This must be instrumented from day one, not retrofitted when the question becomes urgent.** Required from the first customer: time from missed call to text sent, time to customer reply, reply rate, and — the one that actually answers the question — whether the job was won, segmented by hour of day and by urgency. Binding on `21_evaluation.md` and `13_database.md`; a schema that cannot answer this later is a schema that failed under D3's scope rule.

  This is also the evidence that would justify pulling live voice forward ahead of the D6b accuracy gate. If text-back demonstrably loses emergency work, that is a commercial reason to accelerate voice, and it should be weighed openly rather than treated as a reason to abandon the staging. Blocks `04_user_journey.md`, `17_roadmap.md` and `21_evaluation.md`.

## Review Notes

**What this document is no longer claiming.** That the MVP answers calls; that the memory record is locked in; that the entire lifecycle is automated from day one; that D4 fixes a price. Any downstream document inheriting those claims from an earlier reading of this file should re-read it.

*This section is temporary. Delete it once `19_competitor_analysis.md` and `03_customer_persona.md` have been written against the current text — at that point no downstream document carries the superseded claims, and the correction has nothing left to correct. The reasoning behind each change is in the commit history.*

## Acceptance Criteria

- [ ] The document is consistent with `MASTER_CONTEXT.md`, and every point of tension with it is stated rather than smoothed over.
- [ ] A reader can state the wedge market, the positioning, and three things WERKS will not do, without re-reading.
- [ ] Every decision is marked settled or recommendation, with reasoning attached.
- [ ] Claims from outside the repository are sourced, and commercially motivated sources are flagged as such.
- [ ] Open Questions are decision-forcing and name the document each one blocks.
- [ ] Downstream documents can be generated without needing to invent positioning.
