import React from "react";
import Card from "./ui/Card";
import electronicsImg from "../images/1.png"; // Replace with correct image
import clothingImg from "../images/2.png"; // Replace with correct image
import homeDecorImg from "../images/3.png"; // Replace with correct image

export default function Categories() {
  const categories = [
    { name: "Electronics", image: electronicsImg },
    { name: "Clothing", image: clothingImg },
    { name: "Home Decor", image: homeDecorImg },
  ];

  return (
    <section className="p-6 grid grid-cols-3 gap-4">
      {categories.map((category) => (
        <Card key={category.name} className="p-4 text-center bg-white shadow-md rounded-lg">
          <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-t-lg" />
          <h3 className="mt-2 text-lg font-bold">{category.name}</h3>
        </Card>
      ))}
    </section>
  );
}
