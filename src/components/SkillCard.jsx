import React from 'react'

const SkillCard = (props) => {
  return (
    <div className=' h-3/4 w-72 flex flex-col items-center justify-evenly'>
      <img src={props.Src} alt="" className='h-12 w-12 rounded-full shadow-md object-cover' />
      <h3 className=' text-black text-xl font-bold '>{props.Title}</h3>
      <p className=' text-black font-normal text-center'>{props.Para}</p>
    </div>
  )
}

export default SkillCard
