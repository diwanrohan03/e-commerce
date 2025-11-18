"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                <div className="qty-con">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item)}>+</button>
                </div>

                <p className="item-total">
                  Total: ₹{item.price * item.qty}
                </p>
              </div>
            </div>
          ))}

          <div className="grand-total">
            <h3>Grand Total: ₹{grandTotal}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
