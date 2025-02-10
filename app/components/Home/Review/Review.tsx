

import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import Slider from './Slider'

export default function Review() {
  return (
    <div className='pt-16 pb-26 bg-[#050709]'>
        <SectionHeading>
            Client Review
        </SectionHeading>
        <Slider/>
        <div className='w-[90%] sm:w-[80%] mx-auto'></div>
    </div>
  )
}
