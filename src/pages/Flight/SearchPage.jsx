import React, { useState } from "react";
import SideImage from "../../components/Global/SideImage";
import plane from "../../assets/images/plane_.png";
import back from "../../assets/icons/back_white.png";
import planemobile from "../../assets/images/planemobile.jpg";
import { Link } from "react-router";
import TripTypeSelector from "../../components/Flight/TripTypeSelector";
function SearchPage() {
  const [selectedTrip, setselectedTrip] = useState("round trip");
  function handleSelectedTrip(trip) {
    setselectedTrip(trip);
  }
  return (
    <div className="[&_label]:text-[#373737] font-medium ">
      <div className="md:py-4 md:px-2 ">
        <div className="flex flex-col md:flex-row ">
          {/* first part */}
          <div className=" w-1/2  hidden md:block ">
            <div className="flex justify-center">
              <img className=" md:size-3/4 " src={plane} />
            </div>
          </div>
          {/* mobile */}
          <div className=" relative w-full  md:hidden">
            <img className="object-cover static " src={planemobile} alt="" />
            <div className=" flex items-center gap-[80px] absolute top-5 left-4" >
              <img
                src={back}
                className="size-6 md:hidden cursor-pointer "
              />
              <h1 className=" text-white text-lg ">
                Book Your Flight
              </h1>
            </div>
          </div>
          {/* second part */}
          <div className="w-full   md:w-1/2 flex items-center justify-center  ">
            <div className="flex items-center  p-4 md:size-3/4">
              <form action="" className=" flex flex-col gap-4 ">
                <div className="">
                  <TripTypeSelector
                    selectedTrip={selectedTrip}
                    onTripChange={handleSelectedTrip}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Location</label>
                  <input
                    className="text-[#808080] border-[#D0D5DD] w-full border-2 rounded-sm py-2.5 px-4 "
                    type="text"
                    placeholder="Montreal,Canada"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Destination</label>
                  <input
                    className="text-[#808080] border-[#D0D5DD] w-full border-2 rounded-sm py-2.5 px-4 "
                    type="text"
                    placeholder="Tokyo,Japan"
                  />
                </div>
                <div className="flex flex-row justify-between gap-3 ">
                  <div>
                    <div className="flex flex-col gap-2">
                      <label>Depature</label>

                      <input
                        className="text-[#808080] border-[#D0D5DD] w-full border-2 rounded-sm py-2.5 px-4 "
                        type="text"
                        placeholder="Dec 16th, 2025"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-2">
                      <label>Return</label>
                      <input
                        className="text-[#808080] border-[#D0D5DD] w-full border-2 rounded-sm py-2.5 px-4 "
                        type="text"
                        placeholder="Jan 6th,2025"
                      />
                    </div>
                  </div>
                </div>
                {/* passengers */}
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Passengers</label>
                  <select className="text-[#808080] border-[#D0D5DD] w-full border-2 rounded-sm py-2.5 px-4 ">
                    <option>1 passenger</option>
                    <option>2 passenger</option>
                    <option>3 passenger</option>
                  </select>
                </div>
                <Link to={"/tickets"}>
                  <button className="bg-primary-800 px-4 py-2 rounded-2xl text-amber-50 w-full cursor-pointer">
                    Search Flights
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
