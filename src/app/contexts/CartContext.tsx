// contexts/CartContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/types/product';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void; // Optional: Add remove functionality
  clearCart: () => void; // Optional: Add clear cart functionality
  updateQuantity: (id: string, quantity: number) => void;
}


const CartContext = createContext<CartContextType>({

  cart: [],

  addToCart: () => {},

  removeFromCart: () => {},

  clearCart: () => {},

  updateQuantity: () => {},

});


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

 const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const clearCart = () => {

    setCart([]);

  };



  const updateQuantity = (id: string, quantity: number) => {

    setCart(cart.map(item => 

      item._id === id ? { ...item, stock: quantity } : item

    ));

  };



 
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart , updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};