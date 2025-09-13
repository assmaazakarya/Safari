import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./pages/Layout.jsx";
import Favorite from "./pages/Favorite/Favorite.jsx";
import Compare from "./pages/Compare/Compare.jsx";
import Maps from "./pages/Maps/Maps.jsx";
import Home from "./pages/Home/Home.jsx";
//  my
import Avilable from "./components/Avilable";
import Hotelrevieww from "./components/Hotelrevieww";
import Reviows from "./components/Reviows";
import Bookhotel from "./components/Bookhotel";
// Authentication
import GetStarted from "./Authentication/GetStarted.jsx";
import Login from "./Authentication/Login.jsx";
import Register from "./Authentication/Register.jsx";
import ForgetPassword from "./Authentication/ForgetPassword.jsx";
import Otp from "./Authentication/Otp.jsx";
import NewPassword from "./Authentication/NewPassword.jsx";
import Done from "./Authentication/Done.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },
        {
          path: "compare",
          element: <Compare />,
        },
        {
          path: "maps",
          element: <Maps />,
        },

        {
          path: "avilableroom",
          element: <Avilable />,
        },
        {
          path: "hotel_review",
          element: <Hotelrevieww />,
        },
        {
          path: "reviews",
          element: <Reviows />,
        },
        {
          path: "bookho",
          element: <Bookhotel />,
        },
      ],
    },
    // Auth routes (no Navbar)
    { path: "/get-started", element: <GetStarted /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/otp", element: <Otp /> },
    { path: "/new-password", element: <NewPassword /> },
    { path: "/done", element: <Done /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
