import pg from 'pg';

import { env } from './env.js';

const { Pool } = pg;
let pool;

export function getPool() {
  if (!env.databaseUrl) {
    throw new Error('DATABASE_URL is not configured');
  }

  pool ??= new Pool({
    connectionString: env.databaseUrl,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: env.dependencyTimeoutMs,
  });

  return pool;
}

export async function checkDatabase() {
  const result = await getPool().query('SELECT 1 AS connected');
  return result.rows[0]?.connected === 1;
}

export async function closeDatabase() {
  if (pool) {
    await pool.end();
    pool = undefined;
  }
}
