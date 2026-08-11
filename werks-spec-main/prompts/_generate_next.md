# Generate the next WERKS document

You are working inside the WERKS repository.

## Required process

1. Read `MASTER_CONTEXT.md`.
2. Read `manifest.yaml`.
3. Select the first item whose status is `queued` and whose dependencies are available.
4. Read any related approved documents.
5. Write that file using `templates/document_template.md`.
6. Be specific, commercially realistic, and implementation-aware.
7. Do not silently invent facts. Put unresolved issues under `Open Questions`.
8. Include measurable acceptance criteria.
9. Update the item's manifest status from `queued` to `draft`.
10. Stop after creating one document.

## Quality bar

The file must:
- preserve WERKS's positioning as an AI business partner for small service businesses;
- distinguish MVP from long-term vision;
- prioritise trust, auditability, time saved, and revenue recovered;
- avoid generic AI language;
- be detailed enough for later use by Codex, Claude Code, designers, and engineers.

Return a concise summary of what was created and any blocking questions.
