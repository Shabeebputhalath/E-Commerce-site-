import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProduct';

const Product = () => {

  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* ----------------- Product Data (Main Wrapper) ----------------- */}
      <div className='flex gap-12 flex-col sm:flex-row'>

        {/* --- Left Side: Product Images --- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img 
                  onClick={() => setImage(item)} 
                  key={index} 
                  src={item} 
                  className='w-[24%] sm:w-full sm:mb-5 flex-shrink-0 cursor-pointer object-cover aspect-square border border-gray-100' 
                  alt="" 
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto object-cover' alt="" />
          </div>
        </div>

        {/* --- Right Side: Product Info --- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 leading-relaxed'>{productData.description}</p>

          {/* Size Selection */}
          <div className='flex flex-col my-8 gap-4'>
            <p className='font-medium'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={() => setSize(item)} 
                  key={index} 
                  className={`border py-2 px-4 bg-gray-100 transition-all ${item === size ? 'border-orange-500 bg-orange-50' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)}
          className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 transition-colors'>
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 leading-6'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ----------------- Description & Review Section ----------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm text-gray-400'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, doloremque obcaecati culpa labore veniam, aspernatur, maxime velit ratione delectus excepturi non.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque saepe delectus dolores ullam sint maiores, numquam neque, voluptatem ducimus quae incidunt aspernatur voluptates maxime. Dicta fuga in velit incidunt modi?An e-commerce website for buying and selling products online. and that is what we offered many consletenecw</p>
          <p>E-commerce website typically allows customers to browse products, add them to a shopping cart, and complete the purchase process online.</p>
        </div>
      </div>
      {/* ----------------- Related Products Section ----------------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product;