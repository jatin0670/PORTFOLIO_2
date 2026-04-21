import React from 'react'

const SkillCard = (props) => {
  return (
    <div className=' h-36 w-[50%] md:h-56 md:w-80 lg:h-64 lg:w-80 p-1 lg:p-2 flex flex-col items-center justify-center gap-2 md:justify-center md:gap-3 shadow-black shadow-md bg-[rgba(255,255,255,0.03)] rounded-lg
  '>
      <img src={props.Src} alt="" className='h-12 w-12 rounded-full shadow-md object-cover' />
      <h3 className=' text-white text-xs text-center font-bold md:text-xl lg:text-2xl'>{props.Title}</h3>
      <p className=' text-white text-[8px] font-normal text-center md:text-xs lg:text-sm md:px-2 lg:p-0'>{props.Para}</p>
    </div>
  )
}

export default SkillCard

