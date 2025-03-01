import Image from 'next/image';
import React from 'react'
type props ={
   skill:{
    id: Number;
   tag: string;
    icon:  React.JSX.Element;
    // percent: string;
   }
}

export default function SkillCard({skill}:props) {
    // const {icon, tag} = skill
  return (
    <div className="w-36 min-w-fit bg-blue-500 h-fit flex flex-col items-center justify-center  m-3 sm:m-5 rounded-lg group relative hover:bg-blue-700 cursor-pointer">
    <div className={`h-full w-full rounded-lg border border-[#1f223c] bg-blu-500 shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500`}>
        <div className="flex -translate-y-[1px] justify-center">
            <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
            <div className="h-8 sm:h-10 text-white">
                {skill.icon}
            </div>
            <p className="text-white text-sm sm:text-lg">
                {skill.tag}
            </p>
        </div>
    </div>
</div>
  )
}
