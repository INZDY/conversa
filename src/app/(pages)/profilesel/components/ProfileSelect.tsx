"use client"

import React, { useState } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import { Extend } from "./AddProfile";
import { Profile } from "@prisma/client";
import ProfileSelectedBox from "./ProfileSelectedBox";

interface ProfileListProps{
    items: Profile[]
}


export default function ProfileSelect({items}:ProfileListProps)
{
    const [ShowModal,SetShowModal] = useState(false)
    const HandleOnClose = ()=>SetShowModal(false)

    return(
    <div className="bg-background">
        <h1 className = "flex text-3xl justify-center text-center mt-8 font-bold">
        Select the Profile 
        
        </h1>
        <button onClick = {()=> {SetShowModal(true)}} className= "flex justify-center items-center w-24 h-24 fixed  right-24  " > 
        <span className="ml-2">Add Profile</span>
        <HiOutlinePlus className="w-1/4 h-1/4 "/>
        </button>
        
        <div>
            <div className = "flex justify-evenly mt-48 items-center" >

            {items && items.map((item)=>(
                <ProfileSelectedBox 
                key={item.id}
                data = {item}/>
                
                ))}

            </div>

        

        </div>
        <Extend onClose={HandleOnClose} visible={ShowModal}/>
        </div>
    );
}