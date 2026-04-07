import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 '>Subscribe to our newsletter for the latest updates and offers!</p>
        <p className='text-gray-500 mt-3'>Join our mailing list to receive exclusive discounts and stay informed about our newest products and promotions.</p>``
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' >
        <input type="email" className='w-full sm:flex-1 outline-none ' placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white px-10 py-4 text-xs hover:bg-gray-800'>Subscribe</button>
    </form>
    </div>



  )
}

export default NewsletterBox