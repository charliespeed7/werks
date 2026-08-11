# Competitor Research — Desk Pass Findings

> Status: desk pass complete, buyer calls and mystery calls pending
> Owner: Charlie
> Date: 3 August 2026
> Source: vendor pricing pages, product pages, comparison articles
> Caveat: all pricing from vendor marketing pages. Treat as directionally reliable, not verified. Buyer calls (Section 2 of protocol) will test these claims.

---

## Section 1 — The Field

### UK-specific AI answering services for trades

| # | Service | Type | Market | Advertised Price | Setup Fee | Min Term | Included Volume | Overage | Trades Focus |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Down To Earth AI | Voice + text-back + multi-channel | UK | £45/mo | £299 one-off | None | 100 minutes | 20p/min after 100 | Yes — 13 trades incl. gas engineers |
| 2 | Answer.co.uk AI | Voice + PAYG | UK | £10/mo + £0.85/call | None | None | Per-call | £0.85/call | No — general UK SME |
| 3 | Perfect Reception | Voice | UK | From £109/mo | Not stated | Not stated | 250 minutes | 50p/min after 250 | No — general |
| 4 | Callout AI | Voice | UK | From £149/mo | Not stated | Not stated | Not stated | Not stated | Yes — trades, British voice |

### US/home-services AI answering services (may serve UK or set expectations)

| # | Service | Type | Market | Advertised Price | Setup Fee | Min Term | Included Volume | Overage | Trades Focus |
|---|---|---|---|---|---|---|---|---|---|
| 5 | LeadTruffle | Voice + SMS | US | $229–$629/mo | $299 one-off | None | 150–500 leads by tier | Included in lead allowance | Yes — contractors, HVAC, plumbing |
| 6 | Goodcall | Voice | US | $79–$249/mo per agent | None | None | 100–500 unique customers | $0.50/customer after limit | No — general SMB |
| 7 | Trillet | Voice + SMS + WhatsApp | US (multi-channel) | $49/mo | None | None | 150 minutes | $0.20/min after 150 | Yes — trades |
| 8 | Marlie.ai | Voice + SMS | US | $49/mo | None | None | 250 minutes | $0.35/min after 250 | Yes — integrates with Jobber/Housecall Pro |
| 9 | Rosie | Voice | US | $49–$299/mo | None | None | Unlimited minutes | N/A | Yes — home services, trades |
| 10 | Smith.ai | Voice + human hybrid | US | $97.50–$500/mo | None | None | 30 calls (AI) / 30 calls (human) | $2.40–$9.78/call | No — general |
| 11 | Upfirst | Voice | US | $24.95/mo | None | None | 30 calls | $1.50/call after 30 | Yes — field service |
| 12 | Clara AI | Voice | US | $299–$749+/mo | None | None | Not stated | Not stated | Yes — HVAC, plumbing, dental, med spa |

### UK price anchor assessment

**The £45 anchor in `01_vision.md` is confirmed — for Down To Earth AI specifically.** This is the only UK-specific, trades-targeted AI answering service found at that price point. But the real landscape is wider:

