'use client'
import {useState} from 'react';
import React from 'react';
import { FiSettings } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { RiWechatLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image'; // Import the Image component from Next.js
import logo_icon from '@/components/Assets/logo.svg';
import ProfilePicture from "@/components/Assets/Joe.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
//import readuserSession from '@/api/supabase/actions';


const Sidebar: React.FC = () => {

  const [buttonClicked, setButtonClicked] = useState(false);

  // Event handler function for button click
  const handleClick = () => {
    // Set buttonClicked state to true
    setButtonClicked(true);
    // Log message to console
    console.log('Button clicked!');
  };

  //const { data } = await readuserSession();

  return (
    <div className="flex flex-col items-center h-full min-w-24 w-24 bg-[#FFFFFF] gap-5 py-5">
  
      <button onClick={handleClick} className=''>
        <Image src={logo_icon} alt="" width={60} height={60} className='mb-3' />
      </button>
      <button onClick={handleClick} className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
      <FiHome className='w-9 h-9 mt-1 mb-0.5 text-[#9197B3]'/>
        <p className="font-medium text-sm mb-1 mt-1">Homepage</p>
      </button>
      <button onClick={handleClick} className="w-full flex flex-col items-center  hover:bg-slate-200 transition ease-out delay-100 ">
      <RiWechatLine className='w-9 h-9 mt-1 mb-0.5 text-[#9197B3]'/>
        <p className="font-medium text-sm mb-1 mt-1">Chat</p>
      </button>
      <button onClick={handleClick} className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
      <LuUser className='w-9 h-9 mt-1 mb-1 text-[#9197B3]'/>
        <p className="font-medium text-sm mb-1">Profile</p>
      </button>
      <button onClick={handleClick} className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
      <TbUsers className='w-9 h-9 mt-2 mb-1 text-[#9197B3]'/>
        <p className="font-medium text-sm mb-1">Friends</p>
      </button>
      <button onClick={handleClick} className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
        <FiSettings className='w-9 h-9 mt-2 mb-1 text-[#9197B3]'/>
        <p className="font-medium text-sm mb-1">Setting</p>
      </button>
      
      <div className='w-full h-full flex flex-col justify-end items-center'>
        
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-[#FFA78D] rounded-lg h-[70px] w-[70px]  flex justify-center items-center">
          <Image src={ProfilePicture} alt="" width={50} height={50} className="object-cover aspect-square rounded-lg" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>JOESOSEXY</DropdownMenuLabel>
        
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className='font-medium'>Change Profiles</DropdownMenuSubTrigger>
            
              <DropdownMenuSubContent>
                <DropdownMenuItem>Profile 1</DropdownMenuItem>
                <DropdownMenuItem>Profile 2</DropdownMenuItem>
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
                <DropdownMenuItem className='font-medium'>
                Log out
                <FiLogOut className='ml-2' />
                </DropdownMenuItem>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
      </DropdownMenuContent>
    </DropdownMenu>
      </div>
      
     

      
      
    </div>
  );
}

export default Sidebar;
