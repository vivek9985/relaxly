import { Link } from "react-router-dom";

const Bookings = ({ booking }) => {
  const { _id, roomImage, roomName, checkIn, checkOut } =
    booking || {};
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 border border-red-300 rounded-2xl">
      <div className="m-4">
        <h2 className="text-xl mb-3 font-semibold text-center">{roomName}</h2>
        <img
          src={roomImage}
          alt="image"
          className="w-full h-[300px] md:h-[200px] lg:h-[230px] rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:gap-7 mt-6 md:mt-0">
        <h2 className="text-lg font-medium">
          {" "}
          Check In : <span className="text-red-500">{checkIn}</span>
        </h2>
        <h2 className="text-lg font-medium">
          {" "}
          Check Out : <span className="text-red-500">{checkOut}</span>
        </h2>
      </div>
      <div className="flex lg:flex-col items-start lg:items-center justify-center gap-5 mt-6 md:mt-6 mb-8">
        <button className="text-white bg-green-500 px-5 py-2 rounded-full">
          <Link to={`/mybookings/${_id}`}>Update Date</Link>
        </button>
        <button className="text-white bg-red-500 px-5 py-2 rounded-full">
          Delete
        </button>
      </div>
    </section>
  );
};

export default Bookings;
