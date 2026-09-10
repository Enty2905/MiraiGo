import { checkDatabase } from '../config/db.js';
import { env } from '../config/env.js';

async function checkAiService() {
  const response = await fetch(`${env.handwritingAiBaseUrl}/ready`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(env.dependencyTimeoutMs),
  });

  if (!response.ok) {
    throw new Error(`AI service responded with ${response.status}`);
  }

  return true;
}

async function observe(check) {
  const startedAt = performance.now();

  try {
    await check();
    return { status: 'up', latencyMs: Math.round(performance.now() - startedAt) };
  } catch {
    return { status: 'down', latencyMs: Math.round(performance.now() - startedAt) };
  }
}

export async function getReadiness() {
  const [database, handwritingAi] = await Promise.all([
    observe(checkDatabase),
    observe(checkAiService),
  ]);
  const dependencies = { database, handwritingAi };
  const isReady = Object.values(dependencies).every(({ status }) => status === 'up');

  return {
    status: isReady ? 'ready' : 'not_ready',
    dependencies,
  };
}
