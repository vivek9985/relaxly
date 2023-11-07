import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <Player
        className="w-[200px] h-[200px]"
        autoplay
        loop
        src="https://lottie.host/d11df132-45fa-4a8e-a069-77793e1f0058/ReEq5W0Vjz.json"
      ></Player>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default Privateroute;
