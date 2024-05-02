"use client";

import useOtherUser from "@/hooks/useOtherUser";
import { Conversation, Profile } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";

interface HeaderProps {
  conversation: Conversation & {
    people: Profile[];
  };
}

export default async function Header({ conversation }: HeaderProps) {
  const otherUser = await useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.people.length} members`;
    }

    return "Active";
  }, [conversation]);

  return (
    <div
      className="
    bg-white
    w-full
    flex
    border-b-[1px]
    sm:px-4
    py-3
    px-4
    lg:px-6
    justify-between
    items-center
    shadow-sm
  "
    >
      <div className="flex gap-3 items-center">
        <Link
          className="
            lg:hidden
            block
            text-sky-500
            hover:text-sky-600
            transition
            cursor-pointer
        "
          href="/chat"
        >
          <HiChevronLeft size={32} />
        </Link>
        {/* <Avatar user={otherUser} /> */}
        <div className="flex flex-col">
          <div>{conversation.name || otherUser.name}</div>
          <div
            className="
                text-sm
                font-light
                text-neutral-500
            "
          >
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        onClick={() => {}}
        className="
        text-sky-500
        cursor-pointer
        hover:text-sky-600
        transition
      "
      />
    </div>
  );
}
