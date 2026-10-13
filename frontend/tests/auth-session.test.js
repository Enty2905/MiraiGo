import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  getAuthSession, saveAuthSession, clearAuthSession, subscribeAuthSession,
} from '../src/services/auth-session.service.js'

function setupBrowser(t) {
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window')
  const browser = new EventTarget()
  const values = new Map()
  browser.localStorage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  }
  Object.defineProperty(globalThis, 'window', { configurable: true, value: browser })
  t.after(() => {
    if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow)
    else delete globalThis.window
  })
  return browser
}

test('saving and clearing a session notifies subscribers; unsubscribe removes listener', (t) => {
  setupBrowser(t)
  const session = { token: 'access-token', user: { id: '42' } }
  let updates = 0
  const unsubscribe = subscribeAuthSession(() => { updates += 1 })
  assert.equal(saveAuthSession(session), true)
  assert.deepEqual(getAuthSession(), session)
  assert.equal(clearAuthSession(), true)
  assert.equal(getAuthSession(), null)
  assert.equal(updates, 2)
  unsubscribe()
  saveAuthSession(session)
  assert.equal(updates, 2)
})

test('invalid cached session values are ignored', (t) => {
  const browser = setupBrowser(t)
  for (const raw of ['invalid-json', 'null', '[]', '{"token":{},"user":{}}',
    '{"token":" ","user":{}}', '{"token":"token","user":[]}']) {
    browser.localStorage.setItem('japaneseAuth', raw)
    assert.equal(getAuthSession(), null)
  }
  assert.equal(saveAuthSession({ token: {}, user: {} }), false)
})

test('blocked browser storage does not crash session access', (t) => {
  const browser = setupBrowser(t)
  Object.defineProperty(browser, 'localStorage', {
    get() { throw new Error('Storage blocked') },
  })
  assert.equal(getAuthSession(), null)
  assert.equal(saveAuthSession({ token: 'token', user: {} }), false)
  assert.equal(clearAuthSession(), false)
})

test('storage events from unrelated keys are ignored', (t) => {
  const browser = setupBrowser(t)
  let updates = 0
  const unsubscribe = subscribeAuthSession(() => { updates += 1 })
  const unrelated = new Event('storage')
  Object.defineProperty(unrelated, 'key', { value: 'theme' })
  browser.dispatchEvent(unrelated)
  assert.equal(updates, 0)
  browser.dispatchEvent(new Event('storage'))
  assert.equal(updates, 1)
  unsubscribe()
})
