import Banner from "../../Components/Banner/Banner";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Preview from "../../Components/Preview/Preview";
import Rooms from "../../Components/Rooms/Rooms";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <Rooms></Rooms>
      <Preview></Preview>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
    </main>
  );
};

export default Home;
