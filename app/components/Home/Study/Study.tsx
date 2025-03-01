import { BackgroundLines } from '@/components/ui/background-lines'
import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import AnimationLottie from '@/components/ui/animation-lottie'
import studyAnimation from '@/public/assets/Lotties/study.json'
import GlitterCards from '@/components/GliterCard/GlifterCard'
import { SiStudyverse } from 'react-icons/si'
export default function Study() {

    const PathStudy = [{
        dp:'degree in information systems and software engineering a',
        school:'university of yaounde 1'
    },
    {
        dp:'baccalaureate C AU',
        school:'bangangte classical high school'
    }
]
  return (
    <BackgroundLines>
        <div>
            <SectionHeading>
                Study
            </SectionHeading>
            <div className='flex flex-around w-[80%] mx-auto  mt-20'>
                <div className='mb-4 w-2/3  '>
                <AnimationLottie animation={studyAnimation} />
                </div>

                <div className='space-y-5' >
                { PathStudy.map((pathStudy,index)=>{
                    return(
                        <GlitterCards key={index}>
                            <div className="p-3 relative border border-blue-500 ">
                                {/* <img
                                    src={blur}
                                    alt="Hero"
                                    width={1080}
                                    height={200}
                                    className="absolute bottom-0 opacity-80"
                                /> */}
                                <SiStudyverse size={30}/>
                                <div className="flex justify-center">
                                    <p className={`text-xs sm:text-sm `}>
                                        {/* {pathStudy.date} */}
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-8 px-3 py-10">
                                    <div className={`  transition-all duration-300 hover:scale-125`}>
                                        {/* <GrCertificate size={30} /> */}
                                    </div>
                                    <div>
                                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                            {pathStudy.dp}
                                        </p>
                                        <p className="text-sm sm:text-base">
                                            {pathStudy.school}
                                        </p>
                                    </div>
                                </div>
                                </div>
                            </GlitterCards>
                    )
                }) }
                </div>
            </div>
        </div>
    </BackgroundLines>
  )
}



{/*  */}
