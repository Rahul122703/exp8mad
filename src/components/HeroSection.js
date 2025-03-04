import React from "react";
import Button from "./ui/Button";
import bgImage from "../images/10.jpg"; // Adjust path if needed

export default function HeroSection() {
  return (
    <header
      className="h-64 flex items-center justify-center text-white text-4xl font-bold bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-4 rounded">
        <h2>Big Sale on Electronics!</h2>
        <Button className="mt-4 bg-gray text-blue-500 px-4 py-2 rounded">
          Shop Now
        </Button>
      </div>
    </header>
  );
}
