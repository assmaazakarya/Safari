import React from "react";
import icon from "../../assets/icons/Back.png";
import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="cursor-pointer">
      <img src={icon} alt="" />
    </button>
  );
}

export default BackButton;
