import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { Button } from "../Utils/Button";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="banner-bg bg-no-repeat bg-cover bg-center">
      <div className="pt-28 lg:pt-2 pb-40 text-center text-gray-100 bg-[#00000044]">
        <div className="md:pt-10 lg:pt-40 lg:h-[240px] overflow-hidden">
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-5xl lg:text-7xl bebas tracking-wider px-3"
          >
            <span className="hover:text-5xl transition-all duration-200">
              E
            </span>
            <span className="hover:text-5xl transition-all duration-200">
              n
            </span>
            <span className="hover:text-5xl transition-all duration-200">
              j
            </span>
            <span className="hover:text-5xl transition-all duration-200">
              o
            </span>
            <span className="hover:text-5xl transition-all duration-200">
              y
            </span>
            <span> </span>
            <span className="hover:text-5xl transition-all duration-200">
              Y
            </span>
            <span className="hover:text-5xl transition-all duration-200">
              o
            </span>
            <span className="hover:text-5xl transition-all duration-200">
              u
            </span>
            <span className="hover:text-5xl transition-all duration-200">
              r
            </span>
            <span> </span>
            <span className="text-red-500">
              <span className="hover:text-5xl transition-all duration-200">
                b
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                e
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                a
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                u
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                t
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                i
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                f
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                u
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                l
              </span>
              <span> </span>
              <span className="hover:text-5xl transition-all duration-200">
                m
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                o
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                m
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                e
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                n
              </span>
              <span className="hover:text-5xl transition-all duration-200">
                t
              </span>
            </span>
          </h2>
        </div>
        <div className="overflow-hidden">
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-gray-100 max-w-[1000px] w-11/12 md:w-8/12 mx-auto mt-4 mb-12"
          >
            Welcome to a world of unparalleled comfort and elegance at our
            exquisite hotel. Nestled in the heart of New York, our establishment
            offers a captivating blend of modern luxury, timeless charm, and
            top-notch hospitality.Whether you're a weary traveler seeking a
            restful refuge or a discerning guest in search of opulence, we are
            here to exceed your expectations.
          </p>
        </div>
        <div className="overflow-hidden py-4">
          <div data-aos="fade-up" data-aos-duration="700">
           <Button link="/rooms" text="Book now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
