import { useEffect } from "react";
import Slider from "./Slider";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="max-w-[1400px] w-10/12 md:w-9/12 mx-auto">
      <div className="text-center">
        <p
          className="text-lg font-semibold text-red-500"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Testimonial
        </p>
        <h3
          className="text-3xl font-semibold my-4"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          What Our Clients Says
        </h3>
        <p
          className="max-w-[800px] mx-auto pb-10 text-gray-600"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          Your safety and comfort are our priorities, which is why our
          meticulous selection process ensures each hotel meets stringent
          quality standards. Whether you’re visiting for business or leisure,
          trust us to provide you with a stay that combines the utmost security
          and exceptional service.
        </p>
      </div>
      <Slider></Slider>
    </div>
  );
};

export default Testimonial;
