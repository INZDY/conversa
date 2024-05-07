import Button from "@/components/Button";
import { Profile } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface AddFriendBoxProps {
  data: Profile;
  onClose: () => void;
}

export default function AddFriendBox({ data, onClose }: AddFriendBoxProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onAdd = useCallback(
    (data: any) => {
      setIsLoading(true);
      axios
        .post(`/api/contacts/add`, data)
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
        rounded-md
        px-4
        py-2
        hover:bg-neutral-100
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
          width="50"
          height="50"
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

      <Button disabled={isLoading} onClick={() => onAdd(data)}>
        Add
      </Button>
    </div>
  );
}
