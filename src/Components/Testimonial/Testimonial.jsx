import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className="w-10/12 md:w-9/12 mx-auto">
      <div className="text-center">
        <p className="text-lg font-semibold text-red-500">Testimonial</p>
        <h3 className="text-3xl font-semibold my-4">What Our Clients Says</h3>
        <p className="pb-10 mx-0 lg:mx-24 text-gray-600">
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
