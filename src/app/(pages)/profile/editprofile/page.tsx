'use client'
import Sidebar from "@/components/sidebar/Sidebar";
import ProfilePic from "@/components/Assets/Joe.png"
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link';
import React, { useState } from 'react';

const EditProfile: React.FC = () => {

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  const [name, setName] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setProfileImageUrl(imageUrl);
      setSelectedImage(files[0]);
    }
  };

  const charLimit = 1000;
  const [charCount, setCharCount] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };

  const validatePasswordStrength = (password: string): boolean => {
    // ตรวจสอบความยาวของรหัสผ่าน
    if (password.length < 8) {
      return false;
    }
    return false
  }

  async function submitForm() {
    // Validate
    if (password !== confirmPassword) {
      alert("Noob!")
      return
    }
    if (name.length > 64 || name.length === 0 ) {
      alert("Too long!")
      return
    }
    if (username.length > 64 || name.length === 0 ) {
      alert("Too long!")
      return
    }
    if (password.length < 8 ) {
      alert("Noob!!!!")
      return
    }

    console.log({
      name: name,
      username: username,
      password: password,
    })
  }
    

  return (
    <div className="w-screen h-screen flex ">
      <Sidebar />
      <div className="bg-gray-100 grow h-full flex overflow-y-auto overflow-x-hidden ">
        <div className="flex flex-col flex-1 items-center">
          <header className="h-full mt-20 w-11/12 px-6 pt-9 pb-24 flex items-center justify-between text-3xl font-semibold text-white rounded-xl bg-zinc-800 max-md:px-5 max-md:max-w-full">
            <p>MY PROFILE</p>
          </header>
          <main className="w-11/12 flex justify-center items-center px-16 py-20 mt-14 bg-white rounded-xl border-2 border-gray-200 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-full">
              <section className="self-start">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex max-w-full w-full gap-20 justify-center">
                    {profileImageUrl ? (
                      <img src={profileImageUrl} alt="Profile" className="w-60 h-60 rounded-full object-cover aspect-square" />
                    ) : (
                      <div className="relative w-60 h-60 rounded-full bg-gray-400">
                        <Image src="/path/to/default/profile/image" alt="Profile" layout="fill" objectFit="cover" className="rounded-full object-cover aspect-square" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <h1 className="self-stretch mt-12 text-4xl font-bold text-neutral-800 text-opacity-90">JOESOSEXY</h1>
                      <div className="mt-16">
                        <input type="file" id="profileImage" onChange={handleImageChange} accept="image/*" className="hidden" />
                        <label htmlFor="profileImage" className="flex cursor-pointer justify-center px-9 py-2 text-lg font-medium text-white rounded-md bg-zinc-800">Upload Photo</label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5">
                  <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-7 pr-20 pl-5 rounded-md border border-solid shadow-sm border-black border-opacity-10 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                      <div className="w-full flex flex-col">
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
                          <Label htmlFor="Name" className="flex-auto font-medium text-[#1F1F1F] text-opacity-70 text-xl pb-1">Enter your new name</Label>
                          <Input type="name" id="name" placeholder="Name" className="text-base" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="Username" className="flex-auto font-medium text-[#1F1F1F] text-opacity-70 text-xl pt-2 pb-1">Enter your new username</Label>
                          <Input type="username" id="username" placeholder="Username" className="text-base" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="Password" className="flex font-medium text-[#1F1F1F] text-opacity-70 text-xl pt-2 pb-1">Enter your current password</Label>
                          <Input type="password" id="password" placeholder="Password" className="text-base" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 pb-4">
                          <Label htmlFor="Password" className="flex-auto font-medium text-[#1F1F1F] text-opacity-70 text-xl pt-2 pb-1">Confirm your new password</Label>
                          <Input type="password" id="password" placeholder="Confirm your password" className="text-base" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-5 pt-7 pb-20 rounded-md border border-solid shadow-sm border-black border-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                      <h2 className="text-xl font-medium text-indigo-900 max-md:max-w-full">
                        <span className="font-semibold text-neutral-800">About</span>{" "}
                        <span className="font-semibold text-indigo-900">JOESOSEXY</span>
                      </h2>
                      <div className="mt-8 text-lg tracking-normal text-zinc-700 text-opacity-80 max-md:mt-10 max-md:max-w-full">
                        <Textarea placeholder="Describe yourself..." className="resize-none text-lg h-32" maxLength={charLimit} onChange={handleInputChange} />
                        <p className="mt-2 text-sm">{charCount}/{charLimit}</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>
          <div className="w-full flex justify-center my-8">
            <Link href="/profile">
              <button onClick={submitForm} className="flex cursor-pointer text-center justify-center px-9 py-2 text-lg font-medium text-white rounded-md bg-zinc-800 w-48 mb-8">Submit</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;