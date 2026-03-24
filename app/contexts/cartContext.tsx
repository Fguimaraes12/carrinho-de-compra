"use client";

import { createContext, useState, useContext } from "react";
import { Product } from "../types/product";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType | null>(null);

type prop = {
  children: React.ReactNode;
};

export function CartProvider({ children }: prop) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      return [...prev, product];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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
