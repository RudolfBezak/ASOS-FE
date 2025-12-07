// lib/api/saved.ts
import { SavedRecipe } from '../models/types'
import { supabase } from '../supabase'

// Uložiť recept (swipe doprava)
export const saveRecipe = async (userId: string, recipeId: number) => {
  const { data, error } = await supabase
    .from('saved_recipes')
    .insert({
      user_id: userId,
      recipe_id: recipeId,
      is_favorite: false
    })
    .select()
    .single()

  return { data: data as SavedRecipe, error }
}

// Získať uložené recepty používateľa
export const getSavedRecipes = async (userId: string) => {
  const { data, error } = await supabase
    .from('saved_recipes')
    .select(`
      *,
      recipes (
        *,
        categories (*),
        recipe_images (*)
      )
    `)
    .eq('user_id', userId)

  return { data: data as SavedRecipe[], error }
}

// Získať obľúbené recepty
export const getFavoriteRecipes = async (userId: string) => {
  const { data, error } = await supabase
    .from('saved_recipes')
    .select(`
      *,
      recipes (
        *,
        categories (*),
        recipe_images (*)
      )
    `)
    .eq('user_id', userId)
    .eq('is_favorite', true)

  return { data: data as SavedRecipe[], error }
}

// Prepnúť obľúbené
export const toggleFavorite = async (userId: string, recipeId: number, isFavorite: boolean) => {
  const { data, error } = await supabase
    .from('saved_recipes')
    .update({ is_favorite: isFavorite })
    .eq('user_id', userId)
    .eq('recipe_id', recipeId)
    .select()
    .single()

  return { data: data as SavedRecipe, error }
}

// Odstrániť uložený recept
export const removeSavedRecipe = async (userId: string, recipeId: number) => {
  const { error } = await supabase
    .from('saved_recipes')
    .delete()
    .eq('user_id', userId)
    .eq('recipe_id', recipeId)

  return { error }
}