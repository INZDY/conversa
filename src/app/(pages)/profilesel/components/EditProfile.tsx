"use client";

import { Profile } from "@prisma/client";
import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Image from "next/image";
import Modal from "@/components/Modal";
import Input from "@/components/inputs/Input";
import { CldUploadButton } from "next-cloudinary";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { error } from "console";

interface EditProfileProps{
    isOpen?: boolean;
    onClose: ()=> void;
    data: Profile;
    
}



export default function EditProfile({isOpen,onClose,data}:EditProfileProps) {

    const profileId = data.id;
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
     register,
     handleSubmit,
     setValue,
     watch,
     formState:{
        errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: data?.name,
            image: data?.image
        }
    });

    const image = watch('image');

    const handleUpload =(result: any)=>{
        setValue('image',result?.info?.secure_url,{
            shouldValidate: true
        })
    }

    const onSubmit: SubmitHandler<FieldValues>=(data)=>{
       
        const newData = {...data,profileId}
        setIsLoading(true);

        axios.post('/api/profile/edit',newData)
        .then(()=>{
            router.refresh();
            onClose();
        })
        .catch(()=> toast.error('Something went wrong!'))
        .finally(()=> setIsLoading(false))
    }

    const onDelete=useCallback((data:any)=>{
        setIsLoading(true);

        axios.post('/api/profile/delete',data)
        .then(()=>{
            router.refresh();
            onClose();
        })
        .catch(()=> toast.error('Something went wrong!'))
        .finally(()=> setIsLoading(false))
    },[router,onClose])
    
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="
                            tex-base
                            font-semibold
                            leading-7
                            text-gray-900
                        ">
                            Profile
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Edit your profile.
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
                                required={false}
                                register={register}
                            />
                        </div>
                        <label
                            className="
                            block
                            text-sm
                            font-medium
                            leading-6
                            text-gray-900
                            "
                        >
                            Photo
                        </label>
                        <div className="
                        mt-2
                        flex
                        items-center
                        gap-x-3
                        ">
                            <Image 
                                width="48"
                                height="48"
                                className="rounded-full"
                                src={image|| data?.image|| '/placeholder.png'}
                                alt="Avatar"
                            />
                            <CldUploadButton
                                options={{maxFiles:1}}
                                onSuccess={handleUpload}
                                uploadPreset="pkflhwsa"
                            >
                                <Button
                                    disabled={isLoading}
                                    secondary
                                    type="button"
                                >
                                    Change
                                </Button>

                            </CldUploadButton>

                        </div>
                    </div>
                </div>
                <div 
                className="
                    mt-6
                    flex
                    items-center
                    justify-end
                    gap-x-6
                ">

                    <Button
                        disabled={data.selected||isLoading}
                        danger
                        onClick={()=>onDelete(data)}

                    >
                        Delete
                    </Button>   
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
                        Save
                    </Button>

                </div>
            </form>

        </Modal>
    );
}