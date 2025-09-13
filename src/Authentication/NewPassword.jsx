import { useState } from "react";
import { FaArrowLeft, FaCheck, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import newPassword from "../assets/images/LoginAndRegister/NewPassword.png";
import logo from "../assets/images/LoginAndRegister/logo.png";
import check from "../assets/images/LoginAndRegister/check-circle.png";
import Lock from "../assets/images/LoginAndRegister/Lock.png";
import Back from "../assets/images/LoginAndRegister/Back.png";
const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const isEightChars = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEightChars && hasSpecialChar && password === confirm) {
      navigate("/done"); // ✅ يروح لصفحة Done
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* الهيدر */}
      <div className="hidden md:flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 md:flex-row flex-col md:items-center">
        {/* السهم */}
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 text-xl hover:text-primary-700 self-start md:self-auto"
        >
          <img src={Back} alt="Back" className="cursor-pointer" />
        </button>

        {/* اللوجو */}
        <Link to="/" className="flex flex-col items-center mt-4 md:mt-0">
          <img
            src={logo}
            alt="logo"
            className="md:w-10 md:h-10 w-[60px] h-[57px] object-contain"
          />
          <p className="font-bold text-lg text-primary-700 hidden md:flex">
            Safarni
          </p>
        </Link>
      </div>

      {/* الكونتنت */}
      <div className="bg-white flex flex-col md:flex-row py-[40px]  px-6 md:px-12 lg:px-20 mx-auto overflow-hidden ">
        {/* Left Illustration */}
        <div className="hidden md:flex items-center justify-center max-w-[608px] max-h-[772px]">
          <img src={newPassword} alt="Reset Illustration" className="" />
        </div>

        {/* Right Form */}

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center max-w-[510px] mx-auto pl-[49px]">
            {/* Title */}
            <div className="text-center mt-3 md:pt-[80px] mb-6">
              <FaLock className="text-3xl mx-auto mb-2 text-gray-600" />
              {/*  */}
              <h1 className="text-[28px] font-medium">Set New Password</h1>
              <p className="text-gray-500 font-normal text-[18px] max-w-[510px] mx-auto">
                Your New Password Must be Different to Previously Used Password
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              {/* Password Input */}
              <div className="relative">
                <label className="block text-[18px] font-medium text-[#373737]  mb-1">
                  New Password
                </label>
                {/* <FaLock className="absolute left-3 top-10 text-gray-400" /> */}
                <img src={Lock} alt="Lock" className="absolute left-3 top-10" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg py-2 pl-10 pr-3"
                />
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <label className="block text-[18px] font-medium text-[#373737] mb-1">
                  Confirm Password
                </label>
                <FaLock className="absolute left-3 top-10 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full border rounded-lg py-2 pl-10 pr-3"
                />
                {confirm && password !== confirm && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>
            </div>

            {/* Validation Rules */}
            <div className="mt-4 space-y-2 text-sm">
              <p
                className={`flex items-center gap-2 ${
                  isEightChars ? "text-green-600" : "text-gray-500"
                }`}
              >
                <img
                  src={check}
                  alt="check"
                  className={`w-[20px] h-[20px] ${
                    isEightChars ? "" : "opacity-30"
                  }`}
                />
                Must Be At Least 8 Characters
              </p>

              <p
                className={`flex items-center gap-2 ${
                  hasSpecialChar ? "text-green-600" : "text-gray-500"
                }`}
              >
                <img
                  src={check}
                  alt="check"
                  className={`w-[20px] h-[20px] ${
                    isEightChars ? "" : "opacity-30"
                  }`}
                />
                Must Contain One Special Character
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={
                !(isEightChars && hasSpecialChar && password === confirm)
              }
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              Reset Password
            </button>

            {/* Back Link */}
            <div className="text-center mt-4">
              <Link to="/login" className="text-gray-600 hover:underline">
                ← Back To Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
