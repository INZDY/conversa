"use client";


import { Profile } from "@prisma/client";
import React, { useCallback, useState } from "react";
import EditProfile from "./EditProfile";
import Avatar from "@/components/Avatar";
import Image from "next/image";


interface ProfileListBoxProps{
    data: Profile
}


export default function ProfileListBox({data}:ProfileListBoxProps){
    
    const [isOpen,SetIsOpen] = useState(false)

    return(
        <div  className = "flex justify-evenly items-center">
            <div>
            <EditProfile
                data ={data}
                isOpen={isOpen}
                onClose={()=>SetIsOpen(false)}
            
            />
            <div className="flex justify-center items-center justify-center bg-red-500 ">

                <button onClick= {()=> {SetIsOpen(true)}}  >
                
                    <Image width="60" height="60" src={data.image||"/placeholder.png"} alt="Avatar"/>
                </button>
                <p className=" mt-2 text-center">
                    {data?.name}
                </p>
            </div>
            </div>
            
        </div>
    );

}

