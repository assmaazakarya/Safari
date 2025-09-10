import React from "react";
import TripCard from "../../components/Flight/TripCard";
import TicketCard from "../../components/Flight/TicketCard";
import calender from "../../assets/icons/calendar-days.png";
import vector from "../../assets/icons/Vector.png";
import BackButton from "../../components/Global/BackButton";
function TicketsPage() {
  return (
    <div className=" flex flex-col mx-auto max-w-[1240px] px-4 md:py-8  ">
      <div className="hidden md:block ml-[100px] mb-1">
        <BackButton />
      </div>

      <div className="grid gap-14 mx-1.5 lg:mx-24 grid-cols-1 lg:grid-cols-2">
        {/* column 1 */}
        <div className="flex flex-col gap-6 ">
          <div className="gap-2 h-[80px] bg-white shadow-[0px_2px_8px_0px_#838BB41F] rounded-xl flex items-center justify-center text-lg font-medium">
            <img src={calender}></img>
            <h1 className="text-secondary-900 text-xl">Dec 16th, 2025</h1>
          </div>
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>

        {/* column 2 */}
        <div className="flex flex-col gap-6">
          <div className="gap-2 h-[80px] bg-white  shadow-[0px_2px_8px_0px_#838BB41F] rounded-xl flex items-center justify-center text-lg font-medium">
            <img  src={vector}></img>
            <h1 className="text-[#111928] text-xl">Jan 6th,2025</h1>
          </div>
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </div>
    </div>
  );
}

export default TicketsPage;
