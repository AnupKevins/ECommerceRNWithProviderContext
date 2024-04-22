// ProductContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';

export const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
  const [productData, setProductData] = useState(null);

  const [wishListedProducts, setWishListedProducts] = useState([]);

  const addWishListedItem = product => {
    console.log(product);
    setWishListedProducts(prevWishListedItems => [
      ...prevWishListedItems,
      product,
    ]);
  };

  const removeWishListedItem = product => {
    setWishListedProducts(prevWishListedItems =>
      prevWishListedItems.filter(item => item.id !== product.id),
    );
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productData: productData,
        wishListedProducts: wishListedProducts,
        addWishListedItem: addWishListedItem,
        removeWishListedItem: removeWishListedItem,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
