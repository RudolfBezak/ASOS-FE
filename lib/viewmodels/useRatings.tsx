// lib/viewmodels/useRatings.ts
import { useState } from 'react'
import { addRating, getAverageRating, getUserRating } from '../api/ratings'

export const useRatings = (userId: string | undefined) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Pridať/aktualizovať hodnotenie
  const rate = async (recipeId: number, stars: number) => {
    if (!userId) return false
    
    setLoading(true)
    const { error } = await addRating(userId, recipeId, stars)
    
    if (error) {
      setError(error.message)
      setLoading(false)
      return false
    }
    
    setLoading(false)
    return true
  }

  // Získať moje hodnotenie
  const getMyRating = async (recipeId: number) => {
    if (!userId) return null
    
    const { data } = await getUserRating(userId, recipeId)
    return data?.stars || null
  }

  // Získať priemerné hodnotenie
  const getAverage = async (recipeId: number) => {
    const { average, count } = await getAverageRating(recipeId)
    return { average, count }
  }

  return {
    loading,
    error,
    rate,
    getMyRating,
    getAverage
  }
}