import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import Image from 'next/image'; // Import the Image component from Next.js
import logo_icon from '@/components/Assets/logo.svg';
import home_icon from '@/components/Assets/Home.svg';
import chat_icon from '@/components/Assets/Chat.svg'
import profile_icon from '@/components/Assets/Profile.svg'
import friend_icon from '@/components/Assets/Friend.svg'
import setting_icon from '@/components/Assets/Setting.svg'

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center h-full w-28 bg-[#ffffff]-300 gap-5 py-5">
      {/* Use the Image component for your images */}
      <button className=''>
        <Image src={logo_icon} alt="" width={70} height={70} className='mb-2' />
      </button>
      <button className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
        <Image src={home_icon} alt="" width={42} height={42} className='mt-2'/>
        <p className="font-medium mb-1">Homepage</p>
      </button>
      <button className="w-full flex flex-col items-center  hover:bg-slate-200 transition ease-out delay-100 ">
        <Image src={chat_icon} alt="" width={39} height={39} className='mb-0.5 mt-3' />
        <p className="font-medium mb-1">Chat</p>
      </button>
      <button className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
        <Image src={profile_icon} alt="" width={46} height={46} className='mb-1 mt-1' />
        <p className="font-medium mb-1">Profile</p>
      </button>
      <button className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
        <Image src={friend_icon} alt="" width={44} height={44} className='mb-1 mt-2'/>
        <p className="font-medium mb-1">Friends</p>
      </button>
      <button className="w-full flex flex-col items-center hover:bg-slate-200 transition ease-out delay-100 ">
        <Image src={setting_icon} alt="" width={56} height={56} className='mt-2'/>
        <p className="font-medium mb-1">Setting</p>
      </button>

      
    </div>
  );
}

export default Sidebar;
