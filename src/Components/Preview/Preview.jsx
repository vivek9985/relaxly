import { useEffect, useState } from "react";
import img from "../../assets/review.png";
import { BsFillPlayFill } from "react-icons/Bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoClose } from "react-icons/io5";
import { Button } from './../Utils/Button';

const Preview = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Aos.init();
  });

  const openVideo = () => {
    setOpen(true);
  };
  const closeVideo = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 bg-[#1f3347] my-32">
      <div className="">
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt="image"
            className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
          />
          <div className="w-full h-full absolute top-[90%] bottom-0 left-0 right-0 m-auto">
            <div className="flex items-center justify-center">
              <div
                className="animation-play-btn relative"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <div className="w-[60px] h-[60px] bg-[#fff] rounded-full">
                  <span
                    style={{ "--i": 0 }}
                    className="w-[60px] h-[60px] rounded-full absolute bg-[#fff] opacity-80"
                  ></span>
                  <span
                    style={{ "--i": 1 }}
                    className="w-[60px] h-[60px] rounded-full absolute bg-[#fff] opacity-80"
                  ></span>
                  <span
                    style={{ "--i": 2 }}
                    className="w-[60px] h-[60px] rounded-full absolute bg-[#fff] opacity-80"
                  ></span>
                  <div className="absolute right-0 left-1 top-0 bottom-0 flex items-center justify-center text-4xl cursor-pointer text-red-500 hover:text-green-400 transition-all duration-500">
                    <button onClick={openVideo}>
                      <BsFillPlayFill></BsFillPlayFill>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white p-12">
        <p
          className="text-xl text-red-500"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          Preview
        </p>
        <h2
          className="text-4xl mt-2 mb-4"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          Our Hotel Preview Video
        </h2>
        <p
          className="max-w-[800px] text-gray-300"
          data-aos="fade-left"
          data-aos-duration="1100"
        >
          Welcome to a world of unparalleled comfort and elegance at our
          exquisite hotel. Nestled in the heart of New York, our establishment
          offers a captivating blend of modern luxury, timeless charm, and
          top-notch hospitality. Whether you're a weary traveler seeking a
          restful refuge or a discerning guest in search of opulence, we are
          here to exceed your expectations.
        </p>
        <div className="mt-12" data-aos="fade-left" data-aos-duration="1300">
          <Button link="/rooms" text="Explore More" />
        </div>
      </div>
      {open ? (
        <div className="fixed w-full h-full flex items-center justify-center bg-[#ffffffad] top-0 bottom-0 left-0 right-0 m-auto z-50">
          <div className="relative transition-all duration-500">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              onClick={closeVideo}
              className="bg-gray-950 text-white w-9 h-9 flex items-center justify-center rounded-full absolute -right-10 -top-10 cursor-pointer"
            >
              <IoClose />
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mJVuZiK9a6I?si=PTEFP8y-q_jDzQvY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Preview;
