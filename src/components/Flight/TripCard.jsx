import React from "react";
import trip from '../../assets/images/paris.jpg'
function TripCard() {
  return (
    <div className="flex gap-4 p-4 w-full max-w-[608px] h-[202px] rounded-3xl shadow-[#D1D5DB8F] shadow-2xl ">
      <div>
        <img className="rounded-lg w-[170px] h-[170px] object-cover " src={trip} alt="" />
      </div>
      <div className="flex flex-col ">
        <h1>Paris Evening Cruise</h1>
        <p className="text-gray-500" >6:00 PM - 9:00 PM | $75</p>
        <p className="text-gray-500" >Enjoy a romantic evening cruise in Paris.</p>
      </div>
    </div>
  );
}

export default TripCard;
