"use client";

import { Profile } from "@prisma/client";
import ContactBox from "./ContactBox";
import { useState } from "react";
import AddFriendModal from "./AddFriendModal";
import { HiUserAdd } from "react-icons/hi";

interface ContactListProps {
  items: Profile[];
}

export default function ContactList({ items }: ContactListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AddFriendModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <aside
        className="
            fixed
            inset-y-0
            pb-20
            lg:pb-0
            lg:left-20
            lg:w-80
            lg:block
            overflow-y-auto
            border-r
            border-gray-200
            block
            w-full
            left-0
        "
      >
        <div className="px-5">
          <div className="flex flex-row justify-between items-center">
            <div
              className="
                text-2xl
                font-bold
                text-neutral-800
                py-4
            "
            >
              People
            </div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="
            rounded-full
            p-2
            bg-gray-100
            text-gray-600
            cursor-pointer
            hover:opacity-75
            transition
          "
            >
              <HiUserAdd size={20} />
            </div>
          </div>
          {items &&
            items.map((item) => <ContactBox key={item.id} data={item} />)}
        </div>
      </aside>
    </>
  );
}
