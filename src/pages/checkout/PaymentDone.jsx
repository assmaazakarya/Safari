import React from "react";
import BackButton from "../../components/Global/BackButton";
import success from "../../assets/images/success.png";
import sucessmobile from "../../assets/images/sucess-mobile.png";
import check from "../../assets/icons/check-circle.png";
import { useNavigate } from "react-router";
import BackButtonMobile from "../../components/Global/BackButtonMobile";
function PaymentDone() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex pl-2  md:hidden ">
        <BackButtonMobile  />
      </div>
      <div className="flex flex-col gap-8 md:gap-0 justify-center md:justify-start min-h-screen  px-2 md:px-8 ">
        {/* mobile */}

        <div className="hidden md:block ml-[80px] mb-1">
          <BackButton />
        </div>
        <div className=" flex justify-center  md:hidden">
          <img className="size-[150px]" src={sucessmobile} alt="" />
        </div>
        <div className="flex flex-row justify-between">
          <div className=" hidden md:flex items-center justify-center  w-1/2 ">
            <img className="w-3/4 h-[95%]" src={success} alt="" />
          </div>
          <div className="w-full md:w-1/2 flex items-center  justify-center ">
            <div className="flex flex-col gap-6 justify-center  size-full md:size-3/4 ">
              <div className="photo hidden md:flex justify-center ">
                <img src={check} className="size-[70px]" />
              </div>
              <div className="flex flex-col items-center gap-2 md:gap-4">
                <div className="flex flex-col items-center ">
                  <h1 className="text-2xl md:text-xl  text-gray-900 ">
                    Payment Succeful!
                  </h1>
                  <h1 className="md:text-lg text-sm text-gray-500 ">
                    Thank you For Your Trust
                  </h1>
                </div>

                <button
                  onClick={() => navigate("/home")}
                  className=" w-full flex items-center justify-center text-white cursor-pointer font-semibold text-xl bg-[#1E429F] py-7 px-4 rounded-lg h-8"
                >
                  Back To Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDone;
