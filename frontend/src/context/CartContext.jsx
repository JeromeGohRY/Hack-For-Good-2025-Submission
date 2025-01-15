import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const updateWishlist = (newItem) => {
    setWishlistItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, currentCount: item.currentCount + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, currentCount: 1 }];
    });
  };

  const adjustQuantity = (id, increment) => {
    setWishlistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, currentCount: Math.max(0, item.currentCount + increment) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ wishlistItems, updateWishlist, adjustQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
