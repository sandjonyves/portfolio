import { clientReviews } from '@/data/data'
import Image from 'next/image'
import React from 'react'

type props = {
    review :{
        name:String,
        review : String,
        rating :number,
        profession : String,
        image : String
    }
}
export default function ReviewCard({review}:props) {
    const {image, profession, rating, name,review:clientReviews} = review
  return (
    <div className='rounded-md overflow-hidden bg-[#140]'>
        <div className='P-6'>
            <Image src={`/images/q.png`} alt={"image"} width={50} height={50} className=''/>
            <p className='text-white text-opacity-50'> {clientReviews}</p>
        </div>
    </div>
  )
}
