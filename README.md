# MiraiGo

Monorepo foundation for a Vietnamese-first Japanese learning web application.
The product documents target learners from JLPT N5 to N1, with vocabulary and
Kanji retention as the central problem.

This repository currently provides the **technical base**, not the complete
product. The behavior described in `project-docs/drafts/` remains proposed
until it is explicitly approved.

## Architecture

| Area         | Stack                        | Local address           | Responsibility                    |
| ------------ | ---------------------------- | ----------------------- | --------------------------------- |
| `frontend/`  | React, Vite, Tailwind CSS    | `http://127.0.0.1:5173` | Browser interface                 |
| `backend/`   | Node.js, Express, PostgreSQL | `http://127.0.0.1:3000` | Main API and integration boundary |
| `ai/`        | Python, FastAPI              | `http://127.0.0.1:8001` | Handwriting inference boundary    |
| `rule-code/` | Shared conventions           | —                       | Repository-wide engineering rules |

The frontend proxies `/api` to Express during local development. The backend
checks PostgreSQL and the FastAPI readiness endpoint without making either
dependency part of its liveness check.

## Prerequisites

- Node.js 22.12 or newer and npm 10 or newer
- Python 3.11 or newer
- Docker Desktop (recommended for local PostgreSQL), or an existing PostgreSQL
  instance

## Quick start

### 1. Install JavaScript dependencies

```powershell
npm install
```

### 2. Configure and start PostgreSQL

```powershell
Copy-Item backend/.env.example backend/.env
docker compose up -d postgres
npm run db:setup -w backend
```

`db:setup` only creates foundational metadata tables. Domain tables will be
added with approved features instead of being inferred from draft documents.

### 3. Start the frontend and backend

```powershell
npm run dev
```

The frontend remains usable when optional dependencies are unavailable and
shows the current API connection state.

### 4. Start the AI service

```powershell
Set-Location ai
py -3.13 -m venv .venv
.venv\Scripts\python -m pip install -e ".[dev]"
Copy-Item .env.example .env
.venv\Scripts\python -m uvicorn japanese_handwriting_ai.api:app --env-file .env --reload --host 127.0.0.1 --port 8001
```

No model checkpoint is committed. `/health` works immediately; `/ready` and
`/v1/recognize` correctly return `503` until a verified model adapter is
implemented and loaded.

## Checks

Run JavaScript checks from the repository root:

```powershell
npm run check
npm run format:check
```

Run AI checks from `ai/` after installing its development dependencies:

```powershell
.venv\Scripts\python -m ruff check .
.venv\Scripts\python -m pytest
```

## Health endpoints

- `GET http://127.0.0.1:3000/api/v1/health` — Express liveness
- `GET http://127.0.0.1:3000/api/v1/health/ready` — PostgreSQL and AI readiness
- `GET http://127.0.0.1:8001/health` — FastAPI liveness
- `GET http://127.0.0.1:8001/ready` — model readiness
- `GET http://127.0.0.1:8001/docs` — generated OpenAPI interface

## Product documentation

- [Documentation index](project-docs/README.md)
- [Product workflow](project-docs/product-workflow.md)
- [Draft package v0.1](project-docs/drafts/README.md)
- [Repository instructions](AGENTS.md)

Do not treat the 12 feature groups in the draft package as approved
implementation requirements. Confirm the relevant proposal and acceptance
criteria before building a product feature.
