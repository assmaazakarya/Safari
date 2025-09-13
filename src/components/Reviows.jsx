// pages/HotelDetails.jsx
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiCamera } from "react-icons/fi";
import {
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  Rectangle,
} from "../assets";
import { Link } from "react-router-dom";

const HotelDetails = () => {
  const hotelImages = [Rectangle, frame1, frame2, frame3];
  const extraImages = [frame4, frame5, frame6];

  const [mainImage, setMainImage] = useState(hotelImages[0]);
  const [showExtra, setShowExtra] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row max-w-6xl  w-full overflow-hidden">
      {/* Left Section - Image Gallery */}
      <div className="md:w-1/2 relative p-4">
        <img
          src={mainImage}
          alt="Hotel Room"
          className="w-full h-full object-cover rounded-l-xl"
        />

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white p-2 mb-2 w-64 rounded-xl shadow-md">
          {hotelImages.map((img, index) => {
            if (index === hotelImages.length - 1) {
              return (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-12 sml:w-20 sml:h-14 object-cover rounded-lg cursor-pointer border-2 ${
                      mainImage === img
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center 
                               bg-black bg-opacity-40 text-white text-sm sml:text-base 
                               font-semibold rounded-lg cursor-pointer"
                    onClick={() => setShowExtra(true)}
                  >
                    +{extraImages.length}
                  </div>
                </div>
              );
            }
            return (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-12 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === img ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setMainImage(img)}
              />
            );
          })}
        </div>

        {/* Modal الصور الإضافية */}
        {showExtra && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-lg w-full">
              <h2 className="text-lg font-semibold mb-3">More Photos</h2>
              <div className="grid grid-cols-3 gap-3">
                {extraImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Extra ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer"
                    onClick={() => {
                      setMainImage(img);
                      setShowExtra(false);
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setShowExtra(false)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right: Review + Info */}
      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        {/* Discount + Rating */}
        <div className="flex justify-between items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            20% Off
          </span>
          <div className="flex items-center text-gray-600 text-sm">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-semibold">4.5</span>
            <span className="ml-1">(356 Reviews)</span>
          </div>
        </div>

        {/* Hotel Name + Address */}
        <h2 className="text-2xl font-bold text-gray-900 ">
          HarborHaven Hideaway
        </h2>
        <p className="text-gray-600 text-sm mb-4 flex items-center">
          1012 Oscean Avanue, New York, USA
        </p>
        <hr className="mb-4" />

        {/* Rating stars */}
       <div className="flex flex-col items-center">
         <h3 className="text-base font-semibold items-center text-gray-800 mb-3">
          Your Over Rating Of This Product
        </h3>
        <div className="flex space-x-2 m-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className="cursor-pointer text-3xl text-yellow-500"
              onClick={() => setRating(star)}
            />
          ))}
        </div>
       </div>

        {/* Review form */}
        <label
          htmlFor="review"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Add detailed review
        </label>
        <textarea
          id="review"
          rows="4"
          placeholder="Enter here"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-2"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        {/* Add Photo */}
        <div className="flex items-center mb-2 cursor-pointer">
          <FiCamera className="text-gray-600 mr-2" />
          <span className="text-blue-600 font-medium">Add Photo</span>
        </div>

        {/* Submit Button */}
        <Link to='/bookho' className="w-full bg-blue-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-blue-700">
          Submit
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HotelDetails;
