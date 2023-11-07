import { Link, useLocation, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/Ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";

const Login = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="w-full px-2 md:px-0 lg:w-11/12 xl:w-10/12 h-auto mx-auto mt-2 lg:mt-20 grid justify-between grid-cols-1 lg:grid-cols-2 rounded-2xl pb-32 overflow-hidden">
      <div className="-z-10">
        <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden">
          <Player
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            autoplay
            loop
            src="https://lottie.host/0bed02a7-b2ec-40be-af45-a5cd6788f16e/p5iNDETtq4.json"
          ></Player>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col items-center lg:items-start justify-center py-8 lg:py-0">
        <div className="w-11/12 mx-auto shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="w-full bg-transparent border border-gray-400 p-5 space-y-4 md:space-y-6 sm:p-8 rounded-3xl">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-9">
              Login
            </h1>
            <form onSubmit={loginHandler} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-green-400 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                  placeholder="your email address"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="flex relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={visible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="password"
                    className="bg-gray-50 border-b border-gray-400 focus:outline-none focus:border-green-400 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                    required
                  />
                  <div
                    className="absolute right-3 top-2 cursor-pointer text-2xl text-gray-700"
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? (
                      <AiFillEye></AiFillEye>
                    ) : (
                      <AiFillEyeInvisible></AiFillEyeInvisible>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500">Remember me</label>
                  </div>
                </div>
                <Link className="text-sm font-medium text-primary-600 hover:underline hover:text-red-500">
                  Forgot password
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-500 hover:bg-gray-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-sm text-gray-500 ">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-bold text-blue-600 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
