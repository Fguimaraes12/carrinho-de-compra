"use client";

import { createContext, useState, useContext } from "react";
import { Product } from "../types/product";
import { CartContextType } from "../types/contextCart";

type prop = {
  children: React.ReactNode;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: prop) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number) => {
    const value = cart.filter((item) => item.id !== id);
    setCart(value);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de Cartprovider");
  }
  return context;
};
