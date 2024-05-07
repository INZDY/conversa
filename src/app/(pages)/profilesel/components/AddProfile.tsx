"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Input from "@/components/inputs/Input";
import { Profile } from "@prisma/client";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface AddProfileProps {
  isOpen?: boolean;
  onClose: () => void;
}

export function AddProfile({ isOpen, onClose }: AddProfileProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({});

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/profile/add", data)
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2
              className="
            text-base
            font-semibold
            leadin-7
            text-gray-900
            "
            >
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Create New Profile
            </p>

            <div
              className="
            mt-10
            flex
            flex-col
            gap-y-8
            "
            >
              <Input
                disabled={isLoading}
                label="Name"
                id="name"
                errors={errors}
                required
                register={register}
              />
              <Input
                disabled={isLoading}
                label="Display Email"
                id="displayEmail"
                errors={errors}
                required={false}
                register={register}
              />
              <Input
                disabled={isLoading}
                label="Description"
                id="description"
                errors={errors}
                required={false}
                register={register}
              />
            </div>
            <label
              className="
              block
              mt-4
              text-sm
              font-medium
              leading-6
              text-gray-900
            "
            >
              Photo
            </label>
            <div
              className="
              mt-2
              flex
              items-center
              gap-x-3
            "
            >
              <Image
                width="48"
                height="48"
                className="rounded-full"
                src={image || "/placeholder.png"}
                alt="Avatar"
              />
              <CldUploadButton
                options={{ maxFiles: 1 }}
                onSuccess={handleUpload}
                uploadPreset="pkflhwsa"
              >
                <Button disabled={isLoading} secondary type="button">
                  Upload
                </Button>
              </CldUploadButton>
            </div>
          </div>

          <div
            className="
             mt-6
             flex
             items-center
             justify-end
             gap-x-6
            "
          >
            <Button
              disabled={isLoading}
              secondary
              onClick={onClose}
              type="button"
            >
              Cancel
            </Button>
            <Button disabled={isLoading} type="submit">
              Create
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}