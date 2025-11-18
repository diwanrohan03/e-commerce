"use client";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function MensWear() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const mensProducts = [
    {
      id: "m1",
      name: "Men's Casual Shirt",
      price: 999,
      image: "/images/m1.jpg"
    },
    {
      id: "m2",
      name: "Men’s Black Jacket",
      price: 1999,
      image: "/images/m2.jpeg"
    },
    {
      id: "m3",
      name: "Men’s Blue Jeans",
      price: 1499,
      image: "/images/m3.jpeg"
    }
  ];

  return (
    <div className="products-container">
      <h2>Men’s Wear</h2>

      <div className="products-grid">
        {mensProducts.map((item) => {
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
                  <button onClick={() => decreaseQty(item.id)}><center>-</center></button>
                  <span>{inCart.qty}</span>
                  <button onClick={() => increaseQty(item)}><center>+</center></button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
