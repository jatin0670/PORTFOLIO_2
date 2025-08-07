import React from 'react'
// [this is prop thing]
const ProjectCards = (props) => {
  return (
    <div className=' w-[45%] h-1/2 flex flex-col space-y-1 items-start justify-between rounded-lg overflow-hidden shadow-md lg:w-[23%] lg:h-4/6 '>
      <div className=' w-full h-1/2 rounded-b-lg shadow-lg overflow-hidden'>
      <img className=' w-full h-full object-cover object-top ' src={props.Src} alt="" />
      </div>
      <h1 className='text-black text-sm font-bold md:text-2xl'>{props.Title}</h1>
      <p className='text-black text-xs font-normal md:text-base'>{props.Para}</p>
       <a href={props.Link}><button className=' bg-gray-900 font-normal text-xs text-white px-2 py-2  md:px-4 md:py-3 md:text-sm rounded-lg'>See Detials</button></a>
    </div>
  )
}

export default ProjectCards
