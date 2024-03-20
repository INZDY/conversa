import AuthForm from "@/components/auth/AuthForm";
import readuserSession from "@/api/supabase/actions";
import { redirect } from "next/navigation";

export default async function page() {
  const { data } = await readuserSession();

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
