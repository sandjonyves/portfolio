import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { servicesData } from '@/data/data'
import { div } from 'motion/react-client'
import ServiceCard from './ServiceCard'
import Image from 'next/image'
import animate from '@/public/images/animate.gif'
export default function Services() {
  return (
    <div className='pt-16 pb-6 bg-[#3A77FF]'>
        
        {/* <a href="https://storyset.com/software">Software illustrations by Storyset</a> */}
        <SectionHeading>
            Services
        </SectionHeading>
        <Image src={'https://storyset.com/illustration/version-control/cuate/animate?share=91640'} alt='log' width={80} height={80}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
            {servicesData.map((service)=>{
                    return (
                        <div key={service.id}>
                            dsd
                            <ServiceCard service={service} />
                        </div>
                    )
                    }
                )
            }
        </div>
    </div>
  )
}
