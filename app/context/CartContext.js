"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

 const increaseQty = (product) => {
  const exists = cart.find((item) => item.id === product.id);

  let updatedCart;
  if (exists) {
    updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
  } else {
    updatedCart = [...cart, { ...product, qty: 1 }];
  }

  saveCart(updatedCart);
};


  const decreaseQty = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0);

    saveCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
}
