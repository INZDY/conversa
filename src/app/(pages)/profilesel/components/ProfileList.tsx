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
      <div className="bg-background ">
        <h1 className="flex text-3xl justify-center text-center mt-8 font-bold">
          Select the Profile
        </h1>
        <AddProfile
          
          isOpen={isOpen}
          onClose={() => SetIsOpen(false)}
        />

        <button
          onClick={() => {
            SetIsOpen(true);
          }}
          className="flex justify-center items-center w-24 h-24 fixed  right-24  "
        >
          <span className="ml-2">Add Profile</span>
          <HiOutlinePlus className="w-1/4 h-1/4 " />
        </button>

        <div className="flex border-stone-950 border-2 items-center justify-center mt-48 ">
          <div className="flex flex-wrap gap-4  justify-evenly  border-2 w-2/3 ">
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
