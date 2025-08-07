import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-16 flex items-center justify-around fixed top-0 z-50 backdrop-blur-2xl backdrop-opacity-100 '>
      <h1 className=' text-black font-bold text-md sm:text-xl md:text-2xl lg:text-3xl'>PORTFOLIO</h1>
      <div className=' flex space-x-5 sm:space-x-8 md:space-x-10 lg:space-x-14 text-black text-sm md:text-base lg:text-lg'>
        <a href="#Home"><h2 className=' cursor-pointer'>Home</h2></a>
        <a href="#About"><h2 className=' cursor-pointer'>About</h2></a>
        <a href="#Projects"><h2 className=' cursor-pointer'>Projects</h2></a>
        <a href="#Contact"><h2 className=' cursor-pointer'>Contact</h2></a>
      </div>
    </div>
  )
}

export default Header
