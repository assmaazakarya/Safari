import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

// صور
import Back from "../assets/images/LoginAndRegister/Back.png";
import login from "../assets/images/LoginAndRegister/ForgetPasssword.png";
import logo from "../assets/images/LoginAndRegister/logo.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    try {
      await sendPasswordResetEmail(auth, email);

      // 💡 رسالة موحدة (سواء موجود أو مش موجود)
      setMessage(
        "✅ If this email is registered, a password reset link has been sent."
      );
      setTimeout(() => navigate("/otp"), 3000);
    } catch (error) {
      console.error("Firebase Error:", error.code);

      if (error.code === "auth/invalid-email") {
        setErrorMessage("❌ Please enter a valid email address.");
      } else {
        setErrorMessage("❌ Failed to send reset email. Try again.");
      }
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col pb-8">
      {/* header */}
      <div className="hidden md:flex justify-between items-center  px-6 md:px-12 lg:px-20 py-6 ">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 text-xl hover:text-primary-700"
        >
          <img
            src={Back}
            alt="Back"
            className="cursor-pointer  w-[60px] h-[60px]"
          />
        </button>
        <Link to="/" className="flex flex-col items-center">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="font-bold text-lg text-primary-700">Safarni</p>
        </Link>
      </div>

      {/* content */}
      <div className="flex-1 flex items-center justify-center  px-6 md:px-12 lg:px-20 mx-auto">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* image for desktop only */}
          <div className="hidden md:flex justify-center max-w-[608px] max-h-[772px]">
            <img src={login} alt="Forget Password" className="w-full " />
          </div>

          {/* form */}
          <div className="max-w-[510px] max-h-[273px]">
            <h1 className="text-[28px] font-semibold mb-2 text-center">
              Forgot Password?
            </h1>
            <p className="text-gray-500 mb-6 text-center text-[18px]">
              Enter your registered email and we will send you a reset link.
            </p>

            {message && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center">
                {message}
              </div>
            )}

            {errorMessage && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleReset} className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {loading ? "Sending..." : "Reset Password"}
              </button>
            </form>

            <p className="text-center mt-6 text-sm">
              Remembered your password?{" "}
              <Link
                to="/login"
                className="text-blue-700 font-semibold hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
