import Title from "../../Components/Title/Title";

const Aboutus = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto mb-40">
      <Title title="About us"></Title>
      <h2 className="text-center text-4xl lg:text-5xl font-semibold mt-14 mb-8">
        About Us
      </h2>
      <p className="text-center text-gray-600">
        Welcome to our hotel booking website! We're thrilled to be your trusted
        partner in finding the perfect accommodations for your next adventure.
        Whether you're planning a relaxing beach vacation, a business trip, a
        romantic getaway, or a family holiday, our website is designed to make
        your hotel booking experience as seamless and enjoyable as possible.
      </p>
      <h3 className="text-center mt-10 mb-4 text-3xl font-medium text-gray-700">
        History
      </h3>
      <p className="text-center text-gray-600 mb-40">
        Take the visitors on your website to a trip down memory lane, and give
        them an insight to the history behind your store. Here, you can show
        them where, how, and when you started, and everything your business has
        accomplished on the way. This is your chance to share your relevant
        milestones and achievements relating to your business in an engaging
        way. You can even choose to present your history to your viewers in the
        form of a timeline, which allows you to display a large amount of
        information in a visually engaging manner. Your customers or potential
        customers might be interested in seeing how you grew over the years.
      </p>
    </section>
  );
};

export default Aboutus;
