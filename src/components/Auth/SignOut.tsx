import createSupabaseServerClient from "@/api/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

export default function SignOut() {
  const Logout = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect("/");
  };
  return (
    <form action={Logout}>
      <button>SignOut</button>
    </form>
  );
}
