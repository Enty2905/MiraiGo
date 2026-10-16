# MiraiGo backend

Express API backed by PostgreSQL. From the repository root:

```powershell
npm install
Copy-Item backend/.env.example backend/.env
docker compose up -d postgres
npm run db:setup -w backend
npm run dev -w backend
```

Copy the example only for a new setup; preserve an existing `.env`. The sample
database credentials match the development defaults in `compose.yaml`.
`db:setup` creates domain tables and inserts or updates learning seed data;
run it against a development database, not an existing production database.

The default URL is `http://localhost:5000/api`. `GET /api/health` checks database
connectivity. Authenticated routes require `Authorization: Bearer <token>`;
admin routes additionally check the current user's role and active status.

Set a private `AUTH_SECRET` before deployment. Production token signing fails
when it is absent. AI chat requires `GROQ_API_KEY`; handwriting uses the service
at `HANDWRITING_AI_BASE_URL`. Keep `.env` untracked.

```powershell
npm run lint -w backend
npm test -w backend
npm run test:db -w backend
```

Backend `lint` checks JavaScript syntax. Unit tests cover tokens and password
handling without a database. `test:db` requires a configured PostgreSQL instance
and only checks connectivity; it is not an integration test of all API routes.
