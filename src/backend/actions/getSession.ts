// getSession process: getUser from server, applying sess
import createClient from "../supabase/server";

export default async function getSession() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
