import 'dotenv/config';

function readInteger(name, fallback) {
  const rawValue = process.env[name];

  if (rawValue === undefined || rawValue === '') {
    return fallback;
  }

  const value = Number.parseInt(rawValue, 10);
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error(`${name} must be a positive integer`);
  }

  return value;
}

const nodeEnv = process.env.NODE_ENV || 'development';
if (!['development', 'test', 'production'].includes(nodeEnv)) {
  throw new Error('NODE_ENV must be development, test, or production');
}

export const env = Object.freeze({
  nodeEnv,
  port: readInteger('PORT', 3000),
  logLevel: process.env.LOG_LEVEL || 'info',
  frontendOrigins: (process.env.FRONTEND_ORIGINS || 'http://127.0.0.1:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  databaseUrl: process.env.DATABASE_URL || '',
  handwritingAiBaseUrl: (process.env.HANDWRITING_AI_BASE_URL || 'http://127.0.0.1:8001').replace(
    /\/$/,
    '',
  ),
  dependencyTimeoutMs: readInteger('DEPENDENCY_TIMEOUT_MS', 3000),
});
