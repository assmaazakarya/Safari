import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/appSlice";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// images
import Back from "../assets/images/LoginAndRegister/Back.png";
import SignUp from "../assets/images/LoginAndRegister/SignUp.png";
import logo from "../assets/images/LoginAndRegister/logo.png";
import Google from "../assets/images/LoginAndRegister/Google.png";
import Facebook from "../assets/images/LoginAndRegister/Facebook.png";
import Apple from "../assets/images/LoginAndRegister/Apple.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "", name: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("الاسم مطلوب"),
    email: Yup.string()
      .email("البريد الالكتروني غير صالح")
      .required("البريد الالكتروني مطلوب"),
    password: Yup.string()
      .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف")
      .required("كلمة المرور مطلوبة"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await updateProfile(auth.currentUser, {
        displayName: values.name,
      });

      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: values.email,
          displayName: values.name,
        })
      );

      resetForm();
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("البريد الإلكتروني مستخدم من قبل");
      } else {
        setErrorMsg("حدث خطأ أثناء التسجيل");
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col pb-8">
      {/* الهيدر */}
      <div className="hidden md:flex justify-between items-center px-6 md:px-12 lg:px-20 py-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 text-xl hover:text-primary-700"
        >
          <img src={Back} alt="Back" className="cursor-pointer" />
        </button>
        <Link to="/" className="flex flex-col items-center ">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="font-bold text-lg text-primary-700">Safarni</p>
        </Link>
      </div>

      {/* المحتوى */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 mx-auto pb-5">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* الصورة */}
          <div className="flex justify-center max-w-[608px]">
            <img
              src={SignUp}
              alt="Register"
              className="w-full  hidden md:flex  max-h-[772px]"
            />
          </div>

          {/* فورم التسجيل */}
          <div className="max-w-md space-y-6 max-h-[510px]">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form className="md:max-w-md w-full">
                  <h1 className="text-[28px] font-semibold mb-2 text-center">
                    Welcome
                  </h1>
                  <p className="text-gray-500 mb-6 text-center  text-[21px] font-normal">
                    Please fill your data to create account
                  </p>

                  {/* Error Alert */}
                  {errorMsg && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <div
                      className={`flex items-center border rounded-lg px-3 ${
                        touched.name && errors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <FaUser className="text-gray-400 mr-2" />
                      <Field
                        type="text"
                        name="name"
                        placeholder="kneeDue"
                        className="flex-1 py-3 outline-none"
                      />
                    </div>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1 ml-1"
                    />
                  </div>

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
                        placeholder="kneeDue@untitledui.com"
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
                  </div>

                  {/* زر التسجيل */}
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                    disabled={loading || isSubmitting}
                  >
                    {loading ? "Signing Up..." : "Sign Up"}
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
                      className="flex items-center justify-center border rounded-lg hover:bg-gray-50 py-3 w-full md:flex-1"
                    >
                      <img src={Google} className="object-contain" />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center border rounded-lg hover:bg-gray-50 py-3 w-full md:flex-1"
                    >
                      <img src={Facebook} className="object-contain" />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center border rounded-lg hover:bg-gray-50 py-3 w-full md:flex-1"
                    >
                      <img src={Apple} className="object-contain" />
                    </button>
                  </div>

                  {/* رابط تسجيل الدخول */}
                  <p className="text-center mt-6 text-sm">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-700 font-semibold hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
