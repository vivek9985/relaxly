import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Bookings from "./Bookings";
import swal from "sweetalert";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/bookings?email=${user?.email}`)
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
        fetch(`http://localhost:4000/bookings/${id}`, {
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
