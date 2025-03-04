import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Phone", price: 800, category: "Electronics" },
  { id: 3, name: "T-Shirt", price: 20, category: "Clothing" },
  { id: 4, name: "Shoes", price: 50, category: "Clothing" }
];

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <ProductContext.Provider value={{ products, cart, addToCart, removeFromCart, filter, setFilter }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
