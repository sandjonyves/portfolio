import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { skillsData } from '@/data/data'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <SectionHeading>
            My Skills
        </SectionHeading>
        <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
            {
                skillsData.map((skill)=>{
                    return(
                        <div key={skill.id}>
                            <SkillCard skill={skill}/>
                        </div>
                        )
                    }
                )
            }

        </div>
    </div>
  )
}
