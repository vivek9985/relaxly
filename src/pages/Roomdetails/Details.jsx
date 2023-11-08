import { Link, useLoaderData } from "react-router-dom";
import star from "../../assets/star.png";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import toast from "react-hot-toast";

const Details = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const bookHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const checkIn = form.checkIn.value;
    const checkOut = form.checkOut.value;
    const name = form.name.value;
    const email = form.email.value;
    const profile = form.photo.value;
    const booking = {
      roomImage: data.image,
      roomName: data.title,
      checkIn,
      checkOut,
      name,
      email,
      profile,
    };
    fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Booked!");
        form.reset();
      });
  };

  return (
    <section className="w-[85%] mx-auto py-16 mb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        <div className="col-span-2 relative">
          <img
            src={data.image}
            alt="image"
            className="w-full h-[300px] md:h-[400px] lg:h-[550px] rounded-2xl"
          />
          {data.discount ? (
            <div className="absolute top-10 right-10 bg-[#00000041] backdrop-blur-md px-8 py-3 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl text-gray-100 font-medium text-lg">
              {data.discount}% OFF
            </div>
          ) : (
            <div></div>
          )}
          <h2 className="mt-10 font-medium">
            <span className="text-2xl font-semibold text-gray-700">
              {data.title}{" "}
            </span>
            (<span className="text-green-600 text-xl">{data.availability}</span>
            )
          </h2>
          <div className="flex items-center mt-4 mb-3">
            <p className="text-xl text-red-500 font-semibold">${data.price} </p>
            <p className="text-lg text-gray-800 font-medium">/Night</p>
            {data?.discount_price ? (
              <p className="text-lg font-semibold text-gray-700 ml-4 line-through">
                ${data.discount_price}
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div>
            {data?.discount_price ? (
              <p className="text-lg font-medium mb-2 text-gray-900">
                Special Offer :{" "}
                <span className="text-red-500 font-semibold">
                  {data.discount}%{" "}
                  <span className="text-green-600 font-medium">off</span>
                </span>
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-2 text-lg text-gray-900 font-medium">
            <div className="flex items-center gap-3">
              <p>
                Adult : <span className="text-gray-500">{data.adult}</span>
              </p>
              <p>
                Child : <span className="text-gray-500">{data.child}</span>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <h2>
                Reviews :{" "}
                <span className="text-gray-500">({data.reviews})</span>
              </h2>
              <div className="flex items-center justify-center gap-1">
                <img src={star} alt="image" className="w-5 h-5" />
                <img src={star} alt="image" className="w-5 h-5" />
                <img src={star} alt="image" className="w-5 h-5" />
                <img src={star} alt="image" className="w-5 h-5" />
                <img src={star} alt="image" className="w-5 h-5" />
              </div>
            </div>
            <h2>
              Room size :{" "}
              <span className="text-gray-500">({data.room_size})</span>
            </h2>
          </div>
          <p className="text-gray-500 mt-6 pr-2">{data.description}</p>
          <form onSubmit={bookHandler} className="grid grid-cols-2 gap-7 mt-10">
            <div className="col-span-2 md:col-span-1">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Check in
              </label>
              <input
                type="date"
                name="checkIn"
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Check out
              </label>
              <input
                type="date"
                name="checkOut"
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                User Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                User Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 pl-0"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                User profile
              </label>
              <input
                type="url"
                name="photo"
                defaultValue={user?.photoURL}
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
                required
              />
            </div>
            <div>
              {user ? (
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-green-400 hover:text-gray-700 transition-all duration-500 py-2 px-5 md:px-8 text-xl text-white font-medium mt-4 bebas tracking-widest "
                >
                  Book Now
                </button>
              ) : (
                <button className="bg-red-500 py-2 px-5 md:px-8 text-xl text-white font-medium mt-4 bebas tracking-widest">
                  <Link to="/login">Book Now</Link>
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-medium">Contact</h2>
          <p className="text-gray-500 py-2">
            If you need any help, feel free to contact us.
          </p>
          <ul className="mt-2 space-y-3 text-gray-800 font-medium">
            <li>Phone: +1 964 123 456789 </li>
            <li>Address: 56 King Street, New York</li>
            <li>Email: support@organis.com</li>
          </ul>
          <h2 className="text-2xl font-medium mt-10">Gallery</h2>
          <div className="w-7/12 grid grid-cols-1 gap-5 mt-5">
            <img
              src={data.gallery.img_one}
              alt="image"
              className="rounded-2xl"
            />
            <img
              src={data.gallery.img_two}
              alt="image"
              className="rounded-2xl"
            />
            <img
              src={data.gallery.img_three}
              alt="image"
              className="rounded-2xl"
            />
            <img src={data.image} alt="image" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
