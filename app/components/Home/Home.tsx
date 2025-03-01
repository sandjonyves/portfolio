import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
// import Services from './services/Services'
import Project from './project/Project'
import Skills from './Skills/Skills'
// import Review from './Review/Review'
import Experience from './Experience/Experience'
import Study from './Study/Study'
// import Footer from '../../../components/Footer/Footer'
import Contact from './Contact/Contact'


export default function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <About/>
        <Experience/>
        {/* <Services/> */}
        <Skills/>
        <Study/>
        <Project/>
       
        {/* <Review/> */}
        <Contact/>
       
    </div>
  )
}
