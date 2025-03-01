import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { skillsData } from '@/data/data'
import SkillCard from './SkillCard'
import Marquee from "react-fast-marquee";
import { skills } from '@/utils/utilities';


export default function Skills() {
  return (
    <div className='pt-16 pb-16 bg-neutral-900'>
        <SectionHeading>
            My Skills
        </SectionHeading>
       
        <div className='mt-20 w-full  gap-4 items-center'>
        <Marquee
                    gradient={false}
                    speed={80}
                    // pauseOnHover={true}
                    // pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
            {
                skills.slice(0,9).map((skill)=>{
                    return(
                        <div className='w-full space-x-3' key={skill.id}>
                            <SkillCard skill={skill}/>
                        </div>
                        )
                    }
                )
            }
           </Marquee>
           <Marquee
                    gradient={false}
                    speed={80}
                    // pauseOnHover={true}
                    // pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="right"
                >
            {
                skills.slice(11,21).map((skill)=>{
                    return(
                        <div className='w-full space-x-3' key={skill.id}>
                            <SkillCard skill={skill}/>
                        </div>
                        )
                    }
                )
            }
           </Marquee>
        </div>

    </div>
  )
}
