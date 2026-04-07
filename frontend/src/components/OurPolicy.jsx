import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700  '>
        <div className=''>
          <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
          <p className='font-semibold'>Easy Exchange Policy</p>
          <p className='text-gray-400'>Not satisfied with your purchase? We offer a hassle-free exchange process within 30 days of delivery.</p>
        </div>
          <div className=''>
          <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
          <p className='font-semibold'>7 Days Return Policy</p>
          <p className='text-gray-400'>We provide a simple return process within 7 days of delivery.</p>
        </div>
          <div className=''>
          <img src={assets.support_img} className='w-12 m-auto mb-5 ' alt="" />
          <p className='font-semibold'>Best Customer support</p>
          <p className='text-gray-400'>Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.</p>
        </div>

    </div>
  )
}

export default OurPolicy