import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="w-[85%] mx-auto py-16 mb-28">
      <div className="grid grid-cols-3 gap-5 mt-12">
        <div className="col-span-2">
          <img
            src={data.image}
            alt="image"
            className="w-full h-[550px] rounded-2xl"
          />
          <h2 className="mt-10 text-2xl font-semibold text-gray-700">
            {data.title}
          </h2>
          <div className="flex items-center my-4">
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
          <div className="grid grid-cols-3 text-lg">
            <div className="flex items-center gap-3 font-medium">
              <p>Adult : {data.adult}</p>
              <p>Child : {data.child}</p>
            </div>
            <div>
              <h2 className="text-gray-800 font-medium">Reviews : {data.reviews}</h2>
            </div>
          </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
