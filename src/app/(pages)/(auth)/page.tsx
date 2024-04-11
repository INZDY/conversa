import AuthForm from "@/app/(pages)/(auth)/components/AuthForm";
import { redirect } from "next/navigation";
import { getSession } from "@/api/actions/getSession";

export default async function page() {
  const { data } = await getSession();

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
