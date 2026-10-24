import apiClient from './api-client'
import { getAuthSession } from './auth-session.service'

function getErrorMessage(error) {
  if (error?.response?.data?.message) {
    return error.response.data.message
  }

  if (error?.message) {
    return error.message
  }

  return 'Không gửi được câu hỏi cho AI Assistant.'
}

export async function sendAssistantMessage({
  message,
  sessionId,
  level,
}) {
  try {
    const response = await apiClient.post('/assistant/chat', {
      message,
      sessionId,
      level,
    })

    return response.data
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function streamAssistantMessage({
  message,
  sessionId,
  level,
  onInit,
  onChunk,
  onDone,
  signal,
}) {
  const session = getAuthSession()
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

  const response = await fetch(`${baseUrl}/assistant/chat/stream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(session?.token ? { Authorization: `Bearer ${session.token}` } : {}),
    },
    body: JSON.stringify({ message, sessionId, level }),
    signal,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || errorData.error || 'Không thể kết nối đến Trợ lý AI.')
  }

  if (!response.body) {
    throw new Error('Trình duyệt không hỗ trợ streaming dữ liệu.')
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const blocks = buffer.split('\n\n')
    buffer = blocks.pop() || ''

    for (const block of blocks) {
      const trimmed = block.trim()
      if (!trimmed.startsWith('data:')) continue

      const payload = trimmed.slice(5).trim()
      if (payload === '[DONE]') break

      try {
        const event = JSON.parse(payload)

        if (event.type === 'init' && onInit) {
          onInit(event)
        } else if (event.type === 'chunk' && onChunk) {
          onChunk(event.delta)
        } else if (event.type === 'done' && onDone) {
          onDone(event)
        } else if (event.type === 'error') {
          throw new Error(event.error || 'Lỗi xử lý câu hỏi.')
        }
      } catch (err) {
        if (err.message && !err.message.includes('JSON')) {
          throw err
        }
      }
    }
  }
}

export async function fetchAssistantSessions() {
  try {
    const response = await apiClient.get('/assistant/sessions')

    return response.data.sessions || []
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function fetchAssistantSessionMessages(sessionId) {
  try {
    const response = await apiClient.get(`/assistant/sessions/${sessionId}`)

    return response.data
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}
