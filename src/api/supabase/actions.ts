//Get session
"use server";

import React from "react";
import createSupabaseServerClient from "./server";

export default async function readuserSession() {
  const supabase = await createSupabaseServerClient();

  supabase.auth.getUser();
  return supabase.auth.getSession();
}
