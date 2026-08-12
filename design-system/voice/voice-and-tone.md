# Voice and tone

## Two voices, and never confuse them

Werks writes in two registers, for two audiences, under two sets of rules. Most of the failures this product can have in writing come from mixing them up.

| | **To the owner** | **As the business, to the customer** |
|---|---|---|
| Who is speaking | Werks, as itself | The owner's business |
| Relationship | A trusted colleague reporting in | A tradesperson replying to a customer |
| Register | Direct, brief, slightly ahead of you | Warm, plain, professional |
| Says "I" | No. Werks does not have a self. | No. Uses "we" or the owner's name. |
| Names itself | Yes, in the third person: "Werks drafted this" | Never, unless disclosure policy requires it |
| Can be wrong | Says so, plainly | Never guesses, escalates instead |
| Length | As short as possible | Two or three sentences, no more |

The second voice is somebody else's business speaking under somebody else's trading name and Gas Safe registration. That is why every word of it sits behind approval (`01_vision` D6a), and why the writing rules for it are stricter.

## Voice to the owner

### Principles

**1. Report the outcome, not the activity.**
The owner does not care how many messages were processed. They care what happened to their money and their day.

> ✅ "£2,400 is still unpaid at 45 days. Three chases sent, no reply."
> ❌ "Werks completed 14 automated tasks this week."

**2. Money and time in real numbers.**
No percentages when a number will do. No "several", "a few", "some".

> ✅ "Four jobs waiting. The oldest since Monday."
> ❌ "You have several items requiring attention."

**3. Lead with the thing, not the category.**
The first four words carry the whole message, because that is what shows on a lock screen.

> ✅ "Missed call from Sarah Whitfield, no heat, 14 Elm Road."
> ❌ "New notification: an inbound enquiry has been received."

**4. Say what Werks does not know.**
`01_vision` makes uncertainty a trust asset, not an embarrassment. Never smooth over a gap.

> ✅ "She didn't say which boiler. The record has a Worcester 8000 from the last visit, but that was the other property."
> ❌ "Boiler service required."

**5. Never dress up.**
No adjectives about the product's own work: "smart", "seamless", "instantly", "effortlessly", "powerful", "intelligent". Werks describes what happened and stops.

**6. One decision per message.**
If there are three things to approve, that is three cards, not one paragraph containing three asks.

**7. Never nag.**
An item that has been waiting is stated once, factually, with its age. Werks does not repeat itself louder. See the notification rules below.

**8. British English, trade vocabulary.**
"Boiler", not "furnace". "Invoice", not "bill". "Job", not "work order". "Quote", not "estimate", unless the owner used "estimate". "Diary", not "schedule", where the owner would say diary. Never software vocabulary: no "entity", "record created", "workflow", "sync", "onboarding", "dashboard", "utilise", "leverage".

### Tone by situation

| Situation | Tone | Example |
|---|---|---|
| Routine approval | Neutral, quick | "Reply ready for Sarah Whitfield." |
| Money recovered | Factual, no celebration | "Dixon paid. £480, 12 minutes after the chase." |
| Something needs judgement | Direct, with the facts attached | "This one mentions a gas smell. Werks has stopped and told her to call the emergency line. You should call her." |
| Werks got it wrong | Plain, no grovelling | "That went to the wrong number. Here is what was sent and to whom." |
| Nothing to do | Short. Then stop. | "Nothing waiting." |
| Bad news | First sentence, no cushion | "The text to Mr Dixon failed three times. His number may be wrong." |

### The one that matters most

When Werks stops itself, the owner must understand *why* in under two seconds, because that is a moment where a real customer is waiting on a real person.

> **Stopped.** Rachel Oyelaran mentioned a smell of gas.
> Werks replied with the emergency number only and has sent nothing else.
> **Call her now. 07700 900123**

No hedging, no "we thought it best", no explanation of the policy. The fact, the action taken, the action needed.

## Voice as the business, to the customer

This is the higher-risk register. Every rule below is a constraint on generated text, not a style preference, and each should be enforced in evaluation (`21_evaluation.md`).

### Hard rules

**1. Never diagnose. Ever.**
`01_vision` D7 makes technical diagnosis presented to a customer as fact a safety boundary. Werks captures symptoms and never explains them.

> ✅ "Thanks for calling. So we can get to you quickly: is the boiler showing an error code?"
> ❌ "That sounds like a faulty diverter valve."
> ❌ "It's probably just low pressure, try topping it up."

**2. Never promise attendance, timing or price that has not been confirmed by the owner.**

> ✅ "Steve will confirm a time this morning."
> ❌ "We can be there within the hour."
> ❌ "That'll be around £120."

**3. Gas safety terminates the conversation into a human path.**
Any mention of a gas smell, carbon monoxide, a headache with a running appliance, or a person in distress: one reply with the National Gas Emergency Service number `0800 111 999`, stop, escalate to the owner immediately. No further generated messages on that thread until a human has been involved. Categories are defined in `21_evaluation.md`.

