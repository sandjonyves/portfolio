import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { projectData } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Project() {
  return (
    <div className='pt-6 pb-16 bg-[#050709]'>
        <SectionHeading>
            My Project
        </SectionHeading>
        <div className='w-80% mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-center'>
            {
                projectData.map((project)=>{
                    return (
                            <div key={project.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all' >
                                <Link href={project.url}>
                                    <Image src={project.image} alt={"project"} className='w-full' width={300} height={200}/>
                                </Link>
                            </div>
                    )
                })
            }
        </div>
    </div>
  )
}
