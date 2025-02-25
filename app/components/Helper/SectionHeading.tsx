import React, { ReactNode } from 'react'

type props ={
    children : ReactNode
}
console.log()


export default function SectionHeading({children}:props) {
  return (
    <div className='w-fit  text-center px-4  mx-auto text-white text-2xl'>
      <h1>
      <span className='text-5xl text-blue-500'>console</span>  
      <span className='text-yellow-500'>.</span>
      <span className='text-5xl '>log</span>
      <span className='text-5xl text-blue-500'>(</span>
      <span className='relative bottom-3'>"</span>
      <span className='text-4xl title-bg font-extrabold'> {children} </span>
      <span className='relative bottom-3'>"</span>
      <span className='text-5xl text-blue-500'>)</span>
      </h1>
       
        {/* <div className='border border-b-8 relative bottom-6 '></div> */}
    </div>
  )
}


{/* <h1 className='sectionHeading  w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl
    md:text-4xl uppercase -rotate-6 '></h1> */}