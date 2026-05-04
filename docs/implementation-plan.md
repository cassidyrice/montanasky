# Implementation Plan

## Version 0.1

- Keep SOPs in `/sops`.
- Use local keyword retrieval for a runnable prototype.
- Return workflow, safety checks, escalation triggers, and ticket notes.
- Do not connect live vendor systems yet.

## Version 0.2

- Add Supabase pgvector.
- Chunk SOPs into searchable sections.
- Add embeddings.
- Store query logs.
- Add source citations.

## Version 0.3

- Add workflow buttons.
- Add escalation phrase detector.
- Add SOP admin page.
- Add feedback buttons.

## Version 1.0

- Add authentication.
- Add audit logs.
- Add read-only integrations where safe.
- Keep destructive actions manual unless approval controls exist.
