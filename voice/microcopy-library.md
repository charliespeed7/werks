# Microcopy library

Ready-to-use strings, written to `voice-and-tone.md`. Placeholders in `{braces}`.

Strings marked **POLICY** are blocked on an open question in `01_vision.md`. They are written as slots with a default that is deliberately conservative, and they must be reviewed by the founder before launch rather than inherited from this file.

## Buttons

| Context | Label |
|---|---|
| Approve a draft | `Send it` |
| Approve without sending (quote, invoice) | `Approve` |
| Edit before sending | `Edit first` |
| Reject | `Don't send` |
| Dismiss a sheet | `Not now` |
| Destructive | `Delete {thing}` |
| Voice, idle | `Hold to talk` |
| Voice, review | `Use this` / `Try again` |
| Retry a failed send | `Try again` |
| Call the customer | `Call {first name}` |
| Open the thread | `See the conversation` |
| Approve everything in a batch | `Send all {n}` |

Never: Submit, Confirm, OK, Yes, No, Cancel, Continue, Get started, Learn more.

## Approval cards

**Message**
> Reply ready for **{customer}**.
> {draft body}
> `Send it` `Edit first` `Don't send`

**Quote**
> Quote ready. **{customer}**, {job description}, **£{amount}**.
> Based on {basis}. {caveat if any}.
> `Approve` `Edit first` `Don't send`

**Invoice**
> Invoice ready. **{customer}**, £{amount}, {job}.
> `Approve` `Edit first` `Don't send`

**Chase**
> {customer} is at **{n} days**. £{amount}.
> {n} chases sent. {last reply summary, or "No reply."}
> `Send the chase` `Edit first` `Leave it`

**Batch header**
> {n} waiting. Oldest since {day}.

## States

| State | Copy |
|---|---|
| Awaiting approval | `Waiting for you` |
| Approved, sending | `Sending` |
| Sent | `Sent {time}` |
| Delivered | `Delivered` |
| Read | `Read {time}` |
| Failed | `Didn't send` |
| Paid | `Paid {date}` |
| Overdue | `{n} days` |
| Booked | `{day} {time}` |
| Stopped by Werks | `Stopped` |
| Draft saved offline | `Saved on this phone` |

## Red lines

The highest-stakes copy in the product. `01_vision` D6b and D7. Categories are defined in `21_evaluation.md`; this is the presentation.

**To the customer** (single message, then nothing further on that thread)
```
If you can smell gas, leave the property and call the National Gas
Emergency Service on 0800 111 999 straight away. Do not use switches
or naked flames. We'll call you as soon as we can.
```

**To the owner** (immediate, breaks quiet hours)
```
Stopped. {customer} mentioned {trigger}.

Werks sent the emergency number and nothing else.
Nothing further will go out on this thread.

Call {customer} now. {phone}
```

**In the thread**, as a permanent inline marker
```
Werks stopped here at {time}. {reason}
```

## Voice input

| State | Copy |
|---|---|
| Idle | `Hold to talk` |
| Listening | `Listening` + running timer |
| Too quiet | `Can't hear you. Move somewhere quieter or type it.` |
| Processing | `Working it out` |
| Review | `Is this right?` |
| Nothing captured | `Didn't catch that. Try again or type it.` |
| No microphone permission | `Werks needs the microphone to take notes. Turn it on in Settings.` |
| Offline | `No signal. Saved on this phone, it'll go when you're back.` |

Never: "I'm listening", "How can I help?", "Sorry, I didn't understand that", "Please try again".

## Empty states

| Screen | Copy |
|---|---|
| Approvals, empty | **Nothing waiting.** / Werks will bring you anything that needs a decision. |
| Today, empty | **Nothing booked today.** |
| Money, all paid | **Nothing outstanding.** / Everything invoiced has been paid. |
| A customer with no history | **First job for {customer}.** / Werks will remember this one. |
| Search, no result | **Nothing found for "{query}".** |
| Offline queue, empty | **Everything's sent.** |

## Errors

