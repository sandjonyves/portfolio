"use client"
import React from 'react'
import Home from './components/Home/Home'
// import ResponsiveNav from '../components/Navbar/ResponsiveNav'


import { motion, useScroll } from "motion/react"
// import Footer from '../components/Footer/Footer'

/**
 * ==============   Utils   ================
 */



export default function HomePage() {
  return (
    <div className=''>
      <div>
      {/* <ScrollLinked/> */}
        {/* <ResponsiveNav/> */}
        <Home/>
        
      </div>
    </div>
  )
}




// import React from 'https://cdn.skypack.dev/react'
// import { render } from 'https://cdn.skypack.dev/react-dom'

// const ROOT_NODE = document.querySelector('#app')

// /**
// * Tiny hook that you can use where you need it 
// */
// const usePointerGlow = () => {
//   const [status, setStatus] = React.useState(null)
//   React.useEffect(() => {
//     const syncPointer = ({ x: pointerX, y: pointerY }) => {
//       const x = pointerX.toFixed(2)
//       const y = pointerY.toFixed(2)
//       const xp = (pointerX / window.innerWidth).toFixed(2)
//       const yp = (pointerY / window.innerHeight).toFixed(2)
//       document.documentElement.style.setProperty('--x', x)
//       document.documentElement.style.setProperty('--xp', xp)
//       document.documentElement.style.setProperty('--y', y)
//       document.documentElement.style.setProperty('--yp', yp)
//       setStatus({ x, y, xp, yp })
//     }
//     document.body.addEventListener('pointermove', syncPointer)
//     return () => {
//       document.body.removeEventListener('pointermove', syncPointer)
//     }
//   }, [])
//   return [status]
// }

// const App = () => {
//   const [status] = usePointerGlow();
//   return (
//     <main>
//       <article data-glow>
//         <span data-glow />
//         <button data-glow>
//           <span>Glow Up</span>
//         </button>
//       </article>
//       <article data-glow>
//         <span data-glow />
//         <button data-glow>
//           <span>Glow Up</span>
//         </button>
//       </article>
//       <article data-glow>
//         <span data-glow />
//         <button data-glow>
//           <span>Glow Up</span>
//         </button>
//       </article>
//     </main>
//   )
// }

// render(<App/>, ROOT_NODE)
