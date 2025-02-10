import Image from 'next/image';
import React from 'react'
type props ={
   skill:{
    id: Number;
    title: string;
    image: string;
    percent: string;
   }
}

export default function SkillCard({skill}:props) {
    const {image, percent, title} = skill
  return (
    <div className='pt-6 hover:bg-blue-900 duration-100 transition-all cursor-pointer text-center items-center rounded-lg 
    bg-gray-900 '
    >
        <Image 
        src={image} 
        alt={title}
        width={80}
        height={80}
        className='object-cover mx-auto'
        />  
        <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
        {/* <div className='bg-black mt-4 rounded-lg p-2 text-white '></div> */}
    </div>
  )
}
