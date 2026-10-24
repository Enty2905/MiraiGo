import apiClient from './api-client'

function getErrorMessage(error) {
  if (error?.response?.data?.message) {
    return error.response.data.message
  }

  if (error?.message) {
    return error.message
  }

  return 'Không thực hiện được yêu cầu.'
}

export async function fetchMyProfile() {
  try {
    const response = await apiClient.get('/profile/me')
    return response.data?.profile || null
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}

export async function changePassword({ currentPassword, newPassword, confirmPassword }) {
  try {
    const response = await apiClient.put('/profile/password', {
      currentPassword,
      newPassword,
      confirmPassword,
    })
    return response.data
  } catch (error) {
    throw new Error(getErrorMessage(error), { cause: error })
  }
}
