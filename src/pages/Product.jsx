import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';


const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData,setProductData] = useState(true);
  const [image,setImage] = useState('');

  const fetchProductData = async () => {
      products.map((item)=>{
        if (item.id === Number(productId)){
          setProductData(item);
          setImage(item.images[0]);
          console.log(item);
          return null;
        }
      })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId, products, setProductData])

  return productData ? (
     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

    {/* Product Data */}
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      {/* Product Images */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row sm:gap-10'>

        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
           {
            productData.images.map((item,index) => (
              <img key={index} src={item} alt={productData.name} className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0  object-cover cursor-pointer `}  />
            ))
           }
        </div>
        

      </div>

    </div>

  </div>
  ) : 
    <div className='opacity-0'>Product not found</div>
  
}

export default Product;