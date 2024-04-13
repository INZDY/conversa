import { CgHome } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { LiaFacebookSquare } from "react-icons/lia";
import Sidebar from "@/components/sidebar/Sidebar";
import ProfilePic from "@/components/Assets/Joe.png"
import Birthday from "@/components/Assets/HBD.svg"
import learn from "@/components/Assets/Study.svg"
import Image from "next/image";



function Profile() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="w-full flex gap-5 justify-center bg-gray-100 max-md:flex-wrap">
        <div className="flex flex-col my-auto max-md:max-w-full ">
        <header className="items-start px-6 pt-9 pb-24 text-3xl font-semibold text-white rounded-xl border border-white border-solid bg-zinc-800 max-md:px-5 max-md:max-w-full">
          MY PROFILE
        </header>
        <main className="flex justify-center items-center px-16 py-20 mt-14 bg-white rounded-xl border-2 border-gray-200 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[1147px]">
            <section className="self-center max-w-full w-[505px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
               
                <div className="flex max-w-full w-[1147px] gap-20 justify-center">
                <Image src={ProfilePic} alt="" width={186} height={186} className="rounded-full object-cover aspect-square"  />
                  <h1 className="self-stretch my-auto text-4xl font-bold text-neutral-800 text-opacity-90 max-md:mt-10">
                    JOESOSEXY
                  </h1>
                </div>
                

              </div>
            </section>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                

                <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start py-7 pr-20 pl-5 rounded-md border border-solid shadow-sm border-black border-opacity-10 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-xl font-semibold text-neutral-800 text-opacity-90 mb-2">Intro</h2>
                    
                    <div className="flex gap-4 mt-2.5 max-w-full w-[250px]">
                      <Image src={learn} alt="" width={40} height={40}  />
                      <div className="flex-auto text-lg font-medium text-stone-900 text-opacity-70">Studied at Hogwarts</div>
                    </div>
                    <div className="flex gap-4 mt-2.5 max-w-full w-[250px]">
                    <CgHome className="w-7 h-7"/>
                      <div className="flex-auto text-lg font-medium text-stone-900 text-opacity-70">Lived at Knowhere</div>
                    </div>
                    <div className="flex gap-4 mt-2.5 max-w-full w-[250px]">
                    <Image src={Birthday} alt="" width={35} height={35}  />
                      <div className="flex-auto text-lg font-medium text-stone-900 text-opacity-70">12/12/2121</div>
                    </div>
                    <div className="flex gap-4 mt-2.5 max-w-full w-[250px]">
                    <BsInstagram className="w-7 h-7"/>
                      <div className="flex-auto text-lg font-medium text-stone-900 text-opacity-70">jj_jj_j</div>
                    </div>
                    <div className="flex gap-4 mt-2.5 max-w-full w-[250px]">
                    <LiaFacebookSquare className="w-10 h-10"/>
                      <div className="flex-auto text-lg font-medium text-stone-900 text-opacity-70">Joe eiei</div>
                    </div>
                  </div>
                </section>


                <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 pt-7 pb-20 rounded-md border border-solid shadow-sm border-black border-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-xl font-medium text-indigo-900 max-md:max-w-full">
                      <span className="font-semibold text-neutral-800">About</span>{" "}
                      <span className="font-semibold text-indigo-900">JOESOSEXY</span>
                    </h2>
                    <p className="mt-11 text-lg tracking-normal text-zinc-700 text-opacity-80 max-md:mt-10 max-md:max-w-full">
                      Ayo! I'm Joe. I'm a friendly person na eiei You guy can feel free to talk to me nice 2 meet you all :D
                    </p>
                  </div>
                </section>

                
              </div>
            </div>
          </div>
        </main>
      </div>
      </div>
    </div>
  );
}

export default Profile;