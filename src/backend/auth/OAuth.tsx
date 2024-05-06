"use client";

import { createSupabaseBrowserClient } from "@/backend/supabase/client";

export default async function OAuthLogin(oauthProvider: string) {
  const supabase = createSupabaseBrowserClient();

  if (oauthProvider === "google") {
    console.log("trying to login via google");
    const result = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
    return JSON.stringify(result);
  } else if (oauthProvider === "github") {
    console.log("trying to login via google");
    const result = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
    return JSON.stringify(result);
  } else {
    return "";
  }
}
