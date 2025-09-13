// components/HotelCard.js (الإصدار المعدل)
import React from "react";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

function HotelCard({ hotel, variant = "vertical" }) {
  if (variant === "horizontal") {
    return (
      
      <div className="bg-white rounded-xl shadow-lg shadow-gray-300 p-3 flex  flex-row items-start w-full min-w-0 "> 
        {/* الصورة */}
        <Link to='/avilableroom' className="flex-shrink-0  w-auto mb-3 sm:mb-0 mr-3">
          <img
            
            className=" object-cover rounded-lg cursor-pointer sml:w-32 sml:h-28  md:w-28 md:h-24"
            src={hotel.image}
            alt={hotel.name}
          />
        </Link>

        {/* المحتوى */}
        <div className="flex-grow flex flex-col justify-between w-full min-w-0">
          {/* الخصم + التقييم */}
          <div className="flex items-center justify-between mb-1 py-2 flex-wrap">
            {hotel.discount && (
              <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-1 sm:mb-0">
                {hotel.discount}
              </span>
            )}
            <div className="flex items-center text-yellow-500 text-sm">
              <FaStar className="mr-1" />
              <span className="text-gray-700 font-bold">{hotel.rating}</span>
            </div>
          </div>

          {/* العنوان + الموقع */}
          {/* هنا نضمن أن النص لا يفيض. text-sm على الشاشات الصغيرة للنص الطويل */}
          <h3 className="font-semibold text-base sm:text-lg text-gray-800 leading-tight mb-1 truncate">{hotel.name}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1 min-w-0">
            <CiLocationOn className="flex-shrink-0 mr-1 text-gray-500" />
            <p className="truncate">{hotel.location}</p>
          </div>
        </div>
      </div>
    );
  }

  // الشكل العمودي (Recommendation) - بدون تغيير
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200">
      <Link to='/avilableroom' className="relative">
        <img
          className="w-full h-40 object-cover cursor-pointer"
          src={hotel.image}
          alt={hotel.name}
        />
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          {hotel.discount && (
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {hotel.discount}
            </span>
          )}
          <div className="flex items-center text-yellow-500 text-sm">
            <FaStar className="mr-1" />
            <span className="text-gray-700 font-bold">{hotel.rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg text-gray-800">{hotel.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <CiLocationOn className="mr-1 text-gray-500" />
          <p>{hotel.location}</p>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;