import React from "react";
import TripCard from "../../components/Flight/TripCard";
import searchicon from "../../assets/icons/search-normal.png";
import BackButton from "../../components/Global/BackButton";
import PackageCard from "../../components/Flight/PackageCard";

export default function Compare() {
  return (
    <div className=" flex flex-col gap-8 justify-center lg:m-16 ">
      <div className="flex gap-8">
        <BackButton />
        <div className="flex gap-1.5 border-2 border-[#3F83F8] rounded-2xl shadow-[#3F52B433]  py-3.5 px-4 w-full">
          <img src={searchicon} alt="" />
          <input
            className="border-[#3F83F8] text-[#6B7280] w-full outline-none "
            type="search"
            placeholder="pari"
          />
        </div>
      </div>
      <div className=" grid mx-auto max-w-6xl grid-cols-1 lg:grid-cols-2 gap-4 ">
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
      </div>

      <div>
        <h1 className=" font-medium">Compare</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
      <div className=" flex justify-center ">
        <button className="bg-[#6B7280] w-[608px] py-2 px-4 rounded-lg font-semibold  text-white">
          Check Out
        </button>
      </div>
    </div>
  );
}
