import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Bookings from "./Bookings";
import swal from "sweetalert";
import Title from "./../../Components/Title/Title";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(
      `https://hotel-booking-server-iota.vercel.app/bookings?email=${user?.email}`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://hotel-booking-server-iota.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Your booking has deleted!", {
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      } else {
        swal("Your booking is safe!");
      }
    });
  };

  return (
    <section className="w-[85%] mx-auto">
      <Title title="Relaxly - My Bookings"></Title>
      <h2 className="text-5xl font-semibold text-center my-14">
        My <span className="text-red-500">Bookings</span>
      </h2>
      <div className="mb-32">
        {bookings.map((booking) => (
          <Bookings
            key={booking._id}
            booking={booking}
            deleteHandler={deleteHandler}
          ></Bookings>
        ))}
      </div>
    </section>
  );
};

export default MyBookings;
