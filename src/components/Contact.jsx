import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className=' w-full h-screen flex items-center justify-center flex-col space-y-2'>
        <h1 className='text-black text-3xl font-bold lg:text-4xl'>Contact Me</h1>    
        <p className=' text-gray-600 text-base w-3/5 text-center font-normal lg:text-2xl'>Ready to get started? Click the button below to send us an email — we're excited to hear from you and begin a journey of innovation and success together.</p>   
        <a href="mailto:jp0670786@gmail.com" className='bg-gray-900 font-normal text-white px-6 py-2 rounded-lg'>Email</a>   
    </div>
  )
}

export default Contact
