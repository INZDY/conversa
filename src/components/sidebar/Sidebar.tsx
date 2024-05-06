'use client'

import React, { useEffect, useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import getCurrentProfile from "@/api/actions/getCurrentProfile";
import { Profile } from "@prisma/client";

// export default function Sidebar({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
export default function Sidebar(){

  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null)

  useEffect(() => {
    (async () => {
      const cur = await getCurrentProfile()
      setCurrentProfile(cur)
    })()
  }, [])
  // const currentProfile = await getCurrentProfile();
  return (
    <div className="h-full">
        <DesktopSidebar currentProfile = {currentProfile!}/>
        <MobileFooter />
      {/* <main className="lg:pl-20 h-full">{children}</main> */}
    </div>
  );
}
