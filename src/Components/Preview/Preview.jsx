import img from "../../assets/review.png";
import { BsFillPlayFill } from "react-icons/Bs";

const Preview = () => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 bg-[#1f3347] my-32">
      <div className="">
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt="image"
            className="w-full h-[400px] md:h-[500px] lg:h-[550px]"
          />
          <div className="w-full h-full absolute top-[90%] bottom-0 left-0 right-0 m-auto">
            <div className="flex items-center justify-center">
              <div className="animation-play-btn relative">
                <div className="w-[60px] h-[60px] bg-[#fff] rounded-full relative">
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
                  <div className="absolute right-0 left-1 top-0 bottom-0 flex items-center justify-center text-4xl cursor-pointer text-red-500 hover:rotate-[360deg] transition-all duration-500">
                    <a href="https://www.youtube.com/watch?v=mJVuZiK9a6I" target="_blanck">
                      <BsFillPlayFill></BsFillPlayFill>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white p-12">
        <p className="text-xl text-red-500">Preview</p>
        <h2 className="text-4xl mt-2 mb-4">Our Hotel Preview Video</h2>
        <p className="text-gray-300">
          Welcome to a world of unparalleled comfort and elegance at our
          exquisite hotel. Nestled in the heart of New York, our establishment
          offers a captivating blend of modern luxury, timeless charm, and
          top-notch hospitality. Whether you're a weary traveler seeking a
          restful refuge or a discerning guest in search of opulence, we are
          here to exceed your expectations.
        </p>
        <button className="text-lg px-9 py-2.5 bg-red-500 mt-6 text-white">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Preview;
