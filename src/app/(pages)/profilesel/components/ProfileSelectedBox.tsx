"use client";


import { Profile } from "@prisma/client";
import React, { useCallback, useState } from "react";
import Avatar from "../../../../components/Avatar";

interface ProfileSelectedBoxProps{
    data: Profile
}


const ProfileSelectedBox: React.FC<ProfileSelectedBoxProps> = ({
    data
}) =>{
    

    return(
        <div  className = "flex justify-evenly items-center">
            <div>
            <button className= "flex justify-center items-center bg-red-500 w-48 h-48" >
                <div className = "w-40 h-40 bg-white" />
            </button>
            <p className=" mt-6 text-center">
                {data.name}
            </p>
            </div>
        </div>
    );

}

export default ProfileSelectedBox;