const AUTH_STORAGE_KEY = 'japaneseAuth'
const AUTH_SESSION_CHANGED_EVENT = 'auth-session:changed'

function parseSession(rawValue) {
  if (!rawValue) {
    return null
  }

  try {
    const parsedValue = JSON.parse(rawValue)
    if (!parsedValue || typeof parsedValue !== 'object') {
      return null
    }

    if (
      Array.isArray(parsedValue) ||
      typeof parsedValue.token !== 'string' || !parsedValue.token.trim() ||
      !parsedValue.user || typeof parsedValue.user !== 'object' ||
      Array.isArray(parsedValue.user)
    ) {
      return null
    }

    return parsedValue
  } catch {
    return null
  }
}

function notifySessionChanged() {
  if (typeof window === 'undefined') {
    return
  }

  window.dispatchEvent(new Event(AUTH_SESSION_CHANGED_EVENT))
}

export function getAuthSession() {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return parseSession(window.localStorage.getItem(AUTH_STORAGE_KEY))
  } catch {
    return null
  }
}

export function saveAuthSession(sessionData) {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    const serialized = JSON.stringify(sessionData)
    if (!parseSession(serialized)) return false
    window.localStorage.setItem(AUTH_STORAGE_KEY, serialized)
  } catch {
    return false
  }
  notifySessionChanged()
  return true
}

export function clearAuthSession() {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
  } catch {
    return false
  }
  notifySessionChanged()
  return true
}

export function subscribeAuthSession(listener) {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const handleStorageChange = (event) => {
    if (event?.key && event.key !== AUTH_STORAGE_KEY) {
      return
    }

    listener()
  }

  window.addEventListener('storage', handleStorageChange)
  window.addEventListener(AUTH_SESSION_CHANGED_EVENT, listener)

  return () => {
    window.removeEventListener('storage', handleStorageChange)
    window.removeEventListener(AUTH_SESSION_CHANGED_EVENT, listener)
  }
}
