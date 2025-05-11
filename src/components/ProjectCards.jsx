import React from 'react'

const ProjectCards = (props) => {
  return (
    <div id className=' w-1/5 h-5/6 flex flex-col space-y-2 items-start justify-between rounded-lg overflow-hidden shadow-md'>
      <div className=' w-full h-1/2 rounded-b-lg shadow-lg overflow-hidden'>
      <img className=' w-full h-full object-cover object-top ' src={props.Src} alt="" />
      </div>
      <h1 className='text-black text-lg font-bold'>{props.Title}</h1>
      <p className='text-black text-sm font-normal'>{props.Para}</p>
       <a href={props.Link}><button className=' bg-gray-900 font-normal text-white px-6 py-2 rounded-lg'>See Detials</button></a>
    </div>
  )
}

export default ProjectCards
