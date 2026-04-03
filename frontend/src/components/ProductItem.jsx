import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700'>
      <div className='cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
        <img src={image[0]} alt='' className='hover:scale-105 transition-transform duration-300' />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem