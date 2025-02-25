import { clientReviews } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

type props = {
    review :{
        name:string,
        review : String,
        rating :number,
        profession : String,
        image : String
    }
}
export default function ReviewCard({review}:props) {
    const {image, profession, rating, name,review:clientReviews} = review
  return (
    <div className='rounded-md overflow-hidden bg-[#140] m-4'>
        <div className='P-6'>
            <Image src={`/images/q.png`} alt={"image"} width={50} height={50} className=''/>
            <p className='text-white text-opacity-50'> {clientReviews}</p>
            <Image src={`/images/q.png`} 
            alt={"image"} 
            width={50} 
            height={50} 
            className=''/>
        </div>
        <div className='px-5 py-3 mb-4 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900
        text-white fond-bold'>
            <span>{rating}/5</span>
            <FaStar className='text-yellow'/>
        </div>
        <div className='flex  bg-gray-100'>
            <div className='p-6 flex items-center space-x-2'>
                <div>
                    <Image src={`${image}`} alt={name} width={40} height={40} className='rounded-full'/>
                </div>
            </div>
            <div className='pt-3 items-center '>
                <h1 className='text-lg fond-bold'> {name}</h1>
                <p className='text-base text-gray-700'>{profession}</p>
            </div>
        </div>
    </div>
  )
}
