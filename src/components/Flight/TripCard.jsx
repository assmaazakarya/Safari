import React from "react";
import trip from "../../assets/images/paris.jpg";
function TripCard({ title, time, description, image }) {
  return (
    <div className="flex gap-4 p-2 md:p-4 w-full max-w-[608px]  md:h-[202px] rounded-3xl shadow-[#D1D5DB8F] shadow-xl ">
      <div>
        <img
          className="rounded-lg size-24 md:w-[170px] md:h-[170px] object-cover "
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col  ">
        <h1>{title}</h1>
        <p className="text-gray-500">{time}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default TripCard;
