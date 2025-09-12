import React from "react";
import { useNavigate } from "react-router";
import name from "../../assets/icons/name.png";
import email from "../../assets/icons/email.png";
import cvv from "../../assets/icons/cvv.png";
function Form() {
  const navigate = useNavigate();

  return (
    <>
      <form className="flex flex-col p-5 gap-4 size-full md:size-3/4">
        {/* Full Name */}
        <div className="flex flex-col gap-1  ">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <div className="relative">
            <input
              type="text"
              placeholder="kneeDue@untitledui.com"
              className="w-full pl-10 pr-4 py-2.5 border-2 border-[#D0D5DD] rounded-md text-sm text-gray-700 placeholder-gray-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img className="size-5" src={name} alt="" />
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Your Email
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="kneeDue@untitledui.com"
              className="w-full pl-10 pr-4 py-2.5 border-2 border-[#D0D5DD] rounded-md text-sm text-gray-700 placeholder-gray-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img className="size-5" src={email} alt="" />
            </span>
          </div>
        </div>

        {/* Date + CVV */}
        <div className="flex gap-4">
          {/* Valid Date */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-gray-700">
              Valid Date
            </label>
            <input
              type="text"
              placeholder="12-6-2024"
              className="w-full px-4 py-2.5 border-2 border-[#D0D5DD] rounded-md text-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* CVV */}
          <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-gray-700">CVV</label>
            <div className="relative">
              <input
                type="text"
                placeholder="522"
                className="w-full pl-8 px-4 py-2.5 border-2 border-[#D0D5DD] rounded-md text-sm text-gray-700 placeholder-gray-400"
              />
              <span className=" absolute left-2 translate-y-3">
                    <img className="size-5" src={cvv} alt="" />
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/done");
          }}
          className="bg-primary-800 px-4 py-2 rounded-2xl text-amber-50 w-full  cursor-pointer"
        >
          Confirm Booking
        </button>
      </form>
    </>
  );
}

export default Form;
