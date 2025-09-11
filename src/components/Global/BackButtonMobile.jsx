import React from "react";
import back from "../../assets/icons/back_black.png";
import { useNavigate } from "react-router";

function BackButtonMobile() {
  const navigate = useNavigate();
  return (
    <button className="cursor-pointer" onClick={() => navigate(-1)}>
      <img src={back} alt="" className="size-6 md:hidden " />
    </button>
  );
}

export default BackButtonMobile;
