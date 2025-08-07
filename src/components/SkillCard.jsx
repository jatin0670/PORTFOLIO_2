import React from 'react'

const SkillCard = (props) => {
  return (
    <div className=' h-3/4 w-72 flex flex-col items-center justify-self-center gap-2 md:justify-center md:gap-3'>
      <img src={props.Src} alt="" className='h-12 w-12 rounded-full shadow-md object-cover' />
      <h3 className=' text-black text-sm text-center font-bold md:text-2xl'>{props.Title}</h3>
      <p className=' text-black text-xs font-normal text-center md:text-sm'>{props.Para}</p>
    </div>
  )
}

export default SkillCard
