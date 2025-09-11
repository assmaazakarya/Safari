import React from "react";
import plane from "../../assets/images/plane_.png";
import AvatarIcon from "../../assets/images/AvatarIcon.png";
import QrCode from "../../assets/images/qr-code.png";
import border from "../../assets/icons/border.png";
import canda from "../../assets/icons/canda.png";
import Separator from "../../assets/icons/Separator.png";
import SeparatorDash from "../../assets/icons/Separator Dash.png";
import BackButton from "../../components/Global/BackButton";
import planeicon from "../../assets/icons/plane.png";
import sofa from "../../assets/icons/Sofa.png";
import { Link, useNavigate } from "react-router";
import BackButtonMobile from "../../components/Global/BackButtonMobile";
function BardindPass() {
  const navigate = useNavigate();
  return (
    <div className=" [&_h1]:text-gray-900 [&_h2]:text-gray-500">
      <div className="mx-auto  max-w-[1240px] px-4 py-2 md:py-8   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-0 ">
          {/* first part */}
          {/* Mobile */}
          <div className="flex items-center gap-[95px] md:hidden md:gap-0">
            <BackButtonMobile />
            <h1 className=" text-md md:text-xl font-poppins  text-secondary-900 text-center mb-2 ">
              Boarding Pass
            </h1>
          </div>
          <div className=" hidden md:block ">
            <div className="hidden md:block ml-[80px] mb-1 ">
              <BackButton />
            </div>
            <div className="flex justify-center">
              <img className="size-3/4 " src={plane} />
            </div>
          </div>
          {/* second part */}
          <div className="flex flex-col gap-2  justify-center  items-center md:p-2  ">
            <h1 className=" hidden md:block text-xl text-secondary-900  text-center mb-2 ">
              Barding pass
            </h1>
            <img src={border} />
            {/* after border */}
            <div className="flex  flex-col container pt-4 gap-1.5 lg:size-3/4 md:size-3/4 justify-between shadow-lg p-8 rounded-2xl bg-white">
              {/* div 1 */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between  ">
                  <div className="flex flex-col items-center ">
                    <img src={canda} className="size-6 object-cover" />
                    <h1>Air Canada</h1>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <h1 className="text-center">December 16h, 2022</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-between ">
                  <div>
                    <h1>07h05</h1>
                    <h2>YUL</h2>{" "}
                  </div>
                  <div className="flex flex-col items-center">
                    <img className="" src={planeicon} />
                    <h2>13h00</h2>
                  </div>
                  <div>
                    <h1>20h05</h1>
                    <h2>NRT</h2>{" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img className="w-full" src={Separator} alt="" />
              </div>
              {/* div 2 */}
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center justify-center">
                  <h2>8</h2>
                  <h1>Gate</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>6</h2>
                  <h1>Seat</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>3</h2>
                  <h1>Terminal</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2>AC006</h2>
                  <h1>Flight</h1>
                </div>
              </div>
              <div className="flex justify-center">
                <img className="w-full" src={Separator} alt="" />
              </div>
              {/* div 3 */}
              <div className="flex flex-row justify-between">
                <div className="flex gap-[4.11px]">
                  <img src={AvatarIcon} />
                  <div>
                    <h1>Catherine Dion</h1>
                    <h2>24 years, Female</h2>
                  </div>
                </div>
                <div className="flex items-center ">
                  <img src={sofa} />
                  <h2>29A</h2>
                </div>
              </div>
              <div className="flex justify-center">
                <img className="w-full" src={SeparatorDash} alt="" />
              </div>
              {/* div 4 */}
              <div className="flex justify-center">
                <img className="size-[180px] " src={QrCode} />
              </div>
            </div>

            <button
              onClick={() => navigate("/check")}
              className="bg-primary-800 cursor-pointer w-3/4 py-2 px-4 rounded-lg font-semibold  text-white"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BardindPass;
