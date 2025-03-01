'use client'
import Link from "next/link";
import React from "react";
import { navLinks } from "@/utils";
import { social } from "@/utils/utilities";

import { Email, PhoneInTalk } from "@mui/icons-material";


export default function Footer() {


  return (
   

    <section className="bg-[#1b2836]">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        {navLinks.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href} className="text-base leading-6 text-gray-500 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex justify-center mt-8 space-x-6">
          {social.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-gray-400 hover:text-gray-500"
              aria-label={social.name}
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="flex justify-center  space-x-2 text-gray-400 0">
       
       <PhoneInTalk />
            <a href='tel:+237678727647' className="hover:text-gray-50">
                +237 678727647
            </a>
            <p>
                |
            </p>
            <a href='tel:+237696652440'  className="hover:text-gray-50">
              
                +237 696652440
            </a>
      
     
        </div>
        <div>
        <a href="mailto:sandjonyves@gmail.com" className="flex justify-center  space-x-2 hover:text-gray-50 text-gray-400 0">
            <Email />
            sandjonyves@gmail.com
        </a>
</div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 SandjonYves, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
