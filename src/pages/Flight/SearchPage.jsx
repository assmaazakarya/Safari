import React from "react";
import SideImage from "../../components/Global/SideImage";
import plane from "../../assets/images/plane_.png";
import { Link } from "react-router";
import TripTypeSelector from "../../components/Flight/TripTypeSelector";
function SearchPage() {
  const inputStyle = "";
  return (
    <div className="flex px-2 py-4 m-4 h-screen">
      <SideImage path={plane} alt={"plane"} />
      <div className="flex flex-col gap-1 w-1/2 justify-center">
        <form action="" className="items-center w-3/4">
          <div className="flex">
            <TripTypeSelector />
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
              placeholder="Montreal,Canada"
            />
          </div>
          <div className="flex justify-between ">
            <div>
              <div className="flex flex-col gap-2">
                <label>Depature</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <label>Depature</label>
                <input type="text" />
              </div>
            </div>
          </div>
          {/* passengers */}
          <div>
            <label className="font-medium">Passengers</label>
            <select className="text-[#808080] border-[#D0D5DD] w-full border-2 rounded-sm py-2.5 px-4 ">
              <option>1 passenger</option>
              <option>2 passenger</option>
              <option>3 passenger</option>
            </select>
          </div>
          <Link to={""}>
            <button className="bg-primary-800 px-4 py-2 rounded-2xl text-amber-50 w-full cursor-pointer">
              Search Flights
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SearchPage;
