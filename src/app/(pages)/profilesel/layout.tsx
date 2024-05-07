import Sidebar from "@/components/sidebar/Sidebar";

import getProfiles from "@/backend/actions/getProfiles";
import getSession from "@/backend/actions/getSession";
import { redirect } from "next/navigation";
import ProfileList from "./components/ProfileList";

export default async function ProfileselLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionData = await getSession();
  //page protection
  if (!sessionData) {
    return redirect("/");
  }

  const profiles = await getProfiles();
  return (
    <Sidebar>
      <div className="h-full">
        {children}
        <ProfileList items={profiles} />
      </div>
    </Sidebar>
  );
}
