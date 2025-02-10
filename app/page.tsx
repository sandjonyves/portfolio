import React from 'react'
import Home from './components/Home/Home'
import ResponsiveNav from './components/Home/Navbar/ResponsiveNav'

export default function HomePage() {
  return (
    <div className=''>
      <div>
        <ResponsiveNav/>
        <Home/>
      </div>
    </div>
  )
}
