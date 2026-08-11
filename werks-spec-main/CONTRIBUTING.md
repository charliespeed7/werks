# Contributing

Two people, one document queue, no branching. This works only if both of us
follow it, because the safeguards are social rather than technical.

## The protocol

**1. Pull before you start.**

```bash
git pull
```

First command of every session, before you open a file. There are no feature
branches here — we both commit to `main` — so a stale checkout means a
conflict or, worse, silently overwriting the other person's thinking.

**2. Push when you stop.**

```bash
git push
```

Last command of every session, even if the work is unfinished. A draft sitting
uncommitted on someone's laptop is invisible to the other person, and invisible
work is work that gets duplicated. Commit the half-finished document and say so
in the message.

**3. One person owns a document at a time.**

Nobody edits a document someone else is holding. Not "just a small fix", not
"while I was in there". If you think a document that isn't yours needs changing,
say so and let the owner make the change — or wait until they release it.

**4. Manifest status is the lock.**

`manifest.yaml` is the source of truth for who holds what. The status field is
not a progress report, it is a claim.

| Status | Meaning |
|---|---|
| `queued` | Free. Anyone may take it. |
| `draft` | **Held.** Someone is writing it right now. |
| `review` | **Held.** Someone is reviewing it, or it is waiting on a founder decision. |
| `approved` | Released. Settled, and now a dependency others build on. |
| `blocked` | Nobody's, and nobody can proceed until the blocker clears. |
| `deferred` | Phase 3. Do not touch without promoting it first. |

## Taking a document

Claiming is three commands, and the order matters:

```bash
git pull
python3 scripts/set_status.py docs/03_customer_persona.md draft
git commit -am "Claim 03_customer_persona" && git push
```

**Push the claim before you start writing.** This is the whole mechanism. A lock
you take and then sit on for two hours is not a lock — the other person pulls,
sees `queued`, and starts the same document. Claim first, write second.

When you finish, set the status and push again in the same way: `review` when it
needs another pair of eyes, `approved` when it is settled.

## Releasing a document you are not going to finish

If you claimed something and stopped, put it back:

```bash
python3 scripts/set_status.py docs/03_customer_persona.md queued
```

Push whatever partial work exists alongside it. A document stuck in `draft`
because someone forgot they were holding it blocks everything downstream of it,
and `next_doc.py` will not offer it to anyone.

## Picking what to work on

Don't choose by preference — the queue enforces dependencies, and a document
written before its dependencies are approved will contradict them.

```bash
python3 scripts/next_doc.py   # what's eligible now
python3 scripts/progress.py   # where the whole queue stands
```

`next_doc.py` only returns documents whose dependencies are all `approved`. If it
says the queue is dependency-blocked, the useful work is finishing whatever is
upstream, not starting something further down.

## Conflicts in manifest.yaml

`manifest.yaml` is the one file we will both touch regularly, so it is where
conflicts will happen. Two things keep them cheap:

- `set_status.py` rewrites exactly one line and preserves the rest of the file
  byte for byte, so a conflict is almost always two status changes to different
  entries — take both sides.
- Never hand-edit a status. Use the script. Hand edits reformat surrounding
  lines and turn a one-line conflict into a whole-file one.

If you do hit a conflict on the same entry, the person who claimed it first
wins, and the other person's edit was a protocol violation worth talking about
rather than silently resolving.

## Review

The person who wrote a document is not the person who approves it. Set it to
`review` and hand it over. `prompts/_review_next.md` defines what a review
covers; `prompts/_generate_next.md` defines what generation covers.

This is not bureaucracy — the failure mode these documents have is confident
internal inconsistency, and the author is the person least likely to see it.

## Commit messages

State the decision, not the diff. `git diff` already shows what changed; the
message should say what was decided and why, so that six weeks later the
reasoning is recoverable. If a commit changes a settled decision, say which one
and what overturned it.
