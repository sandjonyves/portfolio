import { BackgroundLines } from '@/components/ui/background-lines'
import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import AnimationLottie from '@/components/ui/animation-lottie'
import studyAnimation from '@/public/assets/Lotties/study.json'
import GlitterCards from '@/components/GliterCard/GlifterCard'
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto  mt-20'>
                <AnimationLottie animation={studyAnimation} width='90%' />

                <div className='space-y-5' >
                { PathStudy.map((pathStudy)=>{
                    return(
                        <GlitterCards>
                            <div className="p-5 relative">
                                {/* <img
                                    src={blur}
                                    alt="Hero"
                                    width={1080}
                                    height={200}
                                    className="absolute bottom-0 opacity-80"
                                /> */}
                                <div className="flex justify-center">
                                    <p className={`text-xs sm:text-sm `}>
                                        {/* {pathStudy.date} */}
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-8 px-3 py-5">
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
