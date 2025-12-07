// lib/viewmodels/useReviews.ts
import { useEffect, useState } from 'react'
import { addReview, deleteReview, getRecipeReviews } from '../api/reviews'
import { Review } from '../models/types'

export const useReviews = (recipeId: number) => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Načítať recenzie
  const fetchReviews = async () => {
    setLoading(true)
    const { data, error } = await getRecipeReviews(recipeId)
    
    if (error) {
      setError(error.message)
    } else {
      setReviews(data || [])
    }
    setLoading(false)
  }

  // Pridať recenziu
  const add = async (userId: string, text: string) => {
    const { error } = await addReview(userId, recipeId, text)
    
    if (error) {
      setError(error.message)
      return false
    }
    
    await fetchReviews()
    return true
  }

  // Zmazať recenziu
  const remove = async (reviewId: number) => {
    const { error } = await deleteReview(reviewId)
    
    if (error) {
      setError(error.message)
      return false
    }
    
    await fetchReviews()
    return true
  }

  useEffect(() => {
    fetchReviews()
  }, [recipeId])

  return {
    reviews,
    loading,
    error,
    add,
    remove,
    refresh: fetchReviews
  }
}