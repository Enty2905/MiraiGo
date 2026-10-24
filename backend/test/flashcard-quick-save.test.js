const { test } = require('node:test');
const assert = require('node:assert/strict');
const { quickSaveVocabularyFlashcard } = require('../src/services/flashcard.service');

test('quickSaveVocabularyFlashcard rejects missing or empty frontText', async () => {
  await assert.rejects(
    async () => {
      await quickSaveVocabularyFlashcard('1', { frontText: '', backText: 'Xin chào' });
    },
    (err) => {
      assert.equal(err.status, 400);
      assert.match(err.message, /Mặt trước/);
      return true;
    },
  );
});

test('quickSaveVocabularyFlashcard rejects missing or empty backText', async () => {
  await assert.rejects(
    async () => {
      await quickSaveVocabularyFlashcard('1', { frontText: 'こんにちは', backText: '  ' });
    },
    (err) => {
      assert.equal(err.status, 400);
      assert.match(err.message, /Mặt sau/);
      return true;
    },
  );
});

test('quickSaveVocabularyFlashcard rejects invalid non-integer setId', async () => {
  await assert.rejects(
    async () => {
      await quickSaveVocabularyFlashcard('1', {
        frontText: 'こんにちは',
        backText: 'Xin chào',
        setId: 'invalid-id',
      });
    },
    (err) => {
      assert.equal(err.status, 400);
      assert.match(err.message, /Mã bộ flashcard phải là số nguyên dương/);
      return true;
    },
  );
});
