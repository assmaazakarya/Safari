// components/NearbyHotelsSection.js
import React from "react";
import HotelCard from "./Hotelcard";
import { file1, file2, file3, file4 } from "../assets";

function NearbyHotelsSection() {
  const nearbyHotels = [
    {
      id: 5,
      name: "Golden Valley",
      location: "New York, USA",
      rating: 4.3,
      discount: "15% Off",
      image: file1,
    },
    {
      id: 6,
      name: "Serene Shelter",
      location: "New York, USA",
      rating: 4.3,
      discount: "10% Off",
      image: file2,
    },
    {
      id: 7,
      name: "Mystic Retreat",
      location: "New York, USA",
      rating: 4.3,
      discount: "20% Off",
      image: file3,
    },
    {
      id: 8,
      name: "Dreamer's Refuge",
      location: "New York, USA",
      rating: 4.3,
      discount: "15% Off",
      image: file4,
    },
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Nearby Hotels</h2>
        <a href="#" className="text-blue-600 hover:underline font-medium">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nearbyHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} variant="horizontal" />
        ))}
      </div>
    </section>
  );
}

export default NearbyHotelsSection;
