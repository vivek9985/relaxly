import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/Fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/Ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import toast from "react-hot-toast";

const Register = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const { createUser, loginwithGoogle, updateProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo)

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Registration success");
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo
        });
        form.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message)
      });
  };
  const googleLogin = () => {
    loginwithGoogle()
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="flex items-center justify-center mt-6 mb-20">
      <div className="w-11/12 md:w-10/12 lg:w-7/12 border border-gray-300 rounded-2xl my-10">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create an account
          </h1>
          <form
            onSubmit={loginHandler}
            className="space-y-4 md:space-y-6"
            action=""
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                id="photo"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Your photo url"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                placeholder="Your email address"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="flex border border-gray-300 rounded-lg">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={visible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 pr-10"
                  required
                />
                <div
                  className="flex items-center cursor-pointer text-2xl text-gray-700 mr-3"
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
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-gray-700 ">
                  I accept the{" "}
                  <Link className="font-medium text-primary-600 hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-black text-white hover:bg-primary-700 focus:outline-none rounded-lg px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
          <p className="text-center">or</p>
          <div>
            <div className="flex justify-center">
              <button
                onClick={googleLogin}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-stone-200 hover:bg-green-400 font-medium"
              >
                <span className="mr-2">Login with</span>
                <FcGoogle className="text-xl"></FcGoogle>
              </button>
            </div>
            <p className="text-sm text-gray-700 mt-5 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
