import React from "react";
import plane from "../../assets/images/plane_.png";
import AvatarIcon from "../../assets/images/AvatarIcon.png";
import QrCode from "../../assets/images/qr-code.png";
import border from "../../assets/icons/border.png";
import canda from "../../assets/icons/canda.png";
import BackButton from "../../components/Global/BackButton";
import planeicon from "../../assets/icons/plane.png";
import sofa from "../../assets/icons/Sofa.png";
function BardindPass() {
  return (
    <div className=" [&_h1]:text-gray-900 [&_h2]:text-gray-500">

    <div className="mx-auto  max-w-[1240px] px-4 py-2 md:py-8   ">
      <div className="grid grid-cols-2 gap-4 ">
        {/* first part */}
        <div className=" hidden md:block ">
          <div className="hidden md:block ml-[80px] mb-1 ">
            <BackButton />
          </div>
          <div className="flex justify-center">
            <img className="size-3/4 " src={plane} />
          </div>
        </div>
        {/* second part */}
        <div className="flex flex-col  justify-center  items-center ">
          <h1 className="text-2xl text-secondary-900 text-center mb-2 ">
            Barding pass
          </h1>
          <img src={border} />
          {/* after border */}
          <div className="flex flex-col container size-3/4 justify-between p-2 shadow-secondary-500  bg-white">
            {/* div 1 */}
            <div className="flex flex-col">
              <div className="flex flex-row  ">
                <div className="flex flex-col ">
                  <img src={canda} className="size-[24.6px]" />
                  <h1>Air Canada</h1>
                </div>
                <h1 className="flex align-text-bottom">December 16h, 2022</h1>
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

            {/* div 2 */}
            <div className="flex flex-row justify-between">
              <div>
                <h2>8</h2>
                <h1>Gate</h1>
              </div>
              <div>
                <h2>6</h2>
                <h1>Seat</h1>
              </div>
              <div>
                <h2>3</h2>
                <h1>Terminal</h1>
              </div>
              <div>
                <h2>AC006</h2>
                <h1>Flight</h1>
              </div>
            </div>

            {/* div 3 */}
            <div className="flex flex-row justify-between">
              <div className="flex gap-[4.11px]">
                <img  src={AvatarIcon} />
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

            {/* div 4 */}
            <div className="flex justify-center">
              <img className="h-[200px] w-[200px] " src={QrCode} />
            </div>
          </div>
          <button className="bg-primary-800 w-3/4 py-2 px-4 rounded-lg font-semibold  text-white">
          Check Out
        </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BardindPass;
