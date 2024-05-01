'use client'

import { Profile } from "@prisma/client";
import Image from "next/image";


interface AvatarProps{
    contacts?: Profile; 
}

const Avatar: React.FC<AvatarProps> = ({
    contacts
}) =>{
    return(
        <div className="relative">
           <div
                className="
                relative
                inline-block
                rounded-full
                over-flow-hidden
                h-9
                w-9
                md:h-11
                md:w-11
                "
           >
            
           </div>
        </div>
    );
}

export default Avatar;