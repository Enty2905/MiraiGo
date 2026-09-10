# MiraiGo handwriting AI service

This service owns the HTTP boundary for Japanese handwriting recognition. The
base project intentionally does not ship a model checkpoint or pretend to make
predictions: liveness works immediately, while readiness and recognition stay
unavailable until a real adapter is implemented and a verified model is
provided.

## Development

```powershell
py -3.13 -m venv .venv
.venv\Scripts\python -m pip install -e ".[dev]"
Copy-Item .env.example .env
.venv\Scripts\python -m uvicorn japanese_handwriting_ai.api:app --env-file .env --reload --port 8001
```

Run checks with:

```powershell
.venv\Scripts\python -m ruff check .
.venv\Scripts\python -m pytest
```

Place checkpoints in `models/`; Git ignores common model formats.
