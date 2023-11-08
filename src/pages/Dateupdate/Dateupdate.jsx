import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const data = useLoaderData();
  const { _id, checkIn, checkOut } = data || {};

  const updateHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const checkIn = form.checkIn.value;
    const checkOut = form.checkOut.value;
    const updatedDate = {
      checkIn,
      checkOut,
    };
    // console.log(checkIn, checkOut);

    fetch(`http://localhost:4000/bookings/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDate),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        toast.success("Updated Dated!");
      });
  };

  return (
    <section className="w-[85%] mx-auto">
      <h1 className="text-4xl md:text-5xl font-semibold text-center my-14">
        Update <span className="text-red-500">Date</span>
      </h1>
      <form
        onSubmit={updateHandler}
        className="w-10/12 mx-auto grid grid-cols-2 gap-7 mb-32 mt-20"
      >
        <div className="">
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Check In
          </label>
          <input
            type="date"
            name="checkIn"
            defaultValue={checkIn}
            className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
            required
          />
        </div>
        <div className="">
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Check Out
          </label>
          <input
            type="date"
            name="checkOut"
            defaultValue={checkOut}
            className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-gray-900 transition-all duration-500 text-white bebas text-2xl tracking-widest col-span-2 py-3 md:py-4 my-8"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default Checkout;
