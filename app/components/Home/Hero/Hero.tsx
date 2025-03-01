import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { BaseInfo } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'
import { Boxes, BoxesCore } from '@/components/ui/background-boxes'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { Button } from '@mui/material'
import { ContactMail, ContactMailOutlined, WorkHistoryRounded } from '@mui/icons-material'
export default function Hero() {
  return (
    <div
    // style={{back}}
    className='w-full   pt-[40vh] md:pt-24 lg:pt-[16rem] h-screen bg-[#071223] overflow-hidden relative'>
        <Boxes />
        <div className='flex justify-center flex-col w-4/5 h-1/2 mx-auto '>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center mb-24 '>
                {/*Content */}
                <div>
                    {/*sub Heading */}
                    <h1
                    style={{filter:'bluer(10px)'}}
                    className='flex  text-2xl md:text-4xl mb-4 tracking-widest text-gray-300 font-semibold'>
                        I am  
                    </h1>
                    <h1  className='flex tracking-wide mb-4'>
                    <TypewriterEffect words={[{text:BaseInfo.firstName,className:'relative  font-bold'},{text:BaseInfo.lastName,className:'relative  font-bold'}]} />
                    </h1>
                    {/*Title */}
                    <h1 className='
                     text-sm md:text-base lg:text-xl tracking-widest 
                    
                     text-white relative 
                     z-10'>
                        {BaseInfo.position}
                    </h1>
                    {/* description */}
                    {/* <p className='mt-4 text-white text-sm md:text-base text-opacity-60'>
                        {BaseInfo.description}
                    </p> */}
                    {/* <TypewriterEffect words={[{text:'dskjds'}]} >
                        ds
                    </TypewriterEffect> */}
                    {/*dawnload button */}
                    {/* relative md:px-8 md:py-2.5 py-2 px-6 text-white fomt-semibold text-sm md:text-lg 
                    transition-all duration-200 rounded-lg mt-6 bg-blue-700 hover:bg-blue-900 flex items-centers space-x-2 */}
                    <div className='flex space-x-10'>
                    <Button variant='contained' startIcon={ <ContactMailOutlined/>} style={{marginTop:48,padding:20}} >
                        <span>Contact Me</span>
                    </Button>
                    <Button variant='contained' startIcon={ <WorkHistoryRounded/>} style={{marginTop:48,padding:20}}>
                        <span>My Work</span>
                    </Button>
                    </div>
                </div>
                {/*image */}
                <div className='mx-auto    mt-2 md:mt-24 relative z-1000  lg:block border-[5px] border-dashed rounded-t-full 
                rounded-lg transition-all border-blue-500 overflow-x-hidden'>
                <div className='mx-auto mb-24  mt-2 md:mt-12 relative z-1000  lg:block border-[5px] border-dashed rounded-t-full 
                rounded-lg transition-all border-blue-500 overflow-x-hidden'>
                    <Image className='' src={BaseInfo.profilePic} alt={BaseInfo.firstName} width={400} height={300}/>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
