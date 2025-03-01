import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { projectData } from '@/data/data'
// import Image from 'next/image'
// import Link from 'next/link'
// import CodeBlockProject from './CodeBlockProject'
import GlitterCards from '@/components/GliterCard/GlifterCard'
import CardProject from './CardProject'


export default function Project() {
  return (
    <div className='pt-6 pb-16 bg-[#050709]'>
        {/* <CodeBlockProject/> */}
        <SectionHeading>
            My Project
        </SectionHeading>
       
        <div className='w-80% mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-center'>
            {
                projectData.map((project)=>{
                    return (
                        <GlitterCards>
                            
                            <div key={project.id} className='  rounded-lg ' >
                            <CardProject  image={project.image} title={project.name} />
                                    {/* <Image src={project.image} alt={"project"} className='w-full' width={300} height={200}/> */}

                            </div>
                        </GlitterCards>
                    )
                })
            }
        </div>
    </div>
  )
}
