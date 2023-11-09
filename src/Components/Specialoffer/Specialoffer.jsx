import tour from "../../assets/tour.jpg";
import ballon from "../../assets/ballon.jpg";
import mountain from "../../assets/mountain.jpg";

import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Specialoffer = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="w-10/12 mx-auto mt-28">
      <div className="text-center">
        <p
          className="text-lg font-semibold text-red-500"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Choose your offer
        </p>
        <h3
          className="text-3xl font-semibold my-3"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Special Offers and Promotions
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-4 xl:gap-8 mt-14">
        <div
          className="relative rounded-3xl h-[270px] overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div>
            <img src={tour} alt="image" className="w-full h-[300px]" />
          </div>
          <div className="w-full h-full absolute top-0 bg-gradient-to-t from-[#ff000000] to-[#000000e8] px-5 pt-8 pb-5 text-white">
            <h2 className="text-4xl font-medium">World Tour</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Get the best international offers and deals world tour packages
              from here.
            </p>
            <button className="bg-red-500 px-5 py-1 mt-4 rounded-full">
              Book Now
            </button>
          </div>
        </div>
        <div
          className="relative rounded-3xl h-[270px] overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1400"
        >
          <div>
            <img src={ballon} alt="image" className="w-full h-[270px]" />
          </div>
          <div className="w-full absolute top-0 bg-gradient-to-t from-[#ff000000] to-[#000000e8] h-full px-5 pt-8 pb-5 text-white">
            <h2 className="text-4xl font-medium">Hot Air Balloon</h2>
            <p className="mt-2 text-gray-300 text-sm">
              A hot air balloon is a lighter-than-air aircraft consisting of a
              bag, called an envelope, which contains heated air.
            </p>
            <button className="bg-red-500 px-5 py-1 mt-4 rounded-full">
              Book Now
            </button>
          </div>
        </div>
        <div
          className="relative rounded-3xl h-[270px] overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div>
            <img src={mountain} alt="image" className="w-full h-[270px]" />
          </div>
          <div className="w-full absolute top-0 bg-gradient-to-t from-[#ff000000] to-[#000000e8] h-full px-5 pt-8 pb-5 text-white">
            <h2 className="text-4xl font-medium">Mountainous Offer</h2>
            <p className="mt-2 text-gray-300 text-sm">
              Up to 70% off on Winter Mountainous Offers.
            </p>
            <button className="bg-red-500 px-5 py-1 mt-4 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialoffer;
