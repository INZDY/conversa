"use client";

import useRoutes from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";
import { Profile } from "@prisma/client";
import Avatar from "../Avatar";
import ProfileSwitchModal from "./ProfileSwitchModal";
import Image from "next/image";

interface DesktopSidebarProps {
  currentProfile: Profile;
  allProfiles: Profile[];
}

export default function DesktopSidebar({
  currentProfile,
  allProfiles,
}: DesktopSidebarProps) {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProfileSwitchModal
        allProfiles={allProfiles}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="
      hidden
      lg:fixed
      lg:inset-y-0
      lg:left-0
      lg:z-40
      lg:w-20
      
      lg:overflow-y-auto
      lg:bg-white
      lg:border-r-[1px]
      
      lg:flex
      lg:flex-col
      justify-between
      items-center
    "
      >
        <nav
          className="
        mt-4
        flex
        flex-col
        justify-between
        items-center
      "
        >
          <div className="mb-4">
            <Image
              width="60"
              height="60"
              src={"/conversa-logo.png"}
              alt="Logo"
            />
          </div>
          <ul
            role="list"
            className="
                flex
                flex-col
                items-center
                space-y-1
            "
          >
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav
          className="
        mt-4
        flex
        flex-col
        justify-between
        items-center
    "
        >
          <div
            onClick={() => setIsOpen(true)}
            className="
          cursor-pointer
          hover:opacity-75
          transition
      "
          >
            <Avatar profile={currentProfile} />
          </div>
        </nav>
      </div>
    </>
  );
}
