import { Link, useLoaderData } from "react-router-dom";

const Room = () => {
  const datas = useLoaderData();
  return (
    <section className="w-[85%] mx-auto">
      <h2 className="text-5xl font-bold text-center mt-12 mb-20">
        Luxury <span className="text-red-500">Rooms</span>
      </h2>
      <div className="flex items-center justify-end">
        <h2 className="bg-gray-300 py-2 px-8 text-lg rounded-lg cursor-pointer text-gray-600">Filter by price</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7 mt-5 md:mt-8 lg:mt-10 mb-40">
        {datas.map((data) => (
          <div key={data._id} className="data">
            <div className="p-4 border border-red-300 rounded-xl">
              <div>
                <div className="overflow-hidden relative rounded-xl">
                  <Link to={`/rooms/${data._id}`}>
                    <img
                      src={data.image}
                      alt="image"
                      className="w-full h-[250px] scale-100 rounded-xl hover:scale-110 transition-all duration-700"
                    />
                  </Link>
                  {data?.discount ? (
                    <div className="text-gray-700 font-bold bg-red-300 rounded-tl-lg rounded-bl-lg py-1.5 px-2.5 absolute top-5 right-0">
                      {data.discount}% off
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <h3 className="text-gray-700 text-xl font-semibold pt-4">
                  {data.title}
                </h3>
                <div className="flex items-center my-4">
                  <p className="text-base font-semibold">${data.price} </p>
                  <p className="text-sm text-gray-800 font-medium">/Night</p>
                  {data?.discount_price ? (
                    <p className="text-base font-semibold ml-4 text-red-400 line-through">
                      ${data.discount_price}
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <Link
                  to={`/rooms/${data._id}`}
                  className="text-[17px] rounded-lg bg-red-500 hover:bg-green-500 transition-all duration-500 text-white px-4 py-2"
                >
                  Details
                </Link>
                <div className="flex items-center gap-3 text-base font-medium">
                  <p>Adult : {data.adult}</p>
                  <p>Child : {data.child}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Room;
