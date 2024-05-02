import React from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentProfile from "@/api/actions/getCurrentProfile";

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentProfile = await getCurrentProfile();
  return (
    <div className="h-full">
        <DesktopSidebar currentProfile = {currentProfile!}/>
        <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
