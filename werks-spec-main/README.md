# WERKS Build Loop

This repository scaffold is designed for Codex, Claude Code, or another coding agent to iteratively create the WERKS product specification before substantial implementation begins.

## The loop

### 1. Generate one document

In Claude Code:

```text
Read prompts/_generate_next.md and execute it.
```

In Codex:

```text
Follow prompts/_generate_next.md exactly. Create only the next queued document.
```

### 2. Review it

```text
Read prompts/_review_next.md and execute it against the current draft.
```

### 3. Founder decision

Review the file's `Open Questions`. Resolve them directly in the document or provide answers to the coding agent. Once resolved, mark the document `approved` in `manifest.yaml`.

### 4. Repeat

Run the generation prompt again. The agent selects the next queued file.

## Order

There is no separate recommended order. `manifest.yaml` is the only order, and
`scripts/next_doc.py` enforces it: a document becomes eligible only when every
entry in its `depends_on` list is `approved`. If the queue looks stuck, it is
telling you that a decision upstream has not been made yet.

Documents are grouped into three phases:

- **Phase 1** blocks MVP implementation. Twenty documents. Nothing gets built
  until these are approved.
- **Phase 2** is needed to ship and sell, not to start building.
- **Phase 3** is deferred. Do not generate these. Promote to phase 2, with a
  written reason, when the question becomes urgent.

Do not generate everything in one pass. Later documents depend on decisions made
in earlier ones, and a bulk run will create contradictions.

## Useful commands

```bash
python scripts/next_doc.py
python scripts/set_status.py docs/01_vision.md approved
python scripts/progress.py
```

## Completion rule

Specification work is complete enough to begin MVP implementation when every
phase 1 document is `approved`. `scripts/progress.py` reports this directly.

Phase 1 includes `docs/21_evaluation.md`. Nothing customer-facing ships until
that document defines the failure taxonomy, the golden set, and the red lines.
