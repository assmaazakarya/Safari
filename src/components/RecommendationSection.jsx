// components/RecommendationSection.js
import React from "react";
import HotelCard from "./Hotelcard";
import { frame1, frame2, frame3, frame4 } from "../assets";

function RecommendationSection() {
  const recommendedHotels = [
    {
      id: 1,
      name: "Oasis Overture",
      location: "New York, USA",
      rating: 4.2,
      discount: "10% Off",
      image: frame1,
    },
    {
      id: 2,
      name: "Hidden Haven",
      location: "New York, USA",
      rating: 4.1,
      discount: "20% Off",
      image: frame2,
    },
    {
      id: 3,
      name: "Silent Nest",
      location: "New York, USA",
      rating: 4.8,
      discount: "5% Off",
      image: frame3,
    },
    {
      id: 4,
      name: "Secret Escape",
      location: " New York, USA",
      rating: 4.6,
      discount: "7% Off",
      image: frame4,
    },
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-[30px]">
        <h2 className="text-2xl font-bold text-gray-800">Recommendation</h2>
        <a href="#" className="text-blue-600 hover:underline font-medium">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sml:grid-cols-2 md:grid-cols-4  gap-6">
        {recommendedHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} variant="vertical" />
        ))}
      </div>
    </section>
  );
}

export default RecommendationSection;
