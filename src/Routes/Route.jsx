import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Privateroute from "../Privateroute/Privateroute";
import Room from "../pages/Room/Room";
import Aboutus from "../pages/About/Aboutus";
import Details from "../pages/Roomdetails/Details";
import Contact from "../pages/Contact/Contact";
import Testimonials from "../pages/Testimonials/Testimonials";
import MyBookings from "../pages/MyBookings/MyBookings";
import Dateupdate from "../pages/Dateupdate/Dateupdate";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/rooms",
        element: <Room></Room>,
        loader: () => fetch("https://hotel-booking-server-iota.vercel.app/rooms"),
      },
      {
        path: "/rooms/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://hotel-booking-server-iota.vercel.app/rooms/${params.id}`),
      },
      {
        path: "/mybookings",
        element: (
          <Privateroute>
            <MyBookings></MyBookings>
          </Privateroute>
        ),
      },
      {
        path: "/mybookings/:id",
        element: (
          <Privateroute>
            <Dateupdate></Dateupdate>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`https://hotel-booking-server-iota.vercel.app/bookings/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
