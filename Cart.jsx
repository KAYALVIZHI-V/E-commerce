import React from "react";
import { Button } from "@/components/ui/button";
import { useProductContext } from "./ProductProvider";

const Cart = () => {
  const { cart, removeFromCart } = useProductContext();
  return (
    <div className="p-4 border-t">
      <h2 className="text-xl font-bold">Cart</h2>
      {cart.length === 0 ? <p>No items in cart</p> : cart.map(item => (
        <div key={item.id} className="flex justify-between p-2 border-b">
          <span>{item.name} - ${item.price}</span>
          <Button onClick={() => removeFromCart(item.id)} variant="destructive">Remove</Button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
