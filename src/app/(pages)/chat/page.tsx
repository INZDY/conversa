import getSession from "@/backend/actions/getSession";
import { redirect } from "next/navigation";
import React from "react";
import Home from "./components/Home";

export default async function chat() {
  const sessionData = await getSession();

  //page protection
  if (!sessionData) {
    return redirect("/");
  }

  return <Home />;
}
