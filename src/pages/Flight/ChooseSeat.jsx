import React from "react";
import plane from "../../assets/images/plane_.png";
import blue from "../../assets/icons/blue.png";
import green from "../../assets/icons/green.png";
import gray from "../../assets/icons/gray.png";
import BackButton from "../../components/Global/BackButton";
import SeatsLayout from "../../components/Flight/SeatsLayout";
function ChooseSeat() {

  return (
    <div className="text-white [&_h1]:text-gray-900 [&_h2]:text-gray-500">
      <div className="md:p-3 ">
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
          <div className="w-full  md:w-1/2 flex items-center justify-center  ">
            <div className=" flex flex-col gap-2.5 justify-center  p-6 md:p-0 md:size-3/4">
              <h1 className="text-xl font-medium  text-secondary-900 text-center mb-2 ">
                Choose Seat
              </h1>
              <div className="flex flex-row justify-between gap-10">
                <div className="flex items-center gap-2 ">
                  <img className="size-4" src={blue} />
                  <h1>Avaliable</h1>
                </div>
                <div className="flex items-center gap-2 ">
                  <img className="size-4" src={green} />
                  <h1>Selected</h1>
                </div>
                <div className="flex items-center gap-2 ">
                  <img className="size-4" src={gray} />
                  <h1>Un avaliable</h1>
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
                <button className=" flex py-2 px-4 text-white bg-[#1E429F]  w-full h-[56px] rounded-lg justify-center items-center font-semibold text-xl">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSeat;
