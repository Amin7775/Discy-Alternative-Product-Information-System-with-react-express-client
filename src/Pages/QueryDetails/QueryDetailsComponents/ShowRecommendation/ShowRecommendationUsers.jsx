import { TbDirectionSignFilled } from "react-icons/tb";
import { WiDirectionRight } from "react-icons/wi";

const ShowRecommendationUsers = () => {
  return (
    <div>
      {/* information section */}
      <div className="flex flex-col md:flex-row md:items-center  md:gap-3 ">
        <div className="flex items-center">
        <WiDirectionRight className="text-5xl"></WiDirectionRight>
        <h1 className=" font-medium">
        Recommendation by : <span className="text-custom_blue"> AL Amin</span>
        </h1>
        </div>
        <p className="text-sm -mt-2 md:-mt-0 mb-2 pl-12 md:mb-0 md:pl-0">on sunday</p>
      </div>
      {/* comment section */}
      <div className="bg-page_bg px-5 py-5 flex flex-col-reverse md:flex-row rounded-lg">
        {/* text */}
        <div className="flex-1 flex flex-col gap-1">
          <h1 className="text-2xl font-medium mb-2">
            Great Alternative to MacBook Pro
          </h1>
          <h1 className=" ">
           <span className="font-medium">Product Name: </span> MacBook Pro
          </h1>
          <p className="font-medium">Reason :</p>
          <p className="text-sm font-medium">The Dell XPS 15 offers similar performance with its high-end specs, making it great for graphic design and video editing. It comes at a more affordable price compared to the MacBook Pro.</p>
        </div>
        {/* img section */}
        <div className="w-full md:w-1/5 max-h-44 bg-white py-3 px-1">
            <img src="https://i.ibb.co/RcBB0qS/Restored-Samsung-Galaxy-S21-Ultra-5-G-G998-U-128-GB-Black-Unlocked-Smartphone-Used-bf8688f9-0d2d-413.png" className="object-contain w-full max-h-36 md:h-full" alt="" />
        </div>
      </div>
      <div className="h-1 border-b mt-6 mb-2"></div>
    </div>
  );
};

export default ShowRecommendationUsers;
