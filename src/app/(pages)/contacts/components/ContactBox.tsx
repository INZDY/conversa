"use client";

import { Profile } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import Avatar from "@/components/Avatar";
import LoadingModal from "@/components/LoadingModal";

interface ContactBoxProps {
  data: Profile;
}

export default function ContactBox({ data }: ContactBoxProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        profileId: data.id,
      })
      .then((data) => {
        router.push(`/chat/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className="
        w-full
        relative
        flex
        items-center
        space-x-3
        bg-white
        p-3
        hover:bg-neutral-100
        rounded-lg
        transition
        cursor-pointer
    "
      >
        <Avatar profile={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div
              className="
                flex
                justify-between
                items-center
                mb-1
            "
            >
              <p
                className="
                text-sm
                font-medium
                text-gray-900
                "
              >
                {data.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
