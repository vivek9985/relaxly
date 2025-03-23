import logo from "../../assets/logo.png";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
  BiSolidPhoneCall,
} from "react-icons/Bi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/Hi";

const Footer = () => {
  return (
    <footer className="bg-[#0000001a] px-10">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="py-10">
          <img src={logo} alt="image" className="w-28" />
          <ul className="flex text-xl gap-3 mt-6">
            <li className="px-2 py-2 bg-[#ff00003b] rounded-full hover:scale-95 cursor-pointer transition-all duration-200">
              <a href="">
                <BiLogoFacebook></BiLogoFacebook>
              </a>
            </li>
            <li className="px-2 py-2 bg-[#ff00003b] rounded-full hover:scale-95 cursor-pointer transition-all duration-200">
              <a href="">
                <BiLogoTwitter></BiLogoTwitter>
              </a>
            </li>
            <li className="px-2 py-2 bg-[#ff00003b] rounded-full hover:scale-95 cursor-pointer transition-all duration-200">
              <a href="">
                <BiLogoInstagram></BiLogoInstagram>
              </a>
            </li>
            <li className="px-2 py-2 bg-[#ff00003b] rounded-full hover:scale-95 cursor-pointer transition-all duration-200">
              <a href="">
                <BiLogoYoutube></BiLogoYoutube>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start md:items-end justify-center gap-4 pb-10 md:pb-0">
          <div className="flex items-center">
            <HiOutlineMail className="text-xl md:text-2xl mr-1 text-red-400"></HiOutlineMail>
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              Email :
            </h2>
            <p className="pl-1 font-medium text-gray-700 text-sm md:text-base">
              relaxly@gmail.com
            </p>
          </div>
          <div className="flex items-center">
            <BiSolidPhoneCall className="text-xl md:text-2xl mr-1 text-red-400"></BiSolidPhoneCall>
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              Phone :
            </h2>
            <p className="pl-1 font-medium text-gray-700 text-sm md:text-base">
              +8801623498734
            </p>
          </div>
          <div className="flex items-center">
            <HiLocationMarker className="text-xl md:text-2xl mr-1 text-red-400"></HiLocationMarker>
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              Address :
            </h2>
            <p className="pl-1 font-medium text-gray-700 text-sm md:text-base">
              56 King Street, New York
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pb-10">
        <div className="w-full mx-auto h-px bg-red-300 mb-10"></div>
        <p className="px-20">
          Copyright © 2023. All rights reserved by{" "}
          <span className="text-red-600">Relaxly</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
