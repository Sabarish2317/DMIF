import { useNavigate } from "react-router-dom";
import IconButton from "../Components/Common/Button";
import { APPROUTES } from "../Routes/appRoutes";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="flex w-full max-w-6xl flex-col md:flex-row overflow-hidden rounded-lg">
        
        {/* Left side - Text Content */}
        <div className="flex w-full md:w-1/2 flex-col justify-center p-6 sm:p-10 md:p-16 text-center md:text-left">
          <div className="mb-4 text-6xl sm:text-7xl md:text-8xl font-light text-gray-300 opacity-70">
            Error 404
          </div>
          <h1 className="mb-6 text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800">
            Oops! page not found
          </h1>
          <p className="mb-8 text-base sm:text-lg text-gray-600">
            Something went wrong. It looks like your requested page could not be found. 
            The link may be broken or the page has been removed.
          </p>
          <div className="flex justify-center md:justify-start">
            <IconButton
              label="Go Back"
              onClick={() => navigate(APPROUTES.HOME)}
            />
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-blue-50 p-6 sm:p-8">
          <div className="relative">
            <img
              src="/errorPage.png"
              alt="404 Error"
              className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
