"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  
  // Calculate total quantity
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>
      <div className="links">
        <a href="/">Home</a>
        <a href="/products">Products</a>

        {/* ✔ Show total quantity */}
        <a href="/cart">Cart ({totalQty})</a>

        <a href="/login">Login</a>
      </div>
    </nav>
  );
}
