import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Back from "../assets/images/LoginAndRegister/Back.png";
import OTPImage from "../assets/images/LoginAndRegister/Otp.png";
import logo from "../assets/images/LoginAndRegister/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Otp = () => {
  const navigate = useNavigate();

  // State
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState(""); // لإظهار رسالة خطأ أو نجاح

  const OTP_CODE = "123456";

  // ✅ التحقق من OTP
  const verifyOTP = () => {
    const code = otp.join("");
    if (code === OTP_CODE) {
      setError(""); // امسح أي خطأ
      navigate("/new-password"); // يروح للصفحة الجديدة
    } else {
      setError("❌ Invalid OTP, please try again!");
    }
  };

  // ✅ العداد
  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }
    const timeout = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    return () => clearTimeout(timeout);
  }, [timer]);

  // ✅ تحديث OTP عند الكتابة
  const handleChange = (e, index) => {
    const val = e.target.value;

    // يقبل أرقام فقط
    if (!/^\d*$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // يتحرك أوتوماتيك للخانة اللي بعدها
    if (val && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // ✅ إعادة إرسال الكود
  const resendOTP = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(30);
    setCanResend(false);
    setError("✅ OTP resent! (Code: 123456)");
  };

  // progress bar
  const progressPercent = (timer / 30) * 100;

  // شرط التفعيل
  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen flex flex-col">
      {/* الهيدر */}
      <div className="flex justify-between items-center  md:flex-row flex-col md:items-center px-6 md:px-12 lg:px-20 py-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 text-xl hover:text-primary-700 self-start md:self-auto"
        >
          <img
            src={Back}
            alt="Back"
            className="cursor-pointer  w-[60px] h-[60px]"
          />
        </button>

        <Link
          to="/"
          className="hidden md:flex flex-col items-center mt-4 md:mt-0"
        >
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
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 md:px-12 lg:px-20 gap-[24px]">
        {/* صورة يسار */}
        <div className="hidden md:flex max-w-[606px] justify-center max-h-[772px] py-[30px]">
          <img src={OTPImage} alt="OTP" className="" />
        </div>

        {/* الفورم */}
        <div className="bg-white rounded-xl p-8 w-full max-w-[510px]">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-2">
              <CiMail className="text-4xl text-[#AFAFAF]" />
            </div>
            <h2 className="text-[28px] font-medium">Verify Code</h2>
            <p className="text-gray-500 text-[18px] font-normal">
              Please enter the code we just sent to email <br />
              <span className="text-[#111928]"> kneedue@untitledui.com</span>
            </p>
          </div>

          {/* العداد */}
          <div className="mb-4">
            <div className="flex justify-center items-center text-xl font-bold mb-2">
              {timer > 0
                ? `00:${timer < 10 ? `0${timer}` : timer}`
                : "Time's up!"}
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* الخانات */}
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((digit, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, i)}
                className="w-12 h-12 border text-center text-lg rounded focus:ring focus:ring-blue-300"
              />
            ))}
          </div>

          {/* رسالة الخطأ أو النجاح */}
          {error && (
            <div className="text-center text-sm mb-4 text-red-600 font-medium">
              {error}
            </div>
          )}

          {/* Resend */}
          <div className="text-center text-sm text-gray-600 mb-4">
            Didn’t receive OTP?
            <button
              disabled={!canResend}
              onClick={resendOTP}
              className={`mx-2 font-medium cursor-pointer ${
                canResend ? "text-blue-600 hover:underline" : "text-gray-400"
              }`}
            >
              Send again
            </button>
          </div>

          {/* Verify */}
          <button
            onClick={verifyOTP}
            disabled={!isComplete}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
