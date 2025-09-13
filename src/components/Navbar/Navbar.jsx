import logo from "../../assets/images/logo.png";
import search from "../../assets/icons/search.png";
import searchMobile from "../../assets/icons/search-mobile.png";
import union from "../../assets/icons/union.png";
import unionMobile from "../../assets/icons/union-mobile.png";
import avatar from "../../assets/images/avatar.png";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="container mx-auto ">
      <nav className="flex justify-between items-center m-5 rounded-lg px-4">
        <Link to="/" className="hidden lg:block">
          <img src={logo} alt="" />
          <span className="text-primary-700 font-semibold text-sm">
            Safarni
          </span>
        </Link>
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-6 *:font-semibold *:text-secondary-900 *:hover:text-primary-700 *:transition-colors *:duration-200">
            <li>
              <NavLink
                to="home"
                className={({ isActive }) => {
                  return isActive ? "text-primary-700" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorite"
                className={({ isActive }) => {
                  return isActive ? "text-primary-700" : "";
                }}
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="compare"
                className={({ isActive }) => {
                  return isActive ? "text-primary-700" : "";
                }}
              >
                Compare
              </NavLink>
            </li>
            <li>
              <NavLink
                to="maps"
                className={({ isActive }) => {
                  return isActive ? "text-primary-700" : "";
                }}
              >
                maps
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-4">
            <li>
              <a href="">
                <img src={search} alt="" className="w-5" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={union} alt="" className="w-5" />
              </a>
            </li>
            <li className="rounded-full overflow-hidden size-8">
              <img src={avatar} alt="" className="w-full h-full object-cover" />
            </li>

            {/* تجريبي */}
            <Link to="/get-started">Login</Link>
          </ul>
        </div>
        {/* Mobile Responsive*/}
        <div className="lg:hidden w-full space-y-5">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="font-bold text-secondary-900 text-lg">Welcome</h2>
              <p className="text-secondary-400 font-extralight">
                explore The Best Places In World!
              </p>
            </div>
            <div className="rounded-full overflow-hidden size-12">
              <img src={avatar} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full border border-secondary-200 rounded-lg py-2 px-9 placeholder:text-secondary-300 focus:outline-0 focus:border-primary-300 "
                placeholder="Search ..."
              />
              <img
                src={searchMobile}
                alt=""
                className="absolute top-1/2 size-6 -translate-y-1/2 left-1.5"
              />
            </div>
            <div className="border border-secondary-200 rounded-lg p-2">
              <img src={unionMobile} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
