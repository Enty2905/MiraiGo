# MiraiGo backend

Express 5 API for the MiraiGo monorepo.

## Commands

```powershell
Copy-Item .env.example .env
npm run dev
npm test
npm run lint
npm run db:setup
```

The liveness endpoint has no external dependency. The readiness endpoint
checks PostgreSQL and the handwriting service concurrently and returns `503`
when either is unavailable.

All API errors use this base shape:

```json
{
  "error": {
    "code": "STABLE_MACHINE_CODE",
    "message": "Human-readable explanation",
    "requestId": "correlation-id"
  }
}
```
