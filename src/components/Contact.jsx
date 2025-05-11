import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className=' w-full h-screen flex items-center justify-center flex-col space-y-2'>
        <h1 className='text-black text-5xl font-bold'>Contact Us</h1>    
        <p className=' text-gray-600 text-xl w-3/5 text-center font-normal'>Ready to get started? Click the button below to send us an email — we're excited to hear from you and begin a journey of innovation and success together.</p>   
        <a href="mailto:jp0670786@gmail.com" className='bg-gray-900 font-normal text-white px-6 py-2 rounded-lg'>Email Us</a>   
    </div>
  )
}

export default Contact