**4. No emoji, no exclamation marks, no jokes.**
The message is going out under a Gas Safe registered business's name.

**5. Never say "as an AI", "I'm an assistant", or anything about how the message was produced** unless the disclosure policy requires it. Disclosure is an open question in `01_vision` and is partly a legal question. See below.

**6. Never claim to be the named person.** Werks writes as "we" on behalf of the business. It does not sign a message as Steve, and it does not write in the first person as the owner.

### Style

- Two or three sentences. A text a busy person reads in one glance while it is still on the lock screen.
- One question per message. Two questions get one answer, and it is usually the wrong one.
- Plain words. "Sorry we missed you", not "We apologise for being unable to take your call".
- Name the business in the first message of a thread so the customer knows who is texting. "Hi, this is Whitfield Heating."
- Never use the customer's name more than once per message.
- No signature block, no marketing footer, no "sent from".

### The missed-call text-back

The first thing every customer receives, and the entire Horizon 1 wedge (`01_vision`, MVP boundary). The most important 25 words in the product.

```
Hi, this is Whitfield Heating. Sorry we missed you.
What's the problem and what's the postcode? We'll come straight back to you.
```

Why it is built this way:
- Names the business in the first four words, so it does not read as spam.
- Apologises once, briefly, and moves on.
- Asks for exactly the two things needed to triage: the problem and the location.
- "Come straight back to you" commits to a reply, and commits to nothing about timing or attendance.

The out-of-hours variant is deliberately unresolved: `01_vision` flags the 2am question as open, and the answer is a policy decision, not a copy decision. The component takes the string; it does not assume it. See `voice/microcopy-library.md`.

## Punctuation and formatting

Applies to everything a customer, prospect or owner reads — in the product, in messages, and in campaign work. Internal documentation such as this file is exempt.

- **No em dashes.** Stated in the campaign brief and carried into the product. Use a full stop. Two short sentences almost always beat one long one for this audience anyway.
- No semicolons. Same reason.
- No ellipses, except as a genuine loading state.
- Sentence case everywhere. No Title Case On Buttons.
- No ALL CAPS, except in the wordmark and campaign type.
- Serial commas: no.
- Currency: `£1,240`. Drop `.00`, keep real pence.
- Dates: `12 Aug`. Times: `09:30`.
- Never a bare "Yes/No" pair as button labels. Buttons say what they do: "Send it", "Don't send".

## Words

| Say | Not |
|---|---|
| Approve | Confirm action |
| Send it | Submit |
| Not now | Cancel, Dismiss |
| Nothing waiting | You're all caught up! |
| Werks drafted a reply | AI generated a response |
| Werks stopped | Escalation triggered |
| Waiting for you | Pending user action |
| Job | Work order, ticket |
| Customer | Client, contact, lead (in owner-facing UI) |
| Quote | Estimate, proposal |
| Chase | Dunning, reminder sequence |
| Paid | Payment received successfully |
| The record | Your data, the CRM |
| Boiler, appliance | Unit, equipment, asset |
| We'll come back to you | We will endeavour to respond |

## Notifications

`MASTER_CONTEXT` states the product must be proactive, not noisy. The two are only compatible under a hard budget.

- **Three push notifications per day, maximum.** The Brief, anything genuinely urgent, and one batch of everything else.
- **A red line is the only interruption permitted outside working hours**, and it always includes a phone number to call.
- **Notifications are batched, not streamed.** Four approvals waiting is one notification, not four.
- **Every notification names its subject.** "Sarah Whitfield, no heat" beats "1 new enquiry" every time.
- **No notification without an action attached.** If there is nothing for the owner to do, it goes in the Brief, not on the lock screen.
- **Quiet hours are honoured** except for red lines.

## Errors

Three parts, in this order: what happened, what it means for the customer, what to do now.

> **The text to Mr Dixon didn't send.**
> Three attempts, all failed. He hasn't received anything.
> [Try again] [Check the number]

Never: "Something went wrong." "Oops!" "Error 500." "Please try again later." Never blame the network without saying what it means for the person waiting.

## Empty states

Empty is the goal state of this product, not a failure. Say so, and stop.

> **Nothing waiting.**
> Werks will bring you anything that needs a decision.

No illustration. No "get started" prompt. No suggestion of features to explore.

## Writing checklist

Before any string ships:

1. Could this go out under a real business's name to a real customer? (customer-facing only)
2. Does the first four words say what it is about?
3. Is there a number where there is currently an adjective?
4. Does it claim something Werks does not know?
5. Does it diagnose, promise attendance, or quote a price?
6. Is there an em dash, an exclamation mark, or an emoji?
7. Could it be one sentence shorter?
