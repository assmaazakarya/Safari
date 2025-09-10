import React from "react";

function Seat({ Seat, action }) {
  const Color = () => {
    if (Seat.status === "unavailable") return "bg-gray-200  text-black";
    if (Seat.status === "selected") return "bg-green-500 text-black";
    return "bg-[#1E429F] text-white ";
  };

  return (
    <>
      <div
        onClick={Seat.status !== "unavailable" ? action : undefined}
        className={`flex cursor-pointer size-10 rounded-sm items-center justify-center ${Color()} `}
      >
        {Seat.id}
      </div>
    </>
  );
}

export default Seat;
