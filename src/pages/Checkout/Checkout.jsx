import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <section className="w-[85%] mx-auto">
      <h1 className="text-5xl font-semibold text-center my-16">Checkout</h1>
      <form className="w-10/12 mx-auto grid grid-cols-2 gap-7 mb-32">
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Room's name
          </label>
          <input
            type="text"
            name="text"
            id="text"
            defaultValue={data.title}
            className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-green-400 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 pl-0"
            placeholder="room's name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Room's name
          </label>
          <input
            type="text"
            name="text"
            id="text"
            defaultValue={data.title}
            className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-green-400 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 pl-0"
            placeholder="room's name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Room's name
          </label>
          <input
            type="text"
            name="text"
            id="text"
            defaultValue={data.title}
            className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-green-400 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 pl-0"
            placeholder="room's name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-900">
            Room's name
          </label>
          <input
            type="text"
            name="text"
            id="text"
            defaultValue={data.title}
            className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-green-400 text-gray-500 text-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 pl-0"
            placeholder="room's name"
            required
          />
        </div>
      </form>
    </section>
  );
};

export default Checkout;
