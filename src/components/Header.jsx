import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <motion.div initial={{y: -100}} animate={{y: 0, transition: {duration: .5}}} className='w-full h-16 flex items-center justify-around fixed top-0 z-50 backdrop-blur-xl backdrop-opacity-100'>
      <h1 className=' text-white font-bold text-md sm:text-xl md:text-2xl lg:text-3xl'>PORTFOLIO</h1>
      <div className=' flex space-x-5 sm:space-x-8 md:space-x-10 lg:space-x-14 text-white text-sm md:text-base lg:text-lg'>
        
        <a href="#Home"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>Home</motion.h2></a>
       <a href="#About"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>About</motion.h2></a>
<a href="#Projects"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>Projects</motion.h2></a>
  <a href="#Contact"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>Contact</motion.h2></a>

      </div>
    </motion.div>
  )
}

export default Header
