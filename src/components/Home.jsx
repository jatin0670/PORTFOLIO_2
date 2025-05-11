import React from 'react'
import main from '../images/main.png' 

const Home = () => {
  return (
    <div id='Home' className='w-full flex h-screen pt-10 '>
      <div className=' flex-grow flex items-center justify-center w-1/2 '>
        <div className='  w-5/6 h-2/3 flex flex-col items-center justify-center '>
            <h1 className=' text-black text-5xl font-bold text-wrap flex items-center h-1/4 w-full'>Welcome to my Web Devlopment Portfolio</h1>
            <p className=' text-zinc-700 font-medium text-xl text-wrap flex items-center h-28 w-full'>I'm Jatin, a passionate web developer based in India. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
        </div>
      </div>

      <div className=' flex-grow w-1/2 flex items-center justify-center'>
      <div className=' bg-cyan-600 h-5/6 w-4/5 rounded-lg overflow-hidden '>
         <img className=' w-full h-full object-cover object-center' src={main} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Home
