import React from "react";
import TripCard from "../../components/Flight/TripCard";
import searchicon from "../../assets/icons/search-normal.png";
import BackButton from "../../components/Global/BackButton";
import PackageCard from "../../components/Flight/PackageCard";
import trip from "../../assets/images/paris.jpg";
import trip2 from "../../assets/images/trip2.png";
import trip3 from "../../assets/images/trip3.png";
import trip4 from "../../assets/images/trip4.png";
import trip5 from "../../assets/images/trip5.png";


export default function Compare() {
  const tripData = [
    {
      title: "Paris Evening Cruise",
      time: "6:00 PM - 9:00 PM | $75",
      description: "Enjoy a romantic evening cruise in Paris.",
      image: trip,
    },
    {
      title: "Iconic Paris Tour",
      time: "10:00 AM - 1:00 PM | $50",
      description: "Explore Paris's iconic landmarks and hidden gems in Paris.",
      image: trip2,
    },
    {
      title: "Paris Art & Culture Tour",
      time: "2:00 PM - 5:00 PM | $60",
      description:
        "Discover Paris's artistic side with visits to renowned museums in Paris.",
      image: trip3,
    },
    {
      title: "Paris Historical Sites",
      time: "9:00 AM - 12:00 PM | $45",
      description:
        "Explore the historic heart of Paris, including Notre Dame and the Latin Quarter in Paris.",
      image: trip4,
    },
    {
      title: "Paris Louvre Museum Tour",
      time: "1:00 PM - 4:00 PM | $55",
      description:
        "A guided tour of the Louvre Museum, showcasing Paris's art.",
      image: trip5,
    },
    {
      title: "Paris Evening Cruise",
      time: "6:00 PM - 9:00 PM | $75",
      description: "Enjoy a romantic evening cruise in Paris.",
      image: trip,
    },
  ];

  return (
    <div className=" flex flex-col gap-8 justify-center p-4 md:p-0 lg:m-16 ">
      <div className="flex gap-8">
        <BackButton />
        <div className="flex gap-1.5 border-1 ring-4 ring-gray-200 border-[#3F83F8] rounded-2xl shadow-[#3F52B433]  py-3.5 px-4 w-full">
          <img src={searchicon} alt="" />
          <input
            className="border-[#3F83F8]  text-gray-500 w-full outline-none "
            type="search"
            placeholder="pari"
          />
        </div>
      </div>
      <div className="grid mx-auto max-w-6xl grid-cols-1 lg:grid-cols-2 gap-4 ">
        {tripData.map((trip, index) => (
          <TripCard
            key={index}
            title={trip.title}
            time={trip.time}
            description={trip.description}
            image={trip.image}
          />
        ))}
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
