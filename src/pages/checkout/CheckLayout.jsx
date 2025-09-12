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
import Form from "../../components/Checkout/Form";
import PayPalForm from "../../components/Checkout/PayPalForm";
import { useNavigate } from "react-router";

function CheckLayout() {
  const methods = [
    { id: "paypal", label: "Paypal", img: paypal },
    { id: "mastercard", label: "Mastercard", img: mastercard },
    { id: "visa", label: "Visa", img: visa },
  ];

  const [SelectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex flex-col overflow-x-hidden gap-2 p-3 ">
        {/* Mobile */}
         <div className="flex  relative items-center  md:hidden ">
                <BackButtonMobile />
                <h1 className=" text-[18px] md:text-xl  absolute -translate-x-1/2 left-1/2 font-poppins font-medium  text-secondary-900  ">
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
          <div className=" w-full md:p-0 md:w-1/2 ">
            <div className="hidden  md:w-full md:flex justify-center mb-4">
              <h1 className="text-lg text-gray-900">Payment Method</h1>
            </div>

            <div className="flex flex-col  justify-between items-center  ">
              {/* div 1 */}

              <div className="flex flex-col gap-2 ">
                <h1 className="hidden md:block font-poppins pl-3 pt-3 font-medium text-gray-700 md:p-0 text-[22px] md:text-lg md:font-medium">
                  Add Your
                 Payment Method
                </h1>
                <h1 className="block md:hidden font-poppins pl-3 pt-3 font-medium text-gray-700 md:p-0 text-[22px] md:text-lg md:font-medium">
                  Add Your<br />
                 Payment Method
                </h1>
                <img className=" md:hidden lg:hidden" src={CreditCard} alt="" />
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
                <Form/>
              ) : SelectedMethod === "paypal" ? (
                <PayPalForm/>
              ) : (
                <div className="flex flex-col gap-4 pt-24 md:pt-72 p-5 w-full md:w-3/4">
                  <div className="flex flex-row items-center gap-2 justify-center">
                    <h1 className="text-lg text-gray-700 font-medium">
                      Add Card
                    </h1>
                    <img className="size-5" src={addcard} alt="Add" />
                  </div>
                  <button
                    onClick={() => navigate("/done")}
                    className="bg-primary-800 px-4 py-2 rounded-2xl text-white w-full cursor-pointer"
                  >
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
