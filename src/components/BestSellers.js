import React from "react";
import Card from "./ui/Card";
import product1 from "../images/1.png"; // Replace with actual images
import product2 from "../images/2.png";
import product3 from "../images/3.png";
import product4 from "../images/4.png";

export default function BestSellers() {
  const bestSellers = [
    { id: 1, name: "Product 1", image: product1 },
    { id: 2, name: "Product 2", image: product2 },
    { id: 3, name: "Product 3", image: product3 },
    { id: 4, name: "Product 4", image: product4 },
  ];

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Best Sellers</h2>
      <div className="grid grid-cols-4 gap-4">
        {bestSellers.map((product) => (
          <Card key={product.id} className="p-4 bg-white shadow-md rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
}
