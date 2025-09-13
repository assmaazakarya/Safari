import React from "react";
import plane from "../../assets/icons/plane.png";

function TicketCard({ click }) {
  return (
    <div className="flex justify-center ">
      <div
        className=" flex flex-col  w-[608px] gap-4 px-8 py-4 h-[150px] rounded-2xl bg-white shadow-[0px_2px_8px_0px_#838BB41F] cursor-pointer hover:bg-gray-100"
        onClick={click}
      >
        {/* first part */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#111928]">7:05 AM</h1>
            <h1 className="text-[#6B7280]">YUL</h1>
          </div>
          <div className="text-[#111928] flex flex-col items-center ">
            <img src={plane} />
            <h1>18:55</h1>
          </div>
          <div>
            <h1 className="text-[#111928]">8:55 PM</h1>
            <h1 className="text-[#6B7280]">YUL</h1>
          </div>
        </div>
        {/* second part */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#6B7280]">1 layover: YYZ (3:55)</h1>
            <h1 className="text-gray-900">Scoot</h1>
          </div>
          <div>
            <h1 className="#111928">$ 1,300</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
