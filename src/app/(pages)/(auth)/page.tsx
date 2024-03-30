//import AuthForm from "@/components/auth/AuthForm";
import Home from "@/app/home/page";
import readuserSession from "@/api/supabase/actions";
import { redirect } from "next/navigation";

export default async function page() {
  const { data } = await readuserSession();

  //page protection
  if (data.session) {
    return redirect("/chat");
  }

  return (
    
      <Home/>
  
  );
}
