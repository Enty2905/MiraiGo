# Shared development conventions

This directory documents conventions shared by every service. Tool-specific
configuration remains close to the application that uses it.

- Use UTF-8, LF line endings, and a final newline.
- Keep transport code (routes) separate from business logic (services).
- Read configuration from environment variables; never commit secrets.
- Return machine-readable errors with a stable `code` and human-readable
  `message`.
- Add a focused test for every bug fix and every new externally visible
  behavior.
- Do not turn proposals in `project-docs/drafts/` into product behavior until
  they are explicitly approved.
