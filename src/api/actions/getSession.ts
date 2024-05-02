// getSession process: getUser from server, applying sess
import createSupabaseServerClient from "../supabase/server";

export default async function getSession() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
