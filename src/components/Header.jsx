import React, { useState } from 'react'
import { motion } from "motion/react"
import { RiMenuLine } from "@remixicon/react";



const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <motion.div initial={{y: -100}} animate={{y: 0, transition: {duration: .5}}} style={{}} className=' w-full py-5  md:w-full md:h-16 flex flex-col md:flex-row items-center justify-evenly md:justify-around fixed top-0 z-50 backdrop-blur-xl backdrop-opacity-100 gap-5'>
      <span onClick={()=>{open ? setOpen(false) : setOpen(true)}} className=' text-white absolute top-5 right-5 text-2xl font-bold  md:hidden cursor-pointer'><RiMenuLine /></span>
      <h1 className=' text-white font-bold text-md sm:text-xl md:text-2xl lg:text-3xl'>PORTFOLIO</h1>
      <div className={`flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 lg:space-x-14 text-white text-sm md:text-base lg:text-lg ${open ? 'flex' : 'hidden md:flex' } transition delay-150 duration-150 ease-out `}>
        
        <a href="#Home"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>Home</motion.h2></a>
       <a href="#About"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>About</motion.h2></a>
  <a href="#Projects"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>Projects</motion.h2></a>
  <a href="#Contact"><motion.h2 whileHover={{ scale: 1.2}} className=' cursor-pointer'>Contact</motion.h2></a>

      </div>
    </motion.div>
  )
}

export default Header
