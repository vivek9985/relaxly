import { HiLocationMarker, HiOutlineMail } from "react-icons/Hi";
import contact from "../../assets/contact.webp";
import { BiSolidPhoneCall } from "react-icons/Bi";
import Title from "./../../Components/Title/Title";
import { useRef } from "react";
import toast from "react-hot-toast";
// import { emailjs } from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n0tokty",
        "template_nkpt49c",
        form.current,
        "NzzBjaRH7dprK9I-O"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            toast.success("Message send!");
            form.current.reset();
          }
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-[85%] mx-auto my-16">
      <Title title="Relaxly - Contact us"></Title>
      <h2 className="text-4xl lg:text-5xl  text-center font-semibold mb-14">
        Contact <span className="text-red-500">Us</span>
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 pt-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-5 lg:p-10 border border-gray-300 rounded-2xl mb-8 md:mb-20"
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required
            className="w-full py-3 px-5 mb-6 border border-red-300 rounded-full focus:outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className="w-full py-3 px-5 mb-6 border border-red-300 rounded-full focus:outline-none"
          />
          <textarea
            id=""
            rows="6"
            name="message"
            placeholder="Your message here ..."
            required
            className="w-full py-3 px-5 mb-8 border border-red-300 rounded-2xl focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-green-400 text-gray-800 py-3.5 px-8 mb-2 font-medium uppercase transition-all duration-500 shadow-xl"
          >
            Send Message
          </button>
        </form>
        <div className="flex items-start justify-center rounded-2xl overflow-hidden">
          <img src={contact} alt="image" className="w-full rounded-2xl" />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-10">
          <a
            href="mailto:relaxly@gmail.com"
            className="flex flex-col items-center justify-center gap-6 bg-yellow-50 px-8 py-10 rounded-2xl group-[contact]"
          >
            <div className="w-24 h-24 bg-lime-200 rounded-full flex items-center justify-center">
              <HiOutlineMail className="text-xl md:text-3xl mr-1 text-gray-800 text-center"></HiOutlineMail>
            </div>
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              relaxly@gmail.com
            </h2>
          </a>
          <a
            href="tel:+8801623498734"
            className="flex flex-col items-center justify-center gap-6 bg-yellow-50 px-8 py-10 rounded-2xl group-[contact]"
          >
            <div className="w-24 h-24 bg-lime-200 rounded-full flex items-center justify-center">
              <BiSolidPhoneCall className="text-xl md:text-3xl mr-1 text-gray-800 text-center"></BiSolidPhoneCall>
            </div>
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              +8801623498734
            </h2>
          </a>
          <a className="flex flex-col items-center justify-center gap-6 bg-yellow-50 px-8 py-10 rounded-2xl group-[contact] cursor-pointer">
            <div className="w-24 h-24 bg-lime-200 rounded-full flex items-center justify-center">
              <HiLocationMarker className="text-xl md:text-3xl mr-1 text-gray-800 text-center"></HiLocationMarker>
            </div>
            <h2 className="text-lg md:text-xl font-medium text-gray-900">
              56 King Street, New York
            </h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
