import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Input from "@/components/inputs/Input";
import { Profile } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AddFriendBox from "./AddFriendBox";

interface AddFriendModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export default function AddFriendModal({
  isOpen,
  onClose,
}: AddFriendModalProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Profile[] | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/contacts/search", data)
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch(() => toast.error("Something went wrong."))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-black pb-5">
            <h2
              className="
                  text-base
                  font-semibold
                  leading-7
                  text-gray-900
                  underline
                "
            >
              Add friends
            </h2>
            <p
              className="
              mt-1
              text-base
              font-semibold
              leading-6
              text-gray-900
            "
            >
              Please enter your friend&apos;s name
            </p>
            <div
              className="
              mt-5
              flex
              flex-col
              gap-y-8
            "
            >
              <Input
                register={register}
                label=""
                id="name"
                disabled={isLoading}
                required
                errors={errors}
              />
            </div>
            <div className="mt-5 justify-center flex">
              <Button disabled={isLoading} type="submit">
                Search
              </Button>
            </div>
          </div>
        </div>
      </form>

      <div
        className="
        px-12
        pt-4
      "
      >
        {searchResult?.length === 0 ? (
          <div className="text-center text-gray-500">No result found</div>
        ) : (
          <div>
            {searchResult?.map((profile) => (
              <AddFriendBox key={profile.id} data={profile} onClose={onClose} />
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}
