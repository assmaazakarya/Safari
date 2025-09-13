import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/appSlice";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// Images
import Back from "../assets/images/LoginAndRegister/Back.png";
import login from "../assets/images/LoginAndRegister/login.png";
import logo from "../assets/images/LoginAndRegister/logo.png";
import Google from "../assets/images/LoginAndRegister/Google.png";
import Facebook from "../assets/images/LoginAndRegister/Facebook.png";
import Apple from "../assets/images/LoginAndRegister/Apple.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("البريد الالكتروني غير صالح")
      .required("البريد الالكتروني مطلوب"),
    password: Yup.string()
      .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
      .required("كلمة المرور مطلوبة"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setErrorMsg("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const user = userCredential.user;

      dispatch(
        setUser({
          __id: user.uid,
          name: user.displayName,
          email: user.email,
        })
      );

      navigate("/"); // ✅ الدخول للصفحة الرئيسية
    } catch (error) {
      console.log("Firebase error:", error.code, error.message);

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/invalid-credential"
      ) {
        navigate("/register"); // لو مفيش حساب → يروح للتسجيل
      } else if (error.code === "auth/wrong-password") {
        setErrorMsg("كلمة المرور غير صحيحة");
      } else if (error.code === "auth/invalid-email") {
        setErrorMsg("البريد الإلكتروني غير صالح");
      } else {
        setErrorMsg("خطأ في تسجيل الدخول");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* الهيدر */}
      <div className="flex justify-between items-center  md:flex-row flex-col px-6 md:px-12 lg:px-20 py-6">
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

      {/* المحتوى */}
      <div className="flex flex-1 items-center justify-center  w-full px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full ">
          {/* الصورة */}
          <div className="hidden md:flex justify-center max-h-[772px] max-w-[608px] py-[30px]">
            <img src={login} alt="Login" className="w-full  max-h-[772px]" />
          </div>

          {/* فورم تسجيل الدخول */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="w-full md:max-w-[510px] bg-white p-8 py-[40px]">
                <h1 className="text-[28px] font-semibold mb-2 text-center">
                  Welcome Again
                </h1>
                <p className="text-gray-500 mb-6 text-center  text-[18px]">
                  Welcome back! Please fill your data
                </p>

                {/* Error Alert */}
                {errorMsg && (
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
                    {errorMsg}
                  </div>
                )}

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div
                    className={`flex items-center border rounded-lg px-3 ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <MdEmail className="text-gray-400 mr-2" />
                    <Field
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="flex-1 py-3 outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1 ml-1"
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Password
                  </label>
                  <div
                    className={`flex items-center border rounded-lg px-3 ${
                      touched.password && errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <FaLock className="text-gray-400 mr-2" />
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="********"
                      className="flex-1 py-3 outline-none"
                    />
                    <span
                      className="text-gray-500 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1 ml-1"
                  />
                  <div className="text-right mt-2">
                    <Link
                      to="/forget-password"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                {/* زر تسجيل الدخول */}
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                  disabled={loading || isSubmitting}
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>

                {/* Or */}
                <div className="flex items-center my-6">
                  <hr className="flex-1 border-gray-300" />
                  <span className="px-4 text-gray-400">Or</span>
                  <hr className="flex-1 border-gray-300" />
                </div>

                {/* أزرار Social Register */}
                <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center border rounded-lg hover:bg-gray-50 py-3 w-full"
                  >
                    <img src={Google} className="object-contain h-6" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center border rounded-lg hover:bg-gray-50 py-3 w-full"
                  >
                    <img src={Facebook} className="object-contain h-6" />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center border rounded-lg hover:bg-gray-50 py-3 w-full"
                  >
                    <img src={Apple} className="object-contain h-6" />
                  </button>
                </div>

                {/* رابط إنشاء حساب */}
                <p className="text-center mt-6 text-sm">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
