import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { BaseInfo } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'
import { Boxes, BoxesCore } from '@/components/ui/background-boxes'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
export default function Hero() {
  return (
    <div
    // style={{back}}
    className='w-full   pt-[40vh] md:pt-24 lg:pt-[16rem] h-screen bg-[#0f0715] overflow-hidden relative'>
        <Boxes />
        <div className='flex justify-center flex-col w-4/5 h-1/2 mx-auto '>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/*Content */}
                <div>
                    {/*sub Heading */}
                    <h1
                    style={{filter:'bluer(10px)'}}
                    className='flex gap-12 text-2xl md:text-4xl mb-4 text-gray-300 font-semibold'>
                        I am  
                        <TypewriterEffect words={[{text:BaseInfo.name,className:'relative gap-12 text-2xl md:text-4xl  text-gray-300 font-semibold'}]} />
                    </h1>
                    {/*Title */}
                    <h1 className='text-bg text-3xl sm:text-4xl md:5xl lg:text-6xl 
                    font-bold md:leading-[3rem] lg:leading-[3.5rem]  xl:leading-[3.5rem] text-white relative z-10'>
                        {BaseInfo.position}
                    </h1>
                    {/* description */}
                    <p className='mt-4 text-white text-sm md:text-base text-opacity-60'>
                        {BaseInfo.description}
                    </p>
                    {/* <TypewriterEffect words={[{text:'dskjds'}]} >
                        ds
                    </TypewriterEffect> */}
                    {/*dawnload button */}
                    <button className='relative md:px-8 md:py-2.5 py-2 px-6 text-white fomt-semibold text-sm md:text-lg 
                    transition-all duration-200 rounded-lg mt-6 bg-blue-700 hover:bg-blue-900 flex items-centers space-x-2'>
                        <span>Dawnload My Cv</span>
                        <FaDownload/>
                    </button>
                </div>
                {/*image */}
                <div className='mx-auto mt-2 md:mt-24 relative z-1000  lg:block border-[5px] border-dashed rounded-lg transition-all border-blue-500 overflow-x-hidden'>
                    <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={400} height={400}/>
                </div>
            </div>
        </div>
    </div>
  )
}
