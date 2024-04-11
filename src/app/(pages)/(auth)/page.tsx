import AuthForm from "@/app/(pages)/(auth)/components/AuthForm";
import { readUserSession } from "@/api/supabase/actions";
import { redirect } from "next/navigation";

export default async function page() {
  const { data } = await readUserSession();

  //page protection
  if (data.session) {
    return redirect("/chat");
  }

  return (
    <div
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px6 
        lg:px-8 
        bg-gray-700
      "
    >
      <AuthForm />
    </div>
  );
}
