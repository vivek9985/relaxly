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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: (
      <h3 className="text-6xl font-extrabold text-center mt-60">
        404 Not Found
      </h3>
    ),
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
        element: <Contact></Contact>
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>
      },
      {
        path: "/rooms",
        element: <Room></Room>,
        loader:()=>fetch("http://localhost:4000/rooms")
      },
      {
        path: "/rooms/:id",
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:4000/rooms/${params.id}`)
      },
      {
        path: "/bookings",
        element: (
          <Privateroute>
            <MyBookings></MyBookings>
          </Privateroute>
        ),
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
