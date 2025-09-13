import React, { useState } from 'react';
import {
  boy,
  file1,
  file2,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  Rectangle,
} from '../assets';
import { CiSearch } from 'react-icons/ci';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Hotelreview = () => {
  const hotelImages = [Rectangle, frame1, frame2, frame3];
  
  const extraImages = [frame4, frame5, frame6];

  
  const [mainImage, setMainImage] = useState(hotelImages[0]);
  const [showExtra, setShowExtra] = useState(false);

  const [activeTab, setActiveTab] = useState('about'); 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
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
                      className={`w-16 h-12 object-cover rounded-lg cursor-pointer border-2 ${
                        mainImage === img
                          ? 'border-blue-500'
                          : 'border-transparent'
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
                    mainImage === img ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => setMainImage(img)}
                />
              );
            })}
          </div>

          {/* Modal الصور الإضافية */}
          {showExtra && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
              <div className="bg-white p-2 rounded-lg max-w-md w-full">
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

        {/* Details Section */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              20% OFF
            </span>
            <div className="flex items-center text-gray-500">
              <FaStar className="text-yellow-400" /> 4.5 (356 Reviews)
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            HarborHaven Hideaway
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            1012 Ocean Avenue, New York USA
          </p>

          {/* Tabs */}
          <div className="flex justify-between border-b border-gray-200 mb-4">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-2 ${
                activeTab === 'about'
                  ? 'border-b-2 border-blue-500 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              About
            </button>
             <button
              onClick={() => setActiveTab('Gallarey')}
              className={`pb-2 ${
                activeTab === 'Gallarey'
                  ? 'border-b-2 border-blue-500 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              Gallarey
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-blue-500 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'about' && (
            <div>
             
              <div className="flex justify-between items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <span className="mr-1 text-blue-700"><FaBed /></span> 3 Beds
                </div>
                <div className="flex items-center">
                  <span className="mr-1 text-blue-700"><FaBath /></span> 2 Bath
                </div>
                <div className="flex items-center">
                  <span className="mr-1 text-blue-700"><FaVectorSquare /></span> 1,848 Sqft
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">Gallery <span className='text-blue-900'>(200)</span></h3>
                <button className="flex items-center text-blue-900 font-bold">
                  <span className="mr-1 "><FaCamera /></span> add Photo
                </button>
              </div>
               <p className="text-gray-700 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard du ....{' '}
                <span className="text-blue-900 font-bold">Read More</span>
              </p>
              {/* صور الجاليري */}
            </div>
          )}

          {activeTab === 'Gallarey' && (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-lg">
        Gallery <span className="text-blue-900">(200)</span>
      </h3>
      <button className="flex items-center text-blue-900 font-bold">
        <span className="mr-1">📸</span> add Photo
      </button>
    </div>

    {/* صور الجاليري */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <img src={frame1} alt="gallery1" className="w-full h-20 object-cover rounded-lg" />
      <img src={frame2} alt="gallery2" className="w-full h-20 object-cover rounded-lg" />
      <img src={frame3} alt="gallery3" className="w-full h-20 object-cover rounded-lg" />
      <img src={frame4} alt="gallery4" className="w-full h-20 object-cover rounded-lg" />
      <img src={frame5} alt="gallery5" className="w-full h-20 object-cover rounded-lg" />
      <img src={frame6} alt="gallery6" className="w-full h-20 object-cover rounded-lg" />
      <img src={file1} alt="gallery7" className="w-full h-20 object-cover rounded-lg" />
      <img src={file2} alt="gallery8" className="w-full h-20 object-cover rounded-lg" />
    </div>
  </div>
)}




          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between mb-4">
                <h2 className="font-bold">Reviews</h2>
                <Link to='/reviews' className="flex items-center text-blue-600">
                  <FaPenToSquare /> add review
                </Link>
              </div>

              {/* Search */}
              <div className="mb-6 relative">
                <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search ..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Review Card */}
              <div className="flex items-center justify-between w-full mb-3">
                <div className="flex items-center">
                  <img
                    src={boy}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <p className="font-semibold text-gray-900">Dale Thiel</p>
                </div>
                <p className="text-gray-500 text-sm">11 months ago</p>
              </div>

              <p className="flex text-yellow-500 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </p>
              <p className="text-gray-700 text-sm">
                I really enjoyed my stay—the room was clean, the staff were
                friendly, and everything I needed was nearby.
              </p>
            </div>
          )}

          {/* Booking Section ثابت تحت */}
          <div className="flex flex-col mt-6 border-t pt-4">
            <p className="text-gray-700 text-lg mb-4">
              Total price :{' '}
              <span className="font-bold text-2xl text-blue-900">$150.00</span>/night
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotelreview;
