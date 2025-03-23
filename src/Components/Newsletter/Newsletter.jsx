import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="max-w-[1400px] w-10/12 md:w-9/12 mx-auto news-bg bg-no-repeat bg-cover bg-center mt-20 mb-36 rounded-2xl overflow-hidden">
      <div className="text-center text-white py-4">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold pt-20 pb-4 px-5"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span className="text-red-500">Subscribe</span> our newsletter
        </h2>
        <div className="overflow-hidden">
          <p
            className="px-8 md:px-20 lg:px-52 text-gray-300"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            Subscribe to the mailing list to receive updates on special offers,
            new arrivals and our promotions.
          </p>
        </div>
        <div className="bg-transparent w-10/12 md:w-9/12 lg:w-6/12 mx-auto p-1 rounded-full overflow-hidden mt-8 mb-20 border border-gray-100">
          <form className="flex" data-aos="fade-up" data-aos-duration="1100">
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              className="w-8/12 px-4 py-2.5 rounded-full focus:outline-none text-green-500 bg-transparent"
            />
            <input
              type="submit"
              className="w-4/12 bg-red-500 hover:bg-green-400 rounded-full text-gray-200 hover:text-gray-800 text-sm sm:text-base font-medium cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
