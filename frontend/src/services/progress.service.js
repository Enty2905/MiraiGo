import apiClient from './api-client'

function getErrorMessage(error) {
  if (error?.response?.data?.message) {
    return error.response.data.message
  }

  if (error?.message) {
    return error.message
  }

  return 'Không tải được tiến độ.'
}

export async function fetchProgressOverview() {
  try {
    const response = await apiClient.get('/progress/overview')
    return response.data?.overview || null
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function fetchLearningActivity() {
  try {
    const response = await apiClient.get('/progress/activity')
    return response.data?.activity || null
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function fetchCompletedLessons() {
  try {
    const response = await apiClient.get('/progress/lessons')
    return Array.isArray(response.data?.completedLessons)
      ? response.data.completedLessons
      : []
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function completeLesson(payload) {
  try {
    const response = await apiClient.post('/progress/lesson-complete', payload)
    return response.data?.progress || null
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function saveLessonQuiz(payload) {
  try {
    const response = await apiClient.post('/progress/lesson-quiz', payload)
    return response.data?.progress || null
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function fetchKanaProgress(kanaType) {
  try {
    const url = kanaType ? `/progress/kana/${kanaType}` : '/progress/kana'
    const response = await apiClient.get(url)
    return response.data?.data || []
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function toggleKanaMasteredApi(kanaType, character) {
  try {
    const response = await apiClient.post('/progress/kana/toggle', { kanaType, character })
    return response.data
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function syncKanaProgressApi(kanaType, characters) {
  try {
    const response = await apiClient.post('/progress/kana/sync', { kanaType, characters })
    return response.data
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}
