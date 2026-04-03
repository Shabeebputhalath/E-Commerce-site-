import React from 'react'
import {assets} from '../assets/assets'


const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
           <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Welcome to our online store, where fashion meets convenience. We are dedicated to providing you with a seamless shopping experience, offering a wide range of trendy and high-quality products at your fingertips. Our mission is to bring you the latest styles and timeless classics, all while ensuring exceptional customer service. Whether you're looking for the perfect outfit or unique accessories, we've got you covered. Thank you for choosing us as your go-to destination for all things fashion. Happy shopping!
            </p>
           </div>
           <div>
            <p className='text-xl font-medium mb-5 '>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='cursor-pointer hover:text-black'>Home</li>
                <li className='cursor-pointer hover:text-black'>About Us</li>
                <li className='cursor-pointer hover:text-black'>Delivey</li>
                <li className='cursor-pointer hover:text-black'>Privacy policy</li>
            </ul>
           </div>
           <div>
            <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Phone number: 123-456-7890</li>
                <li>Email: info@company.com</li>
            </ul>
           </div>
        </div>


       <div>
        <hr />
        <p className='py-5 text-sm text-center '>
            &copy; 2024 Your Company Name. All rights reserved. Designed by Shabeeb.
        </p>
       </div>



    </div>
  )
}

export default Footer