"use client";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Shoes() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const shoes = [
    {
      id: "s1",
      name: "White Sneakers",
      price: 1599,
      image: "/images/s1.jpg"
    },
    {
      id: "s2",
      name: "Running Shoes",
      price: 2499,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: "s3",
      name: "Casual Shoes",
      price: 1299,
      image: "/images/s3.webp"
    }
  ];

  return (
    <div className="products-container">
      <h2>Shoes</h2>

      <div className="products-grid">
        {shoes.map((item) => {
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
