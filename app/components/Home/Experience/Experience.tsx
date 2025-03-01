import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
// import { servicesData } from '@/data/data'
// import { div } from 'motion/react-client'

// import Image from 'next/image'
// import animate from '@/public/images/animate.gif'
import { CardShineEffectCSS } from '@/components/CardShineEffect'

import experience from '@/public/assets/Lotties/dev.json'
import AnimationLottie from "@/components/ui/animation-lottie";
// import { SiJavascript } from 'react-icons/si'
import { FaAndroid, FaPython } from 'react-icons/fa6'
// import { Engineering, Javascript } from '@mui/icons-material'
import { RiJavascriptLine } from 'react-icons/ri'
import { MdEngineering } from "react-icons/md";

export default function Services() {
  const experiences_tech = [
    {
        id: 1,
        title: 'SOFTWARE ENGINEER',
        company: ` Powerk-soft, Personal ,univercity `,
        icon: <MdEngineering size={40} />,
        // <MdEngineering size={30} />
        // iconBg: "#383E56",
        date: `since - Sept 2024`,
    },
    {
        id: 2,
        title: 'JAVASCRIPT',
        company: ` Powerk-soft, Personnal , For individuals`,
        icon: <RiJavascriptLine size={40}/>,
        // iconBg: "#383E56",
        date: `since - Sept 2023`
    },
    {
        id: 3,
        title: 'android',
        company: `personnal,For individual`,
        icon: <FaAndroid size={40} />,
        // iconBg: "#383E56",
        date: `since - Mar 2024`
    },
    {
        id: 4,
        title: 'PYthon',
        company: ` Powerk-soft, Personnal, For Individuals`,
        icon: <FaPython size={40} />,
        // iconBg: "#383E56",
        date: `since - Sept 2022`
    },
];

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
           {experiences_tech.map((experience_tech)=>{
                    return (
                        <div key={experience_tech.id}>
                            <CardShineEffectCSS experience={experience_tech}/>
                      
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
