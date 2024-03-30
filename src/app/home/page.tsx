import React from "react";

function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#2D2D2D] overflow-x-hidden overflow-y-scroll">
      <div className="bg-[#EEF1F5] w-screen mx-auto my-auto flex justify-between items-center" style={{ height: '15%' }}>
        <div className="bg-transparent text-black flex justify-between items-center mx-auto my-auto w-10/12" style={{ height: '15%' }}>
          <div>
            {/* Icon on the left */}
            <img src="/assets/home/conversa_logo.png" style={{ paddingTop: '10%' }} />
          </div>
          <div>
            {/* Login and Sign Up buttons on the right */}
            <button className="text-black bg-transparent border border-solid border-black py-2 px-4  rounded-3xl">
              Login
            </button>
            <button className="text-black bg-transparent border border-solid border-black py-2 px-4 rounded-3xl ml-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Real-time messaging */}
      <div className="h-auto w-screen bg-[#EEF1F5] flex">
        <div className="mx-auto my-auto w-10/12 flex justify-between">
          <div className="md:w-1/2" style={{ paddingTop: '5%' }}>
            <p className="text-7xl font-bold max-md:max-w-full max-md:text-4xl">Real-time messaging</p>
            <p className="text-xl mt-16 mr-20 leading-[58px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">Conversa is the all-new way to chat with your friends in real time. Conversa will have 3 sections by default. Personal, Working and Private.</p>
            <button className="justify-center items-center px-16 py-7 mt-44 max-w-full text-2xl rounded-2xl shadow-lg w-[270px] max-md:px-5 max-md:mt-10">
              Get Started
            </button>
            <p className="mt-9 max-md:max-w-full" style={{paddingLeft:'7%'}}>no account? sign up</p>
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0 ml-auto">
            <img src="/assets/home/realtime_messaging.png" />
          </div>
        </div>
      </div>


      {/* Personal Section */}

      <div className=" bg-[#2D2D2D] relative">

        <div className="py-16 px-4 h-screen w-screen relative z-10 flex justify-end">
          <div className="md:w-1/3 order-2 md:order-2 ml-auto text-white h-auto" style={{ paddingTop: '15%' }}>
            <p className="text-4xl font-bold max-md:max-w-full">Personal Section</p>
            <p className="text-xl mt-16 mr-20 leading-[58px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">Personal section is for family and friends.</p>
          </div>
          <div className="md:w-1/2 order-1 md:order-1 mt-8 md:mt-0 relative z-10">
            <img src="/assets/home/personal_section.png" width={700} height={700} />
          </div>
        </div>

      </div>

      {/* Working Section */}
      <div className=" py-16 px-4 bg-[#EEF1F5] max-h-screen">
        <div className=" h-screen mx-auto my-auto w-10/12 flex justify-between" >

          <div className="md:w-1/3 order-2 md:order-1" style={{ paddingTop: '15%' }}>
            <p className="text-4xl font-bold max-md:max-w-full">Working Section</p>
            <p className="text-xl mt-16 mr-20 leading-[58px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">Working section is for colleagues and co-worker.</p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 mt-8 md:mt-0 ml-auto">
            <img src="/assets/home/working_section.png" width={700} height={700} />
          </div>
        </div>
      </div>

      {/* Private Section */}
      <div className="py-16 px-4 bg-[#2D2D2D] max-h-screen">
        <div className="h-screen mx-auto my-auto w-10/12 flex justify-between " style={{ height: '15%' }} >

          <div className="md:w-1/3 order-2 md:order-2 ml-auto text-white" style={{ paddingTop: '15%' }}>
            <p className="text-4xl font-bold max-md:max-w-full">Private Section</p>
            <p className="text-xl mt-16 mr-20 leading-[58px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">Private section is for someone or some group which is classified and requires more security. Before access to the private section, users must enter the 4-digits passcode. Each section the user will have freedom to use a separate username, profile picture and personal details.</p>
          </div>
          <div className="md:w-1/2 order-1 md:order-1 mt-8 md:mt-0">
            <img src="/assets/home/private_section.png" width={700} height={700} />
          </div>
        </div>
      </div>

    </div>


  );
}

export default Home;