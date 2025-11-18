"use client";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function WomensWear() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);

  const womensProducts = [
    {
      id: "w1",
      name: "Women’s Red Dress",
      price: 1299,
      image: "/images/w1.jpeg"
    },
    {
      id: "w2",
      name: "Women’s Handbag",
      price: 899,
      image: "/images/w2.jpg"    },
    {
      id: "w3",
      name: "Women’s Top",
      price: 799,
      image: "/images/w3.webp"
    }
  ];

  return (
    <div className="products-container">
      <h2>Women’s Wear</h2>

      <div className="products-grid">
        {womensProducts.map((item) => {
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
