import React from 'react';
import AboutMe from './AboutMe';
// import { BackgroundLines } from '@/components/ui/background-lines';
// import Gallery from '@/components/3DGallery/3Dgallery';
// import { BoxesCore } from '@/components/ui/background-boxes';

export default function AboutPage() {
  return (
    
     <div>
      {/* <BoxesCore/> */}
       <div className='  w-full h-screen flex flex-col justify-center items-center'>
        <div className='mt-32 relative flex flex-col items-center'>
          <AboutMe />
          {/* <Gallery /> */}
        </div>
      </div>
     </div>
   
  );
}