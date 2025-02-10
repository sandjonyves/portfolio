import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { aboutInfo } from '@/data/data'
import { FaCheck } from 'react-icons/fa6'
import Image from 'next/image'

export default function About() {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        {/*sectionHeading */}
      
        <SectionHeading> About Me </SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
            {/*Text Cintent */}
            <div>
                <h1 className='text-bg text=[26px] sm:3xl md:text-4xl lg:text-5xl font-bold text-gray-200'> 
                    {aboutInfo.title}
                </h1>
                <p className='mt-6 text-gray-500'>
                    {aboutInfo.description}
                </p>
                <div className='mt-8'>
                    <div className='flex flex-center space-x-2 mb-6'>
                        <div className="w-7 h-7 bg-blue-700 flex flex-col justify-center items-center rounded-lg">
                            <FaCheck className='text-white'/>
                        </div>
                        <p className='texr-sm sm:text-base md:text-lg font-bold text-gray-300'>
                            Frontend Development
                        </p>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='flex flex-center space-x-2 mb-6'>
                        <div className="w-7 h-7 bg-orange-500 flex flex-col justify-center items-center rounded-lg">
                            <FaCheck className='text-white'/>
                        </div>
                        <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                            Backend Development
                        </p>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='flex flex-center space-x-2 mb-6'>
                        <div className="w-7 h-7 bg-green-700 flex flex-col justify-center items-center rounded-lg">
                            <FaCheck className='text-white'/>
                        </div>
                        <p className='texr-sm sm:text-base md:text-lg font-bold text-gray-300'>
                            Full Start Development
                        </p>
                    </div>
                </div>
            </div>
            {/*Stack Content */}
                <div className="grid grid-cols-2  gap-16 items-center lg:mx-auto ">
                    <div className='flex flex-col '>
                        <Image src={"/images/customer.png"} 
                        alt=''
                        width={80}
                        height={80}
                        />
                        <h1 className=' mt-2 font-bold text-xl text-white text-center'>
                            {aboutInfo.client}
                        </h1>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>
                            Satisfied custumers
                        </p>
                    </div>

                    <div className='flex flex-col '>
                        <Image src={"/images/experience.png"} 
                        alt=''
                        width={80}
                        height={80}
                        />
                        <h1 className=' mt-2 font-bold text-xl text-white text-center'>
                            {aboutInfo.experience}
                        </h1>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>
                            Year Experience 
                        </p>
                    </div>

                    <div className='flex flex-col '>
                        <Image src={"/images/completed.png"} 
                        alt=''
                        width={80}
                        height={80}
                        />
                        <h1 className=' mt-2 font-bold text-xl text-white text-center'>
                            {aboutInfo.website}
                        </h1>
                        <p className='text-base sm:text-lg text-gray-400 text-center'>
                            website lounched 
                        </p>
                    </div>

                    <div className='flex flex-col '>
                        <Image src={"/images/rocket.png"} 
                        alt=''
                        width={80}
                        height={80}
                        />
                        <h1 className=' mt-2 font-bold text-xl text-white text-center'></h1>
                        <p className='text-base sm:text-lg text-gray-400 text-center'></p>
                    </div>
            </div>
        </div>
    </div>
  )
}
