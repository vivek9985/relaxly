import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Bookings from "./Bookings";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/bookings?email=${user?.email}`)
    .then((res) =>res.json())
    .then((data)=> setBookings(data))
  }, []);
  return (
    <section className="w-[85%] mx-auto">
      <h2 className="text-5xl font-semibold text-center my-14">
        My <span className="text-red-500">Bookings</span>
      </h2>
      <div className="mb-32">
        {
          bookings.map((booking)=>(
            <Bookings key={booking._id} booking={booking}></Bookings>
          ))
        }
      </div>
    </section>
  );
};

export default MyBookings;
