// lib/api/ratings.ts
import { Rating } from '../models/types'
import { supabase } from '../supabase'

// Pridať hodnotenie
export const addRating = async (userId: string, recipeId: number, stars: number) => {
  const { data, error } = await supabase
    .from('ratings')
    .upsert({
      user_id: userId,
      recipe_id: recipeId,
      stars: stars
    })
    .select()
    .single()

  return { data: data as Rating, error }
}

// Získať hodnotenie používateľa pre recept
export const getUserRating = async (userId: string, recipeId: number) => {
  const { data, error } = await supabase
    .from('ratings')
    .select('*')
    .eq('user_id', userId)
    .eq('recipe_id', recipeId)
    .single()

  return { data: data as Rating, error }
}

// Získať priemerne hodnotenie receptu
export const getAverageRating = async (recipeId: number) => {
  const { data, error } = await supabase
    .from('ratings')
    .select('stars')
    .eq('recipe_id', recipeId)

  if (data && data.length > 0) {
    const avg = data.reduce((sum, r) => sum + r.stars, 0) / data.length
    return { average: Math.round(avg * 10) / 10, count: data.length, error }
  }

  return { average: 0, count: 0, error }
}