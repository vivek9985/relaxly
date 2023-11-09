import Banner from "../../Components/Banner/Banner";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Preview from "../../Components/Preview/Preview";
import Rooms from "../../Components/Rooms/Rooms";
import Specialoffer from "../../Components/Specialoffer/Specialoffer";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Title from "./../../Components/Title/Title";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Title title="Relaxly - Home"></Title>
      <Banner></Banner>
      <Rooms></Rooms>
      <Specialoffer></Specialoffer>
      <Preview></Preview>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </main>
  );
};

export default Home;
