import { Link } from "react-router-dom";
import Back from "../assets/images/LoginAndRegister/Back.png";
import right from "../assets/images/LoginAndRegister/mainGetStarted.png";
import logo from "../assets/images/LoginAndRegister/logo.png";

const GetStarted = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col  pb-10 md:px-28">
      {/* الهيدر: اللوجو + الاسم */}
      <div className="flex md:justify-end md:items-center justify-center items-center pt-[32px]">
        <Link to="/">
          <div className="flex flex-col items-center gap-2  max-w-[145px]">
            <img
              src={logo}
              alt="logo"
              className="md:w-10 md:h-10 w-[145px] h-[136.55px] object-contain"
            />
            <p className="font-semibold md:text-[25px] text-[34px] text-primary-700">
              Safarni
            </p>
          </div>
        </Link>
      </div>

      {/* المحتوى */}
      <div className="flex-1 flex items-center justify-center ">
        <div className=" grid md:grid-cols-2 gap-12 items-center px-6 ">
          {/* الصورة */}
          <div className="flex justify-center max-w-[608px]">
            <img
              src={right}
              alt="Get_Started"
              className=" max-h-[772px] object-contain"
            />
          </div>

          {/* النصوص + الأزرار */}
          <div className="md:text-left  max-w-[510px]   gap-[24px] mx-auto">
            <h1 className="md:text-[28px] text-[32px] text-center md:font-medium font-semibold md:mb-6 mb-2 text-[#111928]">
              Welcome
            </h1>
            <p className="text-gray-600 text-center mx-auto md:max-w-[510px] max-w-[343px]  mb-10 font-normal md:text-[21px] text-[14px] leading-[150%]">
              Safarni is your all-in-one travel guide. Discover destinations,
              compare trip prices, book flights, hotels, car rentals, and local
              tours — all through one interactive experience.
            </p>

            <div className="flex flex-col gap-4 mx-auto md:mx-0 text-center max-w-[510px]">
              <Link
                to="/register"
                className="text-[20px] w-full leading-[25px] font-semibold bg-primary-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-[20px]  w-full leading-[25px] font-semibold border border-primary-700 text-primary-700 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
