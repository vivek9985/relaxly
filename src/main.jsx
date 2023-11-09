import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";
import Authprovider from "./Authprovider/Authprovider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
    <Toaster></Toaster>
  </>
);
