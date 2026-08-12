# Approval and trust

`01_vision` D6a: *drafts everything, sends nothing without approval*. Autonomy expands per action class, against measured evidence, granted by Werks rather than switched on by the owner.

That decision makes approval the central interaction of the entire product. This document is how it is designed.

## The retention signal, and how the interface can destroy it

`01_vision` states the Horizon 1 retention signal is that **the owner approves drafts without editing them**, and that `21_evaluation.md` should measure edit rate and edit distance rather than approval clicks.

An interface can fake that signal in two ways, both fatal:

- **By making editing hard.** If editing costs three taps and a screen change, the edit rate falls and looks like trust. It is friction.
- **By making approving thoughtless.** A swipe, an autofocused button, a batch approve that hides the content: the approval rate rises and looks like trust. It is a reflex.

So the design constraint is precise, and it is unusual:

> **Approving and editing must cost roughly the same.** Approve is one tap plus a confirm. Edit is one tap into an editable field, in place, on the same card.

Only when both are cheap does the ratio between them measure anything real.

## The approval contract

Every approval surface honours all six.

**1. The full artefact, in full.**
The exact words that will be sent, never truncated, never behind "show more", never summarised. The owner is accepting responsibility for these words under their trading name and their Gas Safe registration.

**2. The context Werks used.**
What Werks knew when it wrote this: the property, the appliance, the history, the customer's own words. One line. It lets the owner check the reasoning, not just the output.

**3. Assumptions named.**
Where Werks inferred something, it says so in text: `Assumed the Worcester 8000 from the last visit.` An inference presented as a fact is the failure mode with the worst consequences here.

**4. Uncertainty stated, never scored.**
`Werks isn't sure which property this is. Two are on record for this number.` Never a percentage, never a confidence bar, never a five-star meter. A number implies a precision the system does not have, and it invites the owner to set a threshold in their head and stop reading.

**5. No pre-selection, no reflex paths.**
Approve is never focused by default, never triggered by scrolling, never a swipe, and never adjacent to the reject action. The confirm sheet re-shows the message and the recipient's number.

**6. Reversibility where it is real, honesty where it is not.**
Undo for 6 seconds where the channel allows recall. Where it does not, no Undo is offered and none is implied. The confirm sheet is the last chance, which is exactly why it is worth the tap.

## Batch approval

The one interaction that can turn approval into a reflex. Deliberately built to resist it:

- The confirm sheet lists **every** draft, in full, at reading size.
- The confirm button sits at the **bottom of that list**, not pinned. Reaching it requires scrolling past all of them.
- The batch never includes an item Werks flagged as uncertain. Those are always approved individually.
- Nothing that mentions a red-line category can ever enter a batch.

## Showing what has been earned

Under D6a, autonomy expands per action class against evidence. The owner should be able to see where each class stands, because a permission model that is invisible is not trustworthy no matter how well designed.

```
WHAT WERKS CAN DO ON ITS OWN

Text back a missed call            On its own
   214 sent · you changed 3

Reply to a booking question        You approve first
   96 approved · you changed 11

Send a quote                       You approve first
   28 approved · you changed 9

Send an invoice                    You approve first
Chase a payment                    You approve first
```

Rules for this surface:

- **These are not toggles.** They are a report of what has been earned. If an owner wants to grant more, that is a conversation with Werks, not a switch, because D6a grants autonomy against evidence rather than by preference. A switch would be a false promise about how the system works.
- The counts are the evidence, in the owner's own numbers.
- The owner can always **take autonomy back** on any class, instantly, one tap. Restricting is always available; expanding is not. Asymmetry in the safe direction.
- No percentages, no accuracy scores.

## Red lines

`01_vision` D6b and D7. Gas safety, carbon monoxide, a customer in distress. Categories are defined in `21_evaluation.md`; this is how they surface.

When Werks stops:

1. The customer gets **one** message with the National Gas Emergency Service number, and nothing further goes out on that thread.
2. The owner is notified **immediately**, breaking quiet hours, with the customer's phone number in the notification.
3. The thread carries a permanent inline marker at the point Werks stopped, with the reason.
4. The stop is never presented as an error or a failure. It is the system working. The copy says what happened and what to do, and does not apologise.

Visual treatment: critical colour, a left border on the thread, the `hand` icon, and a phone number as the primary action. Never a red banner that can be dismissed without a call being made.

## The audit trail

Every customer-facing string, stored and shown in full, forever, with a timestamp and an actor. `01_vision` D6b requires the full transcript rather than a summary for calls, and the same principle governs messaging.

Not collapsible. Not paginated. Not summarised. Not editable, including by the owner: an audit trail the owner can edit is not an audit trail, and the owner's own protection depends on it being verifiably untouched.

## Trust patterns, and their opposites

| Do | Don't | Why |
|---|---|---|
| Show the full draft | Summarise it | Approval of a summary is not approval |
| Name assumptions | Present inference as fact | The catastrophic-error asymmetry in `01_vision` |
| Say "Werks isn't sure" | Show 87% confidence | A number invites a threshold and stops the reading |
| Report what was sent | Report how many tasks ran | `01_vision` D2 and D3: outcomes, not activity |
| Make editing as cheap as approving | Bury Edit behind a screen change | It corrupts the retention signal |
| Offer Undo only where recall is real | Show a fake Undo | One discovered lie ends the relationship |
| Report earned autonomy with counts | A settings page of toggles | D6a grants autonomy against evidence |
| Stop and say why | Stop silently, or carry on | Stopping is the product working |

## The test

Before shipping any approval surface, answer this:

> If this draft went out and it was wrong, could the owner point at this screen and say "I saw exactly what it was going to say, and I sent it"?

If the answer is no, the surface is not finished.
