import React, { useState } from "react";
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

const HotelBookingCard = () => {
  // الصور الأساسية
  const hotelImages = [Rectangle, frame1, frame2, frame3];
  // الصور الإضافية
  const extraImages = [frame4, frame5, frame6];

  // الصورة الرئيسية
  const [mainImage, setMainImage] = useState(hotelImages[0]);
  const [showExtra, setShowExtra] = useState(false);

  const [checkInDate, setCheckInDate] = useState("4 Oct");
  const [checkOutDate, setCheckOutDate] = useState("3 Nov");
  const [noteToOwner, setNoteToOwner] = useState("");

  // مودال submit
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // عداد
  
const [adults, setAdults] = useState(1);
const [children, setChildren] = useState(1);
const [infants, setInfants] = useState(1);
  const renderDateBox = (day, date, selected, type) => (
    <div
      className={`p-3 border rounded-lg text-center cursor-pointer ${
        selected ? "bg-blue-600 text-white" : "bg-gray-100"
      }`}
      onClick={() => {
        if (type === "checkin") {
          setCheckInDate(date);
        } else {
          setCheckOutDate(date);
        }
      }}
    >
      <div className="font-semibold">{day}</div>
      <div className="text-sm">{date}</div>
    </div>
  );

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
         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white p-2   mb-2 w-64 rounded-xl shadow-md">
  {hotelImages.map((img, index) => {
    if (index === hotelImages.length - 1) {
      return (
        <div key={index} className="relative">
          <img
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-12 sml:w-20 sml:h-14 object-cover rounded-lg cursor-pointer border-2 ${
              mainImage === img ? "border-blue-500" : "border-transparent"
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
        className={`w-16 h-12  object-cover rounded-lg cursor-pointer border-2 ${
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

        {/* Right Section - Booking Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                20% off
              </span>
              <div className="flex items-center text-yellow-500">
                ⭐{" "}
                <span className="text-gray-700 text-sm ml-1">
                  4.5 (356 Reviews)
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              HarborHaven Hideaway
            </h1>
            <p className="text-gray-600 mb-6">
              1012 Ocean Avenue, New York, USA
            </p>
            <hr></hr>
            <button className="w-full text-blue-600  pt-3 rounded-lg font-semibold text-lg mb-8">
              Book Hotel
            </button>

            {/* Check In */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Check In
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {renderDateBox(
                  "Today",
                  "4 Oct",
                  checkInDate === "4 Oct",
                  "checkin"
                )}
                {renderDateBox(
                  "Tue",
                  "6 Oct",
                  checkInDate === "6 Oct",
                  "checkin"
                )}
                {renderDateBox(
                  "Wed",
                  "7 Oct",
                  checkInDate === "7 Oct",
                  "checkin"
                )}
                {renderDateBox(
                  "Thu",
                  "8 Oct",
                  checkInDate === "8 Oct",
                  "checkin"
                )}
              </div>
            </div>

            {/* Check Out */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Check Out
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {renderDateBox(
                  "Sun",
                  "3 Nov",
                  checkOutDate === "3 Nov",
                  "checkout"
                )}
                {renderDateBox(
                  "Mon",
                  "4 Nov",
                  checkOutDate === "4 Nov",
                  "checkout"
                )}
                {renderDateBox(
                  "Wed",
                  "5 Nov",
                  checkOutDate === "5 Nov",
                  "checkout"
                )}
                {renderDateBox(
                  "Thu",
                  "6 Nov",
                  checkOutDate === "6 Nov",
                  "checkout"
                )}
              </div>
            </div>

            {/* Note to Owner */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Note To Owner
              </h3>
              <textarea
                className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter here"
                value={noteToOwner}
                onChange={(e) => setNoteToOwner(e.target.value)}
              ></textarea>
            </div>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Modal بعد الضغط على Submit */}
     {/* Modal بعد الضغط على Submit */}
{showSubmitModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
      {/* إغلاق */}
      <button
        onClick={() => setShowSubmitModal(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">Select Guests</h2>

      {/* Adults Row */}
      <div className="flex items-center justify-between mb-4">
  <div>
    <h3 className="text-lg font-semibold">Adults</h3>
    <p className="text-sm text-gray-500">Ages 18 or above</p>
  </div>
  <div className="flex items-center space-x-3">
    <button
      onClick={() => setAdults((prev) => Math.max(0, prev - 1))}
      className="px-3 py-1 bg-gray-200 rounded-lg font-bold"
    >
      -
    </button>
    <span className="text-lg font-semibold">{adults}</span>
    <button
      onClick={() => setAdults((prev) => prev + 1)}
      className="px-3 py-1 bg-gray-200 rounded-lg font-bold"
    >
      +
    </button>
  </div>
</div>

{/* Children Row */}
<div className="flex items-center justify-between mb-4">
  <div>
    <h3 className="text-lg font-semibold">Children</h3>
    <p className="text-sm text-gray-500">Ages 12–17</p>
  </div>
  <div className="flex items-center space-x-3">
    <button
      onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
      className="px-3 py-1 bg-gray-200 rounded-lg font-bold"
    >
      -
    </button>
    <span className="text-lg font-semibold">{children}</span>
    <button
      onClick={() => setChildren((prev) => prev + 1)}
      className="px-3 py-1 bg-gray-200 rounded-lg font-bold"
    >
      +
    </button>
  </div>
</div>

{/* Infants Row */}
<div className="flex items-center justify-between mb-6">
  <div>
    <h3 className="text-lg font-semibold">Infants</h3>
    <p className="text-sm text-gray-500">Under age 2</p>
  </div>
  <div className="flex items-center space-x-3">
    <button
      onClick={() => setInfants((prev) => Math.max(0, prev - 1))}
      className="px-3 py-1 bg-gray-200 rounded-lg font-bold"
    >
      -
    </button>
    <span className="text-lg font-semibold">{infants}</span>
    <button
      onClick={() => setInfants((prev) => prev + 1)}
      className="px-3 py-1 bg-gray-200 rounded-lg font-bold"
    >
      +
    </button>
  </div>
</div>
      {/* Link Button */}
      <Link
        to="/hotel_review"
        className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Book Now
      </Link>
    </div>
  </div>
)}

    </div>
  );
};

export default HotelBookingCard;
