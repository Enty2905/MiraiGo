const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  getKanaProgress,
  toggleKanaMastered,
  syncKanaProgressBatch,
} = require('../src/services/progress.service');

test('getKanaProgress rejects invalid kanaType', async () => {
  await assert.rejects(
    async () => {
      await getKanaProgress('1', 'invalid-kana');
    },
    (err) => {
      assert.equal(err.status, 400);
      assert.match(err.message, /hiragana hoặc katakana/);
      return true;
    },
  );
});

test('toggleKanaMastered rejects missing or empty character', async () => {
  await assert.rejects(
    async () => {
      await toggleKanaMastered('1', { kanaType: 'hiragana', character: '   ' });
    },
    (err) => {
      assert.equal(err.status, 400);
      assert.match(err.message, /Ký tự kana không được để trống/);
      return true;
    },
  );
});

test('toggleKanaMastered rejects unsupported kanaType', async () => {
  await assert.rejects(
    async () => {
      await toggleKanaMastered('1', { kanaType: 'romaji', character: 'a' });
    },
    (err) => {
      assert.equal(err.status, 400);
      assert.match(err.message, /hiragana hoặc katakana/);
      return true;
    },
  );
});

test('syncKanaProgressBatch rejects unsupported kanaType', async () => {
  await assert.rejects(
    async () => {
      await syncKanaProgressBatch('1', { kanaType: 'kanji', characters: ['日'] });
    },
    (err) => {
      assert.equal(err.status, 400);
      assert.match(err.message, /hiragana hoặc katakana/);
      return true;
    },
  );
});
