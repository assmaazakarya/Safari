import React from "react";

function SideImage({ path, alt }) {
  return (
    <div className="flex justify-center" >
    <div className="  w-[608px]  bg-amber-200">
      <img
        src={path}
        alt={alt}
        className="absolute top-[218px] w-[608px] h-[734px] rounded-[30px] object-cover"
      />
    </div>
    </div>
  );
}

export default SideImage;
