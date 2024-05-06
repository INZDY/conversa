import { GoAlertFill } from "react-icons/go";

function ClickProfile()
{
  console.log("Click Profile")
}

interface ExtendProps {
    visible: boolean;
    onClose: () => void;
  }

export function Extend({visible,onClose}: ExtendProps)
{
  const HandleOnClose = () =>
    {
      onClose();
    };

  if (!visible) return null;

  return(
    <div onClick= {HandleOnClose} className="fixed top-0 w-screen h-screen 
    flex justify-center items-center">

      <div className="bg-our_black mt-24 p-8 rounded w-3/4 h-3/4 overflow-y-scroll"> 
        <div className="flex p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>

        <div className="flex my-6 p-2 bg-[#D9D9D9] rounded w-full h-min ">
        <div className="w-14 h-14 bg-red-500" />
        <button onClick = {ClickProfile} className="flex items-center p-2 ml-2 text-2xl">
            Profile #1
        </button>
        </div>


        </div>

        
       
        

    </div>
  )
}
