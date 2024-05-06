import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentProfile from "@/backend/actions/getCurrentProfile";
import getProfiles from "@/backend/actions/getProfiles";

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentProfile = await getCurrentProfile();
  const userProfiles = await getProfiles();

  return (
    <div className="h-full">
      <DesktopSidebar
        currentProfile={currentProfile!}
        allProfiles={userProfiles}
      />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
