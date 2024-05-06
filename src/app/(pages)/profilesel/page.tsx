
import { redirect } from "next/navigation";
import React  from "react";


import Profile from "@/app/(pages)/profilesel/components/ProfileSelect";
import getSession from "@/api/actions/getSession";



export default async function profilesel() {
  const sessionData = await getSession();
  //page protection
  if (!sessionData) {
    return redirect("/");
  }

  return (
    
    <div >
       
    </div>
    
  );
}