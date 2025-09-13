import { Link, useNavigate } from "react-router-dom";
import done from "../assets/images/LoginAndRegister/Done.png";
import logo from "../assets/images/LoginAndRegister/logo.png";
import Subtract from "../assets/images/LoginAndRegister/Subtract.png";
import Back from "../assets/images/LoginAndRegister/Back.png";

const Done = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* الهيدر */}
      <div className="hidden  w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 md:flex justify-between items-center pt-6">
        {/* السهم */}
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 text-xl hover:text-primary-700"
        >
          <img src={Back} alt="Back" className="cursor-pointer" />
        </button>

        {/* اللوجو */}
        <Link to="/" className="flex flex-col items-center">
          <img
            src={logo}
            alt="logo"
            className="md:w-10 md:h-10 w-[60px] h-[57px] object-contain"
          />
          <p className="font-bold text-lg text-primary-700 hidden md:flex mt-2">
            Safarni
          </p>
        </Link>
      </div>

      {/* الكونتنت */}
      <div className="flex flex-1 flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 gap-[30px]">
        {/* Left Illustration */}
        <div className="hidden md:flex items-center justify-center max-w-[608px]">
          <img
            src={done}
            alt="Success Illustration"
            className="py-[60px] max-h-[772px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-center text-center max-w-[510px] mt-10 md:mt-0">
          <img
            src={Subtract}
            alt="success icon"
            className="mx-auto mb-6 w-16 h-16"
          />
          <h1 className="text-[28px] font-semibold mb-3">Password Reset</h1>
          <p className="text-gray-500 text-[18px] leading-relaxed mb-8 max-w-[391px]">
            Your password has been successfully reset. Click below to log in
            magically.
          </p>
          <Link
            to="/login"
            className="bg-blue-600 w-full text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Done;
