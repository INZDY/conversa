import SignOut from "@/components/SignOut";
import readuserSession from "@/api/supabase/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function chat() {
  const { data } = await readuserSession();

  //page protection
  if (!data.session) {
    return redirect("/home");
  }

  return (
    <div>
      <div>chat</div>
      <SignOut />
    </div>
  );
}
