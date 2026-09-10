BEGIN;

CREATE TABLE IF NOT EXISTS schema_migrations (
  version TEXT PRIMARY KEY,
  applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS app_metadata (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO schema_migrations (version)
VALUES ('0001_base')
ON CONFLICT (version) DO NOTHING;

INSERT INTO app_metadata (key, value)
VALUES ('project_name', 'MiraiGo')
ON CONFLICT (key) DO UPDATE
SET value = EXCLUDED.value, updated_at = NOW();

COMMIT;
