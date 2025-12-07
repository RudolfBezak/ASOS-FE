// lib/api/reviews.ts
import { Review } from '../models/types'
import { supabase } from '../supabase'

// Pridať recenziu
export const addReview = async (userId: string, recipeId: number, text: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert({
      user_id: userId,
      recipe_id: recipeId,
      text: text
    })
    .select()
    .single()

  return { data: data as Review, error }
}

// Získať recenzie pre recept
export const getRecipeReviews = async (recipeId: number) => {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      profiles (name, avatar_url)
    `)
    .eq('recipe_id', recipeId)
    .order('created_at', { ascending: false })

  return { data: data as Review[], error }
}

// Zmazať recenziu
export const deleteReview = async (reviewId: number) => {
  const { error } = await supabase
    .from('reviews')
    .delete()
    .eq('id', reviewId)

  return { error }
}