import React, { createContext, useContext, useState } from 'react';

// Cart context
const CartContext = createContext();

// Cart provider to wrap around the app and provide cart state globally
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addItemToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from cart
  const removeItemFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Clear all items from cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
