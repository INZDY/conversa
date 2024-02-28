//Get session
"use server";

import React from "react";
import createSupabaseServerClient from "./supabase/server";

export default async function readuserSession() {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.getSession();
}
