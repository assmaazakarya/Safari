import React, { useState } from "react";
import plane from "../../assets/images/plane_.png";
import blue from "../../assets/icons/blue.png";
import back from "../../assets/icons/back_black.png";
import green from "../../assets/icons/green.png";
import gray from "../../assets/icons/gray.png";
import BackButton from "../../components/Global/BackButton";
import SeatsLayout from "../../components/Flight/SeatsLayout";
import { Link } from "react-router";
import BackButtonMobile from "../../components/Global/BackButtonMobile";
function ChooseSeat() {
  const [SelectedSeat, setSelectedSeat] = useState(0);

  return (
    <div className="text-white [&_h1]:text-gray-900 [&_h2]:text-gray-500">
      <div className="md:p-3 overflow-x-hidden ">
        <div className="flex">
          {/* first part */}
          <div className=" w-1/2  hidden md:block ">
            <div className="hidden md:block ml-[80px] mb-1 ">
              <BackButton />
            </div>
            <div className="flex justify-center">
              <img className=" size-3/4 " src={plane} />
            </div>
          </div>
          {/* second part */}
          <div className="w-full p-3 md:p-0  md:w-1/2 flex items-center justify-center  ">
            <div className=" flex flex-col gap-6 md:gap-2.5 justify-center size-full  md:p-6 md:size-3/4">
              {/* Mobile */}
              <div className="flex  relative items-center  md:hidden md:gap-0">
                <BackButtonMobile />
                <h1 className=" text-[18px] md:text-xl  absolute -translate-x-1/2 left-1/2 font-poppins font-medium  text-secondary-900  ">
                  Choose Seats
                </h1>
              </div>
              <h1 className="hidden md:block text-md md:text-[18px] font-medium font-poppins  text-gray-900 text-center mb-2 ">
                Choose Seats
              </h1>

              <div className="flex flex-row justify-center gap-6 md:gap-10 ">
                <div className="flex items-center gap-2   ">
                  <img className="size-3 md:size-4 " src={blue} />
                  <h1 className="font-poppins" >Avaliable</h1>
                </div>
                <div className="flex items-center gap-2 ">
                  <img className="size-3 md:size-4" src={green} />
                  <h1 className="font-poppins">Selected</h1>
                </div>
                <div className="flex items-center gap-2 ">
                  <img className="size-3 md:size-4" src={gray} />
                  <h1 className="font-poppins">Un avaliable</h1>
                </div>
              </div>
              {/* Seats Section */}
              <SeatsLayout />
              {/* Informaton Prices  */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h1 className="text-secondary-900">Ticket price</h1>
                  <h3 className="text-[#1E429F] font-semibold ">$150.00</h3>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-secondary-900">Total price</h1>
                  <h3 className="text-[#1E429F] font-semibold ">$150.00</h3>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-secondary-900">your Seat</h1>
                  <h3 className="text-[#1E429F] font-semibold ">6</h3>
                </div>
              </div>

              {/* Button */}
              <div>
                <Link to={"/bardind"}>
                  <button className=" flex py-2 px-4 text-white bg-[#1E429F] cursor-pointer w-full h-[56px] rounded-lg justify-center items-center font-semibold text-xl">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSeat;
