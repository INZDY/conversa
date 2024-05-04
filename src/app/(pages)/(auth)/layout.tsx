import { Toaster } from "react-hot-toast";
import getSession from "@/backend/actions/getSession";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionData = await getSession();
  if (sessionData) {
    return redirect("/chat");
  }

  return (
      <div className={'h-full'}>
        {children}
        <Toaster />
      </div>
  );
}
