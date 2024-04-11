import createSupabaseServerClient from "../supabase/server";

export async function getSession() {
  const supabase = await createSupabaseServerClient();

  supabase.auth.getUser();
  return supabase.auth.getSession();
}
