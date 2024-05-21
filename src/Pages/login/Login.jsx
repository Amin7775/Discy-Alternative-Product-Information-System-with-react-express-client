import { Link } from 'react-router-dom';
import logoimg from './../../assets/images/Logo/logo.png'


const Login = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        console.log(email,password)
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-page_bg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className='bg-custom_Dark p-5 w-20 rounded-full mx-auto border-2 border-custom_blue'>

          <img
            className="mx-auto h-10 w-auto"
            src={logoimg}
            alt="DISCY"
            />
            </div>
          <h2 className="mt-4 text-center text-3xl font-bold leading-9 tracking-tight text-custom_blue">
            Log In To Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* email */}
            <div>
              <label className="block text-base font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>
            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-custom_blue hover:text-custom_Dark">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-custom_blue sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-custom_blue px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-custom_Dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom_blue transition-all duration-300 ease-in-out"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to={'/register'} className="font-semibold leading-6 text-custom_blue hover:text-custom_Dark">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;