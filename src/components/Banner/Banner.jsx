import customBanner2 from "./../../assets/images/Banner/customBanner2.svg";

const Banner = ({ heading }) => {
  return (
    <div
      className="h-[300px] flex items-center justify-center text-white"
      style={{
        background: `url(${customBanner2})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center text-4xl font-medium">{heading}</h1>
    </div>
  );
};

export default Banner;
