import { Link, useLoaderData } from "react-router-dom";
import star from "../../assets/star.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import toast from "react-hot-toast";
import Title from "./../../Components/Title/Title";

const Details = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  // console.log(data);
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

  useEffect(() => {
    fetch("https://hotel-booking-server-iota.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

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
      price: data.price,
      description: data.description,
    };
    fetch("https://hotel-booking-server-iota.vercel.app/bookings", {
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

  const commentHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const timeStamp = form.timeStamp.value;
    const review = {
      name,
      rating,
      comment,
      timeStamp,
      roomName: data.title,
    };
    console.log(review);
    fetch("https://hotel-booking-server-iota.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Submitted!");
        form.reset();
      });
  };

  return (
    <section className="w-[85%] mx-auto py-16 mb-28">
      <Title title="Room details"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        <div className="col-span-2 relative">
          <img
            src={data.image}
            alt="image"
            className="w-full h-[300px] md:h-[400px] lg:h-[550px] rounded-2xl"
          />
          {data?.discount ? (
            <div className="absolute top-10 right-10 bg-[#00000041] backdrop-blur-md px-8 py-3 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl text-gray-100 font-medium text-lg">
              {data.discount}% OFF
            </div>
          ) : (
            <div></div>
          )}
          <div className="mt-10 font-medium">
            <span className="text-2xl font-semibold text-gray-700">
              {data.title}{" "}
            </span>
            {}
          </div>
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
                <span className="text-gray-500">({reviews.length})</span>
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
                <div className="mt-6">
                  <Link
                    to="/login"
                    className="bg-red-500 py-2 px-5 md:px-8 text-xl text-white font-medium bebas tracking-widest"
                  >
                    Book Now
                  </Link>
                </div>
              )}
            </div>
          </form>
          <div className="mt-28">
            <h2 className="text-5xl font-medium">Reviews</h2>
          </div>

          <form
            onSubmit={commentHandler}
            className="grid grid-cols-2 gap-7 mt-10"
          >
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
                Rating
              </label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                defaultValue="5"
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 pl-0"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Comment
              </label>
              <input
                type="text"
                name="comment"
                placeholder="comment here . . ."
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Timestamp
              </label>
              <input
                type="text"
                name="timeStamp"
                placeholder="timestamp"
                className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-red-500 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-0 pl-0"
                required
              />
            </div>

            <div>
              {user ? (
                <button
                  type="submit"
                  className="bg-green-500 text-gray-900 hover:bg-red-500 hover:text-gray-100 transition-all duration-500 py-2 px-5 md:px-8 text-xl font-medium mt-4 bebas tracking-widest"
                >
                  Submit
                </button>
              ) : (
                <div className="mt-6">
                  <span className="bg-green-500 py-2 px-5 md:px-8 text-xl text-white font-medium bebas tracking-widest cursor-not-allowed">
                    Submit
                  </span>
                </div>
              )}
            </div>
          </form>
          {user ? (
            <div></div>
          ) : (
            <div className="mt-20 mb-10">
              {reviews.map((review) => (
                <div key={review._id}>
                  <div className="my-10 pb-2 border-b">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <h2 className="text-lg text-black font-medium">
                        User Name :{" "}
                        <span className="font-normal text-red-500">
                          {review.name}
                        </span>
                      </h2>
                      <h2 className="text-lg text-black font-medium">
                        Timestamp :{" "}
                        <span className="font-normal text-green-600">
                          {review.timeStamp}
                        </span>
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div>
                        <div className="flex items-center gap-1 text-lg text-black font-medium">
                          <h2>
                            Rating :{" "}
                            <span className="font-normal text-gray-600">
                              {review.rating}
                            </span>
                          </h2>
                          <img src={star} alt="image" className="w-4 h-4" />
                          <img src={star} alt="image" className="w-4 h-4" />
                          <img src={star} alt="image" className="w-4 h-4" />
                          <img src={star} alt="image" className="w-4 h-4" />
                          <img src={star} alt="image" className="w-4 h-4" />
                        </div>
                      </div>
                      <h2 className="text-lg text-black font-medium">
                        Comment :{" "}
                        <span className="font-normal text-base text-gray-400">
                          {review.comment}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
