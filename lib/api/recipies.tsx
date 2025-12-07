// lib/api/recipes.ts
import { Recipe } from '../models/types'
import { supabase } from '../supabase'

// Získať všetky recepty
export const getRecipes = async () => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      *,
      categories (*),
      recipe_tags (*, tags (*)),
      recipe_images (*)
    `)
  
  return { data: data as Recipe[], error }
}

// Získať jeden recept podľa ID
export const getRecipeById = async (id: number) => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      *,
      categories (*),
      recipe_tags (*, tags (*)),
      recipe_images (*)
    `)
    .eq('id', id)
    .single()
  
  return { data: data as Recipe, error }
}

// Filtrovať recepty podľa kategórie
export const getRecipesByCategory = async (categoryId: number) => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      *,
      categories (*),
      recipe_tags (*, tags (*)),
      recipe_images (*)
    `)
    .eq('category_id', categoryId)
  
  return { data: data as Recipe[], error }
}

// Filtrovať recepty podľa obtiažnosti
export const getRecipesByDifficulty = async (difficulty: string) => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      *,
      categories (*),
      recipe_tags (*, tags (*)),
      recipe_images (*)
    `)
    .eq('difficulty', difficulty)
  
  return { data: data as Recipe[], error }
}

// Filtrovať recepty podľa času prípravy
export const getRecipesByPrepTime = async (maxMinutes: number) => {
  const { data, error } = await supabase
    .from('recipes')
    .select(`
      *,
      categories (*),
      recipe_tags (*, tags (*)),
      recipe_images (*)
    `)
    .lte('prep_time_minutes', maxMinutes)
  
  return { data: data as Recipe[], error }
}

// Vytvoriť nový recept
export const createRecipe = async (recipe: Partial<Recipe>) => {
  const { data, error } = await supabase
    .from('recipes')
    .insert(recipe)
    .select()
    .single()
  
  return { data: data as Recipe, error }
}

// Aktualizovať recept
export const updateRecipe = async (id: number, updates: Partial<Recipe>) => {
  const { data, error } = await supabase
    .from('recipes')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  
  return { data: data as Recipe, error }
}

// Zmazať recept
export const deleteRecipe = async (id: number) => {
  const { error } = await supabase
    .from('recipes')
    .delete()
    .eq('id', id)
  
  return { error }
}