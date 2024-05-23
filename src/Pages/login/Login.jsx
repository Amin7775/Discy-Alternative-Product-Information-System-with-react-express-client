import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoimg from './../../assets/images/Logo/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => { 
  const location = useLocation()
  const navigate = useNavigate()

    const {googleLogin,loginUser} = useContext(AuthContext)

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        // console.log(email,password)
        loginUser(email,password)
        .then(res =>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500
          })
          .then(()=>{
            navigate(location?.state ? location?.state : '/')
          })
        })
        .catch(error => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Login Failed",
            text : "There was an error while logging in",
            footer: `${error.message}`,
            showConfirmButton: true,
            // timer: 1500
          });
        })
    }

    // google 
    const handleGoogle =() =>{
        console.log("clicked")
        googleLogin()
        .then(res =>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500
          })
          .then(()=>{
            navigate(location?.state ? location?.state : '/')
          })
        })
        .catch(error => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Login Failed",
            text : "There was an error while logging in",
            footer: `${error.message}`,
            showConfirmButton: true,
            // timer: 1500
          });
        })
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-page_bg dark:bg-dark_page_bg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className='bg-custom_Dark p-5 w-20 rounded-full mx-auto border-2 border-custom_blue '>

          <img
            className="mx-auto h-10 w-auto"
            src={logoimg}
            alt="DISCY"
            />
            </div>
          <h2 className="mt-4 text-center text-3xl font-bold leading-9 tracking-tight text-custom_blue dark:text-gray-200">
            Log In To Your Account
          </h2>
        </div>

        <div className="dark:mt-8 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* email */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder='Enter Email'
                  className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900 dark:text-gray-200">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-custom_blue hover:text-custom_Dark dark:hover:text-slate-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter Password'
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3 "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-custom_blue px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out dark:hover:bg-slate-500"
              >
                Log in
              </button>
            </div>
          </form>
          {/* google register */}
          <p className='text-sm my-2.5 text-center text-slate-500'>OR</p>

<button
      onClick={handleGoogle}
      className="flex w-full justify-center rounded-md bg-[#0F9D58] px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out dark:hover:bg-slate-500"
    >
      Login With Google
    </button>

          <p className="mt-5 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to={'/register'} className="font-semibold leading-6 text-custom_blue hover:text-custom_Dark dark:hover:bg-slate-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;