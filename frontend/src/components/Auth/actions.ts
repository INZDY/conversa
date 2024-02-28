'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { FieldValues } from 'react-hook-form'

export async function login(formData: FieldValues) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    // email: formData.get('email') as string,
    // password: formData.get('password') as string,
    email: formData.email,
    password: formData.password
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/chat')
}

export async function signup(formData: FieldValues) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.email,
    password: formData.password
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/chat')
}

export async function googleLogin() {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })

  if (error) {
    redirect('/error')
  }
}