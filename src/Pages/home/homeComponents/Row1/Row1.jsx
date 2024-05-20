import AboutDiscy from "../AboutDiscy/AboutDiscy";
import HomeBanner from "../Slider/Banner/HomeBanner";

const Row1 = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5">
            {/* left */}
            <div className="w-full lg:w-2/3 ">
                {/* <HomeBanner></HomeBanner> */}
               
            </div>
            {/* right */}
            <div className="flex-1">

            </div>
        </div>
    );
};

export default Row1;