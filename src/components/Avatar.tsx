"use client";

import { Profile } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  profile?: Profile;
}

export default function Avatar({ profile }: AvatarProps) {
  return (
    <div className="relative">
      <div
        className="
            relative
            inline-block
            rounded-full
            overflow-hidden
            h-9
            w-9
            md:h-11
            md:w-11
            "
      >
        <Image alt="Avatar" src={profile?.image || "/placeholder.png"} fill />
      </div>
      <span className="
        absolute
        block
        rounded-full
        bg-green-500
        ring-2
        ring-white
        top-0
        right-0
        h-2
        w-2
        md:h-3
        md:w-3
      "></span>
    </div>
  );
}
