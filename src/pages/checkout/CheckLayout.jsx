import React, { useState } from "react";
import BackButton from "../../components/Global/BackButton";
import checkcard from "../../assets/images/checkcard.png";
import addcard from "../../assets/icons/add.png";
import visa from "../../assets/images/visa.png";
import paypal from "../../assets/images/paypal.png";
import CreditCard from "../../assets/images/Credit Card.png";
import back from "../../assets/icons/back_black.png";
import mastercard from "../../assets/images/mastercard.png";
import BackButtonMobile from "../../components/Global/BackButtonMobile";

function CheckLayout() {
  const methods = [
    { id: "paypal", label: "Paypal", img: paypal },
    { id: "mastercard", label: "Mastercard", img: mastercard },
    { id: "visa", label: "Visa", img: visa },
  ];

  const [SelectedMethod, setSelectedMethod] = useState(null);

  return (
    <>
      <div className=" flex flex-col gap-2 p-3 ">
        {/* Mobile */}
        <div className="flex gap-[95px] md:hidden md:gap-0">
          <BackButtonMobile/>
          <h1 className=" text-md md:text-xl font-poppins  text-secondary-900 text-center mb-2 ">
            Payment Method
          </h1>
        </div>

        <div className="hidden md:block ml-[80px] mb-1 ">
          <BackButton />
        </div>
        <div className="flex">
          {/* first part */}
          <div className="hidden md:block  w-full md:w-1/2 ">
            <div className="flex justify-center">
              <img className="size-3/4 " src={checkcard} />
            </div>
          </div>
          {/* second part */}
          <div className=" md:p-0 md:w-1/2 ">
            <div className="hidden md:w-full md:flex justify-center mb-4">
              <h1 className="text-lg text-gray-900">Payment Method</h1>
            </div>

            <div className="flex flex-col  justify-between items-center  ">
              {/* div 1 */}

              <div className="flex flex-col gap-2 ">
                <h1 className="font-poppins text-gray-700  text-lg md:font-medium">
                  Add your payment method
                </h1>
                <img className="md:hidden lg:hidden" src={CreditCard} alt="" />
                <div className="flex gap-2 md:gap-8">
                  {methods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`flex items-center justify-center py-2 px-4 gap-2 rounded-4xl text-gray-600
                  ${
                    SelectedMethod === method.id
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100"
                  }`}
                    >
                      <img src={method.img} className="" alt={method.label} />
                      <span>{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* div 2 */}
              {SelectedMethod === "visa" || SelectedMethod === "mastercard" ? (
                <form className="flex flex-col p-5 gap-4 md:size-3/4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1  ">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="kneeDue@untitledui.com"
                        className="w-full pl-10 pr-4 py-2.5 border-2 border-[#D0D5DD] rounded-md text-sm text-gray-700 placeholder-gray-400"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
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
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
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
                      <label className="text-sm font-medium text-gray-700">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="522"
                        className="w-full px-4 py-2.5 border-2 border-[#D0D5DD] rounded-md text-sm text-gray-700 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <button className="bg-primary-800 px-4 py-2 rounded-2xl text-amber-50 w-full  cursor-pointer">
                    Confirm Booking
                  </button>
                </form>
              ) : SelectedMethod === "paypal" ? (
                <form className="flex flex-col p-5 w-full gap-4 md:size-3/4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1  ">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="kneeDue@untitledui.com"
                        className="w-full pl-10 pr-4 py-2.5 border-2 border-[#D0D5DD] rounded-md text-sm text-gray-700 placeholder-gray-400"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
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
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
                    </div>
                  </div>
                  {/* Button */}
                  <button className="bg-primary-800 px-4 py-2 rounded-2xl text-amber-50 w-full  cursor-pointer">
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div className="flex flex-col gap-4 pt-24 md:pt-72 p-5 w-full md:w-3/4">
                  <div className="flex flex-row items-center gap-2 justify-center">
                    <h1 className="text-lg text-gray-700 font-medium">
                      Add Card
                    </h1>
                    <img className="size-5" src={addcard} alt="Add" />
                  </div>
                  <button className="bg-primary-800 px-4 py-2 rounded-2xl text-white w-full cursor-pointer">
                    Continue
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckLayout;
