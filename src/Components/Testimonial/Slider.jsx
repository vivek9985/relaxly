import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import clientOne from "../../assets/client-1.jpg";
import clientTwo from "../../assets/client-2.jpg";
import clientThree from "../../assets/client-3.jpg";
import clientFour from "../../assets/client-4.jpg";
import clientFive from "../../assets/client-5.jpg";
import clientSix from "../../assets/client-6.jpg";

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 650px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1100px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1 },
  })

  return (
    <div
      ref={sliderRef}
      className="keen-slider w-full mb-36 cursor-grab active:cursor-grabbing"
    >
      <div className="keen-slider__slide text-center p-4 border border-gray-300 transition-colors duration-500 hover:border-red-300 rounded-2xl grayscale hover:grayscale-0">
        <div className="">
          <img
            src={clientOne}
            alt="image"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold pt-2">James</h3>
          <p className="mb-3">client</p>
        </div>
        <p className="text-sm">
          A true gem! Impeccable service, stunning views, and utmost comfort.
          Our stay was pure perfection. Planning our return!
        </p>
      </div>
      <div className="keen-slider__slide text-center p-4 border border-gray-300 transition-colors duration-500 hover:border-red-300 rounded-2xl grayscale hover:grayscale-0">
        <div className="">
          <img
            src={clientTwo}
            alt="image"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold pt-2">Robert</h3>
          <p className="mb-3">client</p>
        </div>
        <p className="text-sm">
          Exceeded expectations in every way. Elegant rooms, delectable dining.
          Our stay was pure perfection. 5 stars!"
        </p>
      </div>
      <div className="keen-slider__slide text-center p-4 border border-gray-300 transition-colors duration-500 hover:border-red-300 rounded-2xl grayscale hover:grayscale-0">
        <div className="">
          <img
            src={clientThree}
            alt="image"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold pt-2">Nancy</h3>
          <p className="mb-3">client</p>
        </div>
        <p className="text-sm">
          Paradise found. Serene ambiance, exceptional amenities, and warm
          hospitality. Already planning our return!
        </p>
      </div>
      <div className="keen-slider__slide text-center p-4 border border-gray-300 transition-colors duration-500 hover:border-red-300 rounded-2xl grayscale hover:grayscale-0">
        <div className="">
          <img
            src={clientFour}
            alt="image"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold pt-2">John</h3>
          <p className="mb-3">client</p>
        </div>
        <p className="text-sm">
          An exceptional experience from start to finish. The attention to
          detail, combined with breathtaking surroundings.
        </p>
      </div>
      <div className="keen-slider__slide text-center p-4 border border-gray-300 transition-colors duration-500 hover:border-red-300 rounded-2xl grayscale hover:grayscale-0">
        <div className="">
          <img
            src={clientFive}
            alt="image"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold pt-2">Stiven</h3>
          <p className="mb-3">client</p>
        </div>
        <p className="text-sm">
          A true haven for relaxation. Every aspect of our stay, from the
          luxurious rooms to the exquisite dining, was exceptional.
        </p>
      </div>
      <div className="keen-slider__slide text-center p-4 border border-gray-300 transition-colors duration-500 hover:border-red-300 rounded-2xl grayscale hover:grayscale-0">
        <div className="">
          <img
            src={clientSix}
            alt="image"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h3 className="text-xl font-semibold pt-2">Jake</h3>
          <p className="mb-3">client</p>
        </div>
        <p className="text-sm">
          Indulgence at its finest. The blend of modern luxury and natural
          beauty exceeded our expectations, was exceptional.
        </p>
      </div>
    </div>
  );
};
export default Slider;
