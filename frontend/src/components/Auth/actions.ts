'use server'

import createSupabaseServerClient from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


import { FieldValues } from 'react-hook-form'

export async function login(formData: FieldValues) {
  const supabase = await createSupabaseServerClient()

  const data = {
    email: formData.email,
    password: formData.password
  }

  console.log('trying to login via email')
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/chat')
}

export async function signup(formData: FieldValues) {
  const supabase = await createSupabaseServerClient()

  const data = {
    email: formData.email,
    password: formData.password
  }

  console.log('trying to signup via email')
  const result = await supabase.auth.signUp(data)

  return JSON.stringify(result);
}

export async function googleLogin() {
  const supabase = await createSupabaseServerClient()

  console.log('trying to login via google')
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {redirectTo: `http://localhost:3000/auth/callback`}
  })

  if (error) {
    redirect('/error')
  }
}