import React, { useState } from 'react'
import main from '../images/main.png' 

const Home = () => {

  return (
    <div id="Home" className="w-full flex flex-col-reverse items-center h-screen px-3 pt-10 lg:flex-row ">
      <div className=" flex-grow flex items-center justify-center h-1/2 lg:w-full lg:h-4/5">
        <div className=" h-3/4 md:h-4/5 md:w-full lg:w-5/6 lg:h-5/6 md:justify-center flex flex-col gap-4 px-5
        lg:px-0 md:gap-0">
          <h1 className="  text-white text-6xl text-center font-bold text-wrap lg:px-0 lg:py-5 w-full  md:text-8xl md:text-center lg:text-9xl lg:text-left gap-4">
            Hello i'm Jatin
          </h1>

          <p className=" text-zinc-500 font-medium text-lg flex items-center text-center lg:h-2/5 w-full md:text-4xl lg:text-4xl lg:text-left lg:hover:text-white cursor-pointer">
            I'm Jatin, a passionate web developer based in India. Here, you'll
            get a glimpse of my journey in the world of web development, where
            creativity meets functionality.
          </p>
        </div>
      </div>

      <div className=" flex-grow w-full flex items-center justify-center  h-1/2 md:h-2/4 lg:h-4/5 lg:w-2/3">
        <div className=" h-full w-full rounded-lg overflow-hidden ">
          <img className=' w-full h-full object-cover object-center' src={main} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
