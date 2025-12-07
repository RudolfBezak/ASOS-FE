// lib/viewmodels/useRecipes.ts
import { useEffect, useState } from 'react'
import { getRecipeById, getRecipes, getRecipesByCategory } from '../api/recipies'
import { Recipe } from '../models/types'

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRecipes = async () => {
    setLoading(true)
    const { data, error } = await getRecipes()
    
    if (error) {
      setError(error.message)
    } else {
      setRecipes(data || [])
    }
    setLoading(false)
  }

  const filterByCategory = async (categoryId: number) => {
    setLoading(true)
    const { data, error } = await getRecipesByCategory(categoryId)
    
    if (error) {
      setError(error.message)
    } else {
      setRecipes(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return {
    recipes,
    loading,
    error,
    fetchRecipes,
    filterByCategory
  }
}

export const useRecipe = (id: number) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data, error } = await getRecipeById(id)
      
      if (error) {
        setError(error.message)
      } else {
        setRecipe(data)
      }
      setLoading(false)
    }

    fetchRecipe()
  }, [id])

  return { recipe, loading, error }
}