// lib/viewmodels/useSaved.ts
import { useEffect, useState } from 'react'
import {
    getFavoriteRecipes,
    getSavedRecipes,
    removeSavedRecipe,
    saveRecipe,
    toggleFavorite
} from '../api/saved'
import { SavedRecipe } from '../models/types'

export const useSaved = (userId: string | undefined) => {
  const [savedRecipes, setSavedRecipes] = useState<SavedRecipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Načítať uložené recepty
  const fetchSaved = async () => {
    if (!userId) return
    
    setLoading(true)
    const { data, error } = await getSavedRecipes(userId)
    
    if (error) {
      setError(error.message)
    } else {
      setSavedRecipes(data || [])
    }
    setLoading(false)
  }

  // Načítať len obľúbené
  const fetchFavorites = async () => {
    if (!userId) return
    
    setLoading(true)
    const { data, error } = await getFavoriteRecipes(userId)
    
    if (error) {
      setError(error.message)
    } else {
      setSavedRecipes(data || [])
    }
    setLoading(false)
  }

  // Uložiť recept (swipe doprava)
  const handleSave = async (recipeId: number) => {
    if (!userId) return false
    
    const { error } = await saveRecipe(userId, recipeId)
    
    if (error) {
      setError(error.message)
      return false
    }
    
    await fetchSaved()
    return true
  }

  // Odstrániť uložený recept
  const handleRemove = async (recipeId: number) => {
    if (!userId) return false
    
    const { error } = await removeSavedRecipe(userId, recipeId)
    
    if (error) {
      setError(error.message)
      return false
    }
    
    await fetchSaved()
    return true
  }

  // Prepnúť obľúbené
  const handleToggleFavorite = async (recipeId: number, isFavorite: boolean) => {
    if (!userId) return false
    
    const { error } = await toggleFavorite(userId, recipeId, isFavorite)
    
    if (error) {
      setError(error.message)
      return false
    }
    
    await fetchSaved()
    return true
  }

  useEffect(() => {
    if (userId) {
      fetchSaved()
    }
  }, [userId])

  return {
    savedRecipes,
    loading,
    error,
    fetchSaved,
    fetchFavorites,
    save: handleSave,
    remove: handleRemove,
    toggleFavorite: handleToggleFavorite
  }
}