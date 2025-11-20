"use client";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Electronics() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const electronicItems = [
    {
      id: "e1",
      name: "Smartphone",
      price: 14999,
      image: "/images/e1.jpeg"
    },
    {
      id: "e2",
      name: "Wireless Headphones",
      price: 2999,
      image: "/images/e2.avif"
    },
    {
      id: "e3",
      name: "Smartwatch",
      price: 4999,
      image: "/images/e3.jpg"
    },
    {
      id: "e4",
      name: "c-cable charger",
      price: 499,
      image:"/images/e4.webp"
    }
  ];

  return (
    <div className="products-container">
      <h2>Electronics</h2>

      <div className="products-grid">
        {electronicItems.map((item) => {
          const inCart = cart.find((c) => c.id === item.id);

          return (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              {!inCart ? (
                <button onClick={() => increaseQty(item)}>Add</button>
              ) : (
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{inCart.qty}</span>
                  <button onClick={() => increaseQty(item)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
