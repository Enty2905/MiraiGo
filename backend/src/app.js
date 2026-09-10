import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { env } from './config/env.js';
import { errorHandler, notFoundHandler } from './middleware/error-handler.js';
import { requestContext } from './middleware/request-context.js';
import { createHealthRouter } from './routes/health.routes.js';

export function createApp(options = {}) {
  const app = express();

  app.disable('x-powered-by');
  app.use(requestContext);
  app.use(helmet());
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || env.frontendOrigins.includes(origin)) {
          callback(null, true);
          return;
        }
        const error = new Error('Origin is not allowed by CORS');
        error.status = 403;
        error.code = 'CORS_ORIGIN_DENIED';
        callback(error);
      },
    }),
  );
  app.use(express.json({ limit: '1mb' }));

  app.use('/api/v1/health', createHealthRouter(options));

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
