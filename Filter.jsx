import React from "react";
import { Button } from "@/components/ui/button";
import { useProductContext } from "./ProductProvider";

const Filter = () => {
  const { setFilter } = useProductContext();
  return (
    <div className="flex gap-2 p-4">
      <Button onClick={() => setFilter("All")} variant="outline">All</Button>
      <Button onClick={() => setFilter("Electronics")} variant="outline">Electronics</Button>
      <Button onClick={() => setFilter("Clothing")} variant="outline">Clothing</Button>
    </div>
  );
};

export default Filter;
