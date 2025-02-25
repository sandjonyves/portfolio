import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { servicesData } from '@/data/data'
import { div } from 'motion/react-client'

import Image from 'next/image'
import animate from '@/public/images/animate.gif'
import { CardShineEffectCSS } from '@/components/CardShineEffect'

import experience from '@/public/assets/Lotties/dev.json'
import AnimationLottie from "@/components/ui/animation-lottie";


export default function Services() {
  return (
    <div className='pt-16 pb-20 bg-[#0f0715]'>
        
        {/* <a href="https://storyset.com/software">Software illustrations by Storyset</a> */}
        <SectionHeading>
              Experience
        </SectionHeading>
       
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto items-center mt-20'>
        {/* <Image src={'https://storyset.com/illustration/version-control/cuate/animate?share=91640'} alt='log' width={20} height={20}/> */}
        <AnimationLottie animation={experience} width="90%" />
           <div className='grid grid-cols-2 gap-2'>
           {servicesData.map((service)=>{
                    return (
                        <div key={service.id}>
                            <CardShineEffectCSS/>
                      
                            {/* <ServiceCard service={service} /> */}
                        </div>
                    )
                    }
                )
            }
           </div>
           
        </div>
    </div>
  )
}
