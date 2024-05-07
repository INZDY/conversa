"use client";

import { Profile } from "@prisma/client";
import React, { useCallback, useState } from "react";
import EditProfile from "./EditProfile";
import Avatar from "@/components/Avatar";
import Image from "next/image";

interface ProfileListBoxProps {
  data: Profile;
}

export default function ProfileListBox({ data }: ProfileListBoxProps) {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <>
      <EditProfile
        data={data}
        isOpen={isOpen}
        onClose={() => SetIsOpen(false)}
      />
      <button
        className="
            flex 
            flex-wrap
            justify-center
            hover:opacity-90
            bg-slate-300
            shadow-lg
            rounded-3xl
            w-64
            h-96
            p-4
            border-indigo-950
            border-4
      "
        onClick={() => {
          SetIsOpen(true);
        }}
      >
        <div className="flex flex-col items-center py-6">
          <Image
            className="rounded-full border-white border-2"
            width="96"
            height="96"
            src={data.image || "/placeholder.png"}
            alt="Avatar"
          />
          <p className="mt-12 text-center text-wrap text-gray-900 font-semibold text-xl">
            {data?.name}
          </p>
          <p className=" mt-6 text-center text-wrap  text-gray-700">
            {data?.displayEmail === "" || data?.displayEmail === null
              ? "-"
              : data.displayEmail}
          </p>
          <p className=" mt-6 text-center text-wrap  text-gray-700">
            {data?.description === "" || data?.description === null
              ? "-"
              : data.description}
          </p>
        </div>
      </button>
    </>
  );
}
