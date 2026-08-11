# CLAUDE.md

This repository defines WERKS, an AI business partner for small service businesses.

Always read `MASTER_CONTEXT.md` before making product or architecture changes.

## Working rules

- Use `manifest.yaml` as the document queue.
- Generate or review only one queued document per run unless explicitly instructed otherwise.
- Preserve the distinction between MVP and long-term vision.
- Prefer concrete workflows, states, events, permissions, and acceptance criteria.
- Never hide assumptions.
- Do not treat model output as trusted by default.
- Customer-facing actions must be auditable.
- High-risk or irreversible actions require explicit permission policy.
- Update the relevant document and manifest status whenever a decision changes.
