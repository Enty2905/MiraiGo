# MiraiGo frontend

React/Vite interface with Tailwind CSS. During development, requests beginning
with `/api` are proxied to the Express service.

```powershell
Copy-Item .env.example .env
npm run dev
npm test
npm run lint
npm run build
```

The initial screen is intentionally a system-ready shell rather than an
implementation of unapproved product flows.
