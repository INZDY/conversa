"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Input from "@/components/inputs/Input";
import { Profile } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm,SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface AddProfileProps{
  isOpen?: boolean;
  onClose: () => void;
  newProfile: Profile;
}

export function AddProfile({isOpen,onClose,newProfile}:AddProfileProps){
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState:{
      errors,
    }
  } = useForm<FieldValues>({
     
  });


  const onSubmit: SubmitHandler<FieldValues> =(data)=>{
    setIsLoading(true);
    axios.post('/api/profile/add',data)
    .then(()=>{
      router.refresh();
      onClose();
    })
    .catch(()=>toast.error('Something went wrong!'))
    .finally(()=> setIsLoading(false))

  }

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="
            text-base
            font-semibold
            leadin-7
            text-gray-900
            ">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Create New Profile
            </p>

            <div className="
            mt-10
            flex
            flex-col
            gap-y-8
            ">
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
              label="Desciption"
              id="desciption"
              errors={errors}
              required= {false}
              register={register}
              />
              
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
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              type="submit"
            >
              Create
            </Button>
          </div>

        </div>
      </form>
    </Modal>
  
  );
}