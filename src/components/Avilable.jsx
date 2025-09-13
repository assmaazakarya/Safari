import React from "react";
import {
  file1,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
} from "../assets";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

function Available() {
  const rooms = [
    {
      id: 1,
      name: "Room_1",
      price: 200,
      imageUrl: frame1,
    },
    {
      id: 2,
      name: "Hidden Haven",
      price: 150,
      imageUrl: frame2,
    },
    {
      id: 3,
      name: "Silent Nest",
      price: 250,
      imageUrl: frame3,
    },
    {
      id: 4,
      name: "Secret Escape",
      price: 230,
      imageUrl: frame3,
    },
    {
      id: 5,
      name: "Oasis Overture",
      price: 200,
      imageUrl: frame4,
    },
    {
      id: 6,
      name: "Hidden Haven",
      price: 150,
      imageUrl: frame5,
    },
    {
      id: 7,
      name: "Silent Nest",
      price: 250,
      imageUrl: frame6,
    },
    {
      id: 8,
      name: "Secret Escape",
      price: 230,
      imageUrl: file1,
    },
  ];

  return (
    <div className=" px-4 md:px-28 ">
      <SearchBar />
      <div className="  min-h-screen">
        {/* Available Rooms Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Available Rooms</h2>
          <button className="text-blue-600 hover:underline font-semibold">
            View All
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 sml:grid-cols-2 md:grid-cols-3 lgl:grid-cols-4 gap-6 ">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform  duration-300 p-2"
            >
              <Link to="/hotel_review">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="w-full h-48 object-cover cursor-pointer"
                />
              </Link>

              <div className="p-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  From{" "}
                  <span className="font-bold text-blue-600">${room.price}</span>{" "}
                  Per Night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Available;
