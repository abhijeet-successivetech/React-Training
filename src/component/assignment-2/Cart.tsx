"use client";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Cart must be used within a CartProvider");
  }

  const { cart, AddCart, removeCart } = context;

  const products: Product[] = [
    { id: Date.now() + 1, name: "Product 1", price: 10 },
    { id: Date.now() + 2, name: "Product 2", price: 20 },
    { id: Date.now() + 3, name: "Product 3", price: 30 },
    { id: Date.now() + 4, name: "Product 4", price: 40 },
  ];

  return (
    <div className="container-center">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <h3>{item.name}</h3>
              <p>Price: Rs{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeCart(item.id)}>
                Remove from Cart
              </button>
            </div>
          ))}
          <hr />
          <h3>
            Total: Rs
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
        </div>
      )}

      <h3>Products</h3>
      {products.map((product, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <h4>{product.name}</h4>
          <p>Price: Rs {product.price}</p>
          <button onClick={() => AddCart(product)}>
            Add {product.name} to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
