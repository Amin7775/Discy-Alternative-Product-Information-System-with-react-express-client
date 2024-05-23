import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-page_bg h-full w-full">
          
          <div
            className="h-screen"
          >
            <div className="flex flex-col items-center justify-center gap-5 h-full md:h-[95%] lg:h-[90%]">
              {/* title */}
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center max-w-[80%] lg:max-w-[60%] mx-auto  leading-10">
                Oops! It looks like you're lost.
              </h1>
              <p className="text-lg md:text-xl px-8 text-center lg:text-2xl font-light  mt-2 md:mt-5 lg:mt-3">
                The page you're looking for isn't available. Go back to home.
              </p>
              {/* btn */}
              <div className="mt-3 md:mt-5">
                <Link to={"/"}>
                  <button className="bg-custom_Dark text-page_bg text-xl px-6 py-2 rounded-md">
                    BACK TO HOME
                  </button>
                </Link>
              </div>
            </div>
          </div>
         
        </div>
      );
    };
    
export default ErrorPage;