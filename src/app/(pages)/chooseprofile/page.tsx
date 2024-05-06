import getSession from "@/api/actions/getSession";
import { redirect } from "next/navigation";
import React  from "react";
import Profile from "@/components/ChooseProfile/Profile";


export default async function profile() {
  const sessionData = await getSession();
  //page protection
  if (!sessionData) {
    return redirect("/");
  }

  return (
    <div >
        <Profile />
    </div>
    
  );
}
  