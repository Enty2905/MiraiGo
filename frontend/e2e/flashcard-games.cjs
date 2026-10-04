// Run with Playwright installed: node frontend/e2e/flashcard-games.cjs
// BASE_URL defaults to http://localhost:5173; BROWSER_CHANNEL defaults to msedge.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');

async function main() {
  const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const baseURL = process.env.BASE_URL || 'http://localhost:5173';
    const cards = Array.from({ length: 13 }, (_, index) => ({ id: index + 1, frontText: `Từ ${index + 1}`, backText: `Nghĩa ${index + 1}` }));
    let activeCards = cards;
    let reviews = 0;
    await page.addInitScript(() => localStorage.setItem('japaneseAuth', JSON.stringify({ token: 'e2e-only', user: { id: 1, fullName: 'Học viên kiểm thử', role: 'student' } })));
    await page.route('**/api/**', route => {
      const url = new URL(route.request().url());
      if (url.pathname.endsWith('/review')) {
        reviews++;
        return route.fulfill({ json: { review: { reviewedCards: activeCards.length } } });
      }
      return route.fulfill({ json: { set: { id: 1, title: 'Bộ thẻ kiểm thử', cardCount: activeCards.length, cards: activeCards } } });
    });
    async function open() {
      await page.goto(`${baseURL}/flashcards/1`);
      await page.getByRole('button', { name: 'Ghép cặp', exact: true }).waitFor();
    }
    async function mode(name) {
      await page.getByRole('button', { name, exact: true }).click();
    }
    async function finishMatching() {
      for (;;) {
        const labels = await page.locator('.game-pairs > div').first().locator('button:enabled').allTextContents();
        for (const label of labels) {
          const card = cards.find(item => item.frontText === label);
          await page.locator('.game-pairs').getByRole('button', { name: card.frontText, exact: true }).click();
          await page.locator('.game-pairs').getByRole('button', { name: card.backText, exact: true }).click();
        }
        const done = page.getByRole('button', { name: 'Xem kết quả', exact: true });
        if (await done.count()) { await done.click(); break; }
        await page.getByRole('button', { name: 'Vòng tiếp theo', exact: true }).click();
      }
    }
    await open();
    await mode('Ghép cặp');
    await page.getByRole('button', { name: 'Bắt đầu ghép cặp', exact: true }).click();
    const firstRound = await page.locator('.game-pairs > div').first().locator('button').allTextContents();
    const first = cards.find(card => card.frontText === firstRound[0]);
    const second = cards.find(card => card.frontText === firstRound[1]);
    await page.getByRole('button', { name: first.frontText, exact: true }).click();
    await page.getByRole('button', { name: second.backText, exact: true }).click();
    assert.match(await page.locator('.game-feedback').innerText(), /Chưa đúng/);
    await finishMatching();
    assert.equal(await page.locator('.game-review li').count(), 2);
    await page.getByRole('button', { name: 'Ôn lại 2 thẻ nhầm', exact: true }).click();
    await finishMatching();
    assert.match(await page.locator('.game-result').innerText(), /đúng tất cả/);
    console.log('PASS matching: 13 cards, wrong pair, rounds, retry mistakes.');

    page.once('dialog', dialog => dialog.dismiss());
    await mode('Chọn đáp án');
    assert.equal(await page.locator('#game-title').innerText(), 'Ghép cặp');
    page.once('dialog', dialog => dialog.accept());
    await mode('Chọn đáp án');
    await page.getByRole('button', { name: 'Bắt đầu chọn đáp án', exact: true }).click();
    for (let index = 0; index < cards.length; index++) {
      const prompt = await page.locator('.game-question h3').innerText();
      const correct = cards.find(card => card.frontText === prompt).backText;
      const options = page.locator('.game-options button');
      assert.equal(await options.count(), 4);
      const texts = await options.allTextContents();
      const optionIndex = texts.findIndex(text => index === 0 ? text.slice(1) !== correct : text.slice(1) === correct);
      await options.nth(optionIndex).click();
      assert.equal(await page.locator('.game-options button:enabled').count(), 0);
      await page.getByRole('button', { name: index === cards.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo', exact: true }).click();
    }
    assert.equal(await page.locator('.game-review li').count(), 1);
    await page.getByRole('button', { name: 'Ôn lại 1 thẻ nhầm', exact: true }).click();
    assert.equal(await page.locator('.game-options button').count(), 4);
    assert.equal(reviews, 0, 'Games must not write flashcard mastery');
    console.log('PASS choice: feedback, single answer, result, one-card retry, no API writes.');

    for (const viewport of [{ width: 390, height: 844 }, { width: 1280, height: 800 }]) {
      await page.setViewportSize(viewport);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), 'No horizontal overflow');
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await open();
    await mode('Ghép cặp');
    await page.getByRole('button', { name: 'Bắt đầu ghép cặp', exact: true }).click();
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth));
    await finishMatching();
    console.log('PASS mobile: full matching session and no horizontal overflow in either game.');

    activeCards = [cards[0], { ...cards[0], id: 100 }, { id: 101, frontText: ' ', backText: 'Trống' }];
    await open();
    await mode('Ghép cặp');
    assert.match(await page.locator('.game-intro').innerText(), /Cần ít nhất 2 thẻ/);
    assert.equal(await page.getByRole('button', { name: 'Bắt đầu ghép cặp', exact: true }).count(), 0);
    activeCards = cards.slice(0, 2);
    await open();
    await mode('Chọn đáp án');
    await page.getByRole('button', { name: 'Bắt đầu chọn đáp án', exact: true }).click();
    assert.equal(await page.locator('.game-options button').count(), 2);
    console.log('PASS small/duplicate sets: unavailable state and two choices.');

    await open();
    await page.getByRole('button', { name: /Đã thuộc/ }).last().click();
    await page.getByRole('button', { name: /Đã thuộc/ }).last().click();
    await page.getByText('Đã lưu 2 thẻ.', { exact: false }).waitFor();
    assert.equal(reviews, 1);
    await mode('Ghép cặp');
    page.once('dialog', dialog => dialog.accept());
    await mode('Ôn flashcard');
    await page.getByRole('heading', { name: 'Kết quả ôn luyện' }).waitFor();
    assert.deepEqual(errors, []);
    console.log('PASS original flashcard review still saves; no runtime errors.');
  } finally {
    await browser.close();
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
