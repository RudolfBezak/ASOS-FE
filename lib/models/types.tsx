// lib/models/types.ts

// ============================================
// USER / PROFILE
// ============================================
export interface Profile {
  id: string
  name: string | null
  avatar_url: string | null
  created_at: string
}

// ============================================
// CATEGORY
// ============================================
export interface Category {
  id: number
  name: string
  icon: string | null
}

// ============================================
// TAG
// ============================================
export interface Tag {
  id: number
  name: string
}

// ============================================
// RECIPE
// ============================================
export interface Recipe {
  id: number
  title: string
  description: string | null
  ingredients: Ingredient[]
  steps: string[]
  category_id: number | null
  difficulty: 'easy' | 'medium' | 'hard'
  prep_time_minutes: number | null
  avg_rating: number
  servings: number
  author_id: string | null
  created_at: string
  // Joined data
  categories?: Category
  recipe_tags?: RecipeTag[]
  recipe_images?: RecipeImage[]
}

export interface Ingredient {
  name: string
  amount: string
  unit: string
}

// ============================================
// RECIPE RELATIONS
// ============================================
export interface RecipeTag {
  id: number
  recipe_id: number
  tag_id: number
  tags?: Tag
}

export interface RecipeImage {
  id: number
  recipe_id: number
  image_url: string
  is_primary: boolean
  created_at: string
}

// ============================================
// SAVED RECIPE
// ============================================
export interface SavedRecipe {
  id: number
  user_id: string
  recipe_id: number
  is_favorite: boolean
  created_at: string
  recipes?: Recipe
}

// ============================================
// RATING
// ============================================
export interface Rating {
  id: number
  user_id: string
  recipe_id: number
  stars: number
  created_at: string
}

// ============================================
// REVIEW
// ============================================
export interface Review {
  id: number
  user_id: string
  recipe_id: number
  text: string
  created_at: string
  profiles?: Profile
}

// ============================================
// REPORT
// ============================================
export interface Report {
  id: number
  user_id: string
  recipe_id: number
  reason: string
  created_at: string
}

// ============================================
// AUTH
// ============================================
export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  name: string
}