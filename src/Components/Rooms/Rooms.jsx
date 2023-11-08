import { Link } from "react-router-dom";
import roomOne from "../../assets/room-1.jpg";
import roomTwo from "../../assets/room-2.jpg";
import roomThree from "../../assets/room-3.jpg";
import roomFour from "../../assets/room-4.jpg";
import roomFive from "../../assets/room-5.jpg";
import roomSix from "../../assets/room-6.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Rooms = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="w-10/12 mx-auto mt-28 overflow-hidden">
      <div className="text-center">
        <p className="text-lg font-semibold text-red-500" data-aos="fade-up" data-aos-duration="400">Choose Your Rooms</p>
        <h3 className="text-3xl font-semibold my-3" data-aos="fade-up" data-aos-duration="700">Featured Rooms</h3>
        <p className="pb-10 mx-0 lg:mx-24 text-gray-600" data-aos="fade-up" data-aos-duration="900">
          Your safety and comfort are our priorities, which is why our
          meticulous selection process ensures each hotel meets stringent
          quality standards. Whether you’re visiting for business or leisure,
          trust us to provide you with a stay that combines the utmost security
          and exceptional service.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7 mt-5 md:mt-8 lg:mt-10">
        {/* card one */}
        <div className="p-4 border border-red-300" data-aos="fade-right" data-aos-duration="500">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={roomOne}
                alt="image"
                className="w-full h-[250px] scale-100 hover:scale-110 transition-all duration-700"
              />
            </div>
            <h3 className="text-xl font-semibold pt-4">Deluxe Single Room</h3>
            <div className="flex items-center">
              <p className="my-1.5 text-base font-semibold">$200 </p>
              <p className="text-sm text-gray-800 font-medium"> /Night</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button className="text-[17px] rounded-tr-xl bg-red-500 text-white px-3 py-1">
              Details
            </button>
            <div className="flex items-center gap-3 text-base font-medium">
              <p>Adult : 2</p>
              <p>Child : 0</p>
            </div>
          </div>
        </div>
        {/* card two */}
        <div className="p-4 border border-red-300" data-aos="fade-up" data-aos-duration="700">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={roomTwo}
                alt="image"
                className="w-full h-[250px] scale-100 hover:scale-110 transition-all duration-700"
              />
            </div>
            <h3 className="text-xl font-semibold pt-4">Deluxe Family Suite</h3>
            <div className="flex items-center">
              <p className="my-1.5 text-base font-semibold">$700 </p>
              <p className="text-sm text-gray-800 font-medium"> /Night</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button className="text-[17px] rounded-tr-xl bg-red-500 text-white px-3 py-1">
              Details
            </button>
            <div className="flex items-center gap-3 text-base font-medium">
              <p>Adult : 2</p>
              <p>Child : 1</p>
            </div>
          </div>
        </div>
        {/* card three */}
        <div className="p-4 border border-red-300" data-aos="fade-left" data-aos-duration="500">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={roomThree}
                alt="image"
                className="w-full h-[250px] scale-100 hover:scale-110 transition-all duration-700"
              />
            </div>
            <h3 className="text-xl font-semibold pt-4">Honeymoon Suite</h3>
            <div className="flex items-center">
              <p className="my-1.5 text-base font-semibold">$1000 </p>
              <p className="text-sm text-gray-800 font-medium"> /Night</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button className="text-[17px] rounded-tr-xl bg-red-500 text-white px-3 py-1">
              Details
            </button>
            <div className="flex items-center gap-3 text-base font-medium">
              <p>Adult : 2</p>
              <p>Child : 0</p>
            </div>
          </div>
        </div>
        {/* card four */}
        <div className="p-4 border border-red-300" data-aos="fade-right" data-aos-duration="500">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={roomFour}
                alt="image"
                className="w-full h-[250px] scale-100 hover:scale-110 transition-all duration-700"
              />
            </div>
            <h3 className="text-xl font-semibold pt-4">Twin Premium Room</h3>
            <div className="flex items-center">
              <p className="my-1.5 text-base font-semibold">$1200 </p>
              <p className="text-sm text-gray-800 font-medium"> /Night</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button className="text-[17px] rounded-tr-xl bg-red-500 text-white px-3 py-1">
              Details
            </button>
            <div className="flex items-center gap-3 text-base font-medium">
              <p>Adult : 2</p>
              <p>Child : 2</p>
            </div>
          </div>
        </div>
        {/* card five */}
        <div className="p-4 border border-red-300" data-aos="fade-up" data-aos-duration="700">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={roomFive}
                alt="image"
                className="w-full h-[250px] scale-100 hover:scale-110 transition-all duration-700"
              />
            </div>
            <h3 className="text-xl font-semibold pt-4">
              Balcony Executive Room
            </h3>
            <div className="flex items-center">
              <p className="my-1.5 text-base font-semibold">$300 </p>
              <p className="text-sm text-gray-800 font-medium"> /Night</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button className="text-[17px] rounded-tr-xl bg-red-500 text-white px-3 py-1">
              Details
            </button>
            <div className="flex items-center gap-3 text-base font-medium">
              <p>Adult : 1</p>
              <p>Child : 0</p>
            </div>
          </div>
        </div>
        {/* card six */}
        <div className="p-4 border border-red-300" data-aos="fade-left" data-aos-duration="500">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={roomSix}
                alt="image"
                className="w-full h-[250px] scale-100 hover:scale-110 transition-all duration-700"
              />
            </div>
            <h3 className="text-xl font-semibold pt-4">
              Superior Premium Room
            </h3>
            <div className="flex items-center">
              <p className="my-1.5 text-base font-semibold">$900 </p>
              <p className="text-sm text-gray-800 font-medium"> /Night</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <button className="text-[17px] rounded-tr-xl bg-red-500 text-white px-3 py-1">
              Details
            </button>
            <div className="flex items-center gap-3 text-base font-medium">
              <p>Adult : 2</p>
              <p>Child : 1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-16" data-aos="fade-up" data-aos-duration="900">
        <Link
          to="rooms"
          className="bg-red-500 text-white text-lg font-medium px-8 py-3"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Rooms;
