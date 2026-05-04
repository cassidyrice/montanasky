# MontanaSky Support Copilot

Starter repo for an internal MontanaSky help desk support copilot.

This project is built around markdown SOPs, structured support workflows, and a future RAG layer for searchable troubleshooting guidance.

## Purpose

The tool is intended to help support staff quickly answer:

- What workflow applies to this ticket?
- Which system should be checked first?
- What information needs to be verified?
- What actions are safe?
- When should the issue be escalated?
- What should the ticket note say?

## Current contents

```text
app/        Next.js app scaffold
sops/       SOP markdown knowledge base
scripts/    SOP ingestion scripts
supabase/   Future pgvector schema
docs/       Implementation and security notes
```

## MVP behavior

The first version should use local markdown SOPs as the knowledge source. Live integrations with Admin, Radius, UISP, Plume, Tarana, cnMaestro, and CPE Inventory should come later after the manual workflow assistant is reliable.

## Suggested build order

1. Run the local Next.js app.
2. Test local keyword retrieval against `/sops`.
3. Add OpenAI or Anthropic API answering.
4. Add Supabase pgvector storage.
5. Add source citations.
6. Add authentication.
7. Add read-only integrations.
8. Add controlled write actions only after permissions and audit logging exist.

## Safety rule

Do not allow the AI to directly delete Radius, PPPoE, DHCP, UISP, or CPE records in the first version. The first production version should advise, document, and guide. Destructive actions should stay manual until permissioning and audit logs are built.
