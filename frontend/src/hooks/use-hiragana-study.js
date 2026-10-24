import { useEffect, useState } from 'react'
import { useAuthSession } from './use-auth-session'
import {
  fetchKanaProgress,
  syncKanaProgressApi,
  toggleKanaMasteredApi,
} from '../services/progress.service'

const MASTERED_STORAGE_KEY = 'masteredHiragana'

function readMasteredCharacters() {
  if (typeof window === 'undefined') {
    return new Set()
  }

  const storedValue = window.localStorage.getItem(MASTERED_STORAGE_KEY)
  if (!storedValue) {
    return new Set()
  }

  try {
    const parsedValue = JSON.parse(storedValue)

    return Array.isArray(parsedValue) ? new Set(parsedValue) : new Set()
  } catch {
    return new Set()
  }
}

function persistMasteredCharacters(masteredCharacters) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(
    MASTERED_STORAGE_KEY,
    JSON.stringify(Array.from(masteredCharacters)),
  )
}

export function useHiraganaStudy(characters) {
  const { isAuthenticated } = useAuthSession()
  const [selectedCharacter, setSelectedCharacter] = useState(
    () => characters[0] || null,
  )
  const [masteredCharacters, setMasteredCharacters] = useState(
    readMasteredCharacters,
  )

  useEffect(() => {
    let isMounted = true

    if (!isAuthenticated) {
      return
    }

    async function syncWithDatabase() {
      try {
        const dbCharacters = await fetchKanaProgress('hiragana')
        if (!isMounted) return

        const localList = Array.from(readMasteredCharacters())
        const dbSet = new Set(Array.isArray(dbCharacters) ? dbCharacters : [])

        const unSynced = localList.filter((c) => !dbSet.has(c))
        if (unSynced.length > 0) {
          const result = await syncKanaProgressApi('hiragana', localList)
          if (!isMounted) return
          const updatedSet = new Set(result.masteredCharacters || [])
          setMasteredCharacters(updatedSet)
          persistMasteredCharacters(updatedSet)
        } else {
          setMasteredCharacters(dbSet)
          persistMasteredCharacters(dbSet)
        }
      } catch {
        // Fallback to local storage on error
      }
    }

    syncWithDatabase()

    return () => {
      isMounted = false
    }
  }, [isAuthenticated])

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character)
  }

  const handleToggleMastered = (character) => {
    setMasteredCharacters((previousState) => {
      const nextState = new Set(previousState)

      if (nextState.has(character)) {
        nextState.delete(character)
      } else {
        nextState.add(character)
      }

      persistMasteredCharacters(nextState)
      return nextState
    })

    if (isAuthenticated) {
      toggleKanaMasteredApi('hiragana', character).catch(() => {
        // Graceful fallback
      })
    }
  }

  const masteredCount = masteredCharacters.size
  const progressPercent =
    characters.length > 0 ? (masteredCount / characters.length) * 100 : 0

  return {
    selectedCharacter,
    masteredCharacters,
    masteredCount,
    progressPercent,
    handleSelectCharacter,
    handleToggleMastered,
  }
}
