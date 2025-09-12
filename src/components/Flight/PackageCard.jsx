import React from "react";
import icon from "../../assets/icons/true.png";
function PackageCard({
  id,
  title,
  price,
  highlights,
  availability,
  guide,
  transportation,
  isSelected,
  onSelect,
}) {
  return (
    <div
      onClick={onSelect}
      className={`flex flex-col gap-4 p-6 rounded-xl border-[1px] ${
        isSelected ? "border-[#1E429F]" : "border-[#D1D5DB]"
      }  bg-[#FAFAFA] `}
    >
      <div>
        <h1>{title}</h1>
      </div>
      <div className="flex gap-1 items-start">
        <h1 className="font-semibold text-[40px] leading-3 ">${price}</h1>
        <h2 className="text-[#6B7280] font-medium text-lg ">/person</h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <img src={icon} />
          <h1>Duration: 3 hours</h1>
        </div>
        <div className="flex gap-3">
          <img src={icon} />
          <h1>Highlights: {highlights}</h1>
        </div>
        <div className="flex gap-3">
          <img src={icon} />
          <h1>Availability: {availability}</h1>
        </div>
        <div className="flex gap-3">
          <img src={icon} />
          <h1>Guide: {guide}</h1>
        </div>
        <div className="flex gap-3">
          <img src={icon} />
          <h1>Transportation: {transportation}</h1>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
