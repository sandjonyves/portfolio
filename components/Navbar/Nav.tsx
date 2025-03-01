'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/app/constant/constant'
import Link from 'next/link'
import { HiBars3BottomLeft } from 'react-icons/hi2'
type props ={

  openNav:()=>void;

 }
export default function  Nav({openNav}:props) {

  const [navBg,setNavBg] = useState(false)
  
  useEffect(()=>{
    const handler = ( ) => {
      if(window.scrollY >= 90)
        setNavBg(true)
      if(window.scrollY < 90)
        setNavBg(false)
    }

    window.addEventListener('scroll',handler)

    return () => {
      window.removeEventListener('scroll',handler)
    }
  },[])
  return (
    <div className={`fixed ${navBg? 'bg-[#0e1217]':'fixed'} transition-all duration-200  h-[12vh] z-[10] w-full`}> 
        <div className='flex items-center h-full justify-between w-[90%] sm :w-[90%] xl:w-[80%] mx-auto'>
            {/* LOGO */}
            <Image 
              src="/images/logo.png" 
              alt='LOGO' 
              width={170} 
              height={170} 
              className='ml-[-1.5rem] sm:ml-0'
            />
            {/* nav Links */}
            <div className='flex items-center space-x-10'>
               <div className='hidden lg:flex items-center space-x-8'>
                {navLinks.map((navLink)=>{
                    return (
                      <Link key={navLink.id} href={navLink.url}>
                        <p className='nav__link'> {navLink.label}</p>
                      </Link>
                    )
                  })}
               </div>
               <div className='flex items-center space-x-4'>
                <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 fond-semibold sm:text-base text-sm bg-white
                hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                  mire me
                </button>
                {/* Burger */}
                <HiBars3BottomLeft
                onClick={openNav}
                className='w-8 h-8 cursor-pointer lg:hidden text-white'
                />
               </div>
            </div>
        </div>
    </div>
  )
}