| Error | Copy |
|---|---|
| Send failed | **The text to {customer} didn't send.** / {n} attempts, all failed. They haven't received anything. `Try again` `Check the number` |
| No signal | **No signal.** / Saved on this phone. It'll send when you're back. |
| Number looks wrong | **{number} isn't reachable.** / Nothing has been sent. `Check the number` |
| Calendar unavailable | **Can't reach your calendar.** / The booking is saved here and will sync when the connection is back. |
| Payment link failed | **The payment link didn't generate.** / The invoice is drafted and unsent. `Try again` |
| Werks unsure | **Werks isn't sure about this one.** / {what is missing}. `Have a look` |

## The Daily Brief

```
{Weekday} {D} {Mon}

{One sentence about money or the day.}
{One sentence about what is waiting.}
```

Examples:
> **Two quotes went out yesterday. £2,400 is still sitting at 45 days.**
> Four things are waiting for you. The oldest has been there since Monday.

> **Quiet yesterday. One enquiry, booked for Thursday.**
> Nothing is waiting.

> **£1,860 came in yesterday. Dixon paid 12 minutes after the chase.**
> Three things are waiting for you.

Rules: money first if there is money. Never open with the product's own activity. Never more than two sentences. Never an adjective about the day ("great day yesterday").

## Notifications

| Trigger | Copy |
|---|---|
| Missed call captured | **{customer or number}, {problem}** / {postcode}. Reply drafted. |
| Approvals batched | **{n} waiting for you** / Oldest: {customer}, {age}. |
| Red line | **Stopped — {customer} mentioned {trigger}** / Call {phone} now. |
| Payment received | **{customer} paid £{amount}** |
| Daily Brief | **{money sentence}** / {n} waiting. |
| Quote accepted | **{customer} accepted the quote. £{amount}.** |

Three per day maximum. Red lines are exempt and break quiet hours.

## Customer-facing messages

**Missed-call text-back**
```
Hi, this is {business}. Sorry we missed you. What's the problem and
what's the postcode? We'll come straight back to you.
```

**POLICY — out of hours.** Blocked on the 2am question in `01_vision`. Conservative default, to be replaced by an explicit policy decision:
```
Hi, this is {business}. Sorry we missed you. We're closed now and
will pick this up from {time}. If it's an emergency with gas, call
0800 111 999.
```

**Booking confirmation** (after the owner has confirmed the slot)
```
{business} here. {Day} {date} between {window} for {job}. Reply
if that doesn't work.
```

**Quote follow-up**
```
{business} here. Just checking you got the quote for {job}.
Any questions, reply here.
```

**Invoice**
```
{business} here. Invoice for {job} attached, £{amount}.
You can pay here: {link}
```

**Chase, first**
```
{business} here. Invoice for {job} is due. £{amount}. {link}
```

**Chase, later**
```
{business} here. The invoice for {job} is {n} days overdue.
£{amount}. {link} Let us know if there's a problem with it.
```

**POLICY — disclosure.** Open in `01_vision`, and partly a legal question rather than a preference. Every customer-facing message component supports an optional disclosure line, off by default, positioned as the last line of the first message in a thread:
```
Messages from this number may be sent on our behalf by an assistant.
```
This string is a placeholder. Do not ship it without a legal answer.

## Permissions and onboarding

| Moment | Copy |
|---|---|
| Microphone | **Werks needs the microphone** / So you can talk instead of typing. Nothing is recorded unless you're holding the button. |
| Notifications | **Werks needs to reach you** / Three a day at most. Anything urgent gets through. |
| Contacts | **Werks can use your contacts** / So a missed call has a name on it, not a number. |
| Calendar | **Werks needs your diary** / To see what's booked and find a slot. It won't add anything without you. |
| First run, no data | **Nothing here yet.** / Werks starts working the first time someone calls and you don't pick up. |

## Audit trail

Facts, timestamps, and the actor. No prose.

```
09:14  Missed call from 07700 900123
09:14  Text sent — "Hi, this is Whitfield Heating..."
09:21  Reply received — "No heat since last night, PE7 3RB"
09:22  Werks drafted a reply
09:26  Steve approved
09:26  Text sent
14:02  Quote drafted — £340
14:31  Steve edited and approved
14:31  Quote sent
```

Rules: 24-hour times. The owner's first name for owner actions, "Werks" for Werks actions. Every customer-facing string is stored and shown in full, never summarised. `01_vision` D6b point 3 requires the full transcript, not a summary, and that principle applies to messaging too.
