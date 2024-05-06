"use client"

import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Profile } from "@prisma/client";
import ProfileSelectedBox from "./ProfileListBox";
import { profile } from "console";
import { AddProfile } from "./AddProfile";

interface ProfileListProps{
    items: Profile[]
    newProfile: Profile
}


export default function ProfileList({items,newProfile}:ProfileListProps)
{

    const [isOpen,SetIsOpen] = useState(false)
    

    return(
    <>
        <div className="bg-background">
            <h1 className = "flex text-3xl justify-center text-center mt-8 font-bold">
            Select the Profile 

            </h1>
            <AddProfile
                newProfile ={newProfile}
                isOpen={isOpen}
                onClose={()=>SetIsOpen(false)}
            
            />
            
            <button onClick = {()=> {SetIsOpen(true)}} className= "flex justify-center items-center w-24 h-24 fixed  right-24  " > 
            <span className="ml-2">Add Profile</span>
            <HiOutlinePlus className="w-1/4 h-1/4 "/>
            </button>


            <div>
                <div className = "flex flex-wrap justify-evenly mt-48 items-center" >

                {items && items.map((item)=>(
                    <ProfileSelectedBox 
                    key={item.id}
                    data = {item}/>

                    ))}

                </div>

                

            </div>
                
            </div>
        </>
    );
}