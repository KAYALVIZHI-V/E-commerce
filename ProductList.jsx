import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProductContext } from "./ProductProvider";

const ProductList = () => {
  const { products, filter, addToCart } = useProductContext();
  const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="p-4">
          <CardContent>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)} className="mt-2">Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
