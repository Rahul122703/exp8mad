import React, { useEffect, useState } from "react";
import Card from "./ui/Card";

export default function Testimonials() {
  const reviews = [
    { text: "Great quality!", name: "John Doe" },
    { text: "Fast delivery!", name: "Jane Smith" },
  ];

  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    // Fetch random user images
    fetch("https://randomuser.me/api/?results=2")
      .then((response) => response.json())
      .then((data) => {
        setUserImages(data.results.map((user) => user.picture.medium));
      });
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
      <div className="grid grid-cols-2 gap-4">
        {reviews.map((review, index) => (
          <Card key={index} className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
            {userImages[index] && (
              <img
                src={userImages[index]}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
            )}
            <div>
              <h3 className="font-bold">{review.name}</h3>
              <p>{review.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
