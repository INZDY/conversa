//Get session
"use server";

import createSupabaseServerClient from "./server";

export async function readuserSession() {
  const supabase = await createSupabaseServerClient();

  supabase.auth.getUser();
  return supabase.auth.getSession();
}

export async function getUserDetails() {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.getUser();
}
