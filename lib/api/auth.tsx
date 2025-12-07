// lib/api/auth.ts
import { LoginCredentials, Profile, RegisterCredentials } from '../models/types'
import { supabase } from '../supabase'

// Registrácia
export const register = async ({ email, password, name }: RegisterCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  // Ak registrácia prebehla, vytvor profil
  if (data.user && !error) {
    await supabase.from('profiles').insert({
      id: data.user.id,
      name: name
    })
  }

  return { data, error }
}

// Prihlásenie
export const login = async ({ email, password }: LoginCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  return { data, error }
}

// Odhlásenie
export const logout = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Získať aktuálneho používateľa
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

// Získať profil používateľa
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  return { data: data as Profile, error }
}

// Aktualizovať profil
export const updateProfile = async (userId: string, updates: Partial<Profile>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  return { data: data as Profile, error }
}