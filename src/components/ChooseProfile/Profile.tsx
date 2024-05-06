"use client"

import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { Extend } from "@/components/ChooseProfile/Extend";

function ChooseFirstProfile()
{
    console.log('Choose first profile')
}

function ChooseSecondProfile()
{
    console.log('Choose second profile')
}

function ChooseThirdProfile()
{
    console.log('Choose third profile')
}


export default function Profile()
{
    const [ShowModal,SetShowModal] = useState(false)
    const HandleOnClose = ()=>SetShowModal(false)

    return(
    <div className="bg-background">
        <h1 className = "flex text-6xl justify-center text-center mt-8 font-bold">
        Welcome Back! <br/> 
        Which your profile you're going to go with?
        </h1>
        
        <div>
            <div className = "flex justify-evenly mt-48 items-center" >
            
            <div>
            <button onClick={ChooseFirstProfile} className= "flex justify-center items-center bg-red-500 w-48 h-48" >
                <div className = "w-40 h-40 bg-white" />
            </button>
            <p className=" mt-6 text-center">
                Profile #1
            </p>
            </div>
           
            <div>
            <button onClick={ChooseSecondProfile} className= "flex justify-center items-center bg-red-500 w-48 h-48" >
                <div className = "w-40 h-40 bg-white" />
            </button>
            <p className=" mt-6 text-center">
                Profile #2
            </p>  
            </div>
            
            <div>
            <button onClick={ChooseThirdProfile} className= "flex justify-center items-center bg-red-500 w-48 h-48" >
                <div className = "w-40 h-40 bg-white" />
            </button>
            <p className=" mt-6 text-center">
                Profile #3
            </p>
            </div>

            </div>

        <button onClick = {()=> {SetShowModal(true)}} className= "flex justify-center items-center w-48 h-48 float-right -mt-56" > 
        <SlArrowRight className="w-1/4 h-1/4 "/>
        </button>

        </div>
        <Extend onClose={HandleOnClose} visible={ShowModal}/>
        </div>
    );
}
