import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import Title from './../../Components/Title/Title';

const Error = () => {
  return (
    <section>
      <Title title="Error"></Title>
      <div className="flex justify-center mt-28">
        <Link
          to="/"
          className="bg-black px-8 py-3 text-white font-medium text-xl bebas tracking-widest rounded-full"
        >
          Back to home
        </Link>
      </div>
      <Player
        className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
        autoplay
        loop
        src="https://lottie.host/dd1297a2-1e62-410f-8edf-1f9a4571466a/I9bdSp90fj.json"
      ></Player>
    </section>
  );
};

export default Error;
