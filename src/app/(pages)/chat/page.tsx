import getSession from "@/api/actions/getSession";
import SignOut from "@/components/SignOut";
import { redirect } from "next/navigation";
import React from "react";

export default async function chat() {
  const { data } = await getSession();

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
