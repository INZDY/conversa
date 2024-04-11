import SignOut from "@/components/SignOut";
import { readUserSession } from "@/api/supabase/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function chat() {
  const { data } = await readUserSession();

  //page protection
  if (!data.session) {
    return redirect("/");
  }

  return (
    <div>
      <div>chat</div>
      <SignOut />
    </div>
  );
}
