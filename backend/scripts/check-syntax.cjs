const { readdirSync } = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
let count = 0;

function checkDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) checkDirectory(filename);
    else if (/\.(?:js|cjs)$/.test(entry.name)) {
      execFileSync(process.execPath, ['--check', filename], { stdio: 'inherit' });
      count += 1;
    }
  }
}

for (const directory of ['src', 'db', 'scripts', 'test']) {
  checkDirectory(path.join(root, directory));
}
console.log(`Backend syntax check passed: ${count} files.`);
