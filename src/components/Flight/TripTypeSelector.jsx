import React from "react";
import round from "../../assets/icons/Vector (Stroke).png";
import round2 from "../../assets/icons/Vector (Stroke)-1.png";
import round3 from "../../assets/icons/Vector (Stroke)-2.png";

function TripTypeSelector({ selectedTrip, onTripChange }) {
  const TripType = [
    {
      name: "Round Trip",
      icon: round,
      value: "round trip",
    },
    {
      name: "MutiCity",
      icon: round2,
      value: "multi city",
    },
    {
      name: "One Way",
      icon: round3,
      value: "one way",
    },
  ];

  return (
    <div className="flex items-center justify-between">
      {TripType.map((trip, index) => {
        const isSelected = trip.value === selectedTrip;

        return (
          <div
            key={index}
            onClick={() => onTripChange(trip.value)}
            className={`flex items-center md:font-medium gap-1 md:gap-2 p-2  md:py-4 md:px-6 cursor-pointer ${
              isSelected
                ? "bg-[#EBF5FF] text-[#1A56DB]"
                : "bg-gray-100 text-gray-600"
            } rounded-[254px]`}
          >
            <img className="size-3.5 md:size-4.5" src={trip.icon} alt={trip.name} />
            <span>{trip.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TripTypeSelector;
