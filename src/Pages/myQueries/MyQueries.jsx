import CustomContainer from "../../components/Container/CustomContainer";
import customBanner3 from "./../../assets/images/Banner/customBanner3.svg";
import customBanner2 from "./../../assets/images/Banner/customBanner2.svg";
import Banner from "../../components/Banner/Banner";
const MyQueries = () => {
  return (
    <div className="min-h-screen bg-page_bg">
      {/* <img src={customBanner2}  className="w-full" alt="" /> */}
      <div
        className="h-[300px]"
        style={{
          background: `url(${customBanner2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-center text-4xl font-medium">My Queries</h1>
          {/* add queries btn */}
          <div className="mt-7 flex flex-col md:flex-row gap-2">
            <h3 className="text-lg">
                Have Any Queries?
            </h3>
            <button className="bg-custom_Dark px-5 rounded-sm py-1 hover:bg-page_bg hover:text-custom_Dark transition-all duration-300 ease-in-out transform hover:scale-105">Add a Query</button>
          </div>
        </div>
      </div>
      <CustomContainer></CustomContainer>
    </div>
  );
};

export default MyQueries;
