import { navLinks } from '@/app/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

// define props type
type props ={
    showNav:boolean;
    closeNav:()=>void;
  
   }

export default function MobileNav({showNav,closeNav}:props) {

    const navOpen = showNav?"translate-x-0":"translate-x-[-100%]"
  return (
    <div>
        {/* Overlay */}
        <div className={`fixed ${navOpen} transform transition-all duration-600 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
        {/* Nav Links */}
        <div className={`text-white ${navOpen}  transform transition-all duration-300 delay-300  fixed justify-center flex flex-col h-full w-[60%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[1000]`}>
        {navLinks.map((navLink)=>{
                    return (
                      <Link key={navLink.id} href={navLink.url}>
                        <p className='nav__link text-[20px] ml-12 mr-4 border-b-[1.5px] pb-2 border-white sm:text-[30px]'> 
                            {navLink.label}
                        </p>
                      </Link>
                    )
                  })}
                          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6 text-white' />

        </div>

        {/* Close Button */}
    </div>
  )
}
