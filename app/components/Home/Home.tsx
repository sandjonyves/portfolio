import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './services/Services'
import Project from './project/Project'
import Skills from './Skills/Skills'
import Review from './Review/Review'

export default function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <About/>
        <Services/>
        <Project/>
        <Skills/>
        <Review/>
    </div>
  )
}
