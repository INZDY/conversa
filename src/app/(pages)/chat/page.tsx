import getSession from "@/api/actions/getSession";
import EmptyState from "@/components/EmptyState";
import SignOut from "@/components/SignOut";
import { redirect } from "next/navigation";
import React from "react";

export default async function chat() {
  const sessionData = await getSession();

  //page protection
  if (!sessionData) {
    return redirect("/");
  }

  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
      <SignOut />
    </div>
  );
}
