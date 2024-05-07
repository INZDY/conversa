"use client";

import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Profile } from "@prisma/client";
import ProfileSelectedBox from "./ProfileListBox";
import { profile } from "console";
import { AddProfile } from "./AddProfile";

interface ProfileListProps {
  items: Profile[];
}

export default function ProfileList({ items }: ProfileListProps) {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <>
      <div className="py-24 mb-12">
        <h1 className=" flex text-5xl justify-center text-center font-bold">
          Profiles
        </h1>
        <AddProfile isOpen={isOpen} onClose={() => SetIsOpen(false)} />

        <button
          onClick={() => {
            SetIsOpen(true);
          }}
          className="
          flex 
          ustify-center 
          items-center 
          w-24 
          h-24 
          fixed 
          right-24
          rounded-3xl
          hover:bg-neutral-100
          "
        >
          <span className="ml-2">Add Profile</span>
          <HiOutlinePlus className="w-1/4 h-1/4 " />
        </button>

        <div className="flex items-center justify-center mt-20">
          <div className="flex flex-wrap gap-12 justify-around w-3/4">
            {items &&
              items.map((item) => (
                <ProfileSelectedBox key={item.id} data={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
