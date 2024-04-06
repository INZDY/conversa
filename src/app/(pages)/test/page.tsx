import SignOut from "@/components/auth/SignOut";
import readuserSession from "@/api/supabase/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function test() {
  const { data } = await readuserSession();

  //page protection
  if (!data.session) {
    return redirect("/");
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div>testing</div>
      <button className="p-2 border-2 rounded-md bg-red-300 hover:opacity-80">
        <SignOut />
      </button>
    </div>
  );
}
