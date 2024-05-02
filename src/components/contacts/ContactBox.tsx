"use client";

import { Profile } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";

import Avatar from "../Avatar";


interface ContactBoxProps{
    data: Profile
}

const ContactBox: React.FC<ContactBoxProps> = ({
    data
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(()=>{
        setIsLoading(true);

        axios.post('/api/coversations',{
            userId: data.id
        })
        .then((data)=>{
            router.push('/conversation/${data.data.id}');
        })
        .finally(()=> setIsLoading(false));
    },[data,router]);

    return(
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
            <Avatar profiles ={data}/>
            <div className="min-w-0 flex-1">
                <div className="forcus: outline-none">
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
    );
}

export default ContactBox;