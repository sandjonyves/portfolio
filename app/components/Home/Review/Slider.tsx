'use client'
import { clientReviews } from '@/data/data';
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import ReviewCard from './ReviewCard';

const responsive = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1
    }
  };

export default function Slider() {
  return (
    <Carousel arrows={true} autoPlay={true} infinite responsive={responsive}>
        {clientReviews.map((review)=>{
            return(
                <div key={review.image}>
                    <ReviewCard review={review} />
                </div>
            )
        })}
    </Carousel>
  )
}
