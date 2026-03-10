import React from 'react'
"use-client";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const details =[
   {name:"Phone Number", icon:<IoCallOutline fontSize={"32px"}  />,text:"+91 8010994444"},
   {name:"Email Address", icon: <MdOutlineMail fontSize={"32px"} />,text:"info@propertybuddyrealtors.com"},
   {name:"Office Address", icon: <IoLocation fontSize={"32px"} />,text:"Property Buddy Realtors PVT. LTD. Unit No. BGF7, Tower B, ATS Bouquet, Sector 132, Noida, UP 201304"}

]

export default function ContactUsUpperPart({h1="contact us"}) {
  return (
    <div className=' w-full bg-gray-50 md:w-[80%] m-auto'>
      <h1 className='text-center text-3xl capitalize bg-gradient-to-b from-[#E0754B] to-[#EA9B7E] text-white p-5 font-bold rounded-md'>{h1} </h1>
       <div>
        <div className='flex  flex-col p-2 tracking-tighte'>
            <h2 className='font-bold text-xl text-center p-2'>We want to hear form you!</h2>
            <p className='tracking-tighter p-3 text-gray-700 text-center text-shadow-2xs'>The most followed real estate consultant in India, setting benchmarks with expertise and trust.</p>

        </div>
        <div className=' flex flex-col gap-3  md:gap-8 justify-center md:justify-arround  p-2  md:flex-row flex-wrap '>
         { details && details.map((data,index)=>{
           return <div key={index} className='shadow-md border-gray-200 flex flex-col justify-center items-center p-5 bg-white rounded-md md:flex-row md:justify-start md:w-[40%] '>
              <p key={data.icon}>
                {data?.icon}
              </p>
              <div className='flex  md:justify-start md:items-start justify-center items-center flex-col p-3 gap-2'>
               <p className='font-bold'>{data?.name}</p>
                <p className='text-gray-500 text-shadow-black'>{data?.text}</p>
              </div>
           </div>
         })}
        </div>

       </div>
    </div>
  )
}
