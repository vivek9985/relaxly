import { HiLocationMarker, HiOutlineMail } from "react-icons/Hi";
import contact from "../../assets/contact.webp";
import { BiSolidPhoneCall } from "react-icons/Bi";

const Contact = () => {
  return (
    <div className="w-[85%] mx-auto my-16">
      <h2 className="text-4xl text-center font-semibold mb-14">
        Contact <span className="text-red-500">Us</span>
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 pt-4">
        <form className="p-5 lg:p-10 border border-gray-300 rounded-2xl mb-8 md:mb-20">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full py-3 px-5 mb-6 border border-red-300 rounded-full focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full py-3 px-5 mb-6 border border-red-300 rounded-full focus:outline-none"
          />
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Your message here ..."
            className="w-full py-3 px-5 mb-8 border border-red-300 rounded-2xl focus:outline-none"
          ></textarea>
          <button className="bg-red-500 hover:bg-green-400 text-gray-800 py-2 px-6 rounded-full mb-2 font-bold uppercase">
            Send Message
          </button>
          <div className="mt-8 space-y-3">
            <div className="flex items-center">
              <HiOutlineMail className="text-xl md:text-2xl mr-1 text-red-400"></HiOutlineMail>
              <h2 className="text-lg md:text-xl font-medium text-gray-900">
                relaxly@gmail.com
              </h2>
            </div>
            <div className="flex items-center">
              <BiSolidPhoneCall className="text-xl md:text-2xl mr-1 text-red-400"></BiSolidPhoneCall>
              <h2 className="text-lg md:text-xl font-medium text-gray-900">
                +8801623498734
              </h2>
            </div>
            <div className="flex items-center">
              <HiLocationMarker className="text-xl md:text-2xl mr-1 text-red-400"></HiLocationMarker>
              <h2 className="text-lg md:text-xl font-medium text-gray-900">
                56 King Street, New York
              </h2>
            </div>
          </div>
        </form>
        <div className="flex items-start justify-center rounded-2xl overflow-hidden">
          <img src={contact} alt="image" className="w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
