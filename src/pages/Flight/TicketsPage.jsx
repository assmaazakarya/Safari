import React from "react";
import TripCard from "../../components/Flight/TripCard";
import TicketCard from "../../components/Flight/TicketCard";
import calender from "../../assets/icons/calendar-days.png";
import vector from "../../assets/icons/Vector.png";
import BackButton from "../../components/Global/BackButton";
import back from "../../assets/icons/back_white.png";
import planemobile from "../../assets/images/planemobile.jpg";
import { useNavigate } from "react-router";

function TicketsPage() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col mx-auto max-w-[1240px]  md:py-8  ">
      <div className="hidden md:block ml-[100px] mb-1">
        <BackButton />
      </div>
      {/* mobile */}
      <div className=" relative w-full  md:hidden">
        <img className="object-cover static " src={planemobile} alt="" />
        <div className=" flex items-center gap-[70px] absolute top-5 left-4">
          <button onClick={() => navigate(-1)}>
            <img src={back} className="size-6 md:hidden cursor-pointer " />
          </button>
          <h1 className=" text-white text-lg ">Select Your Flight</h1>
        </div>
      </div>
      <div className="grid gap-14 p-3 mx-1.5 lg:mx-24 grid-cols-1 lg:grid-cols-2">
        {/* column 1 */}
        <div className="flex flex-col gap-6 ">
          <div className="gap-2 h-[80px] bg-white shadow-[0px_2px_8px_0px_#838BB41F] rounded-xl flex items-center justify-center text-lg font-medium">
            <img src={calender}></img>
            <h1 className="text-secondary-900 text-xl">Dec 16th, 2025</h1>
          </div>
          <TicketCard click={() => navigate("/seat")} />
          <TicketCard click={() => navigate("/seat")} />
          <TicketCard click={() => navigate("/seat")} />
        </div>

        {/* column 2 */}
        <div className="flex flex-col gap-6">
          <div className="gap-2 h-[80px] bg-white  shadow-[0px_2px_8px_0px_#838BB41F] rounded-xl flex items-center justify-center text-lg font-medium">
            <img src={vector}></img>
            <h1 className="text-[#111928] text-xl">Jan 6th,2025</h1>
          </div>
          <TicketCard click={() => navigate("/seat")} />
          <TicketCard click={() => navigate("/seat")} />
          <TicketCard click={() => navigate("/seat")} />
        </div>
      </div>
    </div>
  );
}

export default TicketsPage;
