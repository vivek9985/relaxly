import { Link } from "react-router-dom";

const Bookings = ({ booking, deleteHandler }) => {
  const { _id, roomImage, roomName, checkIn, checkOut, price, description } = booking || {};
  return (
    <section className="border border-red-300 rounded-2xl mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="m-4">
          <h2 className="text-xl mb-3 font-semibold text-center">{roomName}</h2>
          <img
            src={roomImage}
            alt="image"
            className="w-full h-[300px] md:h-[200px] lg:h-[230px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-7 mt-6 md:mt-0">
          <h2 className="text-xl font-semibold">
            Price : <span className="text-red-500">${price}</span>
          </h2>
          <h2 className="text-lg font-medium">
            {" "}
            Check In : <span className="text-gray-500">{checkIn}</span>
          </h2>
          <h2 className="text-lg font-medium">
            {" "}
            Check Out : <span className="text-gray-500">{checkOut}</span>
          </h2>
        </div>
        <div className="flex lg:flex-col lg:items-center justify-center gap-5 mb-10 lg:mb-0 mt-5 lg:mt-0">
          <button>
            <Link
              to={`/mybookings/${_id}`}
              className="text-white bg-green-500 hover:bg-gray-800 transition-all duration-500 px-5 py-2.5 rounded-full"
            >
              Update Date
            </Link>
          </button>
          <button
            onClick={() => deleteHandler(_id)}
            className="text-white bg-red-500 hover:bg-gray-800 transition-all duration-500 px-[44px] py-2.5 rounded-full"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="py-6 px-5 text-black font-semibold text-lg"> Description : <span className="text-base font-light">{description}</span></p>
    </section>
  );
};

export default Bookings;
