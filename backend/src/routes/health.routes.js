import { Router } from 'express';

import { getReadiness } from '../services/readiness.service.js';

export function createHealthRouter({ readinessCheck = getReadiness } = {}) {
  const router = Router();

  router.get('/', (_request, response) => {
    response.json({
      status: 'ok',
      service: 'miraigo-backend',
      version: '0.1.0',
      timestamp: new Date().toISOString(),
    });
  });

  router.get('/ready', async (_request, response) => {
    const result = await readinessCheck();
    response.status(result.status === 'ready' ? 200 : 503).json(result);
  });

  return router;
}
