"use client";

import { Profile } from "@prisma/client";
import Image from "next/image";
import Button from "../Button";
import { useCallback, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface ProfileSwitchBoxProps {
  data: Profile;
  onClose: () => void;
}

export default function ProfileSwitchBox({
  data,
  onClose,
}: ProfileSwitchBoxProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSwitch = useCallback(
    (data: any) => {
      setIsLoading(true);
      axios
        .post(`/api/profile/switch`, data)
        .then(() => {
          onClose();
          router.push("/");
          router.refresh();
        })
        .catch(() => toast.error("Something went wrong."))
        .finally(() => setIsLoading(false));
    },
    [router, onClose]
  );

  return (
    <div
      className="
        flex
        justify-between
        items-center
      "
    >
      <div
        className="
      flex
      flex-1
      flex-row
      items-center
      gap-x-10
      
    "
      >
        <Image
          width="60"
          height="60"
          className="rounded-full"
          src={data.image || "/placeholder.png"}
          alt="Avatar"
        />
        <div
          className="
          font-medium
          text-lg
        "
        >
          {data.name}
        </div>
      </div>

      <Button
        disabled={data.selected || isLoading}
        onClick={() => onSwitch(data)}
      >
        {data.selected ? "Current" : "Switch"}
      </Button>
    </div>
  );
}
