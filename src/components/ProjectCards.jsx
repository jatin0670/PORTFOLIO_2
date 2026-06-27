import React from 'react'
import { motion } from "motion/react"
// [this is prop thing]
const ProjectCards = (props) => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0}} viewport={{once: true}} className=' w-[75%] h-[45%] flex flex-col space-y-1 items-start justify-between overflow-hidden md:w-[60%] md:h-[45%] lg:w-[33%] lg:h-[75%] p-2 shadow-black shadow-md bg-[rgba(255,255,255,0.03)] rounded-lg'>
      <div className=' w-full h-1/2 rounded-xl shadow-lg overflow-hidden'>
      <img className=' w-full h-full object-contain md:object-cover md:object-top' src={props.Src} alt="" />
      </div>
      <h1 className='text-white text-sm font-bold md:text-2xl'>{props.Title}</h1>
      <p className='text-white text-xs font-normal md:text-base'>{props.Para}</p>
       <a href={props.Link}><button className=' bg-gray-500 md:hover:bg-gray-900 lg:hover:bg-gray-900 font-normal text-xs text-white px-2 py-2  md:px-4 md:py-3 md:text-sm rounded-lg'>See Detials</button></a>
    </motion.div>
  )
}

export default ProjectCards
