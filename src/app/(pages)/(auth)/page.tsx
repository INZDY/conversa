import Home from "@/app/home/page";
import AuthForm from "@/app/(pages)/(auth)/components/AuthForm";
import readuserSession from "@/api/supabase/actions";
import { redirect } from "next/navigation";

export default async function page() {
  const { data } = await readuserSession();

  //page protection
  if (data.session) {
    return redirect("/");
  }

  return (
    <Home/>
  );
}
