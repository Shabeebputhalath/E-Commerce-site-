import React, { useEffect } from 'react'
import { createContext } from "react";
import { useState } from 'react';
import{toast} from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { use } from 'react';

 export const ShopContext = createContext();
 const ShopContextProvider =(props)=>{
    const currency = '₹';
    const delivery_fee=10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
    const [search,setSearch] =useState('');
    const[showSearch,setShowSearch] = useState(false);
    const [products,setProducts] = useState([]);
    const [token,setToken]=useState('');
    const [cartItems, setCartItems] = useState({});
    const navigate=useNavigate();
    const addToCart =async (itemId,size) => {
    if(!size){
      toast.error('Please select a size before adding to cart');
      return;
    }




        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };
    const getCartCount = () => {
        let totalCount =0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item]>0) {
                      totalCount += cartItems[items][item];  
                    }                    
                }catch(err){
                    console.error('Error calculating cart count:', err);
                }
            }
}
    return totalCount;
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

   const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          // Error handling if needed
        }
      }
    }
    return totalAmount;
  }
    const getProducts = async () => {
        try {
            const response = await axios.get(backendUrl+'/api/product/list');
            const data = response.data;
            if (data.success) {
                setProducts(data.products); 
            } else {
                toast.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            toast.error('An error occurred while fetching products');
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
          setToken(localStorage.getItem('token'));
        }
        }, [token]);

    const value={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token
        
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

 }

 export default ShopContextProvider;