- **Cheapest UK option:** Answer.co.uk at £10/mo + £0.85/call (but general SME, not trades-specific, and it's a basic AI bot, not a conversational agent)
- **UK trades-specific:** Down To Earth AI at £45/mo + £299 setup (the direct anchor)
- **UK premium:** Callout AI at £149/mo (British voice, trades-focused)
- **US trades-specific (sets expectations if they expand):** Trillet $49/mo, Marlie $49/mo, LeadTruffle $229–$629/mo

**Real first-year cost (Down To Earth AI):**
- £299 setup + (£45 × 12) = £839/year base
- If they use 200 minutes/month: £45 + (100 × £0.20) = £65/mo → £1,079/year
- WhatsApp/SMS/email/social channels are £23/channel/month extra
- If you add WhatsApp + SMS: £45 + £46 + overage = ~£100/mo → ~£1,499/year

**The real anchor for a gas engineer using DTE AI with WhatsApp is closer to £65–100/mo, not £45.** The £45 is the headline; the real cost with channels and overage is 50–100% higher. This is important for D4 — the floor may be higher than the headline suggests.

---

## Lifecycle Coverage (Desk Assessment)

This tests D3's claim that "nobody runs the whole line unattended."

| Service | Captures lead | Books appointment | Writes quote | Sends invoice | Chases payment | Takes payment | Annual service loop | Furthest step (1-9) |
|---|---|---|---|---|---|---|---|---|
| Down To Earth AI | Yes | No — "you close the job" | No | No | No | No | No | 1 (capture only) |
| Answer.co.uk | Yes | No | No | No | No | No | No | 1 |
| Callout AI | Yes | Possibly | No | No | No | No | No | 1-2 |
| LeadTruffle | Yes | Yes (books into CRM) | No | No | No | No | No | 2-3 |
| Goodcall | Yes | Yes | No | No | No | No | No | 2-3 |
| Trillet | Yes | Yes (calendar integration) | No | No | No | No | No | 2-3 |
| Marlie.ai | Yes | Yes (Jobber/HCP sync) | No | No | No | No | No | 2-3 |
| Clara AI | Yes | Yes (direct booking) | No | No | No | No | No | 3 |
| Jobber AI Receptionist | Yes | Yes (native) | No (separate feature) | No (separate feature) | No | Yes (separate feature) | No | 3-4 (but AI receptionist is just step 1-3; quoting/invoicing are separate non-AI features) |
| Housecall Pro CSR AI | Yes | Yes (native) | No (separate feature) | No (separate feature) | No | Yes (separate feature) | No | 3-4 (same as Jobber) |

**D3 finding: The claim holds — at the desk pass level.** Nobody runs the full job lifecycle through AI unattended. Every AI answering service stops at lead capture or booking. Quoting, invoicing, and payment chasing are either not offered or are separate non-AI features in field service platforms. The lifecycle gap (steps 4–9) is real and unoccupied.

**Key nuance:** Jobber and Housecall Pro now have AI receptionists that handle steps 1–3 natively, and they already have quoting/invoicing/payments as non-AI features. If they make those AI-driven, D3's gap closes from the incumbent side. See Section 4.

---

## Memory Assessment

| Service | Between jobs | Between years | Appliance-level record |
|---|---|---|---|
| Down To Earth AI | Lead details captured | No | No |
| LeadTruffle | Lead details + CRM sync | No | No |
| Trillet | Call summaries | No | No |
| Clara AI | Call summaries + booking history | No | No |
| Jobber | Full customer + job history (native CRM) | Yes (job history) | No — no appliance entity |
| Housecall Pro | Full customer + job history (native CRM) | Yes (job history) | No — no appliance entity |

**D5 finding: The moat is real — at the desk pass level.** No competitor has an appliance-level memory entity. Jobber and Housecall Pro have customer/job history but nothing that records "Worcester Bosch Greenstar 30SI, serial X, installed Y, last serviced Z, next due W." This is the WERKS differentiator and it remains uncontested.

---

## Disclosure Assessment

| Service | Says it is AI | How |
|---|---|---|
| Down To Earth AI | Evasive | "Your AI receptionist" on website, but FAQ says "not a robotic chatbot" — unclear if it tells callers |
| LeadTruffle | Not stated | No disclosure policy found |
| Goodcall | Not stated | No disclosure policy found |
| Trillet | Not stated | No disclosure policy found |
| Clara AI | Not stated | No disclosure policy found |
| Jobber | Not stated | AI receptionist page doesn't mention disclosure to callers |
| Housecall Pro | Not stated | CSR AI page doesn't mention disclosure to callers |

**Finding: No competitor appears to disclose AI status to callers in their marketing.** This is a regulatory question (UK GDPR, PECR) that the buyer calls and mystery calls must test. The absence of disclosure policies in marketing does not mean they don't disclose in practice — but it's not a feature anyone is leading with.

---

## Section 4 — Incumbent Check

| Incumbent | AI messaging/call handling | Status | What it does | Pricing model allows free inclusion? |
|---|---|---|---|---|
| **Commusoft** | **Shipped (AI:den+)** | Live | AI:den handles incoming emails, job reports, and "conversational outreach for scheduling." Appears to be email/scheduling focused, not voice call answering. | Likely additive feature — Commusoft already charges per user, may include it. |
| **Jobber** | **Shipped (AI Receptionist)** | Live since Aug 2025 | 24/7 AI phone answering, lead capture, job booking, text-back. Built into Jobber platform. | Included in Jobber subscription (pricing from $29–$99/mo). AI receptionist is a paid add-on but integrated. |
| **Housecall Pro** | **Shipped (CSR AI)** | Live | 24/7 AI call answering, chat, job booking. Built into HCP. | CSR AI sold separately on top of HCP subscription ($59–$79/mo+). |
| **Simpro** | **Announced/shipping (RAIN + Cooper AI)** | Shipping July 2026 | "Over 100 AI-infused enhancements" across Simpro, AroFlo, BigChange. Includes SMS messaging, AI-driven scheduling. Not yet clear if it includes call answering. | Simpro is enterprise-priced; AI likely included in tier. |
| **Tradify** | **Shipped (SmartTools)** | Live | "SmartRead" — AI for crafting professional messages. Not call answering. Appears to be AI-assisted writing, not autonomous messaging. | Included in Tradify subscription. |
| **Fergus** | **Announced/early** | Early stages | "Stepping into AI & automation" — appears to be in early stages, not full call answering. | Not yet clear. |
| **Powered Now** | **Announced** | Early | AI-powered estimation platform mentioned, not call answering. | Not clear. |
| **Klipboard** | **Shipped (Klipboard AI)** | Live | AI for rental management and operations — "say what you need and get instant answers." Not call answering. Focused on operational AI, not customer-facing. | Built into Klipboard platform. |
| **Okappy** | **Announced** | Early | Mentions "AI agents" in their connected network concept. Not clear if this includes call answering or just job workflow automation. | Not clear. |

### Incumbent window assessment

**The window is narrower than `01_vision.md` assumes.**

- **Jobber shipped AI Receptionist in August 2025** — it's been live for nearly a year. It answers calls, books jobs, and text-backs. This is not announced or forthcoming — it's shipping.
- **Housecall Pro shipped CSR AI** — also live, answering calls and booking jobs.
- **Commusoft has AI:den+** — handling emails and scheduling outreach, though not full voice call answering yet.
- **Simpro is shipping 100+ AI features right now (July 2026)** across their three brands.

**The "not competing for the same customer" defence holds for now** — Jobber and HCP's AI receptionist is for businesses already using their software. WERKS targets the owner who never chose software. But:

1. Jobber's AI Receptionist launched at $29/mo base + AI add-on. If the add-on is cheap, the bundled cost is far below where WERKS needs to price.
2. The time-to-ship for incumbents was roughly 6–12 months from announcement to availability (Jobber announced AI features in early 2025, shipped receptionist in August 2025).
3. If an incumbent adds quoting/invoicing AI to their existing AI receptionist, D3's lifecycle gap closes from the inside — they already own steps 4–8 in their platform.

**Revised assessment for `17_roadmap.md`:** The incumbent window is not 12+ months. It is partially closed already. Jobber and HCP have shipped the step 1–3 AI. The question is how long before they add AI-driven quoting and payment chasing — and given their existing data models, that is an additive feature, not a new product. **WERKS's advantage is the customer who isn't on Jobber or HCP yet, and the appliance-level memory neither of them has.**

---

## Summary Table

| Service | Real 1st-yr cost (est.) | Voice or text | Furthest lifecycle step | Touches money | Discloses AI | Gas-smell handling | UK? |
|---|---|---|---|---|---|---|---|
| Down To Earth AI | ~£839–1,499 | Both | 1 (capture) | No | Evasive | Unknown | ✅ Yes |
| Answer.co.uk | ~£130+ (low usage) | Voice | 1 (capture) | No | Unknown | Unknown | ✅ Yes |
| Callout AI | ~£1,788+ | Voice | 1–2 | No | Unknown | Unknown | ✅ Yes |
| LeadTruffle | ~$2,748–7,848 | Voice+SMS | 2–3 (booking) | No | Not stated | Unknown | ❌ US |
| Goodcall | ~$948–2,988 | Voice | 2–3 (booking) | No | Not stated | Unknown | ❌ US |
| Trillet | ~$588–900 | Voice+SMS+WA | 2–3 (booking) | No | Not stated | Unknown | ❌ US |
| Marlie.ai | ~$588+ | Voice+SMS | 2–3 (booking) | No | Not stated | Unknown | ❌ US |
| Clara AI | ~$3,588–8,988+ | Voice | 3 (booking) | No | Not stated | Unknown | ❌ US |
| Jobber AI Receptionist | ~$348–1,188+add-on | Both | 3 (booking) | Yes (separate) | Not stated | Unknown | ❌ US-focused |
| Housecall Pro CSR AI | ~$708+add-on | Both | 3 (booking) | Yes (separate) | Not stated | Unknown | ❌ US-focused |

---

## The Three Questions This Must Answer

### 1. Where is the real price anchor?

**Partially answered.** The UK headline anchor is £45/mo (Down To Earth AI) with £299 setup. But the real cost with channels (WhatsApp, SMS) and overage is closer to £65–100/mo. The US equivalents (Trillet, Marlie) are $49/mo but serve the US market. For UK gas engineers, the real anchor is £45 headline / £65–100 actual. D4's principle (price above the answering-service anchor) holds; the floor is likely higher than the £45 headline suggests, which gives WERKS more room than `01_vision.md` assumed. **Buyer calls must verify what engineers actually pay, not just what's advertised.**

### 2. Does anyone run the whole line unattended?

**Answered at desk level: No.** No competitor runs the full job lifecycle through AI. All stop at lead capture or booking. Quoting, invoicing, payment chasing, and annual service loops are either absent or are separate non-AI features in field service platforms. **D3's differentiation is real and confirmed.** The risk is incumbents adding AI to their existing quoting/invoicing features — Jobber and HCP are closest to this.

### 3. How long is the incumbent window?

**Partially closed.** Jobber and Housecall Pro have already shipped AI call answering. Commusoft has AI email handling. Simpro is shipping 100+ AI features now. The window for "no incumbent has AI" is closed. The remaining window is "no incumbent has AI-driven quoting + invoicing + payment chasing + appliance memory." That window is open but narrowing — it depends on how quickly Jobber/HCP add AI to their existing quoting/invoicing workflows, which is an additive feature on data they already hold. **Recommend `17_roadmap.md` treats the incumbent window as 6–12 months for steps 1–3 (already closed) and 12–18 months for steps 4–8 (open but at risk).**

---

## What This Cannot Tell You

- **What engineers will actually pay** — competitor pricing is what sellers ask, not what buyers accept. Buyer calls needed.
- **Whether AI answering actually works on a real call** — mystery calls needed.
- **Gas-smell handling** — must be tested by calling. No competitor publishes this.
- **Acquisition cost** — untouched by this work.
- **A snapshot only** — this market is moving fast. Date every finding.

---

## Recommended Next Steps

1. **Buyer calls (Section 2 of protocol)** — call Down To Earth AI, Callout AI, LeadTruffle, and one more. Ask the 10 questions. Most important: question 2 (what happens after lead capture) and question 9 (can I see a transcript).
2. **Mystery calls (Section 3)** — call Down To Earth AI, Callout AI, and one US service. Run the gas-smell scenario. This is the single highest-value test in the protocol.
3. **Feed findings into `19_competitor_analysis.md`** — the desk pass is done. The document can be started but cannot be finalised until buyer calls and mystery calls are complete.
4. **Flag for `18_pricing.md`** — the real UK anchor is likely £65–100/mo (with channels), not £45. This gives WERKS more pricing room than assumed.
5. **Flag for `17_roadmap.md`** — the incumbent window for steps 1–3 is closed. WERKS must reach quoting and collections quickly to stay ahead of Jobber/HCP adding AI to their existing features.
