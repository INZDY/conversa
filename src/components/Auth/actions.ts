"use server";

import createSupabaseServerClient from "@/api/supabase/server";

import { FieldValues } from "react-hook-form";

export async function login(formData: FieldValues) {
  const supabase = await createSupabaseServerClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const result = await supabase.auth.signInWithPassword(data);

  return JSON.stringify(result);
}

export async function signup(formData: FieldValues) {
  const supabase = await createSupabaseServerClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const result = await supabase.auth.signUp(data);

  return JSON.stringify(result);
}
