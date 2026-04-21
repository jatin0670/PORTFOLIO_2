import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className=' w-full h-screen  flex items-center justify-center flex-col gap-2 md:gap-3 lg:gap-5'>
        <h1 className='text-white text-3xl font-bold lg:text-4xl'>Contact Me</h1>    
        <p className=' lg:text-gray-500 text-white text-base w-3/5 text-center font-normal lg:text-2xl lg:hover:text-white cursor-pointer'>Ready to get started? Click the button below to send us an email — we're excited to hear from you and begin a journey of innovation and success together.</p>   
        <a href="mailto:jp0670786@gmail.com" className='bg-gray-900 font-normal text-white text-lg px-7 py-2 md:text-lg md:px-8 md:py-2 lg:text-xl lg:px-10 lg:py-3 rounded-lg'>Email</a>   
    </div>
  )
}

export default Contact
