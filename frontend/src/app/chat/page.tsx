import SignOut from "@/components/auth/SignOut";
import readuserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function chat() {
  const { data } = await readuserSession();

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
