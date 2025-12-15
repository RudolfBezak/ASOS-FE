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
    console.log('[register] Creating profile for user:', data.user.id)
    const { error: profileError } = await supabase.from('profiles').insert({
      id: data.user.id,
      name: name
    })

    if (profileError) {
      console.error('[register] Failed to create profile:', profileError)
      // Profil sa nepodarilo vytvoriť - snaž sa vytvoriť znova s upsert
      const { error: upsertError } = await supabase.from('profiles').upsert({
        id: data.user.id,
        name: name
      }, { onConflict: 'id' })

      if (upsertError) {
        console.error('[register] Failed to upsert profile:', upsertError)
        return {
          data,
          error: {
            message: 'Registrácia prebehla, ale nepodarilo sa vytvoriť profil. Skús sa odhlásiť a prihlásiť znova.',
            name: 'ProfileCreationError',
            status: 500
          } as any
        }
      } else {
        console.log('[register] Profile created via upsert')
      }
    } else {
      console.log('[register] Profile created successfully')
    }
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

// Zabudnuté heslo - odoslanie emailu na reset
export const sendPasswordResetEmail = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window?.location?.origin}/(auth)/reset-password` || undefined,
  })

  return { data, error }
}

// Aktualizácia hesla (po kliknutí na link v emaili)
export const updatePassword = async (newPassword: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  })

  return { data, error }
}

// Vytvoriť/Opraviť chýbajúci profil pre aktuálneho používateľa
export const ensureProfileExists = async (userId: string, name: string) => {
  console.log('[ensureProfileExists] Checking/creating profile for:', userId)

  // Najprv skontroluj, či profil existuje
  const { data: existingProfile, error: checkError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()

  if (checkError && checkError.code !== 'PGRST116') {
    console.error('[ensureProfileExists] Error checking profile:', checkError)
    return { data: null, error: checkError }
  }

  if (existingProfile) {
    console.log('[ensureProfileExists] Profile already exists')
    return { data: existingProfile as Profile, error: null }
  }

  // Profil neexistuje, vytvor ho
  console.log('[ensureProfileExists] Creating new profile...')
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      name: name
    })
    .select()
    .single()

  if (error) {
    console.error('[ensureProfileExists] Failed to create profile:', error)
  } else {
    console.log('[ensureProfileExists] Profile created successfully!')
  }

  return { data: data as Profile, error }
}