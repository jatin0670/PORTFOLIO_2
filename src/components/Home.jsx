import React from 'react'
import main from '../images/main.png' 

const Home = () => {
  return (
    <div id='Home' className='w-full flex flex-col-reverse items-center h-screen pt-10 lg:flex-row '>
      <div className=' flex-grow flex items-center justify-center w-full'>
        <div className='  w-5/6 h-2/3 flex flex-col items-center justify-center gap-8 lg:gap-2 '>
            <h1 className=' text-black text-2xl font-bold text-wrap flex items-center text-center  h-1/4 w-full md:text-4xl lg:text-5xl  lg:text-left '>Welcome to my Web Devlopment Portfolio</h1>
            <p className=' text-zinc-700 font-medium text-xl flex items-center text-center h-28 w-full md:text-2xl lg:text-left'>I'm Jatin, a passionate web developer based in India. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
        </div>
      </div>

      <div className=' flex-grow w-full flex items-center justify-center'>
      <div className=' h-5/6 w-5/6 rounded-lg overflow-hidden '>
         <img className=' w-full h-full object-cover object-center' src={main} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Home
