import { createServer } from 'node:http';

import { createApp } from './app.js';
import { closeDatabase } from './config/db.js';
import { env } from './config/env.js';

const server = createServer(createApp());

server.listen(env.port, '127.0.0.1', () => {
  console.log(`MiraiGo API listening at http://127.0.0.1:${env.port}`);
});

async function shutdown(signal) {
  console.log(`${signal} received; shutting down`);
  server.close(async (error) => {
    await closeDatabase();
    process.exitCode = error ? 1 : 0;
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
