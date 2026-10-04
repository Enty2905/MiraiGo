# Flashcard game checks

Run the frontend (`npm run dev -w frontend`) in another terminal. These checks
use a real headless browser and intercepted API responses. They do not write
to PostgreSQL and do not verify the real backend integration.

From the repository root, PowerShell:

```powershell
# Install test tooling outside the repository dependency tree.
$gameTestTools = Join-Path $env:TEMP 'miraigo-browser-tests'
npm install --prefix $gameTestTools --no-audit --no-fund playwright
$env:NODE_PATH = Join-Path $gameTestTools 'node_modules'
node frontend/e2e/flashcard-games.cjs
node --test frontend/src/utils/flashcard-games.test.js
```

The browser check uses installed Microsoft Edge. Set `BROWSER_CHANNEL=chrome`
to use installed Chrome instead, or `BASE_URL` to change the default
`http://localhost:5173` address.

Coverage: multiple matching rounds, mistakes and retry, multiple-choice feedback,
single-card retry with distractors, mode change cancellation/confirmation,
small/duplicate sets, mobile layout, existing flashcard review and runtime errors.
Game results remain in component state and do not update backend mastery.
