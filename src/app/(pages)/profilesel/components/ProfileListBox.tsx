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
        <div  className = "flex flex-wrap justify-evenly items-center">
            
            <div>
            <EditProfile
                data ={data}
                isOpen={isOpen}
                onClose={()=>SetIsOpen(false)}
            
            />
            <div className="flex flex-col items-center bg-blue-950 border-2 p-6 w-48 h-48 rounded-md">

                <button onClick= {()=> {SetIsOpen(true)}}  >

                <div className="flex justify-center items-center">
                    <Image width="64" height="64" src={data.image||"/placeholder.png"} alt="Avatar"/>
                </div>
                
                </button>
                <p className=" mt-6 text-center  text-gray-50 border-2">
                    {data?.name}
                </p>
            </div>
            </div>
           
        </div>
    );

}

