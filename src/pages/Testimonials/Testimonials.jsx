import Slider from "../../Components/Testimonial/Slider";
import Title from './../../Components/Title/Title';

const Testimonials = () => {
  return (
    <section className="w-10/12 md:w-9/12 mx-auto">
      <Title title="Relaxly - Testimonials"></Title>
        <div className="text-center mt-16">
          <h3 className="text-4xl lg:text-5xl  font-semibold my-5">What Our <span className="text-red-500">Clients Says</span></h3>
          <p className="pb-14 mx-0 lg:mx-24 text-gray-600 mt-10">
            Your safety and comfort are our priorities, which is why our
            meticulous selection process ensures each hotel meets stringent
            quality standards. Whether you’re visiting for business or leisure,
            trust us to provide you with a stay that combines the utmost
            security and exceptional service.
          </p>
        </div>
        <Slider></Slider>
    </section>
  );
};

export default Testimonials;
