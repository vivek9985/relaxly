import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/Hi";
import { CgClose } from "react-icons/Cg";
import { GiPhone } from "react-icons/Gi";
import logo from "../../assets/logo.png";
import { BiSolidUserCircle } from "react-icons/Bi";
import { AuthContext } from "../../Authprovider/Authprovider";
import Testimonial from './../Testimonial/Testimonial';

const Header = () => {
  const [open, setOpern] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/testimonials"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
          }
        >
          Testimonials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
          }
        >
          My bookings
        </NavLink>
      </li>
    </>
  );
  const logoutHandle = () => {
    logout()
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="border-b border-gray-200">
      <div className="w-full py-2 bg-rose-100">
        <div className="w-[95%] sm:w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-3">
          <div className="flex items-center justify-between sm:justify-start gap-2 col-span-2">
            {user ? (
              <button
                onClick={logoutHandle}
                className="text-[17px] bg-rose-50 hover:bg-red-400 hover:text-white rounded-full px-4 pt-[6px] pb-[7px]"
              >
                <Link to="/">Logout</Link>
              </button>
            ) : (
              <button className="text-[17px] bg-rose-50 hover:bg-red-400 hover:text-white rounded-full px-4 pt-[6px] pb-[7px]">
                <Link to="/login">Login</Link>
              </button>
            )}

            <div className="flex items-center">
              {user?.photoURL ? (
                <div className="flex items-center gap-1 bg-rose-50 rounded-full py-1 pl-1 pr-2">
                  <img
                    src={user?.photoURL}
                    alt="image"
                    className="w-[30px] h-[30px] rounded-full cursor-pointer"
                  />
                  <h2 className="text-gray-700 text-sm font-medium tracking-tight">
                    {user?.displayName}
                  </h2>
                </div>
              ) : (
                <div className="flex justify-end">
                  <BiSolidUserCircle className="text-4xl text-red-400"></BiSolidUserCircle>
                </div>
              )}
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-end col-span-1">
            <GiPhone className="text-base sm:text-xl"></GiPhone>
            <h2 className="text-sm sm:text-base break-words">+8801623498734</h2>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto py-5 grid grid-cols-3">
        <div className="flex items-center justify-start col-span-1">
          <Link to="/">
            <img
              src={logo}
              alt="image"
              className="w-28 hover:grayscale cursor-pointer transition-all duration-300 hover:scale-95"
            />
          </Link>
        </div>
        <nav className="hidden lg:flex items-center justify-end col-span-2">
          <ul className="flex gap-4 font-semibold uppercase">{menu}</ul>
        </nav>
        <div className="lg:hidden col-span-2">
          <div className="flex justify-end">
            <div
              onClick={() => {
                setOpern(!open);
              }}
              className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center z-50 cursor-pointer"
            >
              {open ? (
                <CgClose className="font-bold text-xl text-white"></CgClose>
              ) : (
                <HiOutlineMenuAlt4 className="font-bold text-xl text-white"></HiOutlineMenuAlt4>
              )}
            </div>
            <div
              className={`absolute bg-[#00000000] h-screen w-[60%] top-0 right-0 transition-all duration-1000 ${
                open ? "opacity-100 z-40" : "opacity-0 w-[75%] -z-10"
              }`}
            >
              <div className="h-screen bg-[#dddddd] clip">
                <div className="h-screen flex items-center justify-center ml-10 lg:ml-28">
                  <ul className="text-gray-800 text-xl md:text-3xl space-y-4 tracking-wider font-bold bebas">
                    {menu}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
