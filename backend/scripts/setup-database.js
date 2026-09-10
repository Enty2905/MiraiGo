import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { closeDatabase, getPool } from '../src/config/db.js';

const schemaUrl = new URL('../db/schema.sql', import.meta.url);

try {
  const schema = await readFile(fileURLToPath(schemaUrl), 'utf8');
  await getPool().query(schema);
  console.log('Database base schema applied successfully.');
} catch (error) {
  console.error('Database setup failed:', error.message);
  process.exitCode = 1;
} finally {
  await closeDatabase();
}
