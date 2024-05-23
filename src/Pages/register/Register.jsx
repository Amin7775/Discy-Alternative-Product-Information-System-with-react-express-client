import { Link, useLocation, useNavigate } from "react-router-dom";
import logoimg from "./../../assets/images/Logo/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // context
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  // user registration time
  const registerTime = moment().format("do MMM YYYY, h:mma");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const name = form.name.value;

    // const registerInfo = {
    //   name,email,registerTime,totalQueries : 0,
    //   totalRecommendations : 0
    // }
    // console.log(registerInfo)

    createUser(email, password)
      .then((res) => {
        // update user
        updateUser(name, photoURL)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Registration Success",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              const image =
                photoURL ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
              const registerInfo = {
                name,
                email,
                registerTime,
                image,
                totalQueries: 0,
                totalRecommendations: 0,
              };

              axios
                .post("http://localhost:5000/users", registerInfo)
                .then((res) => {
                  // console.log("DB update success", res);
                });
                navigate(location?.state ? location?.state : '/')
            });
          })
          .catch((error) => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Login Failed",
              text : "There was an error while logging in",
              footer: `${error.message}`,
              showConfirmButton: true,
              // timer: 1500
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Failed",
          text : "There was an error while logging in",
          footer: `${error.message}`,
          showConfirmButton: true,
          // timer: 1500
        });
      });
  };

  // google
  const handleGoogle = () => {
    console.log("clicked");
    googleLogin()
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          const image =
            res?.user?.photoURL ||
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

          // console.Console(image)
          const registerInfo = {
            name: res?.user?.displayName,
            email: res?.user?.email,
            image,
            registerTime,
            totalQueries: 0,
            totalRecommendations: 0,
          };
          axios.post("http://localhost:5000/users", registerInfo).then(() => {
            // console.log("DB update success")
          });
          navigate(location?.state ? location?.state : '/')
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Failed",
          text : "There was an error while logging in",
          footer: `${error.message}`,
          showConfirmButton: true,
          // timer: 1500
        });
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-page_bg dark:bg-dark_page_bg">
      <Helmet>
        <title>Discy - Register</title>
      </Helmet>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-custom_Dark p-5 w-20 rounded-full mx-auto border-2 border-custom_blue">
          <img className="mx-auto h-10 w-auto" src={logoimg} alt="DISCY" />
        </div>
        <h2 className="mt-4 text-center text-3xl font-bold leading-9 tracking-tight text-custom_blue dark:text-gray-200">
          Create A New Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* name */}
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
              Name<span className="text-xs">*</span>
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter name"
                className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
              Email address<span className="text-xs">*</span>
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter email"
                className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          {/* password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Password<span className="text-xs">*</span>
              </label>
              {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-custom_blue hover:text-custom_Dark">
                    Forgot password?
                  </a>
                </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter password"
                className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>
          {/* photoURL */}
          <div>
            <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
              Photo Url
            </label>
            <div className="mt-2">
              <input
                id="photo"
                name="photoURL"
                type="text"
                placeholder="Enter photo url"
                //   required
                className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-custom_blue px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out dark:hover:bg-slate-500"
            >
              Register
            </button>
          </div>
        </form>
        {/* google register */}
        <p className="text-sm my-2.5 text-center text-slate-500">OR</p>

        <button
          onClick={handleGoogle}
          className="flex w-full justify-center rounded-md bg-[#0F9D58] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out dark:hover:bg-slate-500"
        >
          Register With Google
        </button>
        <p className="mt-5 text-center text-sm text-gray-500">
          Already a member?{" "}
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-custom_blue hover:text-custom_Dark dark:hover:text-slate-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
