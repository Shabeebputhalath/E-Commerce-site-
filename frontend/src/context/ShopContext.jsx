import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const delivery_fee = 10;
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  // Add to Cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Please select a size before adding to cart');
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + '/api/cart/add',
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error(error.message || 'Error adding item to cart');
      }
    }
  };

  // Get Cart Count
  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    return totalCount;
  };

  // Update Quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + '/api/cart/update',
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.error(error);
        toast.error(error.message || 'Error updating cart');
      }
    }
  };

  // Get Total Cart Amount
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (itemInfo && cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }

    return totalAmount;
  };

  // Fetch Products
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error('Failed to fetch products');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching products');
    }
  };

  // Fetch User Cart
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/cart/get',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      } else {
        toast.error('Failed to fetch cart');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  // Load Products
  useEffect(() => {
    getProductsData();
  }, []);

  // Load Token + Cart
  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (!token && storedToken) {
      setToken(storedToken);
      getUserCart(storedToken);
    }
  }, [token]);

  const value = {
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
    token,
    setToken,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